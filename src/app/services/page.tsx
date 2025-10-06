// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { 
//   Shield, 
//   Anchor, 
//   Waves, 
//   Users, 
//   Star, 
//   ArrowRight,
//   CheckCircle,
//   Globe,
//   Zap,
//   Heart
// } from 'lucide-react'
// import Link from 'next/link'
// import Image from 'next/image'

// const services = [
//   {
//     id: 1,
//     icon: Shield,
//     title: 'الغوص التجاري',
//     titleEn: 'Commercial Diving',
//     description: 'خدمات غوص متخصصة للبنية التحتية البحرية مع أعلى معايير الأمان والجودة',
//     descriptionEn: 'Specialized diving services for marine infrastructure with the highest safety and quality standards',
//     features: [
//       'صيانة المنصات البحرية',
//       'فحص البنية التحتية',
//       'أعمال اللحام تحت الماء',
//       'تنظيف الهياكل البحرية',
//       'تركيب المعدات البحرية'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات أساسية',
//     rating: 4.9,
//     projects: 150
//   },
//   {
//     id: 2,
//     icon: Anchor,
//     title: 'الدعم البحري',
//     titleEn: 'Offshore Support',
//     description: 'دعم شامل للعمليات البحرية والمنصات مع فريق متخصص وذو خبرة عالية',
//     descriptionEn: 'Comprehensive support for marine operations and platforms with a specialized and highly experienced team',
//     features: [
//       'دعم المنصات النفطية',
//       'خدمات النقل البحري',
//       'الصيانة الوقائية',
//       'الطوارئ البحرية',
//       'التدريب والتأهيل'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات دعم',
//     rating: 4.8,
//     projects: 200
//   },
//   {
//     id: 3,
//     icon: Waves,
//     title: 'البنية التحتية البحرية',
//     titleEn: 'Marine Infrastructure',
//     description: 'حماية وصيانة المرافق البحرية مع استخدام أحدث التقنيات والمعدات',
//     descriptionEn: 'Protection and maintenance of marine facilities using the latest technologies and equipment',
//     features: [
//       'حماية السواحل',
//       'صيانة الموانئ',
//       'حماية البيئة البحرية',
//       'مراقبة الجودة',
//       'التقييم البيئي'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات بيئية',
//     rating: 4.9,
//     projects: 120
//   },
//   {
//     id: 4,
//     icon: Users,
//     title: 'التدريب والتأهيل',
//     titleEn: 'Training & Certification',
//     description: 'برامج تدريبية متخصصة لتأهيل الكوادر الوطنية في مجال الغوص التجاري',
//     descriptionEn: 'Specialized training programs to qualify national cadres in commercial diving',
//     features: [
//       'دورات الغوص التجاري',
//       'شهادات دولية معتمدة',
//       'تدريب على الأمان',
//       'برامج التطوير المهني',
//       'ورش عمل متخصصة'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات تعليمية',
//     rating: 4.7,
//     projects: 80
//   },
//   {
//     id: 5,
//     icon: Zap,
//     title: 'الطوارئ البحرية',
//     titleEn: 'Marine Emergency Response',
//     description: 'خدمات استجابة سريعة للطوارئ البحرية على مدار الساعة',
//     descriptionEn: '24/7 rapid response services for marine emergencies',
//     features: [
//       'استجابة سريعة 24/7',
//       'إنقاذ البحارة',
//       'إصلاح الطوارئ',
//       'إخلاء المنصات',
//       'الاستجابة البيئية'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات طوارئ',
//     rating: 4.9,
//     projects: 45
//   },
//   {
//     id: 6,
//     icon: Heart,
//     title: 'الاستشارات البحرية',
//     titleEn: 'Marine Consulting',
//     description: 'استشارات متخصصة في المشاريع البحرية والتطوير المستدام',
//     descriptionEn: 'Specialized consulting in marine projects and sustainable development',
//     features: [
//       'دراسات الجدوى',
//       'التخطيط البحري',
//       'التقييم البيئي',
//       'إدارة المخاطر',
//       'التطوير المستدام'
//     ],
//     image: '/api/placeholder/600/400',
//     category: 'خدمات استشارية',
//     rating: 4.8,
//     projects: 60
//   }
// ]

// // const categories = [
// //   'جميع الخدمات',
// //   'خدمات أساسية',
// //   'خدمات دعم',
// //   'خدمات بيئية',
// //   'خدمات تعليمية',
// //   'خدمات طوارئ',
// //   'خدمات استشارية'
// // ]

// const stats = [
//   { number: '500+', label: 'مشروع مكتمل', labelEn: 'Completed Projects' },
//   { number: '50+', label: 'خبير متخصص', labelEn: 'Expert Specialists' },
//   { number: '15+', label: 'سنة خبرة', labelEn: 'Years Experience' },
//   { number: '100%', label: 'رضا العملاء', labelEn: 'Customer Satisfaction' }
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-ocean min-h-[60vh] flex items-center justify-center overflow-hidden">
//         {/* Background Bubbles */}
//         <div className="absolute inset-0 bg-gradient-bubbles opacity-20"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-6">
//             خدماتنا المتخصصة
//           </h1>
//           <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo">
//             خدمات غوص تجارية استثنائية وآمنة ومستدامة
//           </p>
//           <p className="text-lg text-white/80 font-inter">
//             Exceptional, safe and sustainable commercial diving services
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-cairo">
//                   {stat.label}
//                 </div>
//                 <div className="text-sm text-gray-500 font-inter">
//                   {stat.labelEn}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
//               خدماتنا الرئيسية
//             </h2>
//             <p className="text-xl text-gray-600 font-inter">
//               Our Main Services
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service) => (
//               <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
//                 <div className="relative">
//                   <div className="aspect-video bg-gray-200 overflow-hidden">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       width={400}
//                       height={300}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <Badge variant="secondary" className="bg-white/90 text-gray-900">
//                       {service.category}
//                     </Badge>
//                   </div>
//                 </div>

//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
//                       <service.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-cairo font-bold text-gray-900">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 font-inter">
//                         {service.titleEn}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-gray-700 mb-4 leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mb-6">
//                     <h4 className="font-cairo font-semibold mb-3">المميزات الرئيسية:</h4>
//                     <ul className="space-y-2">
//                       {service.features.slice(0, 3).map((feature, index) => (
//                         <li key={index} className="flex items-center gap-2 text-sm">
//                           <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                           <span className="text-gray-600">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Rating and Projects */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < Math.floor(service.rating)
//                                 ? 'text-yellow-400 fill-current'
//                                 : 'text-gray-300'
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-600">
//                         {service.rating}
//                       </span>
//                     </div>
//                     <span className="text-sm text-gray-500">
//                       {service.projects} مشروع
//                     </span>
//                   </div>

//                   <Button className="w-full group-hover:bg-primary/90">
//                     <Link href={`/services/${service.id}`} className="flex items-center gap-2">
//                       عرض التفاصيل
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
//               لماذا تختار ألفا  أوإمكيو؟
//             </h2>
//             <p className="text-xl text-gray-600 font-inter">
//               Why Choose Alpha OMQ?
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">أمان مضمون</h3>
//               <p className="text-gray-600">أعلى معايير الأمان في جميع عملياتنا</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-secondary" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">خبراء محليون</h3>
//               <p className="text-gray-600">فريق من الخبراء السعوديين المتخصصين</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Globe className="w-8 h-8 text-accent-foreground" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">حماية البيئة</h3>
//               <p className="text-gray-600">التزام كامل بحماية البيئة البحرية</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">استجابة سريعة</h3>
//               <p className="text-gray-600">خدمات طوارئ على مدار الساعة</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-ocean">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-cairo font-bold text-white mb-6">
//             مستعدون لخدمتكم
//           </h2>
//           <p className="text-xl text-white/90 font-inter mb-8">
//             Ready to Serve You
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
//               <Link href="/contact">تواصل معنا</Link>
//             </Button>
//             <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
//               <Link href="/products">تصفح المنتجات</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import ComingSoon from "@/components/coming-soon"

export default function PartnersPage() {
  return <ComingSoon />
}