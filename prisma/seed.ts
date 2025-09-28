import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 بدء إدخال البيانات التجريبية...')

  // إنشاء مستخدم أدمن
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@omq.com.sa' },
    update: {},
    create: {
      name: 'مدير النظام',
      email: 'admin@omq.com.sa',
      password: await hash('admin123', 12),
      role: 'ADMIN',
    },
  })

  console.log('✅ تم إنشاء مستخدم الأدمن:', adminUser.email)

  // إنشاء مستخدم عادي
  const clientUser = await prisma.user.upsert({
    where: { email: 'client@example.com' },
    update: {},
    create: {
      name: 'عميل تجريبي',
      email: 'client@example.com',
      password: await hash('client123', 12),
      role: 'CLIENT',
    },
  })

  console.log('✅ تم إنشاء مستخدم العميل:', clientUser.email)

  // إنشاء منتجات تجريبية
  const products = [
    {
      name: 'بدلة غوص تجارية',
      nameAr: 'بدلة غوص تجارية',
      slug: 'commercial-diving-suit',
      description: 'بدلة غوص عالية الجودة للاستخدام التجاري مع حماية متقدمة من الماء والبرد',
      descriptionAr: 'بدلة غوص عالية الجودة للاستخدام التجاري مع حماية متقدمة من الماء والبرد',
      category: 'معدات غوص',
      categoryAr: 'معدات غوص',
      price: 2500,
      images: ['/api/placeholder/400/300'],
      stock: 15,
    },
    {
      name: 'خوذة غوص',
      nameAr: 'خوذة غوص',
      slug: 'diving-helmet',
      description: 'خوذة غوص متطورة مع نظام اتصال',
      descriptionAr: 'خوذة غوص متطورة مع نظام اتصال',
      category: 'معدات غوص',
      categoryAr: 'معدات غوص',
      price: 4500,
      images: ['/api/placeholder/400/300'],
      stock: 8,
    },
    {
      name: 'أدوات أمان بحرية',
      nameAr: 'أدوات أمان بحرية',
      slug: 'marine-safety-tools',
      description: 'مجموعة شاملة من أدوات الأمان البحرية',
      descriptionAr: 'مجموعة شاملة من أدوات الأمان البحرية',
      category: 'أدوات أمان',
      categoryAr: 'أدوات أمان',
      price: 1200,
      images: ['/api/placeholder/400/300'],
      stock: 25,
    },
    {
      name: 'مضخة هواء',
      nameAr: 'مضخة هواء',
      slug: 'air-compressor',
      description: 'مضخة هواء عالية الضغط للغوص',
      descriptionAr: 'مضخة هواء عالية الضغط للغوص',
      category: 'معدات غوص',
      categoryAr: 'معدات غوص',
      price: 8500,
      images: ['/api/placeholder/400/300'],
      stock: 5,
    },
    {
      name: 'حبال وأسلاك',
      nameAr: 'حبال وأسلاك',
      slug: 'ropes-cables',
      description: 'حبال وأسلاك مقاومة للماء والملح',
      descriptionAr: 'حبال وأسلاك مقاومة للماء والملح',
      category: 'معدات مساعدة',
      categoryAr: 'معدات مساعدة',
      price: 800,
      images: ['/api/placeholder/400/300'],
      stock: 50,
    },
    {
      name: 'كاميرا تحت الماء',
      nameAr: 'كاميرا تحت الماء',
      slug: 'underwater-camera',
      description: 'كاميرا متخصصة للتصوير تحت الماء',
      descriptionAr: 'كاميرا متخصصة للتصوير تحت الماء',
      category: 'معدات مساعدة',
      categoryAr: 'معدات مساعدة',
      price: 3200,
      images: ['/api/placeholder/400/300'],
      stock: 12,
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
  }

  console.log('✅ تم إنشاء المنتجات التجريبية')

  // إنشاء طلب تجريبي
  const order = await prisma.order.create({
    data: {
      userId: clientUser.id,
      total: 3700,
      shipping: {
        fullName: 'أحمد محمد العتيبي',
        email: 'client@example.com',
        phone: '+966501234567',
        address: 'الرياض، حي الملك فهد',
        city: 'الرياض',
        postal: '12345',
        country: 'Saudi Arabia',
      },
      status: 'PENDING',
      items: {
        create: [
          {
            productId: (await prisma.product.findFirst({ where: { slug: 'commercial-diving-suit' } }))!.id,
            name: 'بدلة غوص تجارية',
            nameAr: 'بدلة غوص تجارية',
            price: 2500,
            quantity: 1,
          },
          {
            productId: (await prisma.product.findFirst({ where: { slug: 'marine-safety-tools' } }))!.id,
            name: 'أدوات أمان بحرية',
            nameAr: 'أدوات أمان بحرية',
            price: 1200,
            quantity: 1,
          },
        ],
      },
    },
  })

  console.log('✅ تم إنشاء طلب تجريبي:', order.id)

  // إنشاء إشعارات تجريبية
  await prisma.notification.createMany({
    data: [
      {
        type: 'ORDER_CREATED',
        message: 'تم إنشاء طلب جديد #' + order.id.slice(-6),
        data: { orderId: order.id },
      },
      {
        type: 'SYSTEM_UPDATE',
        message: 'تم تحديث النظام بنجاح',
        data: { version: '1.0.0' },
      },
    ],
  })

  console.log('✅ تم إنشاء الإشعارات التجريبية')

  console.log('🎉 تم إدخال جميع البيانات التجريبية بنجاح!')
}

main()
  .catch((e) => {
    console.error('❌ خطأ في إدخال البيانات:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


