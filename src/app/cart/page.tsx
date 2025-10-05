// 'use client'

// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { 
//   ShoppingCart, 
//   Minus, 
//   Plus, 
//   Trash2,
//   ArrowRight,
//   Truck,
//   Shield,
//   CreditCard
// } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useCart } from '@/hooks/use-cart'
// import { useState } from 'react'

// export default function CartPage() {
//   const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, clearCart } = useCart()
//   const [isCheckingOut, setIsCheckingOut] = useState(false)

//   const handleCheckout = () => {
//     setIsCheckingOut(true)
//     // Redirect to checkout page
//     window.location.href = '/checkout'
//   }

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <section className="bg-gradient-ocean py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
//               سلة التسوق
//             </h1>
//             <p className="text-xl text-white/90 font-inter">
//               Shopping Cart
//             </p>
//           </div>
//         </section>

//         {/* Empty Cart */}
//         <section className="py-20">
//           <div className="max-w-2xl mx-auto text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
//               <ShoppingCart className="w-16 h-16 text-gray-400" />
//             </div>
//             <h2 className="text-2xl font-cairo font-bold text-gray-900 mb-4">
//               سلة التسوق فارغة
//             </h2>
//             <p className="text-gray-600 mb-8">
//               لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
//             </p>
//             <Button size="lg" asChild>
//               <Link href="/products">
//                 تصفح المنتجات
//               </Link>
//             </Button>
//           </div>
//         </section>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <section className="bg-gradient-ocean py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
//             سلة التسوق
//           </h1>
//           <p className="text-xl text-white/90 font-inter">
//             Shopping Cart ({getTotalItems()} منتج)
//           </p>
//         </div>
//       </section>

//       {/* Cart Content */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Cart Items */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-sm">
//                 <div className="p-6 border-b border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-xl font-cairo font-bold">
//                       المنتجات ({getTotalItems()})
//                     </h2>
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       onClick={clearCart}
//                       className="text-red-600 hover:text-red-700"
//                     >
//                       مسح الكل
//                     </Button>
//                   </div>
//                 </div>

//                 <div className="divide-y divide-gray-200">
//                   {items.map((item) => (
//                     <div key={item.id} className="p-6">
//                       <div className="flex items-center gap-4">
//                         {/* Product Image */}
//                         <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
//                           <Image
//                             src={item.image || '/api/placeholder/80/80'}
//                             alt={item.name}
//                             width={80}
//                             height={80}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>

//                         {/* Product Info */}
//                         <div className="flex-1 min-w-0">
//                           <h3 className="font-cairo font-semibold text-lg text-gray-900 mb-1">
//                             {item.name}
//                           </h3>
//                           <p className="text-gray-600 text-sm mb-2">
//                             {item.nameAr}
//                           </p>
//                           <div className="flex items-center gap-4">
//                             <span className="text-lg font-bold text-primary">
//                               {item.price.toLocaleString()} ر.س
//                             </span>
//                           </div>
//                         </div>

//                         {/* Quantity Controls */}
//                         <div className="flex items-center gap-3">
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           >
//                             <Minus className="w-4 h-4" />
//                           </Button>
//                           <span className="w-12 text-center font-medium">
//                             {item.quantity}
//                           </span>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           >
//                             <Plus className="w-4 h-4" />
//                           </Button>
//                         </div>

//                         {/* Total Price */}
//                         <div className="text-right">
//                           <div className="text-lg font-bold text-gray-900">
//                             {(item.price * item.quantity).toLocaleString()} ر.س
//                           </div>
//                         </div>

//                         {/* Remove Button */}
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => removeItem(item.id)}
//                           className="text-red-600 hover:text-red-700 hover:bg-red-50"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Continue Shopping */}
//               <div className="mt-6">
//                 <Button variant="outline" asChild>
//                   <Link href="/products" className="flex items-center gap-2">
//                     <ArrowRight className="w-4 h-4" />
//                     متابعة التسوق
//                   </Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="lg:col-span-1">
//               <Card className="sticky top-8">
//                 <CardHeader>
//                   <CardTitle className="font-cairo">ملخص الطلب</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {/* Subtotal */}
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">المجموع الفرعي</span>
//                     <span className="font-medium">{getTotalPrice().toLocaleString()} ر.س</span>
//                   </div>

//                   {/* Shipping */}
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">الشحن</span>
//                     <span className="font-medium text-green-600">مجاني</span>
//                   </div>

//                   {/* Tax */}
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">ضريبة القيمة المضافة</span>
//                     <span className="font-medium">{(getTotalPrice() * 0.15).toLocaleString()} ر.س</span>
//                   </div>

//                   <hr className="my-4" />

//                   {/* Total */}
//                   <div className="flex justify-between text-lg font-bold">
//                     <span>المجموع الكلي</span>
//                     <span className="text-primary">
//                       {(getTotalPrice() * 1.15).toLocaleString()} ر.س
//                     </span>
//                   </div>

//                   {/* Checkout Button */}
//                   <Button 
//                     size="lg" 
//                     className="w-full mt-6"
//                     onClick={handleCheckout}
//                     disabled={isCheckingOut}
//                   >
//                     <CreditCard className="w-5 h-5 ml-2" />
//                     {isCheckingOut ? 'جاري التوجيه...' : 'إتمام الطلب'}
//                   </Button>

//                   {/* Security Badges */}
//                   <div className="pt-4 border-t">
//                     <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
//                       <div className="flex items-center gap-1">
//                         <Shield className="w-4 h-4" />
//                         <span>دفع آمن</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Truck className="w-4 h-4" />
//                         <span>شحن سريع</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Promo Code */}
//               <Card className="mt-4">
//                 <CardContent className="p-4">
//                   <h3 className="font-cairo font-semibold mb-3">كود الخصم</h3>
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       placeholder="أدخل كود الخصم"
//                       className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
//                     />
//                     <Button size="sm" variant="outline">
//                       تطبيق
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Truck className="w-8 h-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">شحن مجاني</h3>
//               <p className="text-gray-600">لجميع الطلبات التي تزيد عن 500 ر.س</p>
//             </div>
            
//             <div>
//               <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-secondary" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">ضمان الجودة</h3>
//               <p className="text-gray-600">جميع منتجاتنا مضمونة الجودة</p>
//             </div>
            
//             <div>
//               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CreditCard className="w-8 h-8 text-accent-foreground" />
//               </div>
//               <h3 className="text-xl font-cairo font-bold mb-2">دفع آمن</h3>
//               <p className="text-gray-600">حماية كاملة لبياناتك المالية</p>
//             </div>
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