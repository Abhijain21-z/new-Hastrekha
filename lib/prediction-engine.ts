import type { Language } from "./language-context";

export interface PredictionReport {
  personality: string;
  qualities: { strengths: string[]; weaknesses: string[] };
  purpose: string;
  career: string;
  wealth: string;
  marriage: string;
  partnerNature: string;
  education: string;
  challengeAges: { age: string; description: string }[];
  property: string;
  health: string[];
  spiritual: string;
  lucky: {
    numbers: string;
    color: string;
    day: string;
  };
  remedies: string[];
}

interface BirthDetails {
  dob: string;
  birthTime: string;
  birthPlace: string;
}

function getZodiacSign(dob: string, lang: Language): { sign: string; element: string } {
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const signs =
    lang === "en"
      ? [
          { sign: "Capricorn", element: "Earth", start: [1, 1], end: [1, 19] },
          { sign: "Aquarius", element: "Air", start: [1, 20], end: [2, 18] },
          { sign: "Pisces", element: "Water", start: [2, 19], end: [3, 20] },
          { sign: "Aries", element: "Fire", start: [3, 21], end: [4, 19] },
          { sign: "Taurus", element: "Earth", start: [4, 20], end: [5, 20] },
          { sign: "Gemini", element: "Air", start: [5, 21], end: [6, 20] },
          { sign: "Cancer", element: "Water", start: [6, 21], end: [7, 22] },
          { sign: "Leo", element: "Fire", start: [7, 23], end: [8, 22] },
          { sign: "Virgo", element: "Earth", start: [8, 23], end: [9, 22] },
          { sign: "Libra", element: "Air", start: [9, 23], end: [10, 22] },
          { sign: "Scorpio", element: "Water", start: [10, 23], end: [11, 21] },
          { sign: "Sagittarius", element: "Fire", start: [11, 22], end: [12, 21] },
          { sign: "Capricorn", element: "Earth", start: [12, 22], end: [12, 31] },
        ]
      : [
          { sign: "मकर", element: "पृथ्वी", start: [1, 1], end: [1, 19] },
          { sign: "कुंभ", element: "वायु", start: [1, 20], end: [2, 18] },
          { sign: "मीन", element: "जल", start: [2, 19], end: [3, 20] },
          { sign: "मेष", element: "अग्नि", start: [3, 21], end: [4, 19] },
          { sign: "वृषभ", element: "पृथ्वी", start: [4, 20], end: [5, 20] },
          { sign: "मिथुन", element: "वायु", start: [5, 21], end: [6, 20] },
          { sign: "कर्क", element: "जल", start: [6, 21], end: [7, 22] },
          { sign: "सिंह", element: "अग्नि", start: [7, 23], end: [8, 22] },
          { sign: "कन्या", element: "पृथ्वी", start: [8, 23], end: [9, 22] },
          { sign: "तुला", element: "वायु", start: [9, 23], end: [10, 22] },
          { sign: "वृश्चिक", element: "जल", start: [10, 23], end: [11, 21] },
          { sign: "धनु", element: "अग्नि", start: [11, 22], end: [12, 21] },
          { sign: "मकर", element: "पृथ्वी", start: [12, 22], end: [12, 31] },
        ];

  for (const s of signs) {
    if (
      (month === s.start[0] && day >= s.start[1]) ||
      (month === s.end[0] && day <= s.end[1])
    ) {
      return { sign: s.sign, element: s.element };
    }
  }

  return signs[0];
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

export function generatePrediction(
  details: BirthDetails,
  lang: Language,
): PredictionReport {
  const { sign, element } = getZodiacSign(details.dob, lang);
  const seed = hashString(details.dob + details.birthTime + details.birthPlace);
  const rng = seededRandom(seed);

  const marriageAge = Math.floor(rng() * 8) + 23;
  const luckyNum1 = Math.floor(rng() * 9) + 1;
  const luckyNum2 = Math.floor(rng() * 9) + 1;
  const luckyNum3 = Math.floor(rng() * 9) + 1;

  if (lang === "hi") {
    const colors = ["नीला", "हरा", "लाल", "सुनहरा", "सफेद"];
    const days = ["सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार"];

    return {
      personality: `आप स्वभाव से दयालु, समझदार और गहरी सोच रखने वाले व्यक्ति हैं। आप किसी भी स्थिति को सिर्फ ऊपर से नहीं देखते, बल्कि उसकी गहराई को समझते हैं। लोग आपको मजबूत मानते हैं, लेकिन आपका दिल बहुत संवेदनशील है। आप दूसरों की मदद करने में विश्वास रखते हैं, लेकिन कई बार ऐसा महसूस करते हैं कि आपकी अच्छाई का फायदा उठाया जाता है। आप अपनी भावनाएँ आसानी से व्यक्त नहीं करते, इसलिए लोग आपकी असली सोच समझ नहीं पाते। आपके अंदर नेतृत्व क्षमता है, पर आत्मविश्वास कभी-कभी परिस्थितियों के कारण कम हो जाता है। आपके जीवन में गहरे अनुभव हैं जिन्होंने आपको परिपक्व बनाया है। आप जीवन को एक सीखने का अवसर मानते हैं और हर असफलता से आगे बढ़ते हैं।`,
      qualities: {
        strengths: [
          "तेज दिमाग और समझदारी",
          "वफादारी और भरोसेमंद स्वभाव",
          "कठिन समय में भी हार न मानना",
          "रचनात्मक सोच",
        ],
        weaknesses: [
          "जरूरत से ज्यादा सोचना",
          "छोटी बातों को दिल पर लेना",
          "कभी-कभी खुद पर शक करना",
          "लोगों पर जल्दी भरोसा कर लेना",
        ],
      },
      purpose: `आपका जीवन सिर्फ साधारण सफलता के लिए नहीं है। आप दूसरों की जिंदगी पर प्रभाव डालने के लिए जन्मे हैं। आपके जीवन में 1-2 बड़े मोड़ आते हैं जहाँ आप अपनी दिशा पूरी तरह बदलते हैं। 30 वर्ष की आयु के बाद आपका असली उद्देश्य स्पष्ट होने लगता है।`,
      career: `आपमें स्वतंत्र सोच है, इसलिए एक ही काम लंबे समय तक करना पसंद नहीं। आप निम्न क्षेत्रों में अच्छा कर सकते हैं: व्यवसाय / खुद का काम, रचनात्मक कार्य (डिजाइन, लेखन, मीडिया), मैनेजमेंट / नेतृत्व भूमिका, टेक्निकल या विश्लेषणात्मक क्षेत्र। 28-35 की आयु में करियर में बड़ा बदलाव या उन्नति होती है।`,
      wealth: `धन आपके जीवन में धीरे-धीरे आता है, लेकिन टिकता है। जीवन में 1-2 बार आर्थिक संघर्ष आता है, पर उसके बाद स्थिरता मिलती है। 35 के बाद आर्थिक स्थिति बेहतर होने लगती है। ${rng() > 0.5 ? "व्यापार से अच्छा लाभ हो सकता है।" : "नौकरी में उन्नति और बोनस की संभावना है।"}`,
      marriage: `आप सच्चे और गहरे रिश्ते चाहते हैं। टाइमपास रिश्ते आपके लिए नहीं होते। विवाह की संभावना ${marriageAge}-${marriageAge + 3} वर्ष की आयु में है। शादी में थोड़ा विलंब संभव है, पर शादी स्थिर रहती है। शुरुआती समय में तालमेल की समस्या हो सकती है, पर बाद में रिश्ता मजबूत होता है।`,
      partnerNature: `जीवनसाथी का स्वभाव: भावुक लेकिन समझदार, परिवार को महत्व देने वाला, कभी-कभी पज़ेसिव, आपके जीवन में स्थिरता लाने वाला। जीवनसाथी देखभाल करने वाला होगा, पर स्वभाव में मजबूत होगा।`,
      education: `आप बुद्धिमान हैं, लेकिन ध्यान भटकने की वजह से पढ़ाई में उतना परिणाम नहीं मिला जितना मिल सकता था। प्रैक्टिकल ज्ञान और अनुभव आपकी असली ताकत हैं। आपको तकनीकी, विज्ञान, या कला से संबंधित क्षेत्रों में विशेष रुचि है। आपकी सीखने की क्षमता बहुत अच्छी है और आप नई चीजें समझने में तेजी से सफल होते हैं। जीवन का विद्यालय आपको किताबों से कहीं ज्यादा कुछ सिखाता है।`,
      challengeAges: [
        { age: "18-21", description: "भ्रम और दिशा खोज" },
        { age: "24-27", description: "संघर्ष और मेहनत" },
        { age: "32-35", description: "बड़ा निर्णय" },
        { age: "40+", description: "स्थिरता और उन्नति" },
      ],
      property: `जीवन में अपने नाम से संपत्ति लेने का योग है। घर या जमीन का लाभ 30-40 के बीच मिलता है। निवेश के मामले में सावधानी से निर्णय लें।`,
      health: [
        "तनाव से जुड़ी समस्या हो सकती है",
        "नींद की अनियमितता पर ध्यान दें",
        "पानी कम पीने की आदत सुधारें",
        "नियमित व्यायाम और योग करें",
      ],
      spiritual: `आपके अंदर आध्यात्मिक ऊर्जा है। मंदिर, ध्यान, या प्रकृति के पास जाने से मन शांत होता है। आपके जीवन में एक छिपी हुई शक्ति है जो कठिन समय में आपको संभाल लेती है। आपका अंतर्ज्ञान बहुत तीव्र है, और आप अक्सर सही समय पर सही फैसले लेते हैं। आध्यात्मिक मार्ग पर चलना आपको आंतरिक शांति देता है। ध्यान और पूजा-पाठ आपके जीवन को संतुलित रखते हैं।`,
      lucky: {
        numbers: `${luckyNum1}, ${luckyNum2}, ${luckyNum3}`,
        color: pick(colors, rng),
        day: pick(days, rng),
      },
      remedies: [
        "सुबह सूर्य की रोशनी में 2 मिनट खड़े रहें",
        "जरूरतमंद की मदद करें",
        "सोमवार को हल्का रंग पहनें",
        "सकारात्मक सोच रखें",
        "गुरुवार को पीला वस्त्र धारण करें",
        "रो��़ 5 मिनट ध्यान या प्राणायाम करें",
      ],
    };
  }

  // English version
  const colors = ["Blue", "Green", "Red", "Gold", "White"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return {
    personality: `You are kind, wise, and a deep thinker by nature. You don't just look at any situation superficially but understand its depth. People consider you strong, but your heart is very sensitive. You believe in helping others, but sometimes feel that your goodness is taken advantage of. You don't express your feelings easily, so people can't understand your true thoughts. You have leadership ability, but self-confidence sometimes decreases due to circumstances. You have deep experiences in life that have made you mature. You see life as a learning opportunity and move forward from every setback. Your intuition is very sharp, and you often make the right decisions at the right time.`,
    qualities: {
      strengths: [
        "Sharp mind and wisdom",
        "Loyalty and trustworthy nature",
        "Never giving up even in tough times",
        "Creative thinking",
      ],
      weaknesses: [
        "Overthinking",
        "Taking small things to heart",
        "Sometimes doubting yourself",
        "Trusting people too quickly",
      ],
    },
    purpose: `Your life is not just for ordinary success. You are born to make an impact on others' lives. There are 1-2 major turning points in your life where you completely change your direction. After age 30, your true purpose begins to become clear.`,
    career: `You have independent thinking, so you don't like doing the same work for a long time. You can excel in: Business / Self-employment, Creative work (Design, Writing, Media), Management / Leadership roles, Technical or Analytical fields. A major career change or advancement happens between ages 28-35.`,
    wealth: `Money comes gradually in your life but stays. There are 1-2 financial struggles in life, but stability comes after that. Financial situation starts improving after 35. ${rng() > 0.5 ? "Good profits from business ventures are likely." : "Career advancement and bonuses are probable."}`,
    marriage: `You want true and deep relationships. Casual relationships are not for you. Marriage is likely between ages ${marriageAge}-${marriageAge + 3}. There may be a slight delay in marriage, but the marriage will be stable. There may be adjustment issues initially, but the relationship strengthens over time.`,
    partnerNature: `Life partner traits: Emotional but wise, values family, sometimes possessive, brings stability to your life. Your partner will be caring but strong in nature.`,
    education: `You are intelligent, but due to distractions, you didn't get as much result in studies as you could have. Practical knowledge and experience are your real strengths. You have special interest in technology, science, or arts-related fields. Your learning capacity is very good and you succeed quickly in understanding new things. Life's classroom teaches you much more than books ever could.`,
    challengeAges: [
      { age: "18-21", description: "Confusion and finding direction" },
      { age: "24-27", description: "Struggle and hard work" },
      { age: "32-35", description: "Major decision" },
      { age: "40+", description: "Stability and growth" },
    ],
    property: `There is a chance of acquiring property in your name. Benefits from house or land come between ages 30-40. Be cautious and thorough in investment decisions.`,
    health: [
      "Stress-related issues may occur",
      "Pay attention to sleep irregularity",
      "Improve the habit of drinking less water",
      "Do regular exercise and yoga",
    ],
    spiritual: `You have spiritual energy within you. Visiting temples, meditation, or being close to nature calms the mind. There is a hidden power within your life that sustains you during difficult times. Your intuition is very sharp, and you often make the right decisions at the right time. Walking the spiritual path brings you inner peace. Meditation and prayer keep your life balanced and centered.`,
    lucky: {
      numbers: `${luckyNum1}, ${luckyNum2}, ${luckyNum3}`,
      color: pick(colors, rng),
      day: pick(days, rng),
    },
    remedies: [
      "Stand in the sunlight for 2 minutes every morning",
      "Help those in need",
      "Wear light colors on Monday",
      "Maintain positive thinking",
      "Wear yellow clothes on Thursday",
      "Meditate or do Pranayama for 5 minutes daily",
    ],
  };
}
