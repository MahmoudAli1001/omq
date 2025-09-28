import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Handshake, 
  Building2, 
  Globe, 
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const partners = [
  {
    name: 'شركة أرامكو السعودية',
    nameEn: 'Saudi Aramco',
    logo: '/api/placeholder/200/100',
    category: 'طاقة',
    categoryEn: 'Energy',
    description: 'شراكة استراتيجية في مجال الخدمات البحرية والمنصات النفطية',
    descriptionEn: 'Strategic partnership in marine services and oil platforms',
    type: 'شريك استراتيجي',
    typeEn: 'Strategic Partner',
    projects: 50,
    rating: 5.0
  },
  {
    name: 'الشركة السعودية للصناعات الأساسية',
    nameEn: 'SABIC',
    logo: '/api/placeholder/200/100',
    category: 'صناعة',
    categoryEn: 'Industry',
    description: 'تعاون في مجال الصيانة البحرية والبنية التحتية',
    descriptionEn: 'Cooperation in marine maintenance and infrastructure',
    type: 'شريك تقني',
    typeEn: 'Technical Partner',
    projects: 30,
    rating: 4.9
  },
  {
    name: 'الهيئة العامة للطيران المدني',
    nameEn: 'General Authority of Civil Aviation',
    logo: '/api/placeholder/200/100',
    category: 'حكومي',
    categoryEn: 'Government',
    description: 'خدمات الدعم البحري للمطارات الساحلية',
    descriptionEn: 'Marine support services for coastal airports',
    type: 'شريك حكومي',
    typeEn: 'Government Partner',
    projects: 15,
    rating: 4.8
  },
  {
    name: 'شركة البحر الأحمر العالمية',
    nameEn: 'Red Sea Global',
    logo: '/api/placeholder/200/100',
    category: 'سياحة',
    categoryEn: 'Tourism',
    description: 'خدمات الغوص والاستكشاف للمشاريع السياحية',
    descriptionEn: 'Diving and exploration services for tourism projects',
    type: 'شريك تطوير',
    typeEn: 'Development Partner',
    projects: 25,
    rating: 4.9
  },
  {
    name: 'الشركة الوطنية للنقل البحري',
    nameEn: 'National Shipping Company',
    logo: '/api/placeholder/200/100',
    category: 'نقل',
    categoryEn: 'Transportation',
    description: 'خدمات الصيانة والدعم للسفن التجارية',
    descriptionEn: 'Maintenance and support services for commercial vessels',
    type: 'شريك نقل',
    typeEn: 'Transportation Partner',
    projects: 40,
    rating: 4.7
  },
  {
    name: 'جامعة الملك عبدالله للعلوم والتقنية',
    nameEn: 'KAUST',
    logo: '/api/placeholder/200/100',
    category: 'تعليم',
    categoryEn: 'Education',
    description: 'البحث والتطوير في التقنيات البحرية',
    descriptionEn: 'Research and development in marine technologies',
    type: 'شريك أكاديمي',
    typeEn: 'Academic Partner',
    projects: 12,
    rating: 4.9
  }
]

const partnershipTypes = [
  {
    icon: Shield,
    title: 'شراكات استراتيجية',
    titleEn: 'Strategic Partnerships',
    description: 'شراكات طويلة المدى مع كبرى الشركات الوطنية',
    count: 15
  },
  {
    icon: Building2,
    title: 'شراكات حكومية',
    titleEn: 'Government Partnerships',
    description: 'تعاون مع الجهات الحكومية والهيئات الرسمية',
    count: 8
  },
  {
    icon: Globe,
    title: 'شراكات دولية',
    titleEn: 'International Partnerships',
    description: 'تعاون مع الشركات العالمية المتخصصة',
    count: 12
  },
  {
    icon: Award,
    title: 'شراكات تقنية',
    titleEn: 'Technical Partnerships',
    description: 'تعاون في البحث والتطوير والتقنيات المتقدمة',
    count: 20
  }
]

const benefits = [
  'وصول إلى أحدث التقنيات والمعدات',
  'خبرة عالمية في مجال الغوص التجاري',
  'شبكة واسعة من الخبراء والمتخصصين',
  'دعم فني متقدم وخدمات ما بعد البيع',
  'تدريب مستمر وتطوير المهارات',
  'ضمان الجودة والمعايير الدولية'
]

const benefitsEn = [
  'Access to latest technologies and equipment',
  'Global expertise in commercial diving',
  'Wide network of experts and specialists',
  'Advanced technical support and after-sales services',
  'Continuous training and skill development',
  'Quality assurance and international standards'
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-ocean min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Bubbles */}
        <div className="absolute inset-0 bg-gradient-bubbles opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-6">
            شركاؤنا
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo">
            شراكات استراتيجية لخدمة أفضل
          </p>
          <p className="text-lg text-white/80 font-inter">
            Strategic partnerships for better service
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              أنواع شراكاتنا
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Types of Our Partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-inter mb-3">
                    {type.titleEn}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <Badge variant="outline" className="text-primary border-primary">
                    {type.count} شريك
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              شركاؤنا الرئيسيون
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Main Partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Partner Logo */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={128}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-cairo font-bold text-gray-900 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-inter mb-2">
                      {partner.nameEn}
                    </p>
                    <div className="flex justify-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {partner.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {partner.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{partner.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {partner.projects} مشروع
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    عرض التفاصيل
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-6">
                فوائد الشراكة معنا
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Partnership Benefits
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-cairo text-gray-900">{benefit}</p>
                      <p className="font-inter text-sm text-gray-600">{benefitsEn[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Handshake className="w-20 h-20 mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-cairo font-bold mb-4">
                    انضم إلى شبكة شركائنا
                  </h3>
                  <p className="font-inter opacity-90 mb-6">
                    Join Our Partner Network
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/contact" className="flex items-center gap-2">
                      تواصل معنا
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              عملية الشراكة
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Partnership Process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-cairo font-bold mb-2">التواصل الأولي</h3>
              <p className="text-gray-600 text-sm">Initial Contact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-cairo font-bold mb-2">التقييم والدراسة</h3>
              <p className="text-gray-600 text-sm">Assessment & Study</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-cairo font-bold mb-2">توقيع الاتفاقية</h3>
              <p className="text-gray-600 text-sm">Agreement Signing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-cairo font-bold mb-2">بدء التعاون</h3>
              <p className="text-gray-600 text-sm">Start Collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-cairo font-bold text-white mb-6">
            كن شريكاً معنا
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8">
            Become Our Partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/services">استكشف خدماتنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
