export type Service = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  intro: string;
  purpose: string[];
  expect: string[];
  consultation: string;
  aftercare?: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  featured?: boolean;
  active?: boolean;
};

export const services: Service[] = [
  {
    slug: "medical-consultations",
    name: "Medical Consultations",
    icon: "Stethoscope",
    featured: true,
    short: "Thorough clinical assessment and individualised care for everyday health concerns.",
    intro:
      "A medical consultation is the foundation of everything we do. Dr N. Skhosana takes time to understand your concerns, review your history and examine you, so that any advice or treatment is based on an appropriate clinical assessment.",
    purpose: [
      "Assessment and management of acute and everyday health concerns",
      "Review of symptoms, history and current medication",
      "Referral for further investigation or specialist care where needed",
      "A clinical starting point before any aesthetic treatment",
    ],
    expect: [
      "A conversation about your concerns and medical history",
      "A physical examination where appropriate",
      "A clear explanation of findings and options",
      "A personalised plan, which may include tests, treatment or follow-up",
    ],
    consultation: "Book a consultation online or contact the practice. Please bring any relevant medication, reports or test results.",
    faqs: [
      { q: "Do I need a consultation before an aesthetic treatment?", a: "Yes. Aesthetic treatments are only offered after an assessment confirms they are suitable for you." },
      { q: "What should I bring?", a: "Your ID, medical aid details if applicable, a list of current medication and any recent results or reports." },
    ],
    related: ["why-a-medical-consultation-matters", "what-to-expect-during-a-medical-consultation"],
  },
  {
    slug: "family-planning",
    name: "Family Planning",
    icon: "HeartHandshake",
    featured: true,
    short: "Confidential, informed guidance on contraceptive options suited to you.",
    intro:
      "Family planning consultations offer a private space to discuss contraception and reproductive health. Options are discussed with you and offered subject to clinical assessment.",
    purpose: [
      "Information on available contraceptive methods",
      "Assessment of which options may suit your health and preferences",
      "Ongoing review of your chosen method",
    ],
    expect: [
      "A confidential discussion of your needs and medical history",
      "Relevant checks, such as blood pressure, where appropriate",
      "Clear information on benefits, side effects and alternatives",
      "A shared decision on the most suitable option",
    ],
    consultation: "A consultation is required before any contraceptive method is prescribed or administered.",
    faqs: [
      { q: "Is my consultation confidential?", a: "Yes. Your information is handled confidentially and in line with POPIA and professional standards." },
      { q: "Which methods are available?", a: "Options will be discussed during your consultation, as suitability depends on your individual assessment." },
    ],
    related: ["understanding-family-planning-options"],
  },
  {
    slug: "vitamin-drips",
    name: "Vitamin Drips",
    icon: "Droplets",
    featured: true,
    short: "Intravenous vitamin therapy offered only after medical assessment and under supervision.",
    intro:
      "Vitamin drips deliver fluids and selected vitamins intravenously. At Lilly Medical Aesthetics, a drip is only administered after a consultation confirms it is medically suitable, and it is given under professional supervision.",
    purpose: [
      "Administered following an individual medical assessment",
      "Formulations selected according to clinical suitability",
      "Delivered in a calm, supervised clinical setting",
    ],
    expect: [
      "A pre-treatment consultation and health screening",
      "Placement of a small intravenous line by a trained professional",
      "Monitoring for the duration of the drip",
      "Post-treatment guidance before you leave",
    ],
    consultation: "A medical assessment is required before every first treatment. Drips may not be suitable for everyone, including people with certain heart, kidney or other medical conditions.",
    faqs: [
      { q: "How long does a drip take?", a: "Timing varies by formulation; the practice will advise you when booking." },
      { q: "Is it suitable for me?", a: "Suitability is determined during your consultation. We do not offer drips without an assessment." },
    ],
    related: ["understanding-vitamin-drip-therapy"],
  },
  {
    slug: "chemical-peels",
    name: "Medical-Grade Chemical Peels",
    icon: "Sparkles",
    featured: true,
    short: "Professional peels selected after a skin assessment, with clear aftercare guidance.",
    intro:
      "A chemical peel applies a carefully selected solution to the skin to exfoliate its outer layers. Medical-grade peels are chosen according to your skin type, concerns and history.",
    purpose: [
      "Concerns that may be assessed include uneven tone, texture, pigmentation and congestion",
      "Peel type and strength selected for your skin",
      "Often planned as a course with your practitioner",
    ],
    expect: [
      "A skin assessment and discussion of your goals",
      "Cleansing and preparation of the skin",
      "Application of the peel, which may tingle or feel warm",
      "Possible redness, dryness or flaking for several days afterwards",
    ],
    consultation: "A skin assessment is required. Peels may not be suitable during pregnancy, with active skin infection, or with certain medications.",
    aftercare: [
      "Use a gentle cleanser and moisturiser",
      "Apply broad-spectrum sunscreen daily and avoid sun exposure",
      "Do not pick or peel flaking skin",
      "Avoid active ingredients until advised",
    ],
    faqs: [
      { q: "Is there downtime?", a: "This depends on the peel. Lighter peels may cause mild redness; stronger peels can involve several days of peeling." },
      { q: "How many sessions will I need?", a: "Your practitioner will recommend a plan after assessing your skin." },
    ],
    related: ["understanding-chemical-peels", "why-a-medical-consultation-matters"],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    icon: "ScanFace",
    featured: true,
    short: "Controlled micro-channelling of the skin, planned around your skin assessment.",
    intro:
      "Microneedling uses fine, sterile needles to create controlled micro-channels in the skin. It is offered after a consultation to determine whether it is appropriate for your skin and concerns.",
    purpose: [
      "Commonly considered for skin texture and the appearance of some scars",
      "Treatment depth and frequency tailored to your skin",
      "Performed with sterile, single-use needle cartridges",
    ],
    expect: [
      "A skin assessment and treatment plan",
      "Application of a topical numbing agent where appropriate",
      "Redness similar to mild sunburn for one to three days",
      "Results, where achieved, develop gradually over weeks",
    ],
    consultation: "Not suitable with active acne, skin infection, certain skin conditions or some medications. Your suitability is confirmed at consultation.",
    aftercare: [
      "Avoid make-up for 24 hours",
      "Use only gentle, recommended products",
      "Apply sunscreen daily and avoid direct sun",
      "Avoid swimming, saunas and strenuous exercise for 24–48 hours",
    ],
    faqs: [
      { q: "Does it hurt?", a: "Most people feel mild discomfort. A numbing cream is usually applied beforehand." },
      { q: "What is the downtime?", a: "Redness and sensitivity typically settle within a few days." },
    ],
    related: ["what-is-microneedling"],
  },
  {
    slug: "skin-tag-removal",
    name: "Skin Tag Removal",
    icon: "Scissors",
    short: "Assessment and removal of skin tags, with examination of any lesion of concern.",
    intro:
      "Skin tags are common, usually harmless growths. Before removal, the lesion is examined to confirm it is a skin tag. Any lesion with unusual features may need further examination or referral.",
    purpose: [
      "Clinical examination of the lesion before any removal",
      "Removal using an appropriate, sterile technique",
      "Further examination or referral where a lesion looks atypical",
    ],
    expect: [
      "An examination and discussion of the procedure",
      "Local anaesthetic where appropriate",
      "A quick procedure with simple wound care afterwards",
    ],
    consultation: "Any lesion that is changing, bleeding, itching or irregular in colour or shape should be assessed — it may need further investigation rather than simple removal.",
    aftercare: ["Keep the area clean and dry", "Follow the wound-care instructions provided", "Contact the practice if you notice signs of infection"],
    faqs: [{ q: "Will it leave a mark?", a: "Most small removals heal well, but some marking is possible. This will be discussed beforehand." }],
    related: ["understanding-skin-tags"],
  },
  {
    slug: "medical-weight-management",
    name: "Medical Weight Management",
    icon: "Scale",
    featured: true,
    short: "Medically supervised programmes built on individual assessment and regular review.",
    intro:
      "Medical weight management looks at the whole picture — health history, lifestyle, medication and goals. Any programme is based on an individual assessment and includes medical supervision and follow-up.",
    purpose: [
      "Individual assessment, which may include relevant tests",
      "A personalised plan that may include nutrition, activity and, where appropriate, medication",
      "Regular reviews to monitor progress and safety",
    ],
    expect: [
      "A detailed initial consultation",
      "Measurements and baseline checks",
      "A written plan with scheduled follow-ups",
    ],
    consultation: "Results vary between individuals and are not guaranteed. Medication, if used, is prescribed only when clinically appropriate.",
    faqs: [{ q: "How much weight will I lose?", a: "Outcomes differ from person to person. Your plan focuses on safe, sustainable health improvements." }],
    related: ["understanding-medical-weight-management"],
  },
  {
    slug: "hair-loss-treatment",
    name: "Hair-Loss Treatment",
    icon: "Wind",
    short: "Assessment of possible causes of hair loss and discussion of available options.",
    intro:
      "Hair loss can have many causes, including genetics, hormonal changes, nutritional factors, stress, certain illnesses and hair-care practices. Understanding the likely cause comes first.",
    purpose: [
      "Assessment of history, scalp and hair pattern",
      "Blood tests where indicated",
      "Discussion of treatment options suited to the likely cause",
    ],
    expect: ["A detailed consultation and examination", "Possible investigations", "A plan with realistic expectations and follow-up"],
    consultation: "Response to treatment varies and regrowth cannot be promised. Some causes need referral to a specialist.",
    faqs: [{ q: "Can hair loss be reversed?", a: "It depends on the cause. Your practitioner will explain realistic expectations after assessment." }],
    related: ["understanding-common-causes-of-hair-loss"],
  },
  {
    slug: "minor-surgical-procedures",
    name: "Minor Surgical Procedures",
    icon: "Syringe",
    short: "Selected minor procedures, performed subject to medical assessment and suitability.",
    intro:
      "Certain minor procedures can be performed in the practice under local anaesthetic. Every procedure is subject to a prior medical assessment to confirm it is appropriate to perform in this setting.",
    purpose: ["Assessment to confirm suitability for in-practice treatment", "Sterile technique and clear consent", "Referral where a procedure is better performed elsewhere"],
    expect: ["A consultation before any procedure", "Informed consent", "Written aftercare and follow-up where needed"],
    consultation: "Please contact the practice to discuss your specific concern. The list of procedures offered will be published once confirmed by the practice.",
    faqs: [{ q: "Which procedures do you perform?", a: "Please enquire — the practice will confirm whether your procedure can be performed here." }],
    related: ["what-to-expect-during-a-medical-consultation"],
  },
  {
    slug: "chronic-health-care",
    name: "Chronic Health Care",
    icon: "Activity",
    short: "Ongoing monitoring, clinical reviews and individualised management of chronic conditions.",
    intro:
      "Living with a long-term condition calls for continuity. We provide ongoing health monitoring, regular clinical reviews and management tailored to you.",
    purpose: ["Regular monitoring and reviews", "Medication review and management", "Coordination with specialists and laboratories where needed"],
    expect: ["Scheduled check-ups", "Relevant tests at appropriate intervals", "Clear communication about your plan"],
    consultation: "Bring your current medication and any previous results to your first visit.",
    faqs: [{ q: "How often should I be reviewed?", a: "This depends on your condition and stability; your doctor will advise." }],
    related: ["the-importance-of-regular-health-checks"],
  },
  {
    slug: "blood-tests-and-dna-medicals",
    name: "Blood Tests & DNA Medicals",
    icon: "TestTube",
    short: "Blood testing and DNA-related services, subject to confirmed laboratory arrangements.",
    intro:
      "Blood tests help screen for, diagnose and monitor health conditions. DNA-related services may also be available. The exact tests offered depend on the practice's laboratory arrangements.",
    purpose: ["Blood tests requested on clinical grounds", "DNA-related services, where available", "Explanation of results and next steps"],
    expect: ["A consultation to determine which tests are appropriate", "Sample collection", "Follow-up to discuss results"],
    consultation: "Please contact the practice to confirm which tests are currently offered and any preparation required, such as fasting.",
    faqs: [{ q: "Do I need to fast?", a: "Some tests require fasting. You will be advised when booking." }],
    related: ["the-importance-of-regular-health-checks"],
  },
  {
    slug: "gut-and-skin-health",
    name: "Gut & Skin Health",
    icon: "Leaf",
    active: false,
    short: "A dedicated programme — details will be published once confirmed by Dr N. Skhosana.",
    intro:
      "Our Gut & Skin Health service is being finalised. Treatment details, indications and information will be published here once confirmed by Dr N. Skhosana.",
    purpose: ["Details to be confirmed by the practice"],
    expect: ["Details to be confirmed by the practice"],
    consultation: "Please contact the practice for more information.",
    faqs: [],
    related: [],
  },
];

export const activeServices = services.filter((s) => s.active !== false);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
