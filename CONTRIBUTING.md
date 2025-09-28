# دليل المساهمة - عمق المملكة

نرحب بمساهماتكم في تطوير موقع عمق المملكة! هذا الدليل يوضح كيفية المساهمة في المشروع.

## كيفية المساهمة

### 1. Fork المشروع

1. اذهب إلى [مستودع المشروع](https://github.com/yourusername/omq)
2. اضغط على زر "Fork" في أعلى الصفحة
3. استنسخ المستودع إلى حسابك الشخصي

### 2. إنشاء Branch جديد

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/omq.git
cd omq

# إنشاء branch جديد
git checkout -b feature/your-feature-name
# أو
git checkout -b fix/your-bug-fix
```

### 3. إعداد بيئة التطوير

```bash
# تثبيت التبعيات
npm install

# إعداد متغيرات البيئة
cp env.example .env.local

# تشغيل المشروع
npm run dev
```

### 4. إجراء التغييرات

- اكتب كود نظيف ومفهوم
- اتبع معايير الكود الموجودة
- أضف تعليقات باللغة العربية أو الإنجليزية
- تأكد من عمل جميع الاختبارات

### 5. اختبار التغييرات

```bash
# فحص الأخطاء
npm run lint

# فحص الأنواع
npm run type-check

# بناء المشروع
npm run build
```

### 6. Commit التغييرات

```bash
# إضافة التغييرات
git add .

# Commit مع رسالة واضحة
git commit -m "feat: إضافة ميزة جديدة"
# أو
git commit -m "fix: إصلاح مشكلة في..."
```

### 7. Push و Pull Request

```bash
# رفع التغييرات
git push origin feature/your-feature-name
```

1. اذهب إلى مستودعك على GitHub
2. اضغط على "Compare & pull request"
3. اكتب وصف واضح للتغييرات
4. اضغط على "Create pull request"

## معايير الكود

### TypeScript

```typescript
// ✅ جيد
interface User {
  id: string;
  name: string;
  email: string;
  role: 'CLIENT' | 'ADMIN';
}

// ❌ سيء
const user = {
  id: '123',
  name: 'أحمد',
  email: 'ahmed@example.com'
}
```

### React Components

```tsx
// ✅ جيد
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <button onClick={() => onAddToCart(product)}>
        أضف للسلة
      </button>
    </div>
  );
}

// ❌ سيء
export default function ProductCard(props: any) {
  return <div>{props.product.name}</div>;
}
```

### CSS Classes

```tsx
// ✅ جيد - استخدام Tailwind CSS
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">

// ❌ سيء - CSS مخصص
<div className="custom-product-card">
```

### التعليقات

```typescript
// ✅ جيد
/**
 * إضافة منتج إلى سلة التسوق
 * @param product - المنتج المراد إضافته
 * @param quantity - الكمية المطلوبة
 */
const addToCart = (product: Product, quantity: number) => {
  // منطق إضافة المنتج
};

// ❌ سيء
// إضافة منتج
const addToCart = (product, quantity) => {
  // كود
};
```

## أنواع المساهمات

### 🐛 إصلاح الأخطاء (Bug Fixes)

- ابحث عن الأخطاء في Issues
- أصلح الخطأ مع إضافة اختبار
- تأكد من عدم كسر ميزات أخرى

### ✨ ميزات جديدة (New Features)

- ناقش الميزة في Issue أولاً
- اكتب كود نظيف ومفهوم
- أضف اختبارات للميزة الجديدة
- حدث الوثائق

### 📚 تحسين الوثائق (Documentation)

- حدث README.md
- أضف تعليقات للكود
- اكتب أمثلة للاستخدام

### 🎨 تحسينات التصميم (UI/UX)

- اتبع الهوية البصرية للشركة
- تأكد من التوافق مع جميع الأجهزة
- اختبر على متصفحات مختلفة

### ⚡ تحسينات الأداء (Performance)

- قم بقياس الأداء قبل وبعد
- استخدم أدوات التحليل
- تأكد من عدم كسر الوظائف

## إرشادات خاصة

### اللغة العربية

- استخدم خط Cairo للنصوص العربية
- تأكد من اتجاه النص RTL
- اختبر على أجهزة مختلفة

### التصميم

- اتبع نظام الألوان:
  - الأخضر الأساسي: `#00A66F`
  - الأزرق الثانوي: `#005AA7`
  - السماوي المميز: `#B9EAF2`
- استخدم shadcn/ui للمكونات
- تأكد من التجاوب مع جميع الأجهزة

### قاعدة البيانات

- استخدم Prisma للتعامل مع قاعدة البيانات
- اتبع مخطط قاعدة البيانات الموجود
- أضف migrations عند الحاجة

## عملية المراجعة

### للمراجعين

1. تحقق من جودة الكود
2. تأكد من عمل الاختبارات
3. اختبر الميزة يدوياً
4. تحقق من التوافق مع التصميم
5. اكتب تعليقات مفيدة

### للمساهمين

1. استجب لتعليقات المراجعين
2. أصلح المشاكل المذكورة
3. اختبر التغييرات مرة أخرى
4. حدث PR عند الحاجة

## قوالب المساهمة

### Bug Report

```markdown
## وصف المشكلة
وصف واضح للمشكلة

## خطوات إعادة الإنتاج
1. اذهب إلى '...'
2. اضغط على '...'
3. لاحظ الخطأ

## النتيجة المتوقعة
ما كان يجب أن يحدث

## لقطات الشاشة
إذا كانت مناسبة

## معلومات إضافية
- المتصفح: [مثل Chrome, Safari]
- الإصدار: [مثل 22]
- الجهاز: [مثل iPhone6]
```

### Feature Request

```markdown
## الميزة المطلوبة
وصف واضح للميزة

## المشكلة التي تحلها
لماذا نحتاج هذه الميزة؟

## الحل المقترح
كيف تريد أن تعمل الميزة؟

## البدائل
هل هناك حلول أخرى؟

## معلومات إضافية
أي معلومات أخرى مفيدة
```

## التواصل

- **GitHub Issues**: للمناقشات والأخطاء
- **Discord**: للدردشة السريعة
- **Email**: support@omq.com.sa للاستفسارات الرسمية

## شكر وتقدير

نقدر جميع المساهمات! سيتم ذكر جميع المساهمين في ملف CONTRIBUTORS.md.

## الترخيص

بالمساهمة في هذا المشروع، توافق على أن مساهماتك ستكون مرخصة تحت رخصة MIT.

---

**شكراً لمساهمتكم في تطوير عمق المملكة!** 🏴‍☠️


