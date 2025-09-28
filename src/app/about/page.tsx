import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Users, 
  Globe, 
  Star,
  Award,
  Target,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    icon: Shield,
    title: 'الأمان',
    titleEn: 'Safety',
    description: 'نضع الأمان في مقدمة أولوياتنا في جميع عملياتنا',
    descriptionEn: 'We prioritize safety in all our operations'
  },
  {
    icon: Users,
    title: 'التميز',
    titleEn: 'Excellence',
    description: 'نسعى للتميز في كل ما نقدمه من خدمات',
    descriptionEn: 'We strive for excellence in everything we offer'
  },
  {
    icon: Globe,
    title: 'الاستدامة',
    titleEn: 'Sustainability',
    description: 'نلتزم بحماية البيئة البحرية للأجيال القادمة',
    descriptionEn: 'We are committed to protecting the marine environment for future generations'
  },
  {
    icon: Heart,
    title: 'الابتكار',
    titleEn: 'Innovation',
    description: 'نستخدم أحدث التقنيات والمعدات المتطورة',
    descriptionEn: 'We use the latest technologies and advanced equipment'
  }
]

const milestones = [
  {
    year: '2010',
    title: 'تأسيس الشركة',
    titleEn: 'Company Establishment',
    description: 'تأسست شركة عمق المملكة كشركة وطنية متخصصة في الغوص التجاري'
  },
  {
    year: '2015',
    title: 'التوسع في الخدمات',
    titleEn: 'Service Expansion',
    description: 'توسعت خدماتنا لتشمل الدعم البحري والبنية التحتية البحرية'
  },
  {
    year: '2018',
    title: 'الشهادات الدولية',
    titleEn: 'International Certifications',
    description: 'حصلنا على شهادات دولية معتمدة في مجال الغوص التجاري'
  },
  {
    year: '2020',
    title: 'الريادة الوطنية',
    titleEn: 'National Leadership',
    description: 'أصبحنا الشركة الرائدة في المملكة في مجال الغوص السيادي'
  },
  {
    year: '2023',
    title: 'التطوير المستدام',
    titleEn: 'Sustainable Development',
    description: 'إطلاق برامج التطوير المستدام وحماية البيئة البحرية'
  }
]

const team = [
  {
    name: 'أحمد محمد العتيبي',
    nameEn: 'Ahmed Mohammed Al-Otaibi',
    position: 'الرئيس التنفيذي',
    positionEn: 'CEO',
    image: '/api/placeholder/300/300',
    experience: '20+ سنة خبرة'
  },
  {
    name: 'فاطمة عبدالله السعيد',
    nameEn: 'Fatima Abdullah Al-Saeed',
    position: 'مدير العمليات',
    positionEn: 'Operations Manager',
    image: '/api/placeholder/300/300',
    experience: '15+ سنة خبرة'
  },
  {
    name: 'محمد سالم القحطاني',
    nameEn: 'Mohammed Salem Al-Qahtani',
    position: 'مدير الأمان',
    positionEn: 'Safety Manager',
    image: '/api/placeholder/300/300',
    experience: '18+ سنة خبرة'
  },
  {
    name: 'نورا أحمد الزهراني',
    nameEn: 'Nora Ahmed Al-Zahrani',
    position: 'مدير البيئة',
    positionEn: 'Environment Manager',
    image: '/api/placeholder/300/300',
    experience: '12+ سنة خبرة'
  }
]

const achievements = [
  {
    icon: Award,
    title: '500+',
    subtitle: 'مشروع مكتمل',
    subtitleEn: 'Completed Projects'
  },
  {
    icon: Users,
    title: '50+',
    subtitle: 'خبير متخصص',
    subtitleEn: 'Expert Specialists'
  },
  {
    icon: Star,
    title: '15+',
    subtitle: 'سنة خبرة',
    subtitleEn: 'Years Experience'
  },
  {
    icon: Target,
    title: '100%',
    subtitle: 'رضا العملاء',
    subtitleEn: 'Customer Satisfaction'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-ocean min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Bubbles */}
        <div className="absolute inset-0 bg-gradient-bubbles opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-6">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo">
            الشركة الوطنية الرائدة في عمليات الغوص السيادية
          </p>
          <p className="text-lg text-white/80 font-inter">
            Leading national company in sovereign diving operations
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-6">
                رؤيتنا ومهمتنا
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-cairo font-bold text-primary mb-3">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    أن تكون الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة، مع الالتزام بأعلى معايير الجودة والأمان والاستدامة البيئية.
                  </p>
                  <p className="text-gray-600 font-inter">
                    To be the leading national company in sovereign diving operations to protect the Kingdom&apos;s marine infrastructure and resources, while maintaining the highest standards of quality, safety, and environmental sustainability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-cairo font-bold text-secondary mb-3">مهمتنا</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تقديم خدمات غوص تجارية استثنائية وآمنة ومستدامة، مع تطوير الكفاءات المحلية، والحفاظ على البيئة البحرية، وضمان أعلى مستويات الجودة في جميع عملياتنا.
                  </p>
                  <p className="text-gray-600 font-inter">
                    Providing exceptional, safe and sustainable commercial diving services, while developing local expertise, preserving the marine environment, and ensuring the highest quality standards in all our operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Globe className="w-20 h-20 mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-cairo font-bold mb-4">
                    شركة وطنية متميزة
                  </h3>
                  <p className="font-inter opacity-90">
                    Leading National Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Core Values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-inter mb-3">
                    {value.titleEn}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              إنجازاتنا
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.title}
                </div>
                <div className="text-gray-600 font-cairo">
                  {achievement.subtitle}
                </div>
                <div className="text-sm text-gray-500 font-inter">
                  {achievement.subtitleEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              رحلتنا
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="text-primary border-primary">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-cairo font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-inter mb-3">
                          {milestone.titleEn}
                        </p>
                        <p className="text-gray-700">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-gray-900 mb-4">
              فريقنا
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Our Team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-cairo font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-inter mb-2">
                    {member.nameEn}
                  </p>
                  <p className="text-primary font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 font-inter mb-3">
                    {member.positionEn}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-cairo font-bold text-white mb-6">
            انضم إلى رحلتنا
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8">
            Join Our Journey
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
