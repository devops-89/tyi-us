import React from "react";
import { IWebsiteData } from "./types";
import { ASSETS } from "./assets";
import { Colors } from "./enum";
import { StudentIcon, ParentsIcon, HobbyistIcon } from "@/components/widgets/icons/icon"; 
 
import {
  Medal,
  GraduationCap,
  Rocket,
  
  Lock,
  Target,
} from "lucide-react";
import {Users,Lightbulb,HelpCircle,MessageSquare,FileText,Puzzle,ClipboardList,Microscope,} from "lucide-react";
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
      
    
        video: "https://www.youtube.com/embed/jo5hgqxAaes?autoplay=1&mute=1&loop=1&playlist=jo5hgqxAaes&controls=1",
      
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
      image: "https://www.youtube.com/watch?v=ZN5YOD-jGss&t=3s",
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

innovation:{
innovationCampData: {
  sparkle: "Sponsored By DiscoverSTEM Foundation",
  headline: "Free\nInnovation Camp",
  description:
    "Enrollment For The FREE Innovation Camp 2025 Is Closed. Stay Tuned For Updates On The Innovation Camp 2026.",
  buttonText: "See Event Recap",

  sliderImages: [
    
    ASSETS.IMAGES.INNOVATION_02,
    ASSETS.IMAGES.INNOVATION_03,
    ASSETS.IMAGES.INNOVATION_04,
    ASSETS.IMAGES.INNOVATION_05,
    ASSETS.IMAGES.INNOVATION_06,
    ASSETS.IMAGES.INNOVATION_07,
    ASSETS.IMAGES.INNOVATION_01,
    
  ],

  paragraph1:
    `Innovation Is Not An Easy Task. We Understand That As A Young Student, You Might Need Some Support To Come Up With An Idea Or Already Have An Idea That Needs Refinement Before Submitting It To The Competition. One Of The Objectives Of This Competition Is To Foster A Culture Of Innovation, Creativity And Problem-Solving Among Young Kids. We Have Partnered With DiscoverSTEM, A US National Award Winning Organization To Conduct An Innovation Camp For The Participants Of "America's Top Young Innovators"`,

  paragraph2:
    "This Guided Innovation Camp Is Designed To Equip Students With The Mindset And Skills Needed To Innovate. Through Interactive Session Led By Experts From DiscoverSTEM Will Learn How To Identify The Real-World Problem, Analyze These Problems Using Structured Thinking Patterns, Learn Idea Generation And Brainstorming Techniques, Perform Root-Cause Analysis And Gap Analysis To Be Able To Innovate A Novel And Patentable Solution. Whether A Student Is Starting Fresh Or Looking To Strengthen An Existing Idea, The Camp Provides A Clear, Supportive Path To Turn Creative Thinking Into Competition-Ready Innovation.",

  note:
    "This Innovation Camp Will Be Offered Online. If You Live In The Dallas Fort Worth (DFW) Area, You Can Attend The Innovation Camp In Person, Subject To Seat Availability.",
},

InnovationInfoCard:[
  {
    label: "FEE",
    title: "FREE",
    description:
      "Innovation Camp is FREE to join, and is sponsored by DiscoverSTEM Foundation.",
  },
  {
    label: "TIME COMMITMENT",
    title: "1 Hour / day",
    description:
      "• 5 days (Monday – Friday)\n• Total camp duration = 10 hours\n• Online mode\n• In-person (if you live in DFW)",
  },
  {
    label: "ELIGIBILITY",
    title: "10–22 years",
    description:
      "Kids between 10–22 years of age are accepted",
  },
  {
    label: "ENROLLMENT DEADLINE",
    title: "Sep 30, 2026",
    description:
      "Enrollment for the FREE Innovation Camp 2025 is closed. Stay tuned for updates on the Innovation Camp 2026.",
  },
],

ModuleItem:[
  {
    title: "Introduction & Team Building",
    desc: "Build collaborative foundations and learn to work effectively in innovation teams.",
    level: "BEGINNER",
    duration: "2 weeks",
    Icon: Users,
  },
  {
    title: "Introduction to Innovation",
    desc: "Discover the principles, mindset, and processes that drive innovative thinking.",
    level: "BEGINNER",
    duration: "3 weeks",
    Icon: Lightbulb,
  },
  {
    title: "How to Think Like an Innovator",
    desc: "Master asking the right questions and finding meaningful answers.",
    level: "INTERMEDIATE",
    duration: "4 weeks",
    Icon: HelpCircle,
  },
  {
    title: "Brainstorming & Persuasion",
    desc: "Generate breakthrough ideas and communicate them with clarity and confidence.",
    level: "INTERMEDIATE",
    duration: "3 weeks",
    Icon: MessageSquare,
  },
  {
    title: "Introduction to Patents",
    desc: "Learn how to protect intellectual property and navigate the patent landscape.",
    level: "INTERMEDIATE",
    duration: "2 weeks",
    Icon: FileText,
  },
  {
    title: "Research & Problem Dividing",
    desc: "Break down complex problems into manageable components for effective research.",
    level: "ADVANCED",
    duration: "4 weeks",
    Icon: Puzzle,
  },
  {
    title: "Establishing Research Statements",
    desc: "Craft precise problem statements that drive focused, impactful research.",
    level: "ADVANCED",
    duration: "3 weeks",
    Icon: ClipboardList,
  },
  {
    title: "The Logic of Scientific Discovery",
    desc: "Apply scientific reasoning to validate hypotheses and uncover new insights.",
    level: "ADVANCED",
    duration: "5 weeks",
    Icon: Microscope,
  },
],

LearningOutcomesData :{
  sparkle: "Develop Skills",

  title: "Learning Outcomes",

  description:
    "You Will Develop Skills Like Critical Thinking, Logical Analysis, Reasoning, Different Types Of Brainstorming, Experiment Designing To Test A Hypothesis, And Writing A Problem Statement For Research. You Will Also Learn To Analyze Problems, Generate Ideas, And Evaluate Ideas To Find The Best One.",
},

},

patent:{

PatentIdea:{

  sparkle: "Get A United States Patents",

  title: "Turn Your Idea Into A US\nPatent",

  subtitle:
    "We Start With Your Passion. We End With A Patent.",

  image: ASSETS.IMAGES.PATENT_PREVIEW,

  paragraph1Prefix: "Has It Ever Happened To You",

  paragraph1:
    "– You Had A Powerful Idea, Something Truly Game-Changing, And Months Later, You Find Someone Else Built It, Launched It, And Is Making Money From It.",

  paragraph2:
    "You’re Not Alone. Everyone Has A Great Idea At Some Point In Life, But Most Don’t Know How To Proceed With It, What To Do Next To Protect It. We Help Turn Your Rough Concepts Into Patentable Inventions. Our Team Of Innovation Mentors, Technology Experts And Elite U.S. Patent Attorneys Guides You From Idea To Protection, So Your Creativity Gets The Credit And Potential It Deserves.",

  footerText:
    "Don’t Let Your Idea Slip Away. Protect It. Patent It. Profit From It.",

},

PatentMatterCard:[
  {
    title: "Elite Global Recognition",
    desc: "Only 0.2% people in the world hold a patent. Earning one sets you apart and places you among a global elite of real-world innovators.",
    Icon: ASSETS.IMAGES.PATENT_TROPHY,
  },
  {
    title: "Impactful College Applications",
    desc: "A patent is a testimony of your creativity and problem solving skills. It is a powerful extracurricular to add to your profile.",
    Icon: ASSETS.IMAGES.PATENT_EDUCATION,
  },
  {
    title: "Turn Ideas into Businesses",
    desc: "Your idea could be the next big startup. With a patent, you can build your own product, partner with companies, or attract investors.",
    Icon: ASSETS.IMAGES.PATENT_ROCKET,
  },
  {
    title: "Earn While You Learn",
    desc: "Patents can generate passive income by licensing your invention to companies. Yes, even while you’re still in school.",
    Icon: ASSETS.IMAGES.PATENT_MONEY,
  },
  {
    title: "Protect What You Create",
    desc: "Without a patent, anyone can copy your idea. With one, your invention is legally protected and truly yours.",
    Icon: ASSETS.IMAGES.PATENT_LOCK,
  },
  {
    title: "Gain Recognition & Make an Impact",
    desc: "Young inventors with patents get featured in media, win awards, and become role models for innovation and creativity.",
    Icon: ASSETS.IMAGES.PATENT_GLOBAL,
  },
],

 BigData: {
      sparkle: "Which One Are You",
      title: "Who Is This For",
      description: "Anyone With A Spark Of Curiosity Or A Big Idea",
      items: [
        {
          title1: "STUDENTS WITH",
          title2: "IDEAS",
         
        },
        {
          title1: "PARENTS GUIDING",
          title2: "YOUNG INNOVATORS",
         
        },
        {
          title1: "HOBBYISTS AND",
          title2: "TINKERERS",
        
        },
      ],
    },

CaseStudiesData: {
  sparkle: "Read In Details",

  title: "Case Studies",

  items: [
    {
      title: "Relay-based system to launch a projectile",
      award:
        "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
      image: ASSETS.IMAGES.PATENT_THERMAL,
      awardImage: ASSETS.IMAGES.PATENT_AWARD,
      patentLink: "#",
      certificateLink: "#",
    },
    {
      title: "Relay-based system to launch a projectile",
      award:
        "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
      image: ASSETS.IMAGES.PATENT_THERMAL,
      awardImage: ASSETS.IMAGES.PATENT_AWARD,
      patentLink: "#",
      certificateLink: "#",
    },
    {
      title: "Relay-based system to launch a projectile",
      award:
        "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
      image: ASSETS.IMAGES.PATENT_THERMAL,
      awardImage: ASSETS.IMAGES.PATENT_AWARD,
      patentLink: "#",
      certificateLink: "#",
    },
    {
      title: "Relay-based system to launch a projectile",
      award:
        "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
      image: ASSETS.IMAGES.PATENT_THERMAL,
      awardImage: ASSETS.IMAGES.PATENT_AWARD,
      patentLink: "#",
      certificateLink: "#",
    },
  ],
},
PatentFaq: {
  sparkle: "FAQs",

  title: "Frequently Asked Questions",

  description:
    "We know hiring can feel overwhelming, so we’ve gathered the top questions in one place to make your experience smooth and stress-free.",

  buttonText: "More FAQs",

  items: [
    {
      question: "What is Top Young Innovators?",
      answer:
        "Top Young Innovators is a global platform that encourages students to develop innovative solutions to real-world problems through STEM, creativity, and critical thinking challenges.",
    },
    {
      question: "How do I submit my idea or project?",
      answer:
        "You can submit your idea or project through the official registration or submission form provided on the website.",
    },
    {
      question: "What types of projects are accepted?",
      answer:
        "Projects related to innovation, STEM, problem-solving, creativity, technology, sustainability, and real-world impact are accepted.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "Please check the registration details on the website for the latest fee information.",
    },
    {
      question: "What benefits do participants get?",
      answer:
        "Participants get exposure, learning opportunities, expert guidance, and a chance to showcase their innovative ideas.",
    },
  ],
},

Nurturing:  {
  sparkle: "Nurturing",

  title: "Nurturing Young Inventors",

  videoUrl: "https://www.youtube.com/watch?v=TVls4uiWbC4",

  items: [
    {
      prefix: "The ",
      highlight: "Only Organization",
      suffix:
        " In The World That Nurtures Young Minds To Convert Vague Ideas Into Patentable Inventions",
    },
    {
      highlight: "330+",
      suffix: " Students With Successful Patent Granted In 5 Years.",
    },
    {
      prefix: "Nurturing ",
      highlight: "1 Inventor Every 6 Days!",
    },
    {
      prefix: "Team Of Elite ",
      highlight: "Innovation Mentors",
      suffix: ", Technology Experts And US Patent Attorneys",
    },
    {
      prefix:
        "Trusted By Parents, Recognized By The Media And Awarded By The ",
      highlight: "US Government",
    },
    {
      prefix: "Partnership With ",
      highlight: "DiscoverSTEM",
      suffix:
        " – Leading Innovation, Research & Entrepreneurship Organization",
    },
  ],
},

PatentServiceData:{
  sparkle: "Helping You Get Patent",

  title: "Our End-To-End Patent Service",

  steps: [
    {
      number: "1",
      title: "Discovery & NDA",
      desc: "We begin with your area of interest or idea. A Non-Disclosure Agreement (NDA) is signed to protect your intellectual property right from the start.",
    },
    {
      number: "2",
      title: "Idea Evaluation & Patentability Assessment",
      desc: "Our IP experts and US patent attorneys evaluate the idea for:",
      points: ["Novelty", "Non-obviousness", "Utility"],
      bottomText: "We also conduct prior art search.",
    },
    {
      number: "3",
      title: "Idea Development & Innovation Coaching",
      desc: "Work 1-on-1 with:",
      points: [
        "Technology & Innovation Experts",
        "US-based IP Team",
        "DiscoverSTEM Mentors",
      ],
      bottomText:
        "We shape, refine, and strengthen your idea for the highest patent success probability.",
    },
    {
      number: "4",
      title: "Patent Drafting & Innovation",
      desc: "We begin with your area of interest or idea. A Non-Disclosure Agreement (NDA) is signed to protect your intellectual property right from the start.",
    },
  ],
},

SuccessStoriesData: {
  sparkle: "Real Stories",
  title: "Success Stories",
  stories: [
    {
      image: ASSETS.IMAGES.PATENT_STORY_4,
      title: "UVSET: Where Student Innovation Addresses Global Health Crisis",
      description: "How DiscoverSTEM Students Took on COVID-19 Crisis and Built a Startup to Solve It",
      points: [
        "$750K LOIs Secured",
        "Oslo Innovation Week 2022 Award",
        "Click here for the UVSET website",
      ],
    },
    {
      image: ASSETS.IMAGES.PATENT_STORY_1,
      title: "Bilal Ali Shah: From Curious Kid to Multi-Patent Inventor",
      description: "From a 9-year-old dreamer to a 6-patent inventor shaping satellites & clean-water tech.",
      points: [
        "6 Patents Granted",
        "Nominated TIME Magazine Kid-of-the-year",
      ],
    },
    {
      image: ASSETS.IMAGES.PATENT_STORY_2,
      title: "Isha Agrawal: Transforming the World with Storytelling and Science",
      description: "From mentoring young minds to filing 5 patents in Neurotech, Aerospace, Health & Science, and AI – she’s redefining what’s possible in STEM.",
      points: [
        "3 US Patents Granted",
        "NASA GeneLab intern",
        "Accepted to Cornell University (Ivy League)",
      ],
    },
    {
      image: ASSETS.IMAGES.PATENT_STORY_3,
      title: "Madhalasa Iyer: From Teen Researcher to Global Problem Solver",
      description: "From winning global writing awards to publishing scientific research, Madhalasa Iyer is proof that compassion and curiosity can fuel real-world impact.",
      points: [
        "TEDx and EarthX Speaker",
        "Accepted to Princeton University (Ivy League)",
        "Author of Award-Winning Children's Book Motley",
        "2 US Patents Granted",
      ],
    },
  ],
},

}



};



