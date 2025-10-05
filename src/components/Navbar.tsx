'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Menu, X, ShoppingCart, User, Globe } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import OMQLogoImage from '@/components/OMQLogoImage'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Dropdown from './Dropdown'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()
  const { language, toggleLanguage, t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.partners, href: '/partners' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className="bg-gradient-to-r font-cairo py-1 bg-white text-[#22994d] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20  rounded-lg">
          {/* Logo */}
              {/* <OMQLogoImage size="md" language={language} /> */}
              <div className="
    cursor-pointer
    rounded-lg">
                             <Image src={language === 'ar' ? '/logo-ar.png' : '/logo-en.png'} alt="OMQ" className='rounded-lg' width={80} height={100} />
                            </div>
            {/* <Link href="/" className=" rounded-lg">
              <Image
                     src={language === 'ar' ? '/logo-ar.png' : '/logo-en.png'}
                     alt={language === 'ar' ? 'ألفا  أوإمكيو' : 'Kingdom Depth'}
                     fill
                     className="object-contain   rounded-lg block w-full h-full"
                     priority
                     style={{ width: '100%', height: '100%' ,
                         objectFit: 'contain',
                         borderRadius: '10px'
                     }}
                    />
            </Link> */}
          <div className=" m-2">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-cairo gap-2 text-center rtl:space-x-reverse">
              {navigation.map((item) => {
                const currentItem=item.name
                if(currentItem===t.nav.about){
                  return (
                    <Dropdown key={item.href} />
                  )

                  
                }
                return (<Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-2 rounded-lg font-cairo text-sm font-medium transition-all duration-500 ${
                    pathname === item.href
                      ? 'bg-gradient-to-b from-[#12255b] via-[#29d4ed] to-[#2e558d] text-white shadow-md'
                      : 'text-[#12255b] hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>)
              })}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4 text-[#15235c] rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center text-[#15235c] space-x-1 rtl:space-x-reverse"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </Button>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {items.length > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {items.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login">
                    {t.nav.login}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/register">
                    {t.nav.register}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

