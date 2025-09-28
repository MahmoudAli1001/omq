import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star,
  Eye,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Mock data - سيتم استبدالها بـ API calls
const products = [
  {
    id: '1',
    name: 'بدلة غوص تجارية',
    nameAr: 'بدلة غوص تجارية',
    slug: 'commercial-diving-suit',
    description: 'بدلة غوص عالية الجودة للاستخدام التجاري',
    descriptionAr: 'بدلة غوص عالية الجودة للاستخدام التجاري',
    category: 'معدات غوص',
    categoryAr: 'معدات غوص',
    price: 2500,
    images: ['/api/placeholder/400/300'],
    stock: 15,
    isActive: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: '2',
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
    isActive: true,
    rating: 4.9,
    reviews: 18
  },
  {
    id: '3',
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
    isActive: true,
    rating: 4.7,
    reviews: 32
  },
  {
    id: '4',
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
    isActive: true,
    rating: 4.9,
    reviews: 12
  },
  {
    id: '5',
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
    isActive: true,
    rating: 4.6,
    reviews: 28
  },
  {
    id: '6',
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
    isActive: true,
    rating: 4.8,
    reviews: 15
  }
]

const categories = [
  'جميع الفئات',
  'معدات غوص',
  'أدوات أمان',
  'معدات مساعدة'
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-ocean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4">
            منتجاتنا
          </h1>
          <p className="text-xl text-white/90 font-inter">
            Our Products
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="البحث في المنتجات..."
                  className="pr-10 w-full sm:w-80"
                />
              </div>

              {/* Category Filter */}
              <Select defaultValue="جميع الفئات">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="اختر الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">الأحدث</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                <SelectItem value="rating">التقييم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Stock Badge */}
                  {product.stock < 10 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-2 right-2"
                    >
                      متوفر قليل
                    </Badge>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-cairo font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {product.price.toLocaleString()} ر.س
                    </span>
                    <span className="text-sm text-gray-500">
                      متوفر: {product.stock}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1"
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="w-4 h-4 ml-2" />
                      {product.stock === 0 ? 'غير متوفر' : 'أضف للسلة'}
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${product.slug}`}>
                        عرض
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              عرض المزيد
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-cairo font-bold mb-2">تسوق آمن</h3>
              <p className="text-gray-600">ضمان الجودة والأمان في جميع منتجاتنا</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-cairo font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-600">منتجات عالية الجودة من أفضل الماركات</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-cairo font-bold mb-2">شحن سريع</h3>
              <p className="text-gray-600">توصيل سريع وآمن لجميع أنحاء المملكة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


