export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingTime: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  author: string;
  content: BlogBlock[];
  faqs: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment: How to Get Rid of Pimples Permanently",
    metaTitle: "Acne Treatment | How to Get Rid of Pimples Permanently",
    description:
      "Learn what causes pimples, which acne treatments actually work, and when to see a dermatologist. Dr. Anisha Sharma offers in-clinic and remote consultations at Tvachit Clinic.",
    keywords: [
      "acne treatment",
      "how to get rid of pimples",
      "pimple treatment",
      "cystic acne treatment",
      "best acne treatment",
    ],
    datePublished: "2026-09-15",
    dateModified: "2026-09-28",
    readingTime: "8 min read",
    category: "Acne",
    excerpt:
      "Pimples that keep coming back need a medical plan, not another home remedy. See how a dermatologist treats acne by type, cause, and skin — in clinic or remotely.",
    image: "/cmeel.png",
    imageAlt: "Dermatologist acne treatment for pimples and breakouts",
    primaryKeyword: "acne treatment",
    author: "Dr. Anisha Sharma",
    content: [
      {
        type: "p",
        text: "If you are searching for acne treatment, you are likely tired of creams, face washes, and advice that only calms pimples for a week. Acne is a medical skin condition. Lasting results come from identifying the type of acne, the trigger, and a plan a dermatologist can adjust as your skin changes.",
      },
      {
        type: "p",
        text: "At Tvachit Clinic, Dr. Anisha Sharma treats mild breakouts, hormonal acne, and painful cystic acne with evidence-based care — in person or through a remote consultation. This guide explains why pimples form, which treatments actually work, and when it is time to see a skin specialist instead of self-medicating.",
      },
      {
        type: "h2",
        text: "What causes acne and why pimples keep coming back",
      },
      {
        type: "p",
        text: "Acne starts when hair follicles clog with oil (sebum) and dead skin cells. Bacteria then inflame the follicle, which shows up as whiteheads, blackheads, papules, pustules, nodules, or cysts. Common drivers include hormones, humidity, sweat, comedogenic makeup, steroid creams, and picking at lesions.",
      },
      {
        type: "p",
        text: "Teen acne is often oil-driven. Adult acne, especially along the jawline and chin, is frequently hormonal. Using random fairness creams or leftover antibiotics can worsen pigmentation and resistance. That is why “how to get rid of pimples permanently” is the wrong question if the underlying cause is never treated.",
      },
      {
        type: "h2",
        text: "Types of acne a dermatologist will diagnose",
      },
      {
        type: "ul",
        items: [
          "Comedonal acne: blackheads and whiteheads from clogged pores.",
          "Inflammatory acne: red, tender pimples and pustules.",
          "Cystic or nodular acne: deep, painful lumps that often scar.",
          "Hormonal acne: cyclic breakouts around the jaw, chin, and neck.",
          "Acne with pigmentation: dark marks (PIH) that linger after the pimple heals, common on Indian skin.",
        ],
      },
      {
        type: "p",
        text: "Treatment that works for blackheads will not clear cystic acne. A consultation lets the dermatologist map lesions, check for scarring risk, and rule out conditions that look like acne, such as folliculitis or rosacea. Procedures still need an in-clinic visit; medicines and follow-up can often start remotely.",
      },
      {
        type: "h2",
        text: "Acne treatments that work (and what to skip)",
      },
      {
        type: "h3",
        text: "Medical topical and oral therapy",
      },
      {
        type: "p",
        text: "First-line pimple treatment is usually a combination of topical retinoids, benzoyl peroxide, and, when needed, prescription antibiotics or hormonal therapy. These are dosed for your skin type so you get results without excessive dryness or irritation. Oral isotretinoin is reserved for severe, scarring, or treatment-resistant acne and is only prescribed with proper monitoring.",
      },
      {
        type: "h3",
        text: "In-clinic procedures",
      },
      {
        type: "ul",
        items: [
          "Comedone extraction for stubborn blackheads and whiteheads.",
          "Chemical peels to unclog pores, fade marks, and speed cell turnover.",
          "Intralesional injections for large, painful cysts.",
          "Medi-facials that cleanse and hydrate without clogging pores.",
        ],
      },
      {
        type: "p",
        text: "These procedures complement medicines. They are not a substitute for a daily routine, and they should be done by a trained dermatologist, not a parlour, especially if you already have scars or dark spots.",
      },
      {
        type: "h3",
        text: "Acne scar treatment",
      },
      {
        type: "p",
        text: "Once active acne is controlled, ice-pick, boxcar, or rolling scars can be treated with peels, subcision, or other clinic procedures after assessment. The fastest way to limit scars is to stop picking and start medical acne treatment early.",
      },
      {
        type: "h2",
        text: "A simple acne-safe routine you can start today",
      },
      {
        type: "ul",
        items: [
          "Cleanse twice daily with a gentle, non-foaming or dermatologist-recommended wash. Do not scrub.",
          "Use only non-comedogenic moisturiser. Dry, stripped skin produces more oil.",
          "Apply a broad-spectrum sunscreen every morning. Many acne medicines increase sun sensitivity, and sun darkens leftover marks.",
          "Avoid stacking 5–6 “pimple products”. One prescribed routine beats a shelf of actives.",
          "Do not buy over-the-counter steroid or fairness creams for pimples. They can cause steroid-induced acne and lasting damage.",
        ],
      },
      {
        type: "h2",
        text: "When to see a dermatologist for acne",
      },
      {
        type: "p",
        text: "Book a consultation if pimples last more than a few weeks, hurt, leave dark marks or scars, flare around your period, or have not improved with drugstore products. You should also see a skin specialist if you have tried multiple “acne kits” and your barrier is now red, peeling, or burning.",
      },
      {
        type: "p",
        text: "Dr. Anisha Sharma offers in-clinic visits at Tvachit Clinic and remote consultations for patients who cannot come in. Call +91 63527 17046 to start a personalised acne treatment plan rather than guessing with another cream.",
      },
    ],
    faqs: [
      {
        question: "Can acne be cured permanently?",
        answer:
          "Acne can be controlled long term, but “permanent cure” depends on the cause. Hormonal and genetic acne often need maintenance care. A dermatologist can clear active lesions, prevent scars, and keep breakouts from returning as often.",
      },
      {
        question: "How long does acne treatment take to show results?",
        answer:
          "Most medical acne treatments take 6 to 12 weeks to show a clear change. Cysts and scarring acne may need a longer, staged plan. Stopping medicines as soon as skin looks better is a common reason pimples return.",
      },
      {
        question: "Is it safe to pop pimples at home?",
        answer:
          "No. Squeezing drives bacteria deeper, increases inflammation, and is a leading cause of acne scars and dark spots on Indian skin. Painful cysts should be treated in clinic, not at home.",
      },
      {
        question: "Can I start acne treatment with a remote consultation?",
        answer:
          "Yes. Dr. Anisha Sharma offers remote consultations to assess your acne, prescribe a routine, and decide if you need an in-clinic procedure. Call +91 63527 17046 to book.",
      },
    ],
  },
  {
    slug: "hair-fall-treatment",
    title:
      "Hair Fall Treatment: Causes, Solutions and When to See a Doctor",
    metaTitle: "Hair Fall Treatment | Stop Hair Loss Early",
    description:
      "Hair fall treatment starts with the right diagnosis. Learn why hair is shedding, which treatments help, and when to see a dermatologist. In-clinic and remote consultations available.",
    keywords: [
      "hair fall treatment",
      "hair loss treatment",
      "how to stop hair fall",
      "hair fall treatment for women",
      "PRP hair treatment",
    ],
    datePublished: "2026-09-20",
    dateModified: "2026-09-28",
    readingTime: "9 min read",
    category: "Hair",
    excerpt:
      "Losing more than 100 hairs a day, a widening part, or a receding hairline needs diagnosis, not another oil. See how hair fall is treated — including remote consults.",
    image: "/hair.png",
    imageAlt: "Hair fall treatment and hair loss care at Tvachit Clinic",
    primaryKeyword: "hair fall treatment",
    author: "Dr. Anisha Sharma",
    content: [
      {
        type: "p",
        text: "Hair fall treatment searches usually start after the bathroom drain fills up, the parting looks wider, or a comb comes away with clumps. Some shedding is normal. A sudden increase, a receding hairline, or thinning at the crown is not something oils and shampoos will reverse on their own.",
      },
      {
        type: "p",
        text: "If you are looking for hair fall treatment, the first step is finding out why the hair is falling. Pattern hair loss, telogen effluvium, thyroid disease, iron deficiency, PCOS, and scalp conditions each need a different plan. Dr. Anisha Sharma evaluates the scalp and hair — in clinic or remotely — before recommending medicines or procedures.",
      },
      {
        type: "h2",
        text: "How much hair fall is normal?",
      },
      {
        type: "p",
        text: "Most people shed about 50 to 100 hairs a day as part of the growth cycle. You should get hair loss treatment assessed if you notice more shedding after a wash, a visible scalp in photos, a receding temple, thinning of the ponytail, or hair that has not grown back 3 to 6 months after an illness, delivery, or crash diet.",
      },
      {
        type: "h2",
        text: "Common causes of hair fall in men and women",
      },
      {
        type: "ul",
        items: [
          "Androgenetic alopecia: hereditary pattern hair loss in men and women. The most common reason people search “how to stop hair fall”.",
          "Telogen effluvium: diffuse shedding after fever, COVID, surgery, stress, crash diets, or a new baby.",
          "Nutritional gaps: low iron, vitamin D, or protein, especially in vegetarian diets and postpartum women.",
          "Hormonal conditions: thyroid disorders and PCOS-related hair fall in women.",
          "Scalp disease: dandruff, seborrheic dermatitis, or fungal infection that inflames follicles.",
          "Traction and chemical damage: tight hairstyles, keratin treatments, and harsh colouring.",
        ],
      },
      {
        type: "p",
        text: "Hair fall treatment for women is often delayed because thinning is blamed on “weak hair” or water quality. Female pattern hair loss and postpartum shedding are medical issues. The earlier a dermatologist sees the scalp, the more hair can be preserved.",
      },
      {
        type: "h2",
        text: "Hair loss treatments that actually help",
      },
      {
        type: "h3",
        text: "Medical therapy",
      },
      {
        type: "p",
        text: "Proven options include topical minoxidil, prescription anti-androgens when appropriate, and treatment of the underlying thyroid, iron, or hormonal problem. Supplements only help if a verified deficiency exists. Random “hair gummies” will not restart miniaturised follicles.",
      },
      {
        type: "h3",
        text: "Clinic procedures",
      },
      {
        type: "p",
        text: "Depending on the diagnosis, a dermatologist may recommend platelet-rich plasma (PRP), mesotherapy, or medical scalp treatments alongside medicines. These are adjuncts, not magic. They work best when pattern hair loss is still in an early or moderate stage and the patient continues maintenance therapy.",
      },
      {
        type: "h3",
        text: "Laser hair removal is not hair fall treatment",
      },
      {
        type: "p",
        text: "Tvachit also offers laser hair removal for unwanted body or facial hair. That is a different service from hair fall treatment. If your concern is thinning on the scalp, you need a hair-loss evaluation, not laser.",
      },
      {
        type: "h2",
        text: "What you can do at home while you wait for an appointment",
      },
      {
        type: "ul",
        items: [
          "Eat enough protein and do not crash-diet.",
          "Use a gentle shampoo; treat visible dandruff instead of oiling an inflamed scalp.",
          "Avoid tight buns, daily heat, and harsh chemical straightening.",
          "Do not start minoxidil, steroids, or hormone pills from a pharmacy without a prescription.",
          "Take photos of your hairline and parting every month so progress is measurable.",
        ],
      },
      {
        type: "h2",
        text: "When to see a dermatologist for hair fall",
      },
      {
        type: "p",
        text: "See a skin and hair specialist if shedding lasts more than 6 to 8 weeks, you see a widening part or receding hairline, you have patchy bald spots, or hair fall started after pregnancy, weight loss, or a new medicine. Sudden bald patches can be alopecia areata and should not wait.",
      },
      {
        type: "p",
        text: "Dr. Anisha Sharma offers hair fall treatment at Tvachit Clinic and remote consultations if you cannot visit in person. Call +91 63527 17046 to book a scalp assessment and a plan based on the cause of your hair loss, not a one-size oil.",
      },
    ],
    faqs: [
      {
        question: "How can I stop hair fall permanently?",
        answer:
          "Permanent control depends on the cause. Pattern hair loss usually needs long-term medical treatment to maintain density. Telogen effluvium often settles once the trigger is treated. A dermatologist can tell which type you have.",
      },
      {
        question: "Does oiling or onion juice stop hair fall?",
        answer:
          "Oiling can soften hair shafts but does not treat androgenetic alopecia or nutritional deficiency. Heavy oil on an itchy, flaky scalp can worsen inflammation. Use oils only if your dermatologist says the scalp can tolerate them.",
      },
      {
        question: "Is PRP good for hair fall?",
        answer:
          "PRP can support hair density in selected patients with early pattern hair loss when combined with medical therapy. It is not useful for everyone, especially if follicles are already gone. Suitability is decided after examination.",
      },
      {
        question: "Can hair fall be assessed in a remote consultation?",
        answer:
          "Yes. Dr. Anisha Sharma can review history, photos, and recent reports remotely, start medical treatment when appropriate, and advise if you need an in-clinic procedure such as PRP. Call +91 63527 17046 to book.",
      },
    ],
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment: How to Remove Dark Spots on the Face",
    metaTitle: "Pigmentation Treatment | Remove Dark Spots on Face",
    description:
      "Pigmentation treatment for melasma, tanning, and dark spots. Learn causes, safe ways to fade marks, and when to see a dermatologist. In-clinic and remote consultations available.",
    keywords: [
      "pigmentation treatment",
      "how to remove dark spots on face",
      "melasma treatment",
      "hyperpigmentation treatment",
      "dark spots on face",
    ],
    datePublished: "2026-09-25",
    dateModified: "2026-09-28",
    readingTime: "8 min read",
    category: "Pigmentation",
    excerpt:
      "Dark spots, melasma, and tanning need sun protection plus medical treatment. Learn how pigmentation is diagnosed and treated — including by remote consult.",
    image: "/aging.png",
    imageAlt: "Pigmentation and dark spot treatment on the face",
    primaryKeyword: "pigmentation treatment",
    author: "Dr. Anisha Sharma",
    content: [
      {
        type: "p",
        text: "Dark patches on the cheeks, forehead, or upper lip are one of the most common reasons people look for pigmentation treatment. Indian skin tans easily and also marks after pimples. The result is uneven tone that fairness creams promise to erase and almost never do safely.",
      },
      {
        type: "p",
        text: "“How to remove dark spots on face” has a real answer: identify the type of pigmentation, protect the skin from the sun, and use prescription-strength treatment a dermatologist chooses for your skin. At Tvachit Clinic, pigmentation care is medical, not a bleaching facial — and Dr. Anisha Sharma also sees patients remotely.",
      },
      {
        type: "h2",
        text: "Types of pigmentation: tanning, PIH, and melasma",
      },
      {
        type: "ul",
        items: [
          "Sun tanning: extra melanin from UV exposure. Improves with strict sunscreen and time.",
          "Post-inflammatory hyperpigmentation (PIH): brown marks left after acne, insect bites, or waxing. Very common on Indian skin.",
          "Melasma: symmetric brown-grey patches on the cheeks, forehead, or moustache area, often triggered by sun and hormones (pregnancy, OC pills).",
          "Freckles and sun spots: discrete spots from chronic sun exposure.",
          "Perioral or under-eye darkness: sometimes pigment, sometimes shadow, veins, or habit. Needs examination, not a one-cream solution.",
        ],
      },
      {
        type: "p",
        text: "Melasma treatment is not the same as treating a pimple mark. Melasma sits deeper, rebounds with sun, and can worsen with heat, waxing, and harsh scrubs. Guessing the type at home is why so many people spend years on the wrong products.",
      },
      {
        type: "h2",
        text: "Why fairness creams and steroid combinations make pigmentation worse",
      },
      {
        type: "p",
        text: "Many over-the-counter “fairness” or “spot removal” creams contain topical steroids or illegal bleaching agents. Short-term lightening is followed by rebound pigmentation, thin skin, redness, and acne. If a cream gave dramatic whitening in days, stop it and see a dermatologist. Safe hyperpigmentation treatment is slower and monitored.",
      },
      {
        type: "h2",
        text: "Pigmentation treatments a dermatologist may use",
      },
      {
        type: "h3",
        text: "Topical medical therapy",
      },
      {
        type: "p",
        text: "Prescription regimens may include retinoids, azelaic acid, vitamin C, niacinamide, and carefully supervised hydroquinone or combination creams when indicated. These are chosen for your diagnosis and skin barrier. More layers of acids are not better.",
      },
      {
        type: "h3",
        text: "Chemical peels and medi-facials",
      },
      {
        type: "p",
        text: "Supervised chemical peels can fade PIH and improve dull, uneven tone. Medi-facials at Tvachit support hydration and glow without the aggressive bleaching used in some salons. Peels for melasma are selected conservatively so the pigment does not rebound.",
      },
      {
        type: "h3",
        text: "Sun protection is half the treatment",
      },
      {
        type: "p",
        text: "No pigmentation treatment works without daily broad-spectrum sunscreen, a hat in peak sun, and limiting heat exposure for melasma. Reapply sunscreen if you are outdoors. This is not optional advice; UV is the main reason dark spots return after they fade.",
      },
      {
        type: "h2",
        text: "How long until dark spots fade?",
      },
      {
        type: "p",
        text: "Acne marks may fade in weeks to a few months with the right routine. Melasma is chronic: it can be lightened and controlled, then needs maintenance. Anyone promising “permanent fairness in one sitting” is selling a procedure that can burn or rebound. Realistic pigmentation treatment is measured in months, with photographs and follow-up.",
      },
      {
        type: "h2",
        text: "When to see a dermatologist for pigmentation",
      },
      {
        type: "p",
        text: "See a skin specialist if patches are spreading, appeared during pregnancy, followed acne, or you have been using unknown fairness creams. Also book if home serums sting, peel, or have made the skin darker. Rapidly changing, irregular, or single odd-looking spots should be examined to rule out other skin conditions.",
      },
      {
        type: "p",
        text: "Tvachit Clinic offers pigmentation treatment, medi-facials, and anti-aging care under Dr. Anisha Sharma, with remote consultations for patients who cannot visit in person. Call +91 63527 17046 for an assessment of your dark spots and a plan that is safe for Indian skin.",
      },
    ],
    faqs: [
      {
        question: "How can I remove pigmentation from my face permanently?",
        answer:
          "Some marks, like post-acne spots, can fade almost completely. Melasma is usually controlled rather than cured and can return with sun or hormones. Permanent-sounding salon packages often use unsafe bleaching. A dermatologist sets a realistic plan.",
      },
      {
        question: "Which treatment is best for dark spots on the face?",
        answer:
          "The best treatment depends on whether you have tanning, PIH, or melasma. It typically combines sunscreen, prescription topicals, and sometimes peels. The same laser or peel is not right for every type of pigment.",
      },
      {
        question: "Can home remedies like lemon or turmeric remove dark spots?",
        answer:
          "Lemon can burn and darken skin. Turmeric and homemade scrubs do not treat melasma and can irritate the barrier. Stick to dermatologist-approved products and sun protection.",
      },
      {
        question: "Can pigmentation be treated through a remote consultation?",
        answer:
          "Yes. Dr. Anisha Sharma can review photos, identify likely pigment type, and start medical therapy remotely. Peels and procedures still need an in-clinic visit. Call +91 63527 17046 to book.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  return blogPosts.filter((post) => post.slug !== slug);
}
