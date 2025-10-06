"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { OMQLogoImage } from "@/components/OMQLogoImage";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Anchor,
  Shield,
  Waves,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: t.nav.about, href: "/about" },
      { name: t.nav.services, href: "/services" },
      { name: t.nav.products, href: "/products" },
      { name: t.nav.partners, href: "/partners" },
    ],
    support: [
      { name: t.nav.contact, href: "/contact" },
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "شروط الاستخدام", href: "/terms" },
      { name: "الأسئلة الشائعة", href: "/faq" },
    ],
    services: [
      { name: "الغوص التجاري", href: "/services/commercial-diving" },
      { name: "الدعم البحري", href: "/services/offshore-support" },
      {
        name: "البنية التحتية البحرية",
        href: "/services/marine-infrastructure",
      },
      { name: "الاستشارات البحرية", href: "/services/marine-consulting" },
    ],
  };

  const contactInfo = [
    {
      icon: Phone,
      text: "+966 53 835 2062",
      textEn: "+966 53 835 2062",
      href: "tel:+966111234567",
    },
    {
      icon: Mail,
      text: "info@alphaomq.sa",
      textEn: "info@alphaomq.sa",
      href: "mailto:info@alphaomq.sa",
    },
    {
      icon: MapPin,
      text: "الرياض، المملكة العربية السعودية",
      textEn: "Riyadh, Saudi Arabia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className=" bg-[#011129] pt-0 mt-0 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={language === "ar" ? "/logo-ar.png" : "/logo-en.png"}
                  alt="OMQ"
                  className="rounded-lg"
                  width={250}
                  height={250}
                />
              </div>

              <p className="text-white/90 font-cairo leading-relaxed mb-6">
                {language === "ar"
                  ? "الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة"
                  : "The leading national company in sovereign diving operations to protect the Kingdom's marine infrastructure and resources"}
              </p>

              {/* Contact Info */}
              <div
                className="space-y-3"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 rtl:space-x-reverse text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <contact.icon className="w-5 h-5 text-[#B9EAF2]" />
                    <span
                      className="font-cairo text-sm"
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      {language === "ar" ? contact.text : contact.textEn}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-cairo font-bold mb-6 text-white">
                {language === "ar" ? "روابط سريعة" : "Quick Links"}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white font-cairo transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#B9EAF2] rounded-full mr-3 rtl:mr-0 rtl:ml-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-cairo font-bold mb-6 text-white">
                {language === "ar" ? "خدماتنا" : "Our Services"}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white font-cairo transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#B9EAF2] rounded-full mr-3 rtl:mr-0 rtl:ml-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Social */}
            <div>
              <h3 className="text-xl font-cairo font-bold mb-6 text-white">
                {language === "ar" ? "الدعم" : "Support"}
              </h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white font-cairo transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#B9EAF2] rounded-full mr-3 rtl:mr-0 rtl:ml-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-cairo font-semibold mb-4 text-white">
                  {language === "ar" ? "تابعنا" : "Follow Us"}
                </h4>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-white/80 font-cairo text-sm mb-4 md:mb-0">
                © {currentYear}{" "}
                {language === "ar" ? "ألفا  أوإمكيو" : "Kingdom Depth"}.
                {language === "ar"
                  ? " جميع الحقوق محفوظة"
                  : " All rights reserved"}
              </div>

              {/* Certifications */}
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
                  <Shield className="w-5 h-5 text-[#B9EAF2]" />
                  <span className="font-cairo text-sm">
                    {language === "ar" ? "معتمد" : "Certified"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
                  <Anchor className="w-5 h-5 text-[#B9EAF2]" />
                  <span className="font-cairo text-sm">
                    {language === "ar" ? "آمن" : "Secure"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
                  <Waves className="w-5 h-5 text-[#B9EAF2]" />
                  <span className="font-cairo text-sm">
                    {language === "ar" ? "موثوق" : "Reliable"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
