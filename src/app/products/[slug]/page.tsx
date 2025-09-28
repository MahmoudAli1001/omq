'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Mock data - سيتم استبدالها بـ API call
const product = {
  id: '1',
  name: 'بدلة غوص تجارية',
  nameAr: 'بدلة غوص تجارية',
  slug: 'commercial-diving-suit',
  description: 'بدلة غوص عالية الجودة للاستخدام التجاري مع حماية متقدمة من الماء والبرد',
  descriptionAr: 'بدلة غوص عالية الجودة للاستخدام التجاري مع حماية متقدمة من الماء والبرد',
  category: 'معدات غوص',
  categoryAr: 'معدات غوص',
  price: 2500,
  originalPrice: 3000,
  images: [
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600'
  ],
  stock: 15,
  isActive: true,
  rating: 4.8,
  reviews: 24,
  features: [
    'مقاوم للماء حتى عمق 50 متر',
    'عزل حراري ممتاز',
    'مواد عالية الجودة',
    'ضمان 2 سنوات',
    'سهولة في الحركة'
  ],
  specifications: {
    'الوزن': '2.5 كيلو',
    'المقاسات المتاحة': 'S, M, L, XL',
    'اللون': 'أسود',
    'المادة': 'نيوبرين عالي الجودة',
    'الضمان': '24 شهر'
  }
}

const relatedProducts = [
  {
    id: '2',
    name: 'خوذة غوص',
    slug: 'diving-helmet',
    price: 4500,
    image: '/api/placeholder/300/300',
    rating: 4.9
  },
  {
    id: '3',
    name: 'أدوات أمان بحرية',
    slug: 'marine-safety-tools',
    price: 1200,
    image: '/api/placeholder/300/300',
    rating: 4.7
  },
  {
    id: '4',
    name: 'مضخة هواء',
    slug: 'air-compressor',
    price: 8500,
    image: '/api/placeholder/300/300',
    rating: 4.9
  }
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Logic to add to cart
    console.log('Added to cart:', { product, quantity })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm rtl:space-x-reverse">
            <Link href="/" className="text-gray-500 hover:text-primary">
              الرئيسية
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-primary">
              المنتجات
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-cairo font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} تقييم)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString()} ر.س
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice.toLocaleString()} ر.س
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <Badge variant="destructive" className="mt-2">
                    وفر {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                  </Badge>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>متوفر ({product.stock} قطعة)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>غير متوفر</span>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الكمية
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  {product.stock === 0 ? 'غير متوفر' : 'أضف للسلة'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-cairo font-bold mb-4">المميزات الرئيسية</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">شحن مجاني</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">ضمان الجودة</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm font-medium">إرجاع سهل</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-cairo font-bold mb-8">المواصفات التقنية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-cairo font-semibold mb-4">المواصفات</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-cairo font-semibold mb-4">معلومات إضافية</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">الشركة المصنعة</span>
                  <span className="text-gray-600">OMQ</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">بلد المنشأ</span>
                  <span className="text-gray-600">المملكة العربية السعودية</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">رقم المنتج</span>
                  <span className="text-gray-600">OMQ-{product.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-cairo font-bold mb-8">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-cairo font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(relatedProduct.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {relatedProduct.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {relatedProduct.price.toLocaleString()} ر.س
                    </span>
                    <Button size="sm" asChild>
                      <Link href={`/products/${relatedProduct.slug}`}>
                        عرض
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
