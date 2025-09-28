export type Language = 'ar' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
    partners: string;
    contact: string;
    login: string;
    register: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    descriptionEn: string;
    servicesBtn: string;
    contactBtn: string;
  };
  
  // Vision & Mission
  vision: {
    title: string;
    description: string;
    descriptionEn: string;
  };
  
  mission: {
    title: string;
    description: string;
    descriptionEn: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    commercialDiving: {
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
    };
    offshoreSupport: {
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
    };
    marineInfrastructure: {
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
    };
    viewAllServices: string;
  };
  
  // Features
  features: {
    title: string;
    subtitle: string;
    items: string[];
    itemsEn: string[];
    trustedExpertise: string;
    trustedExpertiseEn: string;
  };
  
  // CTA
  cta: {
    title: string;
    subtitle: string;
    contactUs: string;
    browseProducts: string;
  };
  
  // Common
  common: {
    whyChooseUs: string;
    whyChooseUsEn: string;
    readyToServe: string;
    readyToServeEn: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      products: 'المنتجات',
      partners: 'شركاؤنا',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
    },
    hero: {
      title: 'عمق المملكة',
      subtitle: 'OMQ Kingdom',
      description: 'الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة',
      descriptionEn: 'Leading national company in sovereign diving operations to protect the Kingdom\'s marine infrastructure and resources',
      servicesBtn: 'خدماتنا',
      contactBtn: 'اتصل بنا',
    },
    vision: {
      title: 'رؤيتنا',
      description: 'أن تكون الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة.',
      descriptionEn: 'To be the leading national company in sovereign diving operations to protect the Kingdom\'s marine infrastructure and resources.',
    },
    mission: {
      title: 'مهمتنا',
      description: 'تقديم خدمات غوص تجارية استثنائية وآمنة ومستدامة، مع تطوير الكفاءات المحلية، والحفاظ على البيئة البحرية.',
      descriptionEn: 'Providing exceptional, safe and sustainable commercial diving services, while developing local expertise and preserving the marine environment.',
    },
    services: {
      title: 'خدماتنا الرئيسية',
      subtitle: 'Our Main Services',
      commercialDiving: {
        title: 'الغوص التجاري',
        titleEn: 'Commercial Diving',
        description: 'خدمات غوص متخصصة للبنية التحتية البحرية',
        descriptionEn: 'Specialized diving services for marine infrastructure',
      },
      offshoreSupport: {
        title: 'الدعم البحري',
        titleEn: 'Offshore Support',
        description: 'دعم شامل للعمليات البحرية والمنصات',
        descriptionEn: 'Comprehensive support for marine operations and platforms',
      },
      marineInfrastructure: {
        title: 'البنية التحتية البحرية',
        titleEn: 'Marine Infrastructure',
        description: 'حماية وصيانة المرافق البحرية',
        descriptionEn: 'Protection and maintenance of marine facilities',
      },
      viewAllServices: 'عرض جميع الخدمات',
    },
    features: {
      title: 'لماذا تختار عمق المملكة؟',
      subtitle: 'Why Choose Kingdom Depth?',
      items: [
        'خدمات آمنة ومستدامة',
        'كفاءات محلية متخصصة',
        'حماية البيئة البحرية',
        'تقنيات متطورة',
      ],
      itemsEn: [
        'Safe and sustainable services',
        'Specialized local expertise',
        'Marine environment protection',
        'Advanced technologies',
      ],
      trustedExpertise: 'خبرة محلية موثوقة',
      trustedExpertiseEn: 'Trusted Local Expertise',
    },
    cta: {
      title: 'مستعدون لخدمتكم',
      subtitle: 'Ready to Serve You',
      contactUs: 'تواصل معنا',
      browseProducts: 'تصفح المنتجات',
    },
    common: {
      whyChooseUs: 'لماذا تختار عمق المملكة؟',
      whyChooseUsEn: 'Why Choose Kingdom Depth?',
      readyToServe: 'مستعدون لخدمتكم',
      readyToServeEn: 'Ready to Serve You',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      partners: 'Partners',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
    },
    hero: {
      title: 'OMQ Kingdom',
      subtitle: 'عمق المملكة',
      description: 'Leading national company in sovereign diving operations to protect the Kingdom\'s marine infrastructure and resources',
      descriptionEn: 'الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة',
      servicesBtn: 'Our Services',
      contactBtn: 'Contact Us',
    },
    vision: {
      title: 'Our Vision',
      description: 'To be the leading national company in sovereign diving operations to protect the Kingdom\'s marine infrastructure and resources.',
      descriptionEn: 'أن تكون الشركة الوطنية الرائدة في عمليات الغوص السيادية لحماية البنية التحتية والموارد البحرية للمملكة.',
    },
    mission: {
      title: 'Our Mission',
      description: 'Providing exceptional, safe and sustainable commercial diving services, while developing local expertise and preserving the marine environment.',
      descriptionEn: 'تقديم خدمات غوص تجارية استثنائية وآمنة ومستدامة، مع تطوير الكفاءات المحلية، والحفاظ على البيئة البحرية.',
    },
    services: {
      title: 'Our Main Services',
      subtitle: 'خدماتنا الرئيسية',
      commercialDiving: {
        title: 'Commercial Diving',
        titleEn: 'الغوص التجاري',
        description: 'Specialized diving services for marine infrastructure',
        descriptionEn: 'خدمات غوص متخصصة للبنية التحتية البحرية',
      },
      offshoreSupport: {
        title: 'Offshore Support',
        titleEn: 'الدعم البحري',
        description: 'Comprehensive support for marine operations and platforms',
        descriptionEn: 'دعم شامل للعمليات البحرية والمنصات',
      },
      marineInfrastructure: {
        title: 'Marine Infrastructure',
        titleEn: 'البنية التحتية البحرية',
        description: 'Protection and maintenance of marine facilities',
        descriptionEn: 'حماية وصيانة المرافق البحرية',
      },
      viewAllServices: 'View All Services',
    },
    features: {
      title: 'Why Choose Kingdom Depth?',
      subtitle: 'لماذا تختار عمق المملكة؟',
      items: [
        'Safe and sustainable services',
        'Specialized local expertise',
        'Marine environment protection',
        'Advanced technologies',
      ],
      itemsEn: [
        'خدمات آمنة ومستدامة',
        'كفاءات محلية متخصصة',
        'حماية البيئة البحرية',
        'تقنيات متطورة',
      ],
      trustedExpertise: 'Trusted Local Expertise',
      trustedExpertiseEn: 'خبرة محلية موثوقة',
    },
    cta: {
      title: 'Ready to Serve You',
      subtitle: 'مستعدون لخدمتكم',
      contactUs: 'Contact Us',
      browseProducts: 'Browse Products',
    },
    common: {
      whyChooseUs: 'Why Choose Kingdom Depth?',
      whyChooseUsEn: 'لماذا تختار عمق المملكة؟',
      readyToServe: 'Ready to Serve You',
      readyToServeEn: 'مستعدون لخدمتكم',
    },
  },
};

export const useTranslations = (language: Language) => {
  return translations[language];
};

