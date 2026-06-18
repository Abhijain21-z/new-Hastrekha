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
      personality: `आप स्वभाव से दयालु, समझदार और गहरी सोच रखने वाले व्यक्ति हैं। आप किसी भी स्थिति को सिर्फ ऊपर से नहीं देखते, बल्कि उसकी गहराई को समझते हैं। लोग आपको बहुत मजबूत और आत्मनिर्भर मानते हैं, लेकिन वास्तविकता यह है कि आपका दिल बहुत संवेदनशील है। आप दूसरों की मदद करने में विश्वास रखते हैं, लेकिन कई बार ऐसा महसूस करते हैं कि आपकी अच्छाई का फायदा उठाया जाता है। यह आपके लिए एक बड़ी सीख है। आप अपनी भावनाएँ आसानी से व्यक्त नहीं करते, इसलिए लोग आपकी असली सोच समझ नहीं पाते। आपके अंदर प्राकृतिक नेतृत्व क्षमता है, पर आत्मविश्वास कभी-कभी परिस्थितियों के कारण कम हो जाता है। आपके जीवन में बहुत सारे गहरे अनुभव हैं जिन्होंने आपको एक परिपक्व और समझदार व्यक्ति बनाया है। आप जीवन को सिर्फ जीने के लिए नहीं देखते, बल्कि एक सीखने का अवसर मानते हैं। हर असफलता, हर दर्द से आप कुछ सीखते हैं और आगे बढ़ते हैं। आपकी आंतरिक शक्ति अक्सर आपको कठिन समय में बचाती है। आपका अंतर्ज्ञान बहुत तीव्र है और आप अक्सर सही समय पर सही फैसले लेते हैं।`,
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
      purpose: `आपका जीवन सिर्फ साधारण सफलता के लिए नहीं है। आप दूसरों की जिंदगी पर प्रभाव डालने के लिए जन्मे हैं। आपके जीवन में 1-2 बड़े मोड़ आते हैं जहाँ आप अपनी दिशा पूरी तरह बदलते हैं। 30 वर्ष की आयु के बाद आपका असली उद्देश्य स्पष्��� होने लगता है।`,
      career: `आपमें स्वतंत्र और मौलिक सोच है, इसलिए एक ही काम लंबे समय तक करना आपको नीरस लगता है। आप निम्न क्षेत्रों में बेहद अच्छा कर सकते हैं: अपना व्यवसाय या स्टार्टअप, रचनात्मक कार्य (डिजाइन, लेखन, मीडिया, फोटोग्राफी), मैनेजमेंट, नेतृत्व भूमिका, टेक्निकल या विश्लेषणात्मक क्षेत्र, सरकारी सेवा, शिक्षा क्षेत्र। आपके करियर की बात करें तो 26-28 की आयु में एक छोटा बदलाव आता है, फिर 28-35 की आयु में करियर में बहुत बड़ा बदलाव या शानदार उन्नति होती है। 35-40 के बीच आप अपने क्षेत्र में एक सफल और सम्मानित व्यक्ति बन जाते हैं। आपके कर्मचारी या सहयोगी आपके काम करने का तरीका पसंद करते हैं। 45 की आयु के बाद आपको अपने अनुभव से दूसरों को सिखाने का अवसर मिल सकता है।`,
      wealth: `धन आपके जीवन में धीरे-धीरे और स्थिर तरीके से आता है, और जब आता है तो लंबे समय के लिए टिकता है। जीवन में 1-2 बार आर्थिक संघर्ष या कठिन समय आता है, लेकिन हर बार आप उससे उबरते हैं और बेहतर आर्थिक स्थिति में पहुँचते हैं। 25-28 की आयु में पहला आर्थिक संघर्ष हो सकता है। 28-35 के बीच धीरे-धीरे आर्थिक सुधार आता है। 35 के बाद आपकी आर्थिक स्थिति काफी बेहतर होने लगती है। 40 की आयु के बाद आप एक स्थिर और समृद्ध जीवन जी सकते हैं। ${rng() > 0.5 ? "व्यापार या अपना काम करने से आपको बहुत अच्छा और स्थिर लाभ हो सकता है।" : "नौकरी में उन्नति, बोनस और वेतन वृद्धि की मजबूत संभावना है।"} निवेश के मामले में आप बुद्धिमान निर्णय लेते हैं।`,
      marriage: `आप सच्चे, गहरे और दीर्घकालीन रिश्तों की तलाश में हैं। सतही या केवल टाइमपास रिश्ते आपके लिए नहीं होते। विवाह की संभावना ${marriageAge}-${marriageAge + 3} वर्ष की आयु में सबसे अधिक है। शादी में थोड़ा विलंब संभव है, पर जब होगी तो आपकी शादी स्थिर और सुखी रहेगी। शुरुआती समय में जीवनसाथी के साथ तालमेल और समझ की समस्या हो सकती है, पर बाद में रिश्ता बेहद मजबूत हो जाता है। आप अपने जीवनसाथी के लिए एक वफादार और समर्पित साथी साबित होते हैं। विवाह के बाद आपके जीवन में शांति और स्थिरता आती है। संतान सुख की संभावना है।`,
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
        "तनाव से जुड़ी समस्या आपके जीवन का एक भाग है, ध्यान दें कि यह बहुत न बढ़े",
        "नींद की अनियमितता आपकी एक प्रमुख समस्या है, इस पर विशेष ध्यान दें",
        "पानी कम पीने की आदत को तुरंत सुधारें, दिन में कम से कम 3-4 लीटर पानी पिएँ",
        "नियमित व्यायाम और योग आपके शारीरिक और मानसिक स्वास्थ्य के लिए आवश्यक हैं",
        "35 की आयु के बाद पाचन संबंधी समस्या हो सकती है, खान-पान का ध्यान रखें",
        "सिर दर्द या माइग्रेन की समस्या हो सकती है, लेकिन इलाज से नियंत्रणीय है",
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
    personality: `You are naturally kind, wise, and a deep thinker. You don't just look at any situation superficially; you dive deep and understand its complexities. People consider you strong and self-reliant on the surface, but the truth is your heart is exceptionally sensitive and intuitive. You genuinely believe in helping others, but sometimes feel that your goodness is taken advantage of by people who don't appreciate your efforts. You don't express your feelings easily, so many people can't understand your true thoughts and motivations. You have natural leadership abilities, but your self-confidence sometimes decreases due to difficult circumstances or failures. You have accumulated deep and meaningful experiences throughout your life that have made you an emotionally mature person. You see life not as a destination but as a continuous learning opportunity, and you move forward gracefully from every setback. Your intuition is exceptionally sharp, and you often make the right decisions at precisely the right moments.`,
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
    career: `You have highly independent and original thinking, which means repetitive or monotonous work feels stifling to you. You have excellent potential to excel in: Entrepreneurship or Self-employment, Creative fields (Design, Writing, Media, Art), Management and Leadership roles, Technical or IT fields, Analytical work, Government service, Education sector. Your career experiences significant changes between ages 26-28, followed by major advancement or transformation between ages 28-35. By your 40s, you become recognized and respected in your field. Your colleagues and employees appreciate your innovative approach and leadership style.`,
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
      "Stress-related issues may occur - be proactive in managing stress through meditation",
      "Sleep irregularity is a significant concern - establish a consistent sleep routine",
      "Dehydration is common - aim for at least 3-4 liters of water daily",
      "Regular exercise and yoga are essential for both physical and mental wellness",
      "Digestive issues may arise after age 35 - maintain a healthy diet",
      "Occasional headaches or migraines may occur but are manageable with proper care",
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
