import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Home, Package, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardContent className="p-8">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-cairo font-bold text-gray-900 mb-4">
              تم تأكيد طلبك بنجاح!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Your order has been confirmed successfully!
            </p>
            <p className="text-gray-500 mb-8">
              شكراً لك على اختيار عمق المملكة. سنقوم بمعالجة طلبك وإرساله في أقرب وقت ممكن.
            </p>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-right">
              <h2 className="text-xl font-cairo font-bold mb-4">تفاصيل الطلب</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">رقم الطلب:</span>
                  <span className="font-medium">#OMQ-{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">تاريخ الطلب:</span>
                  <span className="font-medium">{new Date().toLocaleDateString('ar-SA')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الحالة:</span>
                  <span className="text-green-600 font-medium">تم التأكيد</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">وقت التوصيل المتوقع:</span>
                  <span className="font-medium">3-5 أيام عمل</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h3 className="text-lg font-cairo font-bold mb-4">الخطوات التالية</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ستتلقى رسالة تأكيد على بريدك الإلكتروني</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-primary" />
                  <span>سنقوم بتجهيز طلبك وإرساله</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>ستتلقى تحديثات حول حالة الطلب</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  العودة للرئيسية
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products" className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  تصفح المزيد
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                هل لديك أسئلة حول طلبك؟
              </p>
              <p className="text-sm text-gray-600">
                تواصل معنا على: <span className="font-medium text-primary">+966 11 123 4567</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


