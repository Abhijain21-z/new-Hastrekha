export interface Blog {
  id: string;
  slug: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  excerpt: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  imageUrl: string;
  imageAlt: {
    en: string;
    hi: string;
  };
  author: {
    en: string;
    hi: string;
  };
  publishDate: string;
  readTime: number;
  keywords: {
    en: string[];
    hi: string[];
  };
  category: {
    en: string;
    hi: string;
  };
}

export const blogsData: Blog[] = [
  {
    id: "1",
    slug: "lifeline-meaning-palmistry",
    title: {
      en: "Life Line Secrets: Your Complete Guide to Understanding Destiny in Palmistry",
      hi: "जीवन रेखा के रहस्य: हस्तरेखा शास्त्र में आपकी किस्मत को समझने की संपूर्ण गाइड",
    },
    description: {
      en: "Discover the deepest secrets hidden in your life line. Learn how to read your destiny, health, and longevity through authentic palmistry science.",
      hi: "अपनी जीवन रेखा में छिपे गहरे रहस्यों की खोज करें। असली हस्तरेखा विज्ञान के माध्यम से अपनी किस्मत, स्वास्थ्य और उम्र को समझना सीखें।",
    },
    excerpt: {
      en: "The life line is the most important line in palmistry. Understand its length, depth, and branches to know your destiny.",
      hi: "जीवन रेखा हस्तरेखा शास्त्र में सबसे महत्वपूर्ण रेखा है। अपनी किस्मत जानने के लिए इसकी लंबाई, गहराई और शाखाओं को समझें।",
    },
    content: {
      en: `Life Line Secrets: Your Complete Guide to Understanding Destiny in Palmistry

The life line is not just about how long you will live - it reveals so much more about your health, energy levels, and major life events. In authentic palmistry, the life line (also called the vital line) is the curved line that starts near the thumb and arcs down towards the wrist.

Key Insights:
- Length indicates overall vitality and energy
- Depth shows strength of character
- Branches indicate major life changes
- Islands suggest health challenges
- Breaks might indicate major life transitions

Many people believe a short life line means a short life, but this is a common misconception. The life line actually shows your physical vitality and energy levels throughout different life phases.`,
      hi: `जीवन रेखा के रहस्य: हस्तरेखा शास्त्र में आपकी किस्मत को समझने की संपूर्ण गाइड

जीवन रेखा केवल यह नहीं बताती कि आप कितने समय जिएंगे - यह आपके स्वास्थ्य, ऊर्जा स्तर और जीवन की मुख्य घटनाओं के बारे में बहुत कुछ बताती है। असली हस्तरेखा शास्त्र में, जीवन रेखा (जिसे महत्वपूर्ण रेखा भी कहते हैं) एक घुमावदार रेखा है जो अंगूठे के पास से शुरू होती है और कलाई की ओर एक चाप बनाती है।

मुख्य अंतर्दृष्टि:
- लंबाई समग्र जीवन शक्ति और ऊर्जा को दर्शाती है
- गहराई चरित्र की शक्ति दिखाती है
- शाखाएं जीवन में बड़े परिवर्तन दर्शाती हैं
- द्वीप स्वास्थ्य संबंधी चुनौतियों का संकेत देते हैं
- टूटना जीवन में बड़े संक्रमण का संकेत दे सकता है

बहुत से लोग मानते हैं कि छोटी जीवन रेखा का मतलब छोटी उम्र है, लेकिन यह एक आम गलतफहमी है। जीवन रेखा वास्तव में आपकी शारीरिक शक्ति और जीवन के विभिन्न चरणों में ऊर्जा स्तर को दर्शाती है।`,
    },
    imageUrl: "/images/blog-1-lifeline.png",
    imageAlt: {
      en: "Lifeline in palmistry showing destiny and health",
      hi: "हस्तरेखा में जीवन रेखा किस्मत और स्वास्थ्य दिखाती है",
    },
    author: {
      en: "Hastrekha Expert",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-15",
    readTime: 7,
    keywords: {
      en: ["lifeline", "palmistry", "destiny", "health", "hastrekha"],
      hi: ["जीवन रेखा", "हस्तरेखा", "भाग्य", "स्वास्थ्य", "हस्त्रेखा"],
    },
    category: {
      en: "Palmistry Guide",
      hi: "हस्तरेखा गाइड",
    },
  },
  {
    id: "2",
    slug: "heart-line-love-life",
    title: {
      en: "Heart Line Mysteries: Decode Your Love Life Through Palmistry",
      hi: "हृदय रेखा के रहस्य: हस्तरेखा द्वारा अपनी प्रेम जीवन को समझें",
    },
    description: {
      en: "Understand your love and emotional life through the heart line. Learn what your palm reveals about relationships, passion, and emotional depth.",
      hi: "हृदय रेखा के माध्यम से अपनी प्रेम और भावनात्मक जीवन को समझें। जानें कि आपकी हथेली रिश्तों, जुनून और भावनात्मक गहराई के बारे में क्या बताती है।",
    },
    excerpt: {
      en: "The heart line reveals the nature of your emotions and romantic relationships. Discover what your palm tells about love and commitment.",
      hi: "हृदय रेखा आपकी भावनाओं और रोमांटिक रिश्तों की प्रकृति को प्रकट करती है। जानें कि आपकी हथेली प्रेम और प्रतिबद्धता के बारे में क्या कहती है।",
    },
    content: {
      en: "The heart line is located at the top of the palm and runs horizontally across. It reveals your emotional nature, capacity for love, and relationship patterns. A straight heart line indicates a practical approach to love, while a curved line shows passionate and romantic nature.",
      hi: "हृदय रेखा हथेली के शीर्ष पर स्थित होती है और क्षैतिज रूप से फैली होती है। यह आपकी भावनात्मक प्रकृति, प्रेम की क्षमता और रिश्ते के पैटर्न को प्रकट करती है। सीधी हृदय रेखा प्रेम के प्रति व्यावहारिक दृष्टिकोण दर्शाती है, जबकि घुमावदार रेखा भावुक और रोमांटिक प्रकृति दिखाती है।",
    },
    imageUrl: "/images/blog-2-heartline.png",
    imageAlt: {
      en: "Heart line in palm reading showing love and relationships",
      hi: "हथेली पढ़ने में हृदय रेखा प्रेम और रिश्तों को दिखाती है",
    },
    author: {
      en: "Palmistry Specialist",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-16",
    readTime: 6,
    keywords: {
      en: ["heart line", "love", "relationships", "emotions", "palmistry"],
      hi: ["हृदय रेखा", "प्रेम", "रिश्ते", "भावनाएं", "हस्तरेखा"],
    },
    category: {
      en: "Love & Relationships",
      hi: "प्रेम और रिश्ते",
    },
  },
  {
    id: "3",
    slug: "marriage-line-age",
    title: {
      en: "Marriage Line Secrets: Know When You'll Marry and What Your Partner Will Be Like",
      hi: "शादी की लकीर: जानिए किस उम्र में होगी आपकी शादी और कैसा होगा आपका लाइफ पार्टनर",
    },
    description: {
      en: "Discover your marriage timing and partner characteristics through the marriage line. Complete guide to understanding this powerful palm marking.",
      hi: "विवाह रेखा के माध्यम से अपने विवाह का समय और भागीदार की विशेषताओं की खोज करें। इस शक्तिशाली हथेली चिन्ह को समझने के लिए संपूर्ण गाइड।",
    },
    excerpt: {
      en: "The marriage line indicates your marital status and timing. Learn how to interpret this line for insights about your future spouse and marriage.",
      hi: "विवाह रेखा आपकी वैवाहिक स्थिति और समय को दर्शाती है। अपने भविष्य के जीवनसाथी और विवाह के बारे में जानकारी के लिए इस रेखा की व्याख्या करना सीखें।",
    },
    content: {
      en: "The marriage line is found below the heart line on the outer edge of the palm near the little finger. Multiple lines don't mean multiple marriages - they indicate deep emotional connections and relationships that touched your heart.",
      hi: "विवाह रेखा हृदय रेखा के नीचे, हथेली के बाहरी किनारे पर छोटी उंगली के पास पाई जाती है। कई लाइनों का मतलब एकाधिक विवाह नहीं है - ये गहरे भावनात्मक संबंध और रिश्तों को दर्शाते हैं जिन्होंने आपके दिल को छुआ है।",
    },
    imageUrl: "/images/blog-3-marriageline.png",
    imageAlt: {
      en: "Marriage line showing timing and partner qualities",
      hi: "विवाह रेखा समय और भागीदार के गुण दिखाती है",
    },
    author: {
      en: "Hastrekha Expert",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-17",
    readTime: 8,
    keywords: {
      en: ["marriage line", "wedding", "partner", "relationships", "palmistry"],
      hi: ["विवाह रेखा", "शादी", "जीवनसाथी", "रिश्ते", "हस्तरेखा"],
    },
    category: {
      en: "Marriage & Family",
      hi: "विवाह और परिवार",
    },
  },
  {
    id: "4",
    slug: "x-mark-wealth",
    title: {
      en: "X Mark on Palm: The Millionaire Sign - Is It a Sign of Extreme Wealth?",
      hi: "हथेली पर 'X' का निशान: करोड़पति का संकेत - क्या यह अत्यधिक धन का संकेत है?",
    },
    description: {
      en: "Discover if the X mark on your palm indicates sudden wealth and success. Complete explanation of this rare and powerful palmistry sign.",
      hi: "पता लगाएं कि आपकी हथेली पर X का निशान अचानक धन और सफलता का संकेत है या नहीं। इस दुर्लभ और शक्तिशाली हस्तरेखा चिन्ह की संपूर्ण व्याख्या।",
    },
    excerpt: {
      en: "The X mark is considered a rare and highly auspicious sign in palmistry. Learn what it means for your financial future and career success.",
      hi: "X का निशान हस्तरेखा में एक दुर्लभ और अत्यंत शुभ चिन्ह माना जाता है। अपने वित्तीय भविष्य और करियर की सफलता के लिए इसका क्या मतलब है, यह जानें।",
    },
    content: {
      en: "The X mark forms when the fate line and sun line intersect, creating an X pattern. This is an exceptionally rare marking that indicates sudden success and unexpect opportunities in wealth accumulation.",
      hi: "X का निशान तब बनता है जब भाग्य रेखा और सूर्य रेखा प्रतिच्छेद करती हैं, जिससे एक X पैटर्न बनता है। यह एक असाधारण दुर्लभ चिन्ह है जो धन संचय में अचानक सफलता और अप्रत्याशित अवसरों का संकेत देता है।",
    },
    imageUrl: "/images/blog-4-xmark.png",
    imageAlt: {
      en: "X mark on palm indicating wealth and success",
      hi: "हथेली पर X का निशान धन और सफलता दर्शाता है",
    },
    author: {
      en: "Palmistry Expert",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-18",
    readTime: 7,
    keywords: {
      en: ["X mark", "wealth", "millionaire", "success", "fortune", "palmistry"],
      hi: ["X का निशान", "धन", "करोड़पति", "सफलता", "भाग्य", "हस्तरेखा"],
    },
    category: {
      en: "Wealth & Success",
      hi: "धन और सफलता",
    },
  },
  {
    id: "5",
    slug: "thumbs-yav-sign",
    title: {
      en: "The Yav Sign on Thumb: Divine Mark of Buddha's Eye - Royal Fortune Awaits!",
      hi: "अंगूठे पर 'यव' का निशान: बुद्ध की आंख का दिव्य चिन्ह - राजयोग प्रतीक्षा करता है!",
    },
    description: {
      en: "If you have the Yav sign (Eye of Buddha) on your thumb, you are blessed with exceptional intuition and wealth. Discover the mystical meaning of this sacred palmistry mark.",
      hi: "अगर आपके अंगूठे पर यव का निशान (बुद्ध की आंख) है, तो आप असाधारण अंतर्ज्ञान और धन से आशीर्वादित हैं। इस पवित्र हस्तरेखा चिन्ह का रहस्यमयी अर्थ खोजें।",
    },
    excerpt: {
      en: "The Yav mark on your thumb is one of the rarest and most auspicious signs. It brings extreme luck, wealth, and sixth sense abilities.",
      hi: "आपके अंगूठे पर यव का निशान सबसे दुर्लभ और शुभ चिन्हों में से एक है। यह अत्यधिक भाग्य, धन और छठी इंद्रिय की क्षमताएं लाता है।",
    },
    content: {
      en: "The Yav sign looks like a barley grain or closed eye when the horizontal line on the thumb joint forms a complete oval. This marks those with exceptional intuition, continuous wealth flow, and divine guidance in life decisions.",
      hi: "यव का निशान अनाज के दाने की तरह या बंद आंख की तरह दिखता है जब अंगूठे के जोड़ पर की क्षैतिज रेखा एक पूर्ण अंडाकार बनाती है। यह उन लोगों को चिन्हित करता है जिनके पास असाधारण अंतर्ज्ञान, निरंतर धन प्रवाह और जीवन निर्णयों में दिव्य मार्गदर्शन है।",
    },
    imageUrl: "/images/blog-5-yav.png",
    imageAlt: {
      en: "Yav sign on thumb - Eye of Buddha showing divine fortune",
      hi: "अंगूठे पर यव का निशान - बुद्ध की आंख दिव्य भाग्य दिखाती है",
    },
    author: {
      en: "Hastrekha Master",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-19",
    readTime: 8,
    keywords: {
      en: ["Yav sign", "Buddha's eye", "thumb", "intuition", "wealth", "fortune"],
      hi: ["यव का निशान", "बुद्ध की आंख", "अंगूठा", "अंतर्ज्ञान", "धन", "भाग्य"],
    },
    category: {
      en: "Sacred Marks",
      hi: "पवित्र चिन्ह",
    },
  },
  {
    id: "6",
    slug: "government-job-line",
    title: {
      en: "Government Job Yoga in Palmistry: Discover if You're Destined for Civil Service",
      hi: "सरकारी नौकरी की हस्तरेखा: खोजें कि क्या आप सिविल सेवा के लिए नियुक्त हैं",
    },
    description: {
      en: "Learn the palmistry signs that guarantee government job success. Complete guide to Sun and Jupiter mounts and their role in career advancement.",
      hi: "सरकारी नौकरी की सफलता की गारंटी देने वाले हस्तरेखा चिन्हों को जानें। सूर्य और गुरु पर्वत और करियर उन्नति में उनकी भूमिका की संपूर्ण गाइड।",
    },
    excerpt: {
      en: "The Sun line and Jupiter mount indicate success in government jobs. Discover if your palm shows the marks of a civil servant destined for high position.",
      hi: "सूर्य रेखा और गुरु पर्वत सरकारी नौकरी में सफलता का संकेत देते हैं। पता लगाएं कि आपकी हथेली उच्च पद के लिए नियुक्त एक सिविल सेवक के चिन्हों को दर्शाती है या नहीं।",
    },
    content: {
      en: "A well-formed Sun line reaching the Sun mount and a prominent Jupiter mount are the strongest indicators of government job success. Combined with a strong Fate line, these marks guarantee success in competitive exams and high administrative positions.",
      hi: "सूर्य पर्वत तक पहुंचने वाली एक अच्छी तरह से बनी सूर्य रेखा और एक प्रमुख गुरु पर्वत सरकारी नौकरी की सफलता के सबसे मजबूत संकेतक हैं। एक मजबूत भाग्य रेखा के साथ, ये चिन्ह प्रतियोगी परीक्षाओं और उच्च प्रशासनिक पदों में सफलता की गारंटी देते हैं।",
    },
    imageUrl: "/images/blog-6-government.png",
    imageAlt: {
      en: "Sun line and Jupiter mount for government job success",
      hi: "सरकारी नौकरी की सफलता के लिए सूर्य रेखा और गुरु पर्वत",
    },
    author: {
      en: "Career Palmist",
      hi: "करियर हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-20",
    readTime: 7,
    keywords: {
      en: ["government job", "Sun line", "Jupiter mount", "career", "civil service"],
      hi: ["सरकारी नौकरी", "सूर्य रेखा", "गुरु पर्वत", "करियर", "सिविल सेवा"],
    },
    category: {
      en: "Career Guide",
      hi: "करियर गाइड",
    },
  },
  {
    id: "7",
    slug: "money-triangle-wealth",
    title: {
      en: "Money Triangle in Palmistry: The Secret Marking That Reveals Your Wealth Potential",
      hi: "हस्तरेखा में 'धन त्रिभुज': वह रहस्य चिन्ह जो आपकी धन क्षमता को प्रकट करता है",
    },
    description: {
      en: "Discover the Money Triangle - the rare palmistry marking that indicates financial abundance. Learn how to identify this powerful wealth indicator.",
      hi: "धन त्रिभुज की खोज करें - दुर्लभ हस्तरेखा चिन्ह जो वित्तीय प्रचुरता को दर्शाता है। इस शक्तिशाली धन सूचक को पहचानना सीखें।",
    },
    excerpt: {
      en: "The Money Triangle is formed by the Head line, Heart line, and Fate line intersection. This marking is a powerful sign of wealth and financial success.",
      hi: "धन त्रिभुज मस्तिष्क रेखा, हृदय रेखा और भाग्य रेखा के प्रतिच्छेद से बनता है। यह चिन्ह धन और वित्तीय सफलता का एक शक्तिशाली संकेत है।",
    },
    content: {
      en: "When the Head line, Heart line, and Fate line create a clear triangular shape in the palm center, it indicates continuous wealth flow, business success, and financial prosperity. This is one of the most auspicious markings in palmistry.",
      hi: "जब मस्तिष्क रेखा, हृदय रेखा और भाग्य रेखा हथेली के केंद्र में एक स्पष्ट त्रिभुजाकार आकार बनाती हैं, तो यह निरंतर धन प्रवाह, व्यावसायिक सफलता और वित्तीय समृद्धि को दर्शाता है। यह हस्तरेखा में सबसे शुभ चिन्हों में से एक है।",
    },
    imageUrl: "/images/blog-7-moneytriangle.png",
    imageAlt: {
      en: "Money triangle in palm indicating wealth and prosperity",
      hi: "हथेली में धन त्रिभुज धन और समृद्धि दर्शाता है",
    },
    author: {
      en: "Wealth Palmist",
      hi: "धन हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-21",
    readTime: 6,
    keywords: {
      en: ["money triangle", "wealth", "fortune", "prosperity", "palmistry"],
      hi: ["धन त्रिभुज", "धन", "भाग्य", "समृद्धि", "हस्तरेखा"],
    },
    category: {
      en: "Wealth & Success",
      hi: "धन और सफलता",
    },
  },
  {
    id: "8",
    slug: "half-moon-palm",
    title: {
      en: "Half Moon Pattern: Ancient Love Secret Revealed in Your Palms",
      hi: "हथेली पर आधा चांद: आपकी हथेलियों में प्रकट प्राचीन प्रेम रहस्य",
    },
    description: {
      en: "When both palms together form a half moon, it indicates exceptional romantic love and a perfect life partner. Discover this rare and beautiful palmistry sign.",
      hi: "जब दोनों हथेलियां मिलकर आधा चांद बनाती हैं, तो यह असाधारण रोमांटिक प्रेम और एक आदर्श जीवनसाथी का संकेत देता है। इस दुर्लभ और सुंदर हस्तरेखा चिन्ह की खोज करें।",
    },
    excerpt: {
      en: "The half moon formed by joining both palms is a sign of deep love, loyalty, and a destined perfect partnership. Check if your palms show this sacred marking.",
      hi: "दोनों हथेलियों को जोड़कर बनने वाला आधा चांद गहरे प्रेम, वफादारी और एक नियत आदर्श साझेदारी का संकेत है। जांचें कि क्या आपकी हथेलियां यह पवित्र चिन्ह दिखाती हैं।",
    },
    content: {
      en: "When you bring both palms together in prayer position, if the heart lines create a perfect half-moon arc, it indicates you are destined for a deeply loving, loyal, and romantic partnership. This is an exceptionally rare and beautiful marking.",
      hi: "जब आप दोनों हथेलियों को प्रार्थना की स्थिति में एक साथ लाते हैं, अगर हृदय रेखाएं एक निखालिस आधे चांद का चाप बनाती हैं, तो यह दर्शाता है कि आप एक गहरे प्रेमपूर्ण, वफादार और रोमांटिक साझेदारी के लिए नियुक्त हैं। यह एक असाधारण दुर्लभ और सुंदर चिन्ह है।",
    },
    imageUrl: "/images/blog-8-halfmoon.png",
    imageAlt: {
      en: "Half moon pattern in palms showing true love and loyalty",
      hi: "हथेलियों में आधा चांद पैटर्न सच्चा प्रेम और वफादारी दिखाता है",
    },
    author: {
      en: "Love Palmist",
      hi: "प्रेम हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-22",
    readTime: 6,
    keywords: {
      en: ["half moon", "love", "soulmate", "loyalty", "partnership"],
      hi: ["आधा चांद", "प्रेम", "आत्मा साथी", "वफादारी", "साझेदारी"],
    },
    category: {
      en: "Love & Relationships",
      hi: "प्रेम और रिश्ते",
    },
  },
  {
    id: "9",
    slug: "missing-fate-line",
    title: {
      en: "No Fate Line? Don't Worry: How to Navigate Life Without the Fate Line Mark",
      hi: "भाग्य रेखा नहीं है? चिंता न करें: भाग्य रेखा के बिना जीवन कैसे जिएं",
    },
    description: {
      en: "Many people lack a visible fate line. Learn what this means and discover powerful remedies to strengthen your destiny and life purpose.",
      hi: "कई लोगों के पास दृश्यमान भाग्य रेखा नहीं होती है। यह क्या मतलब है, यह जानें और अपने भाग्य और जीवन उद्देश्य को मजबूत करने के लिए शक्तिशाली उपाय खोजें।",
    },
    excerpt: {
      en: "A missing or weak fate line doesn't mean you lack destiny - it means you have the freedom to create your own path. Learn positive interpretations and remedies.",
      hi: "एक लापता या कमजोर भाग्य रेखा का मतलब यह नहीं है कि आपके पास भाग्य नहीं है - इसका मतलब है कि आप अपना रास्ता बनाने की स्वतंत्रता रखते हैं। सकारात्मक व्याख्याएं और उपाय जानें।",
    },
    content: {
      en: "Not everyone has a prominent fate line, and that's perfectly normal. Those without a clear fate line often have the freedom to choose their own path and create their destiny through hard work and conscious decisions. This can actually be a blessing.",
      hi: "हर किसी के पास एक प्रमुख भाग्य रेखा नहीं होती है, और यह पूरी तरह से सामान्य है। जिन लोगों के पास स्पष्ट भाग्य रेखा नहीं होती है, वे अक्सर अपना रास्ता चुनने और कड़ी मेहनत और सचेत निर्णयों के माध्यम से अपने भाग्य को बनाने की स्वतंत्रता रखते हैं। यह वास्तव में एक आशीर्वाद हो सकता है।",
    },
    imageUrl: "/images/blog-9-fateline.png",
    imageAlt: {
      en: "Fate line variations showing free will and destiny",
      hi: "भाग्य रेखा की भिन्नताएं स्वतंत्र इच्छा और भाग्य दिखाती हैं",
    },
    author: {
      en: "Destiny Guide",
      hi: "भाग्य गाइड",
    },
    publishDate: "2024-01-23",
    readTime: 7,
    keywords: {
      en: ["fate line", "destiny", "free will", "career", "life path"],
      hi: ["भाग्य रेखा", "भाग्य", "स्वतंत्र इच्छा", "करियर", "जीवन पथ"],
    },
    category: {
      en: "Destiny Guide",
      hi: "भाग्य गाइड",
    },
  },
  {
    id: "10",
    slug: "palm-moles-meaning",
    title: {
      en: "Moles on Palm: Revealing Secrets Behind Lucky and Unlucky Markings",
      hi: "हथेली के तिल: भाग्यशाली और अभाग्यशाली चिन्हों के पीछे के रहस्य को प्रकट करना",
    },
    description: {
      en: "Discover what moles on different parts of your palm reveal about your fate, health, and wealth. Complete guide to interpreting palm moles.",
      hi: "अपनी हथेली के विभिन्न भागों पर तिलों के बारे में खोजें कि वे आपके भाग्य, स्वास्थ्य और धन के बारे में क्या बताते हैं। हथेली के तिलों की व्याख्या के लिए संपूर्ण गाइड।",
    },
    excerpt: {
      en: "Moles on your palm carry deep significance. A mole that disappears when you clench your fist is considered extremely lucky, indicating hidden wealth.",
      hi: "आपकी हथेली पर तिल गहरा महत्व रखते हैं। एक तिल जो मुट्ठी बंद करने पर गायब हो जाता है, उसे बेहद भाग्यशाली माना जाता है, जो छिपे हुए धन का संकेत देता है।",
    },
    content: {
      en: "The position and color of moles on your palm determine their significance. A mole hidden in your closed fist indicates continuous wealth, while moles on the Sun mount can indicate obstacles in career. Red moles are generally more auspicious than black ones.",
      hi: "आपकी हथेली पर तिलों की स्थिति और रंग उनके महत्व को निर्धारित करते हैं। एक तिल जो आपकी बंद मुट्ठी में छिपा हो, निरंतर धन का संकेत देता है, जबकि सूर्य पर्वत पर तिल करियर में बाधाओं का संकेत दे सकते हैं। लाल तिल आमतौर पर काले तिलों की तुलना में अधिक शुभ होते हैं।",
    },
    imageUrl: "/images/blog-10-moles.png",
    imageAlt: {
      en: "Palm moles showing different meanings and significance",
      hi: "हथेली के तिल विभिन्न अर्थ और महत्व दिखाते हैं",
    },
    author: {
      en: "Hastrekha Specialist",
      hi: "हस्त्रेखा विशेषज्ञ",
    },
    publishDate: "2024-01-24",
    readTime: 8,
    keywords: {
      en: ["moles on palm", "fortune", "wealth", "health", "palmistry signs"],
      hi: ["हथेली पर तिल", "भाग्य", "धन", "स्वास्थ्य", "हस्तरेखा चिन्ह"],
    },
    category: {
      en: "Palm Markings",
      hi: "हथेली के चिन्ह",
    },
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogsData.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogsData.map((blog) => blog.slug);
}
