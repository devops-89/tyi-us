import React from "react";
import { IWebsiteData } from "./types";
import { ASSETS } from "./assets";
import { Colors } from "./enum";
import { Crown, DollarSign, Trophy, Award, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const WEBSITE_DATA: IWebsiteData = {
  home: {
    hero: {
      sparkle: {
        text: "Welcome to",
        sparklePosition: "right" as const,
        color: "#37569E",
        sparkleColor: Colors.SECONDARY,
      },
      secondaryTitle: "America's",
      tertiaryTitle: "Top Young",
      title: "Innovators",
      subtitle: "— Grand Finale",
      description: "We celebrate the young minds who dare to dream big and make a difference. Join us as young geniuses on America’s Top Young Innovators present their bold ideas to the world and receive prestigious awards and patent certificates.",
      description2: "Top Young Innovators is a global platform dedicated to discovering and nurturing the most creative, inventive, and forward-thinking young minds from around the world. Our mission is to cultivate a generation of children who think differently who question, create, and solve the most pressing real-world problems.",
      cta1Text: "Submit Your Entry",
      cta1Href: "/submit",
      cta2Text: "About",
      cta2Href: "/about",
      watchLabel: "Watch",
      watchDescription: "That's how we make it work?",
      image: ASSETS.IMAGES.HERO1,
      imageLabel: "America’s Top Young Innovators - Grand Finale 2024",
    },
    participation: {
      sparkle: "Participation Journey",
      title: "A Simple 6-Step Path to the Grand Finale",
      description: "From your very first step to standing on the grand finale stage, Top Young Innovators journey helps you build confidence, gain mentorship, and experience how global competitions work.",
      steps: [
        {
          stepLabel: "Step - 01",
          title: "Registration",
          description: 'You can register in the "America’s Top Young Innovators" as an individual or as a team. Click here to know more about the registration process.',
        },
        {
          stepLabel: "Step - 02",
          title: "Attend FREE Innovation Camp (Optional)",
          description: "Develop a new innovation idea with expert mentorship or build your existing idea further with step-by-step guidance. Request to Register for our optional 15 hours FREE Innovation Camp sponsored by our partner DiscoverSTEM Foundation. Learn More about the Innovation Camp.",
        },
        {
          stepLabel: "Step - 03",
          title: "Submit Your Innovation",
          description: "Submit your innovation by filling out the Entry Submission Form.",
        },
         {
          stepLabel: "Step - 04",
          title: "Evaluation of Entries",
          description: "A distinguished panel of judges, including experts from NASA, will evaluate the entries and shortlist individuals and teams based on the judging criteria.",
        },
        {
          stepLabel: "Step - 05",
          title: "Results Announcement",
          description: "The results of the competition will be announced at the Grand Finale of America's Top Young Innovators.",
        },
        {
          stepLabel: "Step - 06",
          title: "Win Prestigious Awards",
          description: `The winner will receive the title of "America's Top Young Innovator" along with awards in other categories, giving them the opportunity to shine on the global stage. `,
        },
        
      ],
    },
  },
  submit: {
    hero: {
      title: "Join the FREE\nInnovation Camp",
      description: `A free learning experience where young minds develop new ideas or build on existing ones with our expert, step-by-step guidance.
                    Request to register for our optional FREE Innovation Camp.`,
      cta1Text: "Register Now",
      cta1Href: "https://topyounginnovators.org/innovation-camp/",
      cta2Text: "Learn More",
      cta2Href: "https://topyounginnovators.org/innovation-camp/",
      image: ASSETS.IMAGES.SUBMIT_HERO,
    },
    howToParticipate: {
      sparkle: "How to Participate",
      header: "Register & Submit Your Entry",
      description: "Entry submission for America's Top Young Innovators 2025 challenge is closed. Stay tuned for updates on the 2026 challenge!",
      steps: [
        {
          image: ASSETS.IMAGES.SUBMIT_STEP_1,
          title: "Register as a Participant",
          desc: "Sign up, fill in the details and you are good to go.",
          cta: "Click Here to Register",
          href: "#",
          width: 348,
        },
        {
          image: ASSETS.IMAGES.SUBMIT_STEP_2,
          title: "Submit Your Entry",
          desc: "Log in with your User ID and submit your innovation for the competition.",
          cta: "Click Here to Submit Entry",
          href: "#",
          width: 383,
        },
        {
          image: ASSETS.IMAGES.SUBMIT_STEP_3,
          title: "Results Announcement",
          desc: "Find out if your innovation made it to the finals. Results are published on our website.",
          cta: undefined,
          href: "#",
          width: 0,
        },
      ],
    },
  },
  about: {
    hero: {
      sparkle: "About Us",
      title: "Who We Are",
      description: `Top Young Innovators is a global platform dedicated to discovering and nurturing the most creative, inventive, and forward-thinking young minds from around the world. Our mission is to cultivate a generation of children who think differently - who question, create, and solve the most pressing real-world problems.

Through this competition, we provide a powerful launchpad and a supportive innovation ecosystem that empowers young inventors to transform bold ideas into practical and viable solutions for today’s most urgent challenges.

To help participants bring their ideas to life, we’ve partnered with one of the world’s most respected innovation organizations: DiscoverSTEM.`,
      image1: ASSETS.IMAGES.ABOUT_BOOKS,
      image2: ASSETS.IMAGES.ABOUT_YOUNG_STUDENTS,
    },
    competitions: {
      sparkle: "Global Stages",
      title: "Our Global Competitions",
      description: "Celebrating young innovators through competitions across the globe, providing them with a platform for creativity, innovation, and real-world problem solving.",
      buttonText: "Explore More",
      items: [
        {
          title: "America's Top Young Innovators",
          image: ASSETS.IMAGES.ABOUT_GLOBAL_USA,
        },
        {
          title: "UAE's Top Young Innovators",
          image: ASSETS.IMAGES.ABOUT_GLOBAL_UAE,
        },
      ],
    },
    partner: {
      sparkle: "Innovation Partner",
      titlePre: "About Our Innovation Partner – ",
      titleAccent: "DiscoverSTEM",
      description: "Empowering young innovators worldwide with expert guidance and real-world innovation training.",
      images: [
        ASSETS.IMAGES.ABOUT_CLOSE_UP,
        ASSETS.IMAGES.ABOUT_CLOSE_UP, 
        ASSETS.IMAGES.ABOUT_GROUP_LAPTOP,
      ],
      features: [
        {
          title: "What is DiscoverSTEM?",
          desc: "DiscoverSTEM, based in Texas, USA, is an educational initiative that helps young minds turn ideas into innovations through expert guidance and mentorship.",
        },
        {
          title: "Proven Track Record",
          desc: "DiscoverSTEM has an outstanding track record of guiding over 700 children aged 5 to 18 in identifying global problems and developing patentable solutions. In just the last five years alone, more than 330 students have been granted patents in the United States and other countries.",
        },
        {
          title: "Nationally Recognized for Excellence in Education  ",
          desc: "Recognized by the Texas State Capitol in March 2025 through House Resolution #403, honoring DiscoverSTEM’s role in shaping the next generation of innovators, researchers, and entrepreneurs.",
        },
        {
          title: "Award-Winning Leadership ",
          desc: "The founders of DiscoverSTEM were awarded the prestigious George Washington Honor Medal, a U.S. National Award celebrating their revolutionary contributions to education.",
        },
      ],
    },
  },
  challenge: {
    hero: {
      sparkle: {
        text: "Where Young Innovators Rise",
        sparklePosition: "right" as const,
        color: Colors.PRIMARY,
      },
      title: "The Global Search for the Brightest Young\nInnovators Begins Are You the One?",
      description: "Step into a world where creativity meets real-world impact. Present your groundbreaking idea, compete \n with brilliant young minds, and become the next global changemaker.",
      primaryCta: "Join the Challenge",
      secondaryCta: "Explore Past Winners",
      images: [
        ASSETS.IMAGES.CHALLENGE_HERO_LEFT,
        ASSETS.IMAGES.CHALLENGE_HERO_MID_TOP,
        ASSETS.IMAGES.CHALLENGE_HERO_MID_BOTTOM,
        ASSETS.IMAGES.CHALLENGE_HERO_RIGHT,
      ],
    },
    rules: {
      sparkle: "Participation Rules",
      title: "Key Rules & Requirements",
      description: "Please review these rules carefully to ensure your entry is valid and accepted.",
      rules: [
        "Participants aged 10–22 years from across the world can participate.",
        "Entry is FREE for all",
        "Participants must submit an original innovation idea.",
        "We strongly recommend you file a provisional or non-provisional patent application before submitting your entry to protect your innovations. If you need support in filing a patent application, please contact us.",
        "The competition reserves the right to approve or disapprove any participating entries.",
        "Each entry is judged by an elite panel of judges. The decision taken by the judges will be final.",
      ],
      buttonText: "Click To See All Rules",
      image: ASSETS.IMAGES.CHALLENGE_RULES,
      overlayText: ["Learn.", "Grow.", "Lead."],
    },
    awards: {
      sparkle: "Celebrating Innovation",
      title: "Awards for the Innovators",
      description: "Celebrating the exceptional achievements of young innovators across the nation.",
      items: [
        { 
          index: "01", 
          labelTop: "Win The Prestigious Title of", 
          labelMain: "AMERICA'S TOP YOUNG INNOVATOR", 
          Icon: ASSETS.IMAGES.ICON_CROWN 
        },
        { 
          index: "02", 
          labelTop: "Cash Prize Worth", 
          labelMain: "USD 3,000", 
          labelBottom: " for the winning individual/ team", 
          Icon: ASSETS.IMAGES.ICON_CASH 
        },
        { 
          index: "03", 
          labelTop: "Filing of a", 
          labelMain: "US PATENT", 
          labelBottom: "for your Innovation", 
          Icon: ASSETS.IMAGES.ICON_PATENT 
        },
        { 
          index: "04", 
          labelMain: "Awards", 
          labelBottom: "for the Winners in Different Categories", 
          Icon: ASSETS.IMAGES.ICON_TROPHY 
        },
      ],
    },
    youngMinds: {
      sparkle: "Young Minds Can Solve Big Challenges",
      title: "Young Minds Can Solve the World's Biggest Problems",
      description: "And Top Young Innovators gives them the global platform to showcase their innovations.",
      images: [
        ASSETS.IMAGES.CHALLENGE_CTA,
        ASSETS.IMAGES.CHALLENGE_HERO_MID_BOTTOM,
      ],
      paragraphs: [
        "America's Top Young Innovators is a global hunt to find the best and brightest young minds. In this competition, children from across the world present their unique ideas and innovations to solve the most pressing real-world challenges.",
        "At Top Young Innovators, we understand that not every young innovator begins with a big idea. What matters is curiosity, creativity, and the right mentorship. To support every child’s journey, participants have access to attend an optional 14-hour FREE Innovation Camp, sponsored by our partner, the DiscoverSTEM Foundation. Through expert mentoring, students explore problems worth solving and shape their ideas into impactful innovations, whether starting fresh or building on something they’ve already imagined.",
        "The finalists of America's Top Young Innovators earn global recognition, media exposure, and the opportunity to present their innovations to highly acclaimed thought leaders and industry experts.",
      ],
    },
    scoreBreakdown: {
      sparkle: "Judging Criteria",
      title: "Innovation Score Breakdown",
      description: "Judges will rate the submitted ideas out of 100 marks based on the following criteria.",
      items: [
        {
          number: "01",
          title: "Unique Idea",
          subtitle: "Ingenuity & Innovation Thinking",
          marks: "50 marks",
          image: ASSETS.IMAGES.CHALLENGE_SCORE_1,
          topOffset: 60,
        },
        {
          number: "02",
          title: "Scientific & Technical Knowledge",
          subtitle: "Behind Idea",
          marks: "30 marks",
          image: ASSETS.IMAGES.CHALLENGE_SCORE_2,
          topOffset: 180,
        },
        {
          number: "03",
          title: "Quality of Entry & Video Presentation",
          marks: "20 marks",
          image: ASSETS.IMAGES.CHALLENGE_SCORE_3,
          topOffset: 300,
        },
      ],
    },
    cta: {
      sparkle: "Step into the future",
      title: "Your Path to America's Top Young Innovator ",
      description: "Transform your ideas into real-world solutions and gain national recognition.",
      buttonText: "Participate Now",
      image: ASSETS.IMAGES.STEP_INTO_FUTURE,
    },
    faq: {
      sparkle: "FAQs",
      title: "Frequently Asked Questions",
      description: "Find answers to the most common questions about participating in the challenge.",
    },
  },
  contact: {
    sparkle: "Get In Touch",
    title: "Contact Us",
    description: "If you have any questions about the competition, innovation camp, or obtaining a US patent, please fill out the form below with your details and inquiry.\n\nOur team will get back to you as soon as possible.",
    subjects: [
      { id: "general-1", label: "General Inquiry" },
      { id: "general-2", label: "General Inquiry" },
      { id: "general-3", label: "General Inquiry" },
    ],
    infoSnippets: [
      "I want to convert my idea into a US patent.",
      "I want to register for the FREE Innovation Camp to prepare for the America's Top Young Innovators Challenge.",
    ],
     newUpdate:"Enrollment for the FREE Innovation Camp 2025 is now closed. Stay tuned for 2026 registration updates.",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      subjectLabel: "Select Subject?",
      message: "Message",
      submitBtn: "Submit",
    },
  },
  pastWinners: {
    hero: {
      sparkle: {
        text: "Vision",
        sparklePosition: "right" as const,
        color: Colors.SECONDARY,
      },
      title: "Celebrating the Brightest Young Minds",
      subtitle: "Grand Finale of America's Top Young Innovators",
      cta1Text: "See Event Recap",
      cta2Text: "See the Best Moments",
      image: ASSETS.IMAGES.PAST_WINNERS_HERO,
      overlayText1: "Where Young Innovators Shine",
      overlayText2: "Celebrating Vision, Creativity & Impact",
    },
    winner: {
      title: "Winner of America's Top Young Innovators 2024",
      winnerName: "HISHAM AHMAD",
      description: "Dallas-based Hisham Ahmad was crowned the America’s Top Young Innovator 2024, a title that recognizes innovation with the potential to create a lasting global impact.",
      details: "Selected from an exceptional pool of entries spanning the USA and UAE, Hisham’s groundbreaking invention—a revolutionary system that autonomously disinfects door handles—tackles a leading cause of germ transmission. With its capacity to prevent future pandemics and reduce hospital-acquired infections, which are among the leading causes of death among the elderly, this innovation stands as a monumental leap in public health and safety.",
      image: ASSETS.IMAGES.PAST_WINNERS_WINNER,
    },
    innovation: {
      sparkle: "Recognizing Youth Innovation",
      title: "Honoring the Brightest",
      titleAccent: "Young Innovators of America",
      description: "A national spotlight on young minds whose ideas are shaping a better future.",
      cards: [
        {
          title: "Showcasing Breakthrough Youth Innovations",
          desc1: "The University of Texas at Dallas served as the distinguished venue for the grand finale of America’s Top Young Innovator 2024, where the nation’s brightest middle and high school innovators gathered to present their groundbreaking innovations.",
          desc2: "Hosted at the prestigious ATEC Auditorium, the competition witnessed over 900 attendees, who were captivated by a showcase of cutting-edge solutions poised to redefine the future. The event, organized by DiscoverSTEM, highlighted a vibrant exchange of ideas and celebrated ingenuity, creativity, and the power of youth to drive transformational change.",
          image: ASSETS.IMAGES.PAST_WINNERS_INNOVATION_1,
        },
        {
          title: "Recognizing Innovation Excellence",
          desc1: "The grand finale took place on DiscoverSTEM Innovation Day 2024, an annual celebration of the remarkable achievements of young innovators mentored by DiscoverSTEM. Every year, Innovation Day brings together the brightest young minds to showcase their pioneering work and serves as a platform to acknowledge the dedication and creativity of these future leaders.",
          desc2: "This year, over 90 middle and high school students mentored by DiscoverSTEM were awarded their U.S. Patent Certificates in recognition of their outstanding innovations.",
          image: ASSETS.IMAGES.PAST_WINNERS_INNOVATION_2,
        },
      ],
      stats: [
        { value: "900+", label: "Attendees" },
        { value: "250+", label: "Winners" },
        { value: "10", label: "Patents Granted" },
      ],
    },
    video: {
      sparkle: "Grand Finale",
      title: "America’s Top Young Innovator 2024 — Grand National Showcase",
      description: "Highlighting visionary youth innovations that are transforming the world with fresh, powerful ideas.",
      image: ASSETS.IMAGES.PAST_WINNERS_VIDEO_BANNER,
      watchLabel: "Watch",
      watchDesc: "That's how we make it work?",
    },
    guests: {
      title: "Chief Guests",
      description: "Honoring distinguished leaders and experts who inspire and guide our journey.",
      items: [
        {
          name: "Salman Bhojani",
          title: "Hon'ble State Representative",
          image: ASSETS.IMAGES.PAST_WINNERS_GUEST_1,
        },
        {
          name: "Dr. Hashima Hasan",
          title: "Senior NASA Scientist",
          image: ASSETS.IMAGES.PAST_WINNERS_GUEST_2,
        },
      ],
    },
  },
  services: {
    hero: {
      sparkle: {
        text: "Welcome to the Grand Finale of",
        sparklePosition: "right" as const,
        color: "#37569E",
        sparkleColor: Colors.SECONDARY,
      },
      titlePre: "America's",
      titleAccent1: "Top Young",
      titleAccent2: "Innovators 2025",
      subtitle: "— Grand Finale",
      description: "Join us to celebrate the Winners of America's Top Young Innovators. Receive Prestigious Awards and 80+ Young Students get Patent Certificates.",
      cta1Text: "Submit Your Entry",
      cta1Href: "/submit",
      cta2Text: "About",
      cta2Href: "/about",
      watchLabel: "Watch",
      watchDescription: "That's how we make it work?",
      image: ASSETS.IMAGES.HERO1,
      imageLabel: "Showcasing awards, finalists, and breakthrough ideas.",
    },
    list: {
      title: "Our Innovation Services",
      subtitle: "Explore the various ways we support and nurture the next generation of innovators.",
      items: [
        {
          id: 1,
          title: "Innovation Mentorship",
          description: "Connect with industry leaders and expert innovators to refine your ideas and scale your impact.",
          icon: "Lightbulb",
        },
        {
          id: 2,
          title: "Resource Access",
          description: "Gain access to state-of-the-art labs, prototyping tools, and research databases for your projects.",
          icon: "Database",
        },
        {
          id: 3,
          title: "Networking Hub",
          description: "Join a vibrant community of young innovators and build lasting professional relationships.",
          icon: "Users",
        },
        {
          id: 4,
          title: "Funding & Grants",
          description: "Apply for exclusive grants and seed funding to bring your ground-breaking concepts to life.",
          icon: "Coins",
        },
      ],
    },
  },
  common: {
    faqs: {
      sparkle: "FAQs",
      title: "Frequently Asked Questions",
      description: "Find answers to the most common questions about participating in the challenge.",
      buttonText: "More FAQs",
      items: [
        {
          question: "Is team participation allowed?",
          answer: "Yes, you can participate as a team of up to 5 members.",
        },
        { 
          question: "Can an individual submit more than one entry?",
          answer: "Yes. A participant can submit up to three entries."
        },
        { 
          question: "On what criteria are submissions evaluated?",
          answer: "Submissions are evaluated based on three main criteria - Unique Idea (50%), Scientific & Technical Knowledge (30%), and Quality of Entry & Presentation (20%)."
        },
      ],
    },
    footer: {
      orgNameUSA: "America's Top Young Innovators",
      orgNameUAE: "UAE's Top Young Innovators",
      hqLabelUSA: "USA Headquarters",
      hqLabelUAE: "UAE Headquarters",
      description: "A global platform empowering young minds to innovate, create, and solve real-world problems through world-class STEM innovation programs and competitions.",
      socialLinks: [
        { Icon: Linkedin, href: "#", label: "LinkedIn" },
        { Icon: Youtube, href: "#", label: "YouTube" },
        { Icon: Facebook, href: "#", label: "Facebook" },
        { Icon: Twitter, href: "#", label: "Twitter / X" },
        { Icon: Instagram, href: "#", label: "Instagram" },
      ],
      quickLinksLabel: "Quick Links",
      quickLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Competition", href: "/challenge" },
      ],
      competitionLinksLabel: "Competition Links",
      competitionLinks: [
        { label: "Register Now", href: "https://topyounginnovators.org/submit-your-entry/" },
        { label: "Submit Your Ideas", href: "https://topyounginnovators.org/submit-your-entry/" },
        { label: "Competition Rules", href: "#" },
        { label: "Innovation Camp", href: "https://topyounginnovators.org/innovation-camp/" },
      ],
      contactInformationLabel: "Contact Information",
      contactItems: [
        { Icon: Mail, textInfo: "info@topyounginnovators.org" },
        { Icon: Phone, textInfo: "+1 (xxx) xxx-xxxx" },
        { Icon: MapPin, isDynamicHq: true },
      ],
      copyrightTemplate: "Copyright @ 2025 {orgName}. All Rights Reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
    },
  },
};
