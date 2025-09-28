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
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Globe
} from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    titleEn: 'Address',
    details: [
      'الرياض، المملكة العربية السعودية',
      'حي الملك فهد، شارع الملك عبدالعزيز',
      'الرمز البريدي: 12345'
    ],
    detailsEn: [
      'Riyadh, Saudi Arabia',
      'King Fahd District, King Abdulaziz Street',
      'Postal Code: 12345'
    ]
  },
  {
    icon: Phone,
    title: 'الهاتف',
    titleEn: 'Phone',
    details: [
      '+966 11 123 4567',
      '+966 50 123 4567',
      'الطوارئ: +966 50 999 8888'
    ],
    detailsEn: [
      '+966 11 123 4567',
      '+966 50 123 4567',
      'Emergency: +966 50 999 8888'
    ]
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    titleEn: 'Email',
    details: [
      'info@omq.com.sa',
      'support@omq.com.sa',
      'emergency@omq.com.sa'
    ],
    detailsEn: [
      'info@omq.com.sa',
      'support@omq.com.sa',
      'emergency@omq.com.sa'
    ]
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    titleEn: 'Working Hours',
    details: [
      'الأحد - الخميس: 8:00 ص - 5:00 م',
      'الجمعة - السبت: مغلق',
      'الطوارئ: 24/7'
    ],
    detailsEn: [
      'Sunday - Thursday: 8:00 AM - 5:00 PM',
      'Friday - Saturday: Closed',
      'Emergency: 24/7'
    ]
  }
]

const departments = [
  'الخدمات العامة',
  'المبيعات',
  'الدعم الفني',
  'الطوارئ',
  'الموارد البشرية',
  'المالية'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: ''
      })
      
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
    } catch (error) {
      console.error('Form submission failed:', error)
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-ocean min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Bubbles */}
        <div className="absolute inset-0 bg-gradient-bubbles opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo">
            نحن هنا لخدمتكم على مدار الساعة
          </p>
          <p className="text-lg text-white/80 font-inter">
            We are here to serve you 24/7
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
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
                        <Label htmlFor="department">القسم</Label>
                        <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر القسم" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">الموضوع *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        placeholder="موضوع الرسالة"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5 ml-2" />
                      {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-cairo font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-inter mb-3">
                          {info.titleEn}
                        </p>
                        <ul className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <li key={idx} className="text-gray-700 text-sm">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              موقعنا
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Location
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-cairo font-bold text-gray-900 mb-6">
                زورونا في مكتبنا الرئيسي
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                يقع مكتبنا الرئيسي في قلب العاصمة الرياض، حيث نقدم خدماتنا المتميزة للعملاء من جميع أنحاء المملكة. نحن متاحون لاستقبالكم خلال ساعات العمل الرسمية.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">الرياض، حي الملك فهد، شارع الملك عبدالعزيز</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">+966 11 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">info@omq.com.sa</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Globe className="w-16 h-16 mx-auto mb-4" />
                <p>خريطة الموقع</p>
                <p className="text-sm">Map will be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-cairo font-bold text-red-900 mb-4">
                خط الطوارئ
              </h2>
              <p className="text-red-700 mb-6">
                للطوارئ البحرية والاستجابة السريعة
              </p>
              <div className="text-3xl font-bold text-red-600 mb-4">
                +966 50 999 8888
              </div>
              <p className="text-sm text-red-600">
                متاح على مدار الساعة - Available 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-cairo font-bold text-gray-900 mb-2">
                  ما هي ساعات العمل؟
                </h3>
                <p className="text-gray-700">
                  نعمل من الأحد إلى الخميس من 8:00 صباحاً إلى 5:00 مساءً. للطوارئ، نحن متاحون على مدار الساعة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-cairo font-bold text-gray-900 mb-2">
                  كيف يمكنني طلب خدمة؟
                </h3>
                <p className="text-gray-700">
                  يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكتبنا. سنقوم بتقييم احتياجاتك وتقديم عرض سعر مناسب.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-cairo font-bold text-gray-900 mb-2">
                  هل تقدمون خدمات في جميع أنحاء المملكة؟
                </h3>
                <p className="text-gray-700">
                  نعم، نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، مع تركيز خاص على المناطق الساحلية والمنصات البحرية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
