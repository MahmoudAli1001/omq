'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  CreditCard, 
  MapPin, 
  Lock,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/hooks/use-cart'

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear cart and redirect to success page
      clearCart()
      window.location.href = '/checkout/success'
    } catch (error) {
      console.error('Payment failed:', error)
      setIsProcessing(false)
    }
  }

  const cities = [
    'الرياض',
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام',
    'الخبر',
    'الظهران',
    'الطائف',
    'بريدة',
    'تبوك',
    'خميس مشيط',
    'الهفوف',
    'حائل',
    'نجران',
    'الجبيل',
    'ينبع',
    'أبها',
    'النماص',
    'الباحة',
    'عرعر'
  ]

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-cairo font-bold text-gray-900 mb-4">
            لا توجد منتجات في السلة
          </h1>
          <p className="text-gray-600 mb-8">
            يرجى إضافة منتجات إلى السلة قبل المتابعة
          </p>
          <Button asChild>
            <Link href="/products">
              تصفح المنتجات
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-ocean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
            إتمام الطلب
          </h1>
          <p className="text-xl text-white/90 font-inter">
            Complete Your Order
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      معلومات الشحن
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">الاسم الكامل *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">رقم الهاتف *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          placeholder="+966 50 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">المدينة *</Label>
                        <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المدينة" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">العنوان التفصيلي *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                        placeholder="الحي، الشارع، رقم المبنى"
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postalCode">الرمز البريدي</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          placeholder="12345"
                        />
                      </div>
                      <div>
                        <Label htmlFor="notes">ملاحظات إضافية</Label>
                        <Input
                          id="notes"
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="ملاحظات حول الطلب"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      طريقة الدفع
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 rtl:space-x-reverse">
                          <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            <span>بطاقة ائتمان/خصم</span>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 rtl:space-x-reverse">
                          <input
                            type="radio"
                            name="payment"
                            value="bank"
                            checked={paymentMethod === 'bank'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            <span>تحويل بنكي</span>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 rtl:space-x-reverse">
                          <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>الدفع عند الاستلام</span>
                          </div>
                        </label>
                      </div>

                      {paymentMethod === 'card' && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-4">
                            سيتم توجيهك إلى صفحة الدفع الآمن لإدخال بيانات البطاقة
                          </p>
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <Lock className="w-4 h-4" />
                            <span>اتصال آمن ومشفر</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Back to Cart */}
                <div className="flex justify-start">
                  <Button variant="outline" asChild>
                    <Link href="/cart" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      العودة إلى السلة
                    </Link>
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="font-cairo">ملخص الطلب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || '/api/placeholder/48/48'}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-600">الكمية: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">
                          {(item.price * item.quantity).toLocaleString()} ر.س
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="my-4" />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>المجموع الفرعي</span>
                      <span>{getTotalPrice().toLocaleString()} ر.س</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>الشحن</span>
                      <span className="text-green-600">مجاني</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ضريبة القيمة المضافة (15%)</span>
                      <span>{(getTotalPrice() * 0.15).toLocaleString()} ر.س</span>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between text-lg font-bold">
                    <span>المجموع الكلي</span>
                    <span className="text-primary">
                      {(getTotalPrice() * 1.15).toLocaleString()} ر.س
                    </span>
                  </div>

                  {/* Place Order Button */}
                  <Button 
                    size="lg" 
                    className="w-full mt-6"
                    onClick={handleSubmit}
                    disabled={isProcessing || !paymentMethod || !formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city}
                  >
                    {isProcessing ? 'جاري المعالجة...' : 'تأكيد الطلب'}
                  </Button>

                  {/* Security Notice */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4" />
                      <span>معلوماتك محمية ومشفرة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
