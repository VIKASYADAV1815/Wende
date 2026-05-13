"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "fr";

export const siteCopy = {
  en: {
    languageName: "English",
    switchLanguage: "Passer en francais",
    nav: {
      home: "Home",
      about: "About Us",
      solutions: "Solutions",
      projects: "Projects",
      contact: "Contact",
      quote: "Get a Quote",
      contactNow: "Contact Us Now",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      solutionItems: [
        { label: "Pathology & IHC", href: "/solutions/pathology-ihc" },
        { label: "Laboratory Equipment", href: "/solutions/laboratory-equipment" },
        { label: "Dialysis Solutions", href: "/solutions/dialysis" },
        { label: "Hospital Infrastructure", href: "/solutions/hospital-infrastructure" },
        { label: "Technical Support", href: "/solutions/technical-support" }
      ]
    },
    footer: {
      description:
        "Improving healthcare infrastructure and diagnostic capacity across Burkina Faso and the wider West African region. We provide reliable medical technology and specialized diagnostic equipment.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact Us", href: "/contact" }
      ],
      solutionsTitle: "Our Solutions",
      contactTitle: "Contact Us",
      copyright:
        "Wende Goundi Medical Tech & Diagnostic Solutions. All rights reserved.",
      values: ["CARE", "DIAGNOSE", "HEAL"]
    },
    home: {
      hero: {
        badge: "Wende Goundi Med Dx",
        titleStart: "Bridging the Gap in",
        titleAccent: "Healthcare",
        titleEnd: "Infrastructure",
        description:
          "Delivering reliable medical technology, specialized diagnostic equipment, and comprehensive healthcare solutions across Burkina Faso and West Africa.",
        primaryCta: "Discover Our Vision",
        secondaryCta: "Partner With Us"
      },
      stats: [
        { title: "CARE", description: "Patient-first approach" },
        { title: "DIAGNOSE", description: "Precision and accuracy" },
        { title: "HEAL", description: "Sustainable healthcare" }
      ],
      about: {
        badge: "About Our Company",
        quote:
          "Building a long-term medical technology platform, not simply looking for products to trade.",
        titleStart: "Modernizing Healthcare in",
        titleAccent: "West Africa",
        paragraphOne:
          "Led by Christopher Moghalu, Wende Goundi Medical Tech & Diagnostic Solutions is dedicated to improving healthcare infrastructure and diagnostic capacity across Burkina Faso and the wider West African region.",
        paragraphTwo:
          "We address the growing demand for reliable medical technology by building long-term partnerships with reputable international manufacturers committed to quality, innovation, and sustainable healthcare development.",
        cta: "Read Our Full Story"
      },
      solutions: {
        badge: "Our Expertise",
        title: "Initial Focus Areas",
        description:
          "Providing comprehensive solutions from specialized diagnostic systems to complete hospital infrastructure.",
        learnMore: "Learn more",
        cards: [
          {
            title: "Pathology & IHC",
            description: "Advanced histopathology equipment and immunohistochemistry systems.",
            href: "/solutions/pathology-ihc"
          },
          {
            title: "Laboratory Systems",
            description: "Modern analyzers and reliable supply of high-quality consumables.",
            href: "/solutions/laboratory-equipment"
          },
          {
            title: "Dialysis Solutions",
            description: "State-of-the-art dialysis equipment and water treatment systems.",
            href: "/solutions/dialysis"
          },
          {
            title: "Hospital Infrastructure",
            description: "Operating room setups and comprehensive facility development.",
            href: "/solutions/hospital-infrastructure"
          }
        ]
      },
      whyChooseUs: {
        title: "Why Partner With Us",
        description:
          "We are committed to sustainable healthcare development across West Africa, offering reliable technology and end-to-end support rather than simply trading products.",
        cards: [
          {
            title: "Quality Assured",
            description:
              "Supplying only clinically validated and certified diagnostic equipment from reputable global brands."
          },
          {
            title: "24/7 Support",
            description:
              "Dedicated local team providing continuous technical support, training, and rapid maintenance."
          },
          {
            title: "Global Standards",
            description:
              "Bringing world-class healthcare infrastructure directly to Burkina Faso and the wider region."
          }
        ]
      },
      platform: {
        badge: "Platform Focus",
        titleStart: "Building a Comprehensive",
        titleAccent: "Medical Technology",
        titleEnd: "Platform",
        description:
          "We are not simply looking for products to trade. We are building a long-term medical technology platform focused on excellence and regional impact.",
        cta: "Learn about our approach",
        cards: [
          {
            title: "Equipment Distribution",
            description:
              "Delivering state-of-the-art medical technology from top global manufacturers directly to your facility."
          },
          {
            title: "Technical Support",
            description:
              "Ensuring minimal downtime with our dedicated team of expert local engineers and rapid response times."
          },
          {
            title: "Installation Services",
            description:
              "Professional setup, calibration, and testing of complex diagnostic and laboratory systems."
          },
          {
            title: "Capacity Building",
            description:
              "Empowering healthcare professionals with comprehensive operational and clinical training."
          },
          {
            title: "Consumable Supply",
            description:
              "Reliable, uninterrupted supply chains for essential medical reagents and daily laboratory materials."
          },
          {
            title: "Facility Support",
            description:
              "End-to-end consulting for hospital infrastructure development and laboratory modernization."
          }
        ]
      },
      cta: {
        title: "Ready to modernize your healthcare facility?",
        description:
          "Partner with us for reliable medical technology, infrastructure development, and consistent technical support.",
        primary: "Contact Our Team",
        secondary: "View Our Projects"
      }
    },
    aboutPage: {
      badge: "About Wende Goundi",
      titleStart: "Empowering",
      titleAccent: "Modern Healthcare",
      titleEnd: "in West Africa",
      intro:
        "Wende Goundi Medical Tech & Diagnostic Solutions Company is a healthcare technology and diagnostic solutions company based in Ouagadougou, Burkina Faso, dedicated to improving access to modern medical infrastructure, diagnostic systems, and specialized healthcare equipment.",
      mediaTitle: "Advanced Diagnostics",
      mediaSubtitle: "Clinically Validated Technology",
      approachTitle: "Sustainable Healthcare Solutions",
      paragraphs: [
        "We specialize in pathology, immunohistochemistry (IHC), laboratory diagnostics, dialysis solutions, hospital infrastructure, and medical technology support services. We work with international manufacturers and healthcare partners to provide reliable, high-quality medical equipment and consumables tailored to the needs of healthcare institutions in emerging markets.",
        "At Wende Goundi, we believe healthcare modernization requires more than simply supplying equipment. Our approach focuses on building sustainable healthcare solutions through equipment distribution, installation, technical support, maintenance services, training, and long-term partnership development.",
        "We are committed to supporting hospitals, laboratories, clinics, diagnostic centers, NGOs, and public health institutions with solutions that improve efficiency, diagnostic accuracy, and patient care outcomes."
      ],
      coreAreasTitle: "Core Areas of Focus",
      coreAreas: [
        "Pathology & Histopathology Equipment",
        "Immunohistochemistry (IHC) Systems & Reagents",
        "Laboratory Equipment & Consumables",
        "Dialysis Equipment & Water Treatment Systems",
        "Operating Room & Hospital Infrastructure",
        "Technical Support & Biomedical Services"
      ],
      missionTitle: "Our Mission",
      mission:
        "As healthcare systems continue to expand across West Africa, our mission is to help bridge the gap between advanced medical technology and local healthcare needs by delivering dependable, affordable, and sustainable medical solutions.",
      visionTitle: "Our Vision",
      vision:
        "Our vision is to become a trusted leader in diagnostic and medical technology solutions throughout Burkina Faso and the wider West African region through innovation, quality service, and strategic global partnerships. We are committed to advancing healthcare infrastructure and supporting the future of modern medicine in Africa.",
      commitmentTitle: "Our Commitment",
      commitmentDescription:
        "Partnering for sustainable healthcare development across West Africa.",
      commitmentCards: [
        { title: "Quality Assured", description: "Delivering dependable and affordable medical solutions tailored to local needs." },
        { title: "Reliable Support", description: "Delivering dependable and affordable medical solutions tailored to local needs." },
        { title: "Strategic Partnerships", description: "Delivering dependable and affordable medical solutions tailored to local needs." }
      ]
    },
    projectsPage: {
      title: "Our Projects",
      description: "Delivering specialized medical infrastructure across Burkina Faso.",
      projects: [
        {
          title: "National Dialysis Center Upgrade",
          category: "Dialysis Equipment",
          location: "Ouagadougou, Burkina Faso",
          description:
            "Complete overhaul and installation of state-of-the-art dialysis machines and water treatment systems for a major national healthcare facility, increasing patient capacity by 40%."
        },
        {
          title: "Regional Laboratory Network",
          category: "Laboratory Setup",
          location: "Bobo-Dioulasso Region",
          description:
            "Equipped a network of three regional clinics with automated biochemistry analyzers and hematology equipment, alongside comprehensive training for 15+ lab technicians."
        },
        {
          title: "Pathology Department Modernization",
          category: "Pathology & IHC",
          location: "Koudougou Hospital",
          description:
            "Installation of advanced tissue processors, microtomes, and a reliable supply chain for IHC reagents to support improved cancer diagnostics."
        }
      ],
      contextTitle: "Expertise in Local Context",
      contextDescription:
        "Wende Goundi specializes in the unique logistical and technical requirements of the West African healthcare landscape. We do not just supply equipment; we ensure long-term operational success.",
      contextItems: [
        "On-site technical training",
        "Sustainable reagent supply chains",
        "24/7 maintenance support"
      ],
      reachTitle: "Our Reach",
      installations: "Installations",
      supportRate: "Support Rate"
    },
    contactPage: {
      badge: "Contact Us",
      headingStart: "Let's Start a",
      headingAccent: "Conversation",
      intro:
        "Whether you need a quote, technical support, or partnership inquiries, our team is ready to assist you.",
      contactItems: [
        { title: "Managing Director", content: "Christopher Moghalu" },
        { title: "Location", content: "Ouagadougou, BF" },
        { title: "Phone", content: "+1 (404) 936-1540" },
        { title: "Email", content: "cm@wendegoundimedical.com" },
        { title: "Website", content: "www.wendegoundimedical.com" }
      ],
      formTitle: "Send us a Message",
      formDescription: "Fill out the form below and we will get back to you as soon as possible.",
      successTitle: "Message Sent Successfully!",
      successDescription: "Thank you for reaching out. Our team will contact you shortly.",
      sendAnother: "Send another message",
      firstName: "First Name",
      firstNamePlaceholder: "John",
      lastName: "Last Name",
      lastNamePlaceholder: "Doe",
      email: "Email Address",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Select a topic...",
      subjectOptions: {
        equipment: "Equipment Inquiry",
        partnership: "Partnership",
        technical: "Technical Support",
        other: "Other"
      },
      message: "Message",
      messagePlaceholder: "How can we help you?",
      sending: "Sending...",
      send: "Send Message"
    },
    solutionPages: {
      pathology: {
        badge: "Diagnostic Excellence",
        titleStart: "Pathology &",
        titleAccent: "IHC Solutions",
        intro:
          "Empowering laboratories with state-of-the-art histopathology equipment, precision microtomes, and automated Immunohistochemistry (IHC) systems for accurate diagnostics.",
        cta: "Request a Consultation",
        sections: [
          {
            title: "Precision Tissue Sectioning",
            description:
              "High-quality diagnostics begin with perfect tissue sections. We provide industry-leading rotary microtomes and cryostats designed for precise, consistent sectioning of paraffin-embedded and frozen tissue samples. Our equipment helps laboratory technicians achieve optimal slide preparation with enhanced safety and ergonomic comfort.",
            items: [
              "Automated & Semi-Automated Microtomes",
              "Advanced Cryostats for Frozen Sections",
              "Blade Holders & Consumables",
              "Ergonomic Tissue Processing Workstations"
            ]
          },
          {
            title: "Automated Immunohistochemistry (IHC)",
            description:
              "Standardize your staining processes and improve diagnostic confidence with our automated IHC and in situ hybridization (ISH) systems. We supply advanced autostainers that deliver crisp, intense stains with minimal background, reducing hands-on time and ensuring reproducible results across patient samples.",
            items: [
              "High-Throughput Autostainers",
              "Primary Antibodies & Detection Kits",
              "Optimized Reagents & Buffers",
              "Digital Pathology Integration"
            ]
          },
          {
            title: "Complete Histology Workflow",
            description:
              "From grossing and embedding to staining and coverslipping, we equip pathology labs with everything needed for a seamless workflow. Our comprehensive solutions include high-grade consumables, embedding centers, and automated coverslippers to maintain specimen integrity from surgery to diagnosis."
          }
        ],
        highlights: [
          { title: "Quality Assured", description: "Validated reagents and materials." },
          { title: "Efficient Processing", description: "Accelerated turnaround times." }
        ]
      },
      laboratory: {
        badge: "Clinical Diagnostics",
        titleStart: "Laboratory",
        titleAccent: "Equipment",
        intro:
          "Equipping clinical laboratories with advanced, high-throughput automated analyzers, sample processing systems, and essential diagnostic consumables.",
        cta: "Equip Your Lab",
        sections: [
          {
            title: "Automated Clinical Analyzers",
            description:
              "We provide fully automated chemistry and immunology analyzers designed to handle high sample volumes with exceptional precision. These systems streamline laboratory workflows, minimize human error, and deliver rapid diagnostic results for improved patient care.",
            items: [
              "High-throughput Chemistry Analyzers",
              "Automated Immunology Systems",
              "Integrated Laboratory Information Systems (LIS)",
              "Hematology & Coagulation Analyzers"
            ]
          },
          {
            title: "Sample Processing & Preparation",
            description:
              "Accurate results depend on perfect sample preparation. We supply essential benchtop equipment including refrigerated centrifuges, sample sorting carousels, pipetting stations, and incubation systems to ensure every biological sample is processed under optimal conditions.",
            items: [
              "Clinical Centrifuges & Rotors",
              "Automated Sample Sorters",
              "Precision Pipettes & Dispensers",
              "Temperature-controlled Incubators"
            ]
          },
          {
            title: "Lab Consumables & Reagents",
            description:
              "We are a reliable supply chain partner for all your laboratory consumable needs. We provide high-quality reagents, calibration standards, test tubes, microplates, and sterile pipettes to keep your diagnostic operations running without interruption."
          }
        ],
        highlights: [
          { title: "Certified Consumables", description: "Sterile and reliable labware." },
          { title: "Consistent Supply", description: "Dependable stock availability." }
        ]
      },
      dialysis: {
        badge: "Renal Care Excellence",
        titleStart: "Dialysis &",
        titleAccent: "Water Treatment",
        intro:
          "Providing complete hemodialysis solutions, from advanced dialysis machines and comfortable patient chairs to industrial-grade Reverse Osmosis (RO) water purification systems.",
        cta: "Explore Renal Solutions",
        sections: [
          {
            title: "Advanced Hemodialysis Systems",
            description:
              "We equip renal care centers with highly reliable, user-friendly hemodialysis machines designed to provide safe and efficient patient treatments. Coupled with ergonomic, fully adjustable dialysis chairs, we ensure maximum comfort for patients during therapy sessions.",
            items: [
              "Next-Generation Hemodialysis Machines",
              "Ergonomic & Adjustable Patient Chairs",
              "Integrated Patient Monitoring",
              "Dialyzers, Bloodlines & Consumables"
            ]
          },
          {
            title: "Medical Water Treatment (RO)",
            description:
              "Ultra-pure water is the foundation of safe hemodialysis. We supply, install, and maintain industrial-grade Reverse Osmosis (RO) water purification systems, such as the AquaA series, ensuring your facility meets strict international standards for medical water quality.",
            items: [
              "AquaA Reverse Osmosis Systems",
              "Multi-stage Filtration & Purification",
              "High-capacity Storage Tanks",
              "Automated Heat Disinfection"
            ]
          }
        ],
        highlights: [
          { title: "Ultra-Pure Water", description: "ISO/AAMI standard compliance." },
          { title: "Continuous Supply", description: "Redundant systems for zero downtime." }
        ]
      },
      hospital: {
        badge: "Facility Modernization",
        titleStart: "Hospital",
        titleAccent: "Infrastructure",
        intro:
          "Equipping medical facilities with advanced operating room systems, intensive care units (ICU), and comprehensive patient monitoring networks to elevate the standard of care.",
        cta: "Discuss Your Project",
        sections: [
          {
            title: "Advanced Operating Rooms",
            description:
              "We design and supply state-of-the-art surgical environments. From ceiling-mounted supply pendants and advanced surgical lights to integrated operating tables, we provide modular and scalable solutions that improve surgical precision, ergonomics, and infection control.",
            items: [
              "Surgical Lighting & Camera Systems",
              "Ceiling Supply Pendants",
              "Advanced Surgical Tables",
              "Digital OR Integration"
            ]
          },
          {
            title: "Intensive Care Units (ICU)",
            description:
              "Critical care demands reliability. Our ICU infrastructure solutions include highly functional hospital beds, life-support ventilators, infusion pump arrays, and comprehensive patient monitoring systems. We ensure that your critical care teams have the life-saving tools they need at their fingertips.",
            items: [
              "Multi-parameter Patient Monitors",
              "Advanced Ventilators & Respiratory Care",
              "Syringe & Volumetric Infusion Pumps",
              "ICU Electric Beds & Anti-decubitus Mattresses"
            ]
          },
          {
            title: "Sterilization & Surgical Instruments",
            description:
              "Infection prevention is paramount in any hospital setting. We supply premium-grade surgical instruments and complete Central Sterile Services Department (CSSD) equipment, including high-capacity autoclaves and washer-disinfectors to help guarantee patient safety."
          }
        ],
        highlights: [
          { title: "Surgical Instruments", description: "Premium stainless steel tools." },
          { title: "CSSD Integration", description: "Complete sterilization cycles." }
        ]
      },
      technicalSupport: {
        badge: "Service & Maintenance",
        titleStart: "Technical Support &",
        titleAccent: "Biomedical Services",
        intro:
          "Maximizing equipment uptime and extending the lifespan of your critical medical infrastructure with expert installation, training, and 24/7 technical support.",
        cta: "Request Service",
        overviewTitle: "Comprehensive Lifecycle Management",
        overviewDescription:
          "We understand that in healthcare, equipment failure is not an option. Our certified biomedical engineering team provides end-to-end service solutions to keep your clinical operations running smoothly.",
        services: [
          {
            title: "Installation & Commissioning",
            description:
              "Professional site preparation, installation, and rigorous calibration to ensure equipment meets manufacturer specifications from day one."
          },
          {
            title: "Preventive Maintenance",
            description:
              "Scheduled maintenance programs designed to identify and resolve potential issues before they cause costly downtime."
          },
          {
            title: "24/7 Emergency Repair",
            description:
              "Rapid response technical support and on-site repair services for critical life-support and diagnostic equipment."
          }
        ],
        trainingTitle: "Clinical Application Training",
        trainingDescription:
          "Technology is only as effective as the professionals using it. We provide comprehensive clinical application and technical training programs for doctors, nurses, and laboratory technicians. Our training helps your staff remain confident, efficient, and capable of using the advanced features of new equipment.",
        trainingItems: [
          "On-site Clinical Staff Training",
          "Biomedical Technician Workshops",
          "Operational Safety Protocols",
          "Software & IT Integration Support"
        ],
        urgentTitle: "Need Immediate Technical Assistance?",
        urgentDescription:
          "Our certified engineers are on standby to resolve your equipment issues rapidly and efficiently.",
        urgentCta: "Contact Support Hotline"
      }
    }
  },
  fr: {
    languageName: "Francais",
    switchLanguage: "Switch to English",
    nav: {
      home: "Accueil",
      about: "A propos",
      solutions: "Solutions",
      projects: "Projets",
      contact: "Contact",
      quote: "Demander un devis",
      contactNow: "Contactez-nous",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu de navigation",
      solutionItems: [
        { label: "Pathologie et IHC", href: "/solutions/pathology-ihc" },
        { label: "Equipements de laboratoire", href: "/solutions/laboratory-equipment" },
        { label: "Solutions de dialyse", href: "/solutions/dialysis" },
        { label: "Infrastructure hospitaliere", href: "/solutions/hospital-infrastructure" },
        { label: "Support technique", href: "/solutions/technical-support" }
      ]
    },
    footer: {
      description:
        "Nous ameliorons les infrastructures de sante et la capacite diagnostique au Burkina Faso et dans toute l'Afrique de l'Ouest. Nous fournissons des technologies medicales fiables et des equipements diagnostiques specialises.",
      quickLinksTitle: "Liens rapides",
      quickLinks: [
        { label: "Accueil", href: "/" },
        { label: "A propos", href: "/about" },
        { label: "Projets", href: "/projects" },
        { label: "Contact", href: "/contact" }
      ],
      solutionsTitle: "Nos solutions",
      contactTitle: "Contact",
      copyright:
        "Wende Goundi Medical Tech & Diagnostic Solutions. Tous droits reserves.",
      values: ["SOIN", "DIAGNOSTIC", "GUERISON"]
    },
    home: {
      hero: {
        badge: "Wende Goundi Med Dx",
        titleStart: "Combler le manque en",
        titleAccent: "infrastructure",
        titleEnd: "de sante",
        description:
          "Nous fournissons des technologies medicales fiables, des equipements diagnostiques specialises et des solutions completes de sante au Burkina Faso et en Afrique de l'Ouest.",
        primaryCta: "Decouvrir notre vision",
        secondaryCta: "Devenir partenaire"
      },
      stats: [
        { title: "SOIN", description: "Approche centree sur le patient" },
        { title: "DIAGNOSTIC", description: "Precision et exactitude" },
        { title: "GUERISON", description: "Sante durable" }
      ],
      about: {
        badge: "Notre entreprise",
        quote:
          "Construire une plateforme durable de technologie medicale, et pas seulement vendre des produits.",
        titleStart: "Moderniser la sante en",
        titleAccent: "Afrique de l'Ouest",
        paragraphOne:
          "Dirigee par Christopher Moghalu, Wende Goundi Medical Tech & Diagnostic Solutions se consacre a l'amelioration des infrastructures de sante et des capacites diagnostiques au Burkina Faso et dans toute l'Afrique de l'Ouest.",
        paragraphTwo:
          "Nous repondons a la demande croissante de technologies medicales fiables en creant des partenariats a long terme avec des fabricants internationaux reputes, engages pour la qualite, l'innovation et le developpement durable de la sante.",
        cta: "Lire notre histoire"
      },
      solutions: {
        badge: "Notre expertise",
        title: "Domaines prioritaires",
        description:
          "Des systemes diagnostiques specialises jusqu'aux infrastructures hospitalieres completes, nous proposons des solutions globales.",
        learnMore: "En savoir plus",
        cards: [
          {
            title: "Pathologie et IHC",
            description: "Equipements avances d'histopathologie et systemes d'immunohistochimie.",
            href: "/solutions/pathology-ihc"
          },
          {
            title: "Systemes de laboratoire",
            description: "Analyseurs modernes et approvisionnement fiable en consommables de qualite.",
            href: "/solutions/laboratory-equipment"
          },
          {
            title: "Solutions de dialyse",
            description: "Equipements de dialyse de pointe et systemes de traitement de l'eau.",
            href: "/solutions/dialysis"
          },
          {
            title: "Infrastructure hospitaliere",
            description: "Blocs operatoires et developpement complet des etablissements.",
            href: "/solutions/hospital-infrastructure"
          }
        ]
      },
      whyChooseUs: {
        title: "Pourquoi travailler avec nous",
        description:
          "Nous nous engageons pour un developpement durable de la sante en Afrique de l'Ouest avec une technologie fiable et un accompagnement complet.",
        cards: [
          {
            title: "Qualite garantie",
            description:
              "Nous fournissons uniquement des equipements diagnostiques certifies et cliniquement valides issus de marques mondiales reputees."
          },
          {
            title: "Support 24/7",
            description:
              "Une equipe locale dediee assure un support technique continu, la formation et une maintenance rapide."
          },
          {
            title: "Standards mondiaux",
            description:
              "Nous apportons des infrastructures de sante de classe mondiale au Burkina Faso et dans la region."
          }
        ]
      },
      platform: {
        badge: "Focus plateforme",
        titleStart: "Construire une plateforme complete de",
        titleAccent: "technologie medicale",
        titleEnd: "",
        description:
          "Nous ne cherchons pas simplement des produits a commercialiser. Nous construisons une plateforme durable de technologie medicale axee sur l'excellence et l'impact regional.",
        cta: "Decouvrir notre approche",
        cards: [
          {
            title: "Distribution d'equipements",
            description:
              "Livraison directe de technologies medicales de pointe issues des meilleurs fabricants mondiaux."
          },
          {
            title: "Support technique",
            description:
              "Nous reduisons les temps d'arret grace a notre equipe d'ingenieurs locaux experts et reactifs."
          },
          {
            title: "Services d'installation",
            description:
              "Installation, calibration et tests professionnels de systemes diagnostiques et de laboratoire complexes."
          },
          {
            title: "Renforcement des competences",
            description:
              "Formation operationnelle et clinique complete pour les professionnels de sante."
          },
          {
            title: "Approvisionnement en consommables",
            description:
              "Chaines d'approvisionnement fiables et continues pour les reactifs medicaux et les materiaux de laboratoire."
          },
          {
            title: "Accompagnement des structures",
            description:
              "Conseil de bout en bout pour le developpement des infrastructures hospitalieres et la modernisation des laboratoires."
          }
        ]
      },
      cta: {
        title: "Pret a moderniser votre etablissement de sante ?",
        description:
          "Travaillez avec nous pour des technologies medicales fiables, le developpement des infrastructures et un support technique constant.",
        primary: "Contacter notre equipe",
        secondary: "Voir nos projets"
      }
    },
    aboutPage: {
      badge: "A propos de Wende Goundi",
      titleStart: "Faire progresser",
      titleAccent: "la sante moderne",
      titleEnd: "en Afrique de l'Ouest",
      intro:
        "Wende Goundi Medical Tech & Diagnostic Solutions Company est une entreprise de technologie medicale et de solutions diagnostiques basee a Ouagadougou, Burkina Faso, dediee a l'amelioration de l'acces aux infrastructures medicales modernes, aux systemes diagnostiques et aux equipements de sante specialises.",
      mediaTitle: "Diagnostic avance",
      mediaSubtitle: "Technologie cliniquement validee",
      approachTitle: "Solutions de sante durables",
      paragraphs: [
        "Nous sommes specialises en pathologie, immunohistochimie (IHC), diagnostic de laboratoire, solutions de dialyse, infrastructure hospitaliere et services de support en technologie medicale. Nous collaborons avec des fabricants internationaux et des partenaires de sante pour fournir des equipements medicaux et consommables fiables et de haute qualite adaptes aux besoins des etablissements de sante sur les marches emergents.",
        "Chez Wende Goundi, nous pensons que la modernisation de la sante demande plus qu'une simple fourniture d'equipements. Notre approche vise a construire des solutions durables grace a la distribution d'equipements, l'installation, le support technique, la maintenance, la formation et le developpement de partenariats a long terme.",
        "Nous nous engageons a accompagner les hopitaux, laboratoires, cliniques, centres diagnostiques, ONG et institutions de sante publique avec des solutions qui ameliorent l'efficacite, la precision diagnostique et la prise en charge des patients."
      ],
      coreAreasTitle: "Principaux domaines d'intervention",
      coreAreas: [
        "Equipements de pathologie et d'histopathologie",
        "Systemes et reactifs d'immunohistochimie (IHC)",
        "Equipements et consommables de laboratoire",
        "Equipements de dialyse et systemes de traitement de l'eau",
        "Bloc operatoire et infrastructure hospitaliere",
        "Support technique et services biomedicaux"
      ],
      missionTitle: "Notre mission",
      mission:
        "Alors que les systemes de sante se developpent en Afrique de l'Ouest, notre mission est de reduire l'ecart entre les technologies medicales avancees et les besoins locaux en fournissant des solutions medicales fiables, abordables et durables.",
      visionTitle: "Notre vision",
      vision:
        "Notre vision est de devenir un acteur de reference des solutions diagnostiques et technologiques medicales au Burkina Faso et dans toute l'Afrique de l'Ouest grace a l'innovation, a la qualite de service et a des partenariats mondiaux strategiques. Nous nous engageons a faire progresser l'infrastructure de sante et a soutenir l'avenir de la medecine moderne en Afrique.",
      commitmentTitle: "Notre engagement",
      commitmentDescription:
        "Construire des partenariats pour un developpement durable de la sante en Afrique de l'Ouest.",
      commitmentCards: [
        { title: "Qualite garantie", description: "Des solutions medicales fiables et abordables adaptees aux besoins locaux." },
        { title: "Support fiable", description: "Des solutions medicales fiables et abordables adaptees aux besoins locaux." },
        { title: "Partenariats strategiques", description: "Des solutions medicales fiables et abordables adaptees aux besoins locaux." }
      ]
    },
    projectsPage: {
      title: "Nos projets",
      description: "Nous fournissons des infrastructures medicales specialisees au Burkina Faso.",
      projects: [
        {
          title: "Modernisation du centre national de dialyse",
          category: "Equipement de dialyse",
          location: "Ouagadougou, Burkina Faso",
          description:
            "Renovation complete et installation de machines de dialyse de pointe et de systemes de traitement de l'eau pour un grand etablissement national, avec une augmentation de la capacite de 40%."
        },
        {
          title: "Reseau regional de laboratoires",
          category: "Mise en place de laboratoire",
          location: "Region de Bobo-Dioulasso",
          description:
            "Equipement de trois cliniques regionales avec des analyseurs automatisees de biochimie et d'hematologie, accompagne d'une formation complete pour plus de 15 techniciens."
        },
        {
          title: "Modernisation du departement de pathologie",
          category: "Pathologie et IHC",
          location: "Hopital de Koudougou",
          description:
            "Installation de processeurs tissulaires avances, de microtomes et d'une chaine d'approvisionnement fiable en reactifs IHC pour ameliorer le diagnostic du cancer."
        }
      ],
      contextTitle: "Une expertise adaptee au contexte local",
      contextDescription:
        "Wende Goundi maitrise les exigences logistiques et techniques propres au paysage de la sante en Afrique de l'Ouest. Nous ne faisons pas que fournir des equipements; nous garantissons leur succes operationnel sur le long terme.",
      contextItems: [
        "Formation technique sur site",
        "Chaines d'approvisionnement durables en reactifs",
        "Support maintenance 24/7"
      ],
      reachTitle: "Notre presence",
      installations: "Installations",
      supportRate: "Taux de support"
    },
    contactPage: {
      badge: "Contact",
      headingStart: "Commencons une",
      headingAccent: "conversation",
      intro:
        "Que vous ayez besoin d'un devis, d'un support technique ou d'un partenariat, notre equipe est prete a vous aider.",
      contactItems: [
        { title: "Directeur general", content: "Christopher Moghalu" },
        { title: "Localisation", content: "Ouagadougou, BF" },
        { title: "Telephone", content: "+1 (404) 936-1540" },
        { title: "E-mail", content: "cm@wendegoundimedical.com" },
        { title: "Site web", content: "www.wendegoundimedical.com" }
      ],
      formTitle: "Envoyez-nous un message",
      formDescription: "Remplissez le formulaire ci-dessous et nous vous repondrons des que possible.",
      successTitle: "Message envoye avec succes !",
      successDescription: "Merci pour votre message. Notre equipe vous contactera bientot.",
      sendAnother: "Envoyer un autre message",
      firstName: "Prenom",
      firstNamePlaceholder: "Jean",
      lastName: "Nom",
      lastNamePlaceholder: "Dupont",
      email: "Adresse e-mail",
      emailPlaceholder: "jean@example.com",
      subject: "Sujet",
      subjectPlaceholder: "Selectionnez un sujet...",
      subjectOptions: {
        equipment: "Demande d'equipement",
        partnership: "Partenariat",
        technical: "Support technique",
        other: "Autre"
      },
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      sending: "Envoi...",
      send: "Envoyer le message"
    },
    solutionPages: {
      pathology: {
        badge: "Excellence diagnostique",
        titleStart: "Pathologie et",
        titleAccent: "solutions IHC",
        intro:
          "Nous aidons les laboratoires avec des equipements d'histopathologie de pointe, des microtomes de precision et des systemes automatises d'immunohistochimie (IHC) pour des diagnostics fiables.",
        cta: "Demander une consultation",
        sections: [
          {
            title: "Sectionnement tissulaire de precision",
            description:
              "Un diagnostic de qualite commence par des coupes tissulaires parfaites. Nous fournissons des microtomes rotatifs et cryostats de reference pour des coupes precises et constantes sur tissus paraffines ou congeles. Nos equipements aident les techniciens a preparer des lames optimales avec plus de securite et de confort.",
            items: [
              "Microtomes automatises et semi-automatises",
              "Cryostats avances pour coupes congelees",
              "Porte-lames et consommables",
              "Postes de travail ergonomiques pour le traitement tissulaire"
            ]
          },
          {
            title: "Immunohistochimie automatisee (IHC)",
            description:
              "Standardisez vos procedes de coloration et renforcez la confiance diagnostique avec nos systemes automatisees IHC et ISH. Nous fournissons des autostainers avances qui offrent des colorations nettes et reproductibles tout en reduisant le temps de manipulation.",
            items: [
              "Autostainers a haut debit",
              "Anticorps primaires et kits de detection",
              "Reactifs et tampons optimises",
              "Integration en pathologie numerique"
            ]
          },
          {
            title: "Flux complet d'histologie",
            description:
              "Du macroscopique a l'inclusion, puis a la coloration et au montage, nous equipons les laboratoires de pathologie pour un flux de travail continu. Nos solutions incluent des consommables de haute qualite, des centres d'inclusion et des couvre-lames automatises."
          }
        ],
        highlights: [
          { title: "Qualite garantie", description: "Reactifs et materiaux valides." },
          { title: "Traitement efficace", description: "Temps de rendu acceleres." }
        ]
      },
      laboratory: {
        badge: "Diagnostic clinique",
        titleStart: "Equipements de",
        titleAccent: "laboratoire",
        intro:
          "Nous equipons les laboratoires cliniques avec des analyseurs automatises a haut debit, des systemes de preparation d'echantillons et des consommables diagnostiques essentiels.",
        cta: "Equiper votre labo",
        sections: [
          {
            title: "Analyseurs cliniques automatises",
            description:
              "Nous fournissons des analyseurs automatisees de chimie et d'immunologie concus pour traiter de grands volumes d'echantillons avec une precision elevee. Ces systemes fluidifient le flux du laboratoire, reduisent les erreurs humaines et fournissent des resultats rapides.",
            items: [
              "Analyseurs de chimie a haut debit",
              "Systemes automatisees d'immunologie",
              "Systemes integres d'information de laboratoire (LIS)",
              "Analyseurs d'hematologie et de coagulation"
            ]
          },
          {
            title: "Preparation et traitement des echantillons",
            description:
              "Des resultats fiables dependent d'une preparation parfaite. Nous fournissons des centrifugeuses refrigerees, trieurs d'echantillons, stations de pipetage et incubateurs pour garantir un traitement optimal de chaque echantillon biologique.",
            items: [
              "Centrifugeuses cliniques et rotors",
              "Trieurs automatisees d'echantillons",
              "Pipettes et distributeurs de precision",
              "Incubateurs a temperature controlee"
            ]
          },
          {
            title: "Consommables et reactifs de laboratoire",
            description:
              "Nous sommes un partenaire fiable pour tous vos besoins en consommables de laboratoire. Nous fournissons des reactifs, standards d'etalonnage, tubes, microplaques et pipettes steriles pour assurer la continuite des operations diagnostiques."
          }
        ],
        highlights: [
          { title: "Consommables certifies", description: "Materiel sterile et fiable." },
          { title: "Approvisionnement constant", description: "Disponibilite de stock fiable." }
        ]
      },
      dialysis: {
        badge: "Excellence en soins renaux",
        titleStart: "Dialyse et",
        titleAccent: "traitement de l'eau",
        intro:
          "Nous proposons des solutions completes d'hemodialyse, depuis les machines avances et fauteuils patients jusqu'aux systemes industriels d'osmose inverse (RO).",
        cta: "Explorer nos solutions renales",
        sections: [
          {
            title: "Systemes avances d'hemodialyse",
            description:
              "Nous equipons les centres renaux avec des machines d'hemodialyse fiables et faciles a utiliser pour des traitements securises et efficaces. Associees a des fauteuils ergonomiques reglables, elles assurent un confort maximal aux patients.",
            items: [
              "Machines d'hemodialyse nouvelle generation",
              "Fauteuils patients ergonomiques et reglables",
              "Surveillance integree du patient",
              "Dialyseurs, lignes sanguines et consommables"
            ]
          },
          {
            title: "Traitement de l'eau medicale (RO)",
            description:
              "Une eau ultra-pure est la base d'une hemodialyse sure. Nous fournissons, installons et entretenons des systemes industriels d'osmose inverse comme la gamme AquaA afin d'assurer la conformite aux normes internationales.",
            items: [
              "Systemes d'osmose inverse AquaA",
              "Filtration et purification multi-etapes",
              "Reservoirs de stockage haute capacite",
              "Desinfection thermique automatisee"
            ]
          }
        ],
        highlights: [
          { title: "Eau ultra-pure", description: "Conformite aux normes ISO/AAMI." },
          { title: "Approvisionnement continu", description: "Systemes redondants pour zero interruption." }
        ]
      },
      hospital: {
        badge: "Modernisation des structures",
        titleStart: "Infrastructure",
        titleAccent: "hospitaliere",
        intro:
          "Nous equipons les structures de sante avec des systemes avances de bloc operatoire, des unites de soins intensifs (ICU) et des reseaux complets de surveillance des patients.",
        cta: "Parler de votre projet",
        sections: [
          {
            title: "Blocs operatoires avances",
            description:
              "Nous concevons et fournissons des environnements chirurgicaux de pointe. Des bras plafonniers et eclairages chirurgicaux avances jusqu'aux tables integrees, nous proposons des solutions modulaires et evolutives qui ameliorent la precision chirurgicale, l'ergonomie et le controle des infections.",
            items: [
              "Eclairages chirurgicaux et systemes camera",
              "Bras plafonniers d'alimentation",
              "Tables chirurgicales avancees",
              "Integration numerique du bloc"
            ]
          },
          {
            title: "Unites de soins intensifs (ICU)",
            description:
              "Les soins critiques exigent une fiabilite totale. Nos solutions ICU comprennent des lits hospitaliers fonctionnels, des ventilateurs de survie, des pompes a perfusion et des systemes complets de monitoring patient.",
            items: [
              "Moniteurs patients multiparametres",
              "Ventilateurs avances et soins respiratoires",
              "Pompes a seringue et perfusion volumetrique",
              "Lits electriques ICU et matelas anti-escarres"
            ]
          },
          {
            title: "Sterilisation et instruments chirurgicaux",
            description:
              "La prevention des infections est essentielle dans tout hopital. Nous fournissons des instruments chirurgicaux premium et des equipements complets de sterilisation CSSD, y compris des autoclaves grande capacite et des laveurs-desinfecteurs."
          }
        ],
        highlights: [
          { title: "Instruments chirurgicaux", description: "Outils premium en acier inoxydable." },
          { title: "Integration CSSD", description: "Cycles de sterilisation complets." }
        ]
      },
      technicalSupport: {
        badge: "Service et maintenance",
        titleStart: "Support technique et",
        titleAccent: "services biomedicaux",
        intro:
          "Nous maximisons la disponibilite des equipements et prolongeons la duree de vie de vos infrastructures medicales critiques grace a l'installation, la formation et un support technique 24/7.",
        cta: "Demander un service",
        overviewTitle: "Gestion complete du cycle de vie",
        overviewDescription:
          "Dans le domaine de la sante, la panne n'est pas une option. Notre equipe certifiee d'ingenierie biomedicale fournit des services de bout en bout pour maintenir vos operations cliniques.",
        services: [
          {
            title: "Installation et mise en service",
            description:
              "Preparation du site, installation professionnelle et calibration rigoureuse pour garantir une conformite des le premier jour."
          },
          {
            title: "Maintenance preventive",
            description:
              "Programmes de maintenance planifies pour identifier et resoudre les problemes avant qu'ils ne provoquent des arrets couteux."
          },
          {
            title: "Reparation d'urgence 24/7",
            description:
              "Support technique reactif et reparations sur site pour les equipements critiques de survie et de diagnostic."
          }
        ],
        trainingTitle: "Formation a l'application clinique",
        trainingDescription:
          "Une technologie n'est efficace que si les professionnels savent l'utiliser. Nous proposons des formations cliniques et techniques completes pour les medecins, infirmiers et techniciens de laboratoire.",
        trainingItems: [
          "Formation clinique sur site",
          "Ateliers pour techniciens biomedicaux",
          "Protocoles de securite operationnelle",
          "Support logiciel et integration IT"
        ],
        urgentTitle: "Besoin d'une assistance technique immediate ?",
        urgentDescription:
          "Nos ingenieurs certifies sont disponibles pour resoudre rapidement et efficacement vos problemes d'equipement.",
        urgentCta: "Contacter l'assistance"
      }
    }
  }
} as const;

type SiteCopy = (typeof siteCopy)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: SiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("wende-locale");
    if (stored === "en" || stored === "fr") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("wende-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "en" ? "fr" : "en")),
      copy: siteCopy[locale]
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
