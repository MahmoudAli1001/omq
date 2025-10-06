"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Anchor, Waves, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LiquidChrome from "@/components/LiquidChrome";

export default function Home() {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: "الغوص التجاري",
      titleEn: "Commercial Diving",
      description: "خدمات غوص متخصصة للبنية التحتية البحرية",
      descriptionEn: "Specialized diving services for marine infrastructure",
    },
    {
      icon: Anchor,
      title: "الدعم البحري",
      titleEn: "Offshore Support",
      description: "دعم شامل للعمليات البحرية والمنصات",
      descriptionEn:
        "Comprehensive support for marine operations and platforms",
    },
    {
      icon: Waves,
      title: "البنية التحتية البحرية",
      titleEn: "Marine Infrastructure",
      description: "حماية وصيانة المرافق البحرية",
      descriptionEn: "Protection and maintenance of marine facilities",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Liquid Chrome Background */}
        <div className="absolute inset-0">
          {/* <LiquidChrome
            baseColor={[0.0, 0.35, 0.65]} // Sea blue
            speed={0.5}
            amplitude={0.4}
            frequencyX={2}
            frequencyY={2}
            interactive={true}
          /> */}
          {/* add video as background */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/OMQ-background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}

        {/* Floating Bubbles Animation - Using fixed positions to prevent hydration errors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: 10, top: 20, delay: 0.5, duration: 3.2 },
            { left: 80, top: 15, delay: 1.2, duration: 4.1 },
            { left: 25, top: 60, delay: 2.1, duration: 3.8 },
            { left: 65, top: 80, delay: 0.8, duration: 3.5 },
            { left: 90, top: 40, delay: 1.8, duration: 4.2 },
            { left: 15, top: 85, delay: 0.3, duration: 3.9 },
            { left: 75, top: 25, delay: 2.5, duration: 3.6 },
            { left: 40, top: 70, delay: 1.5, duration: 4.0 },
            { left: 95, top: 10, delay: 0.7, duration: 3.7 },
            { left: 5, top: 95, delay: 2.2, duration: 3.4 },
            { left: 55, top: 45, delay: 1.1, duration: 4.3 },
            { left: 85, top: 75, delay: 0.9, duration: 3.3 },
            { left: 30, top: 30, delay: 2.8, duration: 4.4 },
            { left: 70, top: 65, delay: 0.4, duration: 3.1 },
            { left: 20, top: 50, delay: 1.9, duration: 3.8 },
            { left: 60, top: 35, delay: 2.6, duration: 4.1 },
            { left: 45, top: 85, delay: 0.6, duration: 3.5 },
            { left: 12, top: 75, delay: 1.7, duration: 4.2 },
            { left: 88, top: 55, delay: 2.3, duration: 3.9 },
            { left: 35, top: 15, delay: 1.4, duration: 3.6 },
          ].map((bubble, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cairo font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-white hover:bg-white hover:text-[#12255b] backdrop-blur-lg border px-24 py-4 rounded-lg text-lg font-cairo font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">{t.hero.contactBtn}</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className=" backdrop-blur-lg text-white hover:bg-white hover:text-[#12255b] px-24 py-4 rounded-lg text-lg font-cairo font-semibold transition-all duration-300"
                asChild
              >
                <Link href="/services">{t.hero.servicesBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br bg-[#eaf2f02a] from-[#00A66F]/5 to-[#005AA7]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-cairo font-bold text-[#12255b] mb-4">
                  {t.vision.title}
                </h2>
                <p className="text-lg text-gray-700 font-cairo leading-relaxed">
                  {t.vision.description}
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-cairo font-bold text-[#12255b] mb-4">
                  {t.mission.title}
                </h2>
                <p className="text-lg text-gray-700 font-cairo leading-relaxed">
                  {t.mission.description}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-l from-[#12255b] via-[#29d4ed] to-[#2e558d] rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Anchor className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-cairo font-bold mb-4">
                    {t.common.whyChooseUs}
                  </h3>
                  <p className="text-white/90 font-cairo leading-relaxed">
                    {t.common.readyToServe}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className=" bg-white relative">
        <div className=" w-full  relative">
          <Image src="/waves.svg" alt="Waves" fill className="object-cover" />
          {/* Diagonal Fade Grid Background - Top Left */}
          {/* <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right,#0059a7b2 0.5px, transparent 1px),
                linear-gradient(to bottom,#2ad3ec 0.5px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            }}
          /> */}

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16 backdrop-blur-md py-1 rounded-lg px-2 gradient-to-r  w-fit">
              <h2 className="text-4xl md:text-5xl  font-cairo font-bold text-white mb-6">
                {t.services.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border border-[#1b5a99] backdrop-blur-2xl text-white z-20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#12255b] to-[#2ad3ec] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-cairo font-bold  mb-4">
                      {language === "ar" ? service.title : service.titleEn}
                    </h3>

                    <p className="text-gray-400 font-cairo leading-relaxed mb-6">
                      {language === "ar"
                        ? service.description
                        : service.descriptionEn}
                    </p>

                    <Button
                      variant="outline"
                      className="border-[#26b3d2] backdrop-blur-lg transition-all duration-500 rounded-lg  bg-[#26b3d257] text-white font-cairo"
                      asChild
                    >
                      <Link href="/services">{t.services.viewAllServices}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose OMQ Section */}
      <section>
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-4xl md:text-5xl  font-cairo font-bold font-cairo text-[#12255b] md:leading-tight">
              {language === "ar"
                ? "لماذا تختار ألفا  أوإمكيو؟"
                : "Why Choose Kingdom Depth?"}
            </h2>
            <p className="mt-1 text-neutral-400 font-cairo">
              {language === "ar"
                ? "نحن نقدم حلولاً بحرية متكاملة تجمع بين الخبرة التقنية المتقدمة والالتزام بأعلى معايير الجودة والأمان في جميع عملياتنا البحرية."
                : "We provide integrated marine solutions that combine advanced technical expertise with commitment to the highest standards of quality and safety in all our marine operations."}
            </p>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none shadow-lg rounded-xl overflow-hidden shadow-[#0059a723]">
              <Image
                className="w-full object-cover rounded-xl"
                src={language === "ar" ? "/logo-ar.png" : "/logo-en.png"}
                alt={
                  language === "ar"
                    ? "خدمات الغوص التجاري"
                    : "Commercial Diving Services"
                }
                width={480}
                height={600}
              />
            </div>
            {/* End Col */}

            {/* Timeline */}
            <div>
              {/* Heading */}
              <div className="mb-4">
                <h3 className=" bg-gradient-to-b from-[#12255b] via-[#29d4ed] to-[#2e558d] w-fit px-4 py-2 rounded-lg text-white text-xs font-medium uppercase font-cairo">
                  {language === "ar" ? "مميزاتنا" : "Our Advantages"}
                </h3>
              </div>
              {/* End Heading */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:bg-[#005AA7] after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-[#005AA7] text-[#0064a6] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400 font-cairo">
                    <span className="text-black font-semibold">
                      {language === "ar"
                        ? "الخبرة التقنية المتقدمة:"
                        : "Advanced Technical Expertise:"}
                    </span>{" "}
                    {language === "ar"
                      ? "فريق من الخبراء المتخصصين في الغوص التجاري والعمليات البحرية المعقدة مع سنوات من الخبرة الميدانية."
                      : "A team of experts specialized in commercial diving and complex marine operations with years of field experience."}
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:bg-[#005AA7] after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-[#005AA7] text-[#0064a6] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400 font-cairo">
                    <span className="text-black font-semibold">
                      {language === "ar"
                        ? "أعلى معايير الأمان:"
                        : "Highest Safety Standards:"}
                    </span>{" "}
                    {language === "ar"
                      ? "نلتزم بأعلى معايير الأمان الدولية مع استخدام أحدث المعدات والتقنيات لضمان سلامة جميع العمليات."
                      : "We adhere to the highest international safety standards using the latest equipment and technologies to ensure the safety of all operations."}
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:bg-[#005AA7] after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-[#005AA7] text-[#0064a6] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400 font-cairo">
                    <span className="text-black font-semibold">
                      {language === "ar"
                        ? "الحلول المتكاملة:"
                        : "Integrated Solutions:"}
                    </span>{" "}
                    {language === "ar"
                      ? "نقدم حلولاً شاملة تشمل الغوص التجاري والدعم البحري والبنية التحتية البحرية تحت سقف واحد."
                      : "We provide comprehensive solutions including commercial diving, marine support, and marine infrastructure under one roof."}
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:bg-[#005AA7] after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] ">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-[#005AA7] text-[#0064a6] font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400 font-cairo">
                    <span className="text-black font-semibold">
                      {language === "ar"
                        ? "الالتزام البيئي:"
                        : "Environmental Commitment:"}
                    </span>{" "}
                    {language === "ar"
                      ? "نلتزم بحماية البيئة البحرية وتطبيق أفضل الممارسات المستدامة في جميع عملياتنا."
                      : "We are committed to protecting the marine environment and applying the best sustainable practices in all our operations."}
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              <Link
                className="group inline-flex items-center gap-x-2 py-2 px-3  bg-gradient-to-b from-[#12255b] via-[#29d4ed] to-[#2e558d] font-medium text-sm text-white rounded-lg focus:outline-hidden transition-colors duration-300 font-cairo"
                href="/contact"
              >
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
                <Phone className="shrink-0 size-4" />
              </Link>
            </div>
            {/* End Timeline */}
          </div>
          {/* End Grid */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-20 pb-0 mb-[-4rem] text-[#12295f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 p-0 m-0 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold  mb-6">
            {t.cta.title}
          </h2>

          <div className="flex flex-col p-0 m-0 sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white rounded-lg text-[#12295f] hover:bg-gray-100 px-12 py-4 text-lg font-cairo font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                {t.cta.contactUs}
                <Phone className="w-6 h-6" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 rounded-lg border-[#12295f] transitions-all  text-[#12295f] hover:bg-white hover:text-[#12295f] px-8 py-4 text-lg font-cairo font-semibold transition-all duration-300"
              asChild
            >
              <Link href="/products" className="flex items-center gap-3">
                {t.cta.browseProducts}
                <ArrowRight className="w-6 h-6 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#011129"
            fillOpacity="1"
            d="M0,224L40,202.7C80,181,160,139,240,133.3C320,128,400,160,480,181.3C560,203,640,213,720,229.3C800,245,880,267,960,240C1040,213,1120,139,1200,101.3C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}
