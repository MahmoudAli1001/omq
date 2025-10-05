'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Dropdown() {


      const pathname = usePathname()
 
      const { language, toggleLanguage, t } = useLanguage()
    
      const about = [
       
        { name: t.nav.about, href: '/about' },
        { name: t.nav.ourVision, href: '/about#our-vision' },
        { name: t.nav.ourMission, href: '/about#our-mission' },
      
      ]
  return (
    <NavigationMenu viewport={false} dir={language==='ar'?'rtl':'ltr'} className='text-[#15235c]'>
      <NavigationMenuList >
     
        {/* list */}
        <NavigationMenuItem >
          <NavigationMenuTrigger>{t.nav.about}</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white rounded-lg shadow-md'>
            <ul className="grid w-[300px] gap-4 ">
              {about.map((item) => (
                <NavigationMenuLink asChild key={item.href} className='hover:bg-[#004886] hover:text-white'>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              ))}
            </ul>
             
          </NavigationMenuContent>
        </NavigationMenuItem>
      
      </NavigationMenuList>
    </NavigationMenu>
  );
}
