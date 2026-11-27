export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: { h?: string; p: string }[];
  service?: string;
};

export const categories = [
  "Skin Health",
  "Medical Aesthetics",
  "Women's Health",
  "Family Planning",
  "Weight Management",
  "Hair Health",
  "General Health",
  "Wellness and Lifestyle",
];

export const posts: Post[] = [
  {
    slug: "understanding-chemical-peels",
    title: "Understanding Chemical Peels",
    category: "Medical Aesthetics",
    date: "2026-11-20",
    service: "chemical-peels",
    excerpt: "What a medical-grade chemical peel involves, who it may suit, and how to care for your skin afterwards.",
    body: [
      { p: "A chemical peel is a professional treatment in which a carefully selected solution is applied to the skin to remove its outermost layers. As the skin renews, many people notice a smoother, more even appearance." },
      { h: "Different peels for different skin", p: "Peels vary in strength. Superficial peels work on the very top layer and usually involve little downtime, while deeper peels act further into the skin and require more recovery. The right choice depends on your skin type, concerns and history — which is why an assessment comes first." },
      { h: "What it may help with", p: "Peels are commonly considered for uneven skin tone, dullness, rough texture and some forms of pigmentation. They are not suitable for everyone, and individual results vary." },
      { h: "Aftercare matters", p: "Freshly peeled skin is sensitive. Daily broad-spectrum sunscreen, a gentle routine and resisting the urge to pick flaking skin all help healing and reduce the risk of complications such as pigment changes." },
    ],
  },
  {
    slug: "what-is-microneedling",
    title: "What Is Microneedling?",
    category: "Skin Health",
    date: "2026-11-18",
    service: "microneedling",
    excerpt: "How microneedling works, what the treatment feels like and what recovery usually involves.",
    body: [
      { p: "Microneedling uses a device with very fine, sterile needles to create controlled micro-channels in the skin. These tiny injuries prompt the skin's natural repair processes." },
      { h: "Who considers it", p: "It is often discussed for skin texture and the appearance of certain types of scarring. Whether it is appropriate for you depends on your skin, any active skin conditions and your medical history." },
      { h: "The treatment", p: "A numbing cream is usually applied first. The procedure itself typically feels like light scratching or vibration. Afterwards the skin is red, similar to mild sunburn, for a day or a few days." },
      { h: "Patience and protection", p: "Any changes develop gradually over weeks, and a course of treatments may be recommended. Sun protection and a gentle skincare routine are essential during recovery." },
    ],
  },
  {
    slug: "understanding-common-causes-of-hair-loss",
    title: "Understanding Common Causes of Hair Loss",
    category: "Hair Health",
    date: "2026-11-15",
    service: "hair-loss-treatment",
    excerpt: "Hair loss has many possible causes. Understanding yours is the first step to the right plan.",
    body: [
      { p: "Losing some hair each day is normal. When shedding increases, hair thins noticeably or patches appear, it is worth having it assessed." },
      { h: "Common causes", p: "These include inherited pattern hair loss, hormonal changes (for example after pregnancy), significant physical or emotional stress, thyroid conditions, low iron and other nutritional factors, certain medications, and hairstyles that pull on the hair over time." },
      { h: "Why assessment matters", p: "Because the causes vary so widely, treatment depends on what is driving the hair loss. A consultation may include questions about your health and hair care, a scalp examination and, where indicated, blood tests." },
      { h: "Realistic expectations", p: "Some types of hair loss respond well to treatment, while others are more difficult to change. Your doctor can explain what is realistic in your situation." },
    ],
  },
  {
    slug: "why-a-medical-consultation-matters",
    title: "Why a Medical Consultation Matters Before Aesthetic Treatments",
    category: "Medical Aesthetics",
    date: "2026-11-12",
    excerpt: "Aesthetic treatments are medical procedures. Here is why a proper assessment should always come first.",
    body: [
      { p: "Treatments such as chemical peels, microneedling and vitamin drips can be very rewarding — but they are still medical procedures that affect the body." },
      { h: "Safety first", p: "A consultation identifies anything that could make a treatment unsuitable, such as certain medications, pregnancy, skin infections or underlying conditions." },
      { h: "The right treatment for you", p: "Your skin type, concerns and goals all influence which treatment, if any, is likely to help. An assessment ensures recommendations are personal rather than one-size-fits-all." },
      { h: "Informed decisions", p: "A consultation gives you the chance to understand the benefits, risks, costs and alternatives before you decide — and to ask every question you have." },
    ],
  },
  {
    slug: "understanding-family-planning-options",
    title: "Understanding Family Planning Options",
    category: "Family Planning",
    date: "2026-11-10",
    service: "family-planning",
    excerpt: "An overview of contraceptive approaches and why personal assessment helps you choose.",
    body: [
      { p: "Family planning gives you control over whether and when to have children. There is a wide range of contraceptive options, and the best one is the one that suits your health, lifestyle and preferences." },
      { h: "Broad categories", p: "Options include short-acting methods such as pills, long-acting reversible methods such as injections, implants and intrauterine devices, and barrier methods such as condoms — which also help protect against sexually transmitted infections." },
      { h: "Choosing together", p: "Some methods are not suitable for people with certain health conditions. A consultation lets your doctor check what is safe for you and explain the benefits and possible side effects of each option." },
    ],
  },
  {
    slug: "what-to-expect-during-a-medical-consultation",
    title: "What to Expect During a Medical Consultation",
    category: "General Health",
    date: "2026-11-08",
    service: "medical-consultations",
    excerpt: "A simple guide to preparing for your visit and getting the most from it.",
    body: [
      { p: "A good consultation is a conversation. Knowing what to expect can help you feel at ease and make the most of your time." },
      { h: "Before your visit", p: "Write down your main concerns and questions, and bring a list of your current medication, any recent test results and your medical aid details if applicable." },
      { h: "During the consultation", p: "Your doctor will ask about your symptoms and history, examine you where appropriate, and explain what they find. You may be offered tests, treatment, a referral or a follow-up appointment." },
      { h: "Afterwards", p: "Make sure you understand the plan before you leave. If anything changes or you have concerns, contact the practice." },
    ],
  },
  {
    slug: "understanding-medical-weight-management",
    title: "Understanding Medical Weight Management",
    category: "Weight Management",
    date: "2026-11-05",
    service: "medical-weight-management",
    excerpt: "How a medically supervised approach differs from a diet, and what it typically involves.",
    body: [
      { p: "Weight is influenced by many factors — genetics, hormones, sleep, stress, medication, activity and nutrition. Medical weight management takes all of these into account." },
      { h: "An individual assessment", p: "A programme starts with understanding your history and health, and may include measurements and blood tests to identify relevant conditions." },
      { h: "A personalised plan", p: "Plans typically combine nutrition and activity guidance, and may include medication where clinically appropriate. Regular reviews help monitor progress and safety." },
      { h: "Sustainable goals", p: "Everyone responds differently. The aim is safe, sustainable improvement in health rather than rapid or guaranteed results." },
    ],
  },
  {
    slug: "understanding-skin-tags",
    title: "Understanding Skin Tags",
    category: "Skin Health",
    date: "2026-11-02",
    service: "skin-tag-removal",
    excerpt: "What skin tags are, why they appear and when a skin lesion needs a closer look.",
    body: [
      { p: "Skin tags are small, soft growths that often appear on the neck, underarms, eyelids or in skin folds. They are very common and usually harmless." },
      { h: "Why they occur", p: "They are more common with age, friction and in some people with weight changes or hormonal changes such as pregnancy." },
      { h: "When to have a lesion checked", p: "Any spot that grows quickly, bleeds, itches, changes colour or has an irregular shape should be examined by a doctor. Not every growth is a skin tag." },
      { h: "Removal", p: "Skin tags can be removed for comfort or appearance after examination. Do not attempt to remove them yourself, as this can cause bleeding or infection." },
    ],
  },
  {
    slug: "the-importance-of-regular-health-checks",
    title: "The Importance of Regular Health Checks",
    category: "General Health",
    date: "2026-10-30",
    service: "chronic-health-care",
    excerpt: "Why routine check-ups matter, even when you feel well.",
    body: [
      { p: "Many common conditions, such as high blood pressure, diabetes and high cholesterol, can develop without obvious symptoms." },
      { h: "Early detection", p: "Regular health checks can identify risks early, when they are often easier to manage." },
      { h: "What a check may include", p: "Depending on your age and history, this may include blood pressure, weight, blood tests and age-appropriate screening." },
      { h: "Staying on track", p: "If you already live with a chronic condition, regular reviews help keep treatment working well for you." },
    ],
  },
  {
    slug: "understanding-vitamin-drip-therapy",
    title: "Understanding Vitamin Drip Therapy",
    category: "Wellness and Lifestyle",
    date: "2026-10-27",
    service: "vitamin-drips",
    excerpt: "What an IV vitamin drip involves, and why medical assessment and supervision are essential.",
    body: [
      { p: "A vitamin drip delivers fluids and selected vitamins directly into a vein through a small intravenous line." },
      { h: "Not for everyone", p: "Because a drip enters the bloodstream directly, it is a medical treatment. Certain heart, kidney and other conditions, as well as some medications, can make it unsuitable." },
      { h: "Assessment and supervision", p: "A consultation beforehand checks your suitability, and the drip is given and monitored by trained professionals." },
      { h: "Keeping expectations realistic", p: "For most healthy people, a balanced diet provides the nutrients they need. Your doctor can discuss whether a drip is appropriate in your situation." },
    ],
  },
];

export const readingTime = (p: Post) =>
  Math.max(2, Math.round(p.body.reduce((n, b) => n + (b.h ?? "").split(" ").length + b.p.split(" ").length, 0) / 200));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
