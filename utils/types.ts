export interface IService {
  id: string | number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface IFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ILink {
  label: string;
  href: string;
}

export interface ISectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export interface IHeroData {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  cta1Text?: string;
  cta1Href?: string;
  cta2Text?: string;
  cta2Href?: string;
  image?: any;
}

export interface ISparkleText {
  text: string;
  color?: string;
  sparkleColor?: string;
  sparklePosition?: "left" | "right" | "both";
}

export interface IStepItem {
  image: any;
  title: string;
  desc: string;
  cta?: string;
  href: string;
  width?: number;
}

export interface IStatItem {
  value: string;
  label: string;
  icon?: any;
}

export interface IWinnerItem {
  name: string;
  award: string;
  innovation: string;
  image: string;
}

export interface IFooterLink {
  label: string;
  href: string;
}

export interface IJourneyStep {
  stepLabel: string;
  title: string;
  description: string;
}

export type FooterVariant = "usa" | "uae";

export interface IFooterData {
  orgNameUSA: string;
  orgNameUAE: string;
  hqLabelUSA: string;
  hqLabelUAE: string;
  description: string;
  socialLinks: { Icon: any; href: string; label: string }[];
  quickLinksLabel: string;
  quickLinks: { label: string; href: string }[];
  competitionLinksLabel: string;
  competitionLinks: { label: string; href: string }[];
  contactInformationLabel: string;
  contactItems: { Icon: any; textInfo?: string; isDynamicHq?: boolean }[];
  copyrightTemplate: string;
  privacyPolicy: string;
  termsOfUse: string;
}

export interface IWebsiteData {
  home: {
    hero: {
      sparkle: string | ISparkleText;
      secondaryTitle: string;
      tertiaryTitle: string;
      title: string;
      subtitle: string;
      description: string;
      description2: string;
      cta1Text: string;
      cta1Href: string;
      cta2Text: string;
      cta2Href: string;
      watchLabel: string;
      watchDescription: string;
      image: any;
      imageLabel: string;
    };
    participation: {
      sparkle: string;
      title: string;
      description: string;
      steps: IJourneyStep[];
    };
  };
  submit: {
    hero: IHeroData;
    howToParticipate: {
      sparkle: string;
      header: string;
      description: string;
      steps: IStepItem[];
    };
  };
  about: {
    hero: {
      sparkle: string;
      title: string;
      description: string;
      image1: any;
      image2: any;
    };
    competitions: {
      sparkle: string;
      title: string;
      description: string;
      buttonText: string;
      items: { title: string; image: any }[];
    };
    partner: {
      sparkle: string;
      titlePre: string;
      titleAccent: string;
      description: string;
      images: any[];
      features: { title: string; desc: string }[];
    };
  };
  challenge: {
    hero: {
      sparkle: string | ISparkleText;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      images: any[];
    };
    rules: {
      sparkle: string;
      title: string;
      description: string;
      rules: any[]; 
      buttonText: string;
      image: any;
      overlayText: string[];
    };
    awards: {
      sparkle: string;
      title: string;
      description: string;
      items: { 
        index: string; 
        labelTop?: string; 
        labelMain: string; 
        labelBottom?: string; 
        Icon: any 
      }[];
    };
    youngMinds: {
      sparkle: string;
      title: string;
      description: string;
      images: any[];
      paragraphs?: string[];
      features?: {
        title: string;
        desc?: string;
        list?: string[];
      }[];
    };
    scoreBreakdown: {
      sparkle: string;
      title: string;
      description: string;
      items: { number: string; title: string; subtitle?: string; marks: string; image: any; topOffset: number }[];
    };
    cta: {
      sparkle: string;
      title: string;
      description: string;
      buttonText: string;
      image: any;
    };
    faq: {
      sparkle: string;
      title: string;
      description: string;
    };
  };
  contact: {
    sparkle: string;
    title: string;
    description: string;
    subjects: { id: string; label: string }[];
    infoSnippets: string[];
    newUpdate:string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subjectLabel: string;
      message: string;
      submitBtn: string;
    };
  };
  common: {
    faqs: {
      sparkle: string;
      title: string;
      description: string;
      buttonText: string;
      items: { question: string; answer?: string }[];
    };
    footer: IFooterData;
  };
  pastWinners: {
    hero: {
      sparkle: string | ISparkleText;
      title: string;
      subtitle: string;
      cta1Text: string;
      cta2Text: string;
      image: any;
      overlayText1: string;
      overlayText2: string;
    };
    winner: {
      title: string;
      winnerName: string;
      description: string;
      details: string;
      image: any;
    };
    innovation: {
      sparkle: string;
      title: string;
      titleAccent: string;
      description: string;
      cards: { title: string; desc1: string; desc2: string; image: any }[];
      stats: { value: string; label: string }[];
    };
    video: {
      sparkle: string;
      title: string;
      description: string;
      image: any;
      watchLabel: string;
      watchDesc: string;
    };
    guests: {
      title: string;
      description: string;
      items: { name: string; title: string; image: any }[];
    };
  };
  services: {
    hero: {
      sparkle: string | ISparkleText;
      titlePre: string;
      titleAccent1: string;
      titleAccent2: string;
      subtitle: string;
      description: string;
      cta1Text: string;
      cta1Href: string;
      cta2Text: string;
      cta2Href: string;
      watchLabel: string;
      watchDescription: string;
      image: any;
      imageLabel: string;
    };
    list: {
      title: string;
      subtitle: string;
      items: { id: number | string; title: string; description: string; icon: string }[];
    };
  };

  innovation: {
  innovationCampData: {
    sparkle: string;
    headline: string;
    description: string;
    buttonText: string;

    sliderImages: string[];

    paragraph1: string;
    paragraph2: string;

    note: string;
  };

  InnovationInfoCard: {
  label: string;
  title: string;
  description: string;
}[];

ModuleItem :{
  title: string;
  desc: string;
  level: string;
  duration: string;
  Icon: any;
}[];

LearningOutcomesData: {
  sparkle: string;
  title: string;
  description: string;
},

}
patent:{

PatentIdea:{
  sparkle: string;
  title: string;
  subtitle: string;
  image: any;

  paragraph1Prefix: string;
  paragraph1: string;

  paragraph2: string;

  footerText: string;
 
},

PatentMatterCard: {
  title: string;
  desc: string;
  Icon: any;
}[];

BigData: {
  sparkle: string;
  title: string;
  description: string;

  items: {
    title1: string;
    title2: string;
  }[];
},


}

}

