'use client';

import { useParams } from 'next/navigation';
import { PageShell } from '@/components/page-shell';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    slug: 'complete-guide-palmistry-astrology',
    titleEn: 'Complete Guide to Palmistry & Astrology',
    titleHi: 'पामिस्ट्री और ज्योतिष का संपूर्ण गाइड',
    contentEn: `Palmistry and astrology are ancient sciences that reveal your personality, destiny, and life path. This comprehensive guide covers everything you need to know about palm reading and its connection to Vedic astrology.

The five major palm lines - Life Line, Head Line, Heart Line, Fate Line, and Sun Line - each tell a unique story about your life. Understanding these lines helps you decipher your destiny and make informed decisions.

The seven mounts on your palm, each representing different planetary influences, provide additional insights into your character and potential. In Indian tradition, palmistry is deeply connected with Vedic astrology and the planetary positions at your birth.

Learn how to read your own palm, understand the secondary lines and marks, and discover your lucky elements based on astrological principles. Your hands hold the key to understanding your unique life journey.

Palmistry reveals not just your future, but your innermost qualities, hidden talents, and life purpose. By studying your palm lines in conjunction with your birth chart, you gain a complete picture of your life's blueprint.

The practice of palmistry is not about fate, but about understanding your inherent potential and making the best choices. Get comprehensive palm reading and astrological analysis at HastRekhaAi where our AI combines ancient wisdom with modern technology.`,
    contentHi: `हस्तरेखा विज्ञान और ज्योतिष प्राचीन विज्ञान हैं जो आपके व्यक्तित्व, भाग्य और जीवन पथ को प्रकट करते हैं। यह व्यापक मार्गदर्शन हस्तरेखा पढ़ने और वैदिक ज्योतिष से इसके संबंध के बारे में जानने के लिए आवश्यक सभी चीजें शामिल करता है।

पांच प्रमुख हथेली रेखाएं - जीवन रेखा, सिर की रेखा, हृदय रेखा, भाग्य रेखा, और सूर्य रेखा - आपके जीवन के बारे में एक अनोखी कहानी बताती हैं। इन रेखाओं को समझने से आप अपने भाग्य को समझने और सूचित निर्णय लेने में मदद पाते हैं।

आपकी हथेली पर सात माउंट, जिनमें से प्रत्येक विभिन्न ग्रहीय प्रभावों का प्रतिनिधित्व करता है, आपके चरित्र और संभावना में अतिरिक्त अंतर्दृष्टि प्रदान करते हैं। भारतीय परंपरा में, हस्तरेखा विज्ञान वैदिक ज्योतिष और आपके जन्म के समय ग्रहों की स्थिति से गहराई से जुड़ा है।`,
    date: 'Mar 10, 2026',
    readTime: '15 min read',
    category: 'Palmistry',
  },
  {
    slug: 'understanding-palm-lines',
    titleEn: 'Understanding the Major Palm Lines: A Complete Guide',
    titleHi: 'मुख्य हस्तरेखाओं को समझना: संपूर्ण मार्गदर्शन',
    contentEn: `Palmistry is one of the oldest sciences in the world, with roots tracing back over 5,000 years to ancient India and China. The major palm lines are considered windows into your destiny and personality.

The four primary lines are Heart Line, Head Line, Life Line, and Fate Line. Each line tells a unique story about your emotional nature, intellect, vitality, and life path.

The Heart Line represents your emotional capacity and relationships. A long, clear heart line suggests deep emotional connections, while a short line may indicate reserved emotions. The shape and depth reveal whether you're passionate or cautious in love.

The Head Line reveals your intellectual capacity and thinking patterns. Its depth and clarity show mental clarity and focus. A straight line indicates logical thinking, while a curved line shows creativity and intuition.

The Life Line indicates your physical vitality and life force. Contrary to popular belief, it doesn't determine lifespan but rather life quality and your ability to overcome obstacles.

The Fate Line represents your career and life purpose. Its presence or absence suggests the level of control you have over your destiny.

Get a detailed analysis of your palm lines at HastRekhaAi - our AI-powered palm reading provides authentic insights based on ancient palmistry knowledge combined with modern technology.`,
    contentHi: `हस्तरेखा विज्ञान दुनिया के सबसे पुराने विज्ञानों में से एक है, जिसकी जड़ें 5,000 से अधिक वर्ष पहले प्राचीन भारत और चीन में मिलती हैं। मुख्य हथेली की रेखाएं आपके भाग्य और व्यक्तित्व की खिड़कियां मानी जाती हैं।

चार प्राथमिक रेखाएं हैं - हृदय रेखा, सिर की रेखा, जीवन रेखा और भाग्य रेखा। हृदय रेखा आपकी भावनात्मक क्षमता और संबंधों का प्रतिनिधित्व करती है। एक लंबी, स्पष्ट हृदय रेखा गहरे भावनात्मक संबंधों का सुझाव देती है।

सिर की रेखा आपकी बौद्धिक क्षमता और सोच के तरीकों को प्रकट करती है। इसकी गहराई और स्पष्टता मानसिक स्पष्टता दिखाती है।`,
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    category: 'Palmistry',
  },
  {
    slug: 'vedic-astrology-beginners',
    titleEn: 'Vedic Astrology for Beginners: Your First Steps',
    titleHi: 'शुरुआत के लिए वैदिक ज्योतिष: आपके पहले कदम',
    contentEn: `Vedic Astrology, or Jyotish, is one of the six pillars of Hindu philosophy. Unlike Western astrology, Vedic astrology uses the sidereal zodiac and focuses on the Moon's position (Rashi) rather than the Sun.

Your birth chart (Kundali) is the foundation of Vedic astrology. It maps the positions of all planets at your exact moment of birth. The 12 houses represent different life areas, while the 9 planets (Grahas) influence various aspects of your life.

Understanding your Sun Sign (Rashi) helps you grasp your basic nature. Your Moon Sign reveals your emotional nature, while the Ascendant (Lagna) shows how the world perceives you.

The planetary periods (Dashas) predict major life events and transitions. Saturn transits (Sade Sati) are particularly significant periods of transformation.

Get your free Vedic astrology analysis at HastRekhaAi and discover your cosmic blueprint. Our AI combines ancient Vedic knowledge with modern technology to provide personalized insights.`,
    contentHi: `वैदिक ज्योतिष, या ज्योतिष, हिंदू दर्शन के छह स्तंभों में से एक है। पश्चिमी ज्योतिष के विपरीत, वैदिक ज्योतिष नक्षत्र राशि का उपयोग करता है और चंद्रमा की स्थिति (राशि) पर ध्यान केंद्रित करता है।

आपकी जन्म पत्रिका (कुंडली) वैदिक ज्योतिष की नींव है। यह आपके जन्म के सटीक समय में सभी ग्रहों की स्थिति को मैप करती है। 12 घर जीवन के विभिन्न क्षेत्रों का प्रतिनिधित्व करते हैं।`,
    date: 'Feb 5, 2026',
    readTime: '12 min read',
    category: 'Astrology',
  },
  {
    slug: 'ai-palmistry-revolution',
    titleEn: 'How AI is Revolutionizing the Ancient Art of Palmistry',
    titleHi: 'कैसे AI हस्तरेखा विज्ञान की प्राचीन कला को बदल रहा है',
    contentEn: `The convergence of artificial intelligence and ancient palmistry represents a revolutionary moment in the history of spiritual sciences. For thousands of years, palmistry required direct consultation with experienced practitioners. Today, advanced AI systems can analyze palm images with remarkable accuracy.

Google Gemini AI can identify subtle patterns in palm lines that might escape the human eye. It processes vast databases of palmistry knowledge from ancient texts, modern research, and thousands of readings.

The advantages of AI-powered palm reading include 24/7 accessibility, instant analysis, elimination of human bias, and integration with other astrological sciences like Vedic astrology.

At HastRekhaAi, we combine Gemini's advanced image recognition with centuries of Vedic palmistry knowledge. Each reading considers planetary positions, numerology, and palm line analysis for comprehensive insights.

The future of palmistry is here - experience AI-enhanced readings at HastRekhaAi today.`,
    contentHi: `कृत्रिम बुद्धिमत्ता और प्राचीन हस्तरेखा विज्ञान का संयोजन आध्यात्मिक विज्ञान के इतिहास में एक क्रांतिकारी क्षण का प्रतिनिधित्व करता है। हजारों वर्षों से, हस्तरेखा पढ़ने के लिए अनुभवी चिकित्सकों के साथ सीधी परामर्श की आवश्यकता होती थी।`,
    date: 'Jan 30, 2026',
    readTime: '6 min read',
    category: 'Technology',
  },
  {
    slug: 'marriage-prediction-astrology',
    titleEn: 'Marriage Predictions in Astrology: What Your Stars Say',
    titleHi: 'विवाह की भविष्यवाणी: आपके तारे क्या कहते हैं',
    contentEn: `Marriage is one of life's most significant events, and both Vedic astrology and palmistry offer insights into your marital prospects. In astrology, the 7th house governs marriage and partnerships, while the 8th house represents marital happiness and intimacy.

Venus (Shukra) is the planet of love and relationships, while Mars indicates passion and physical attraction. Their positions in your chart reveal much about your romantic nature.

The Dasha periods (planetary transits) determine major life events including marriage timing. Saturn and Jupiter transits significantly impact marriage prospects.

In palmistry, the heart line's quality, length, and position indicate marriage prospects. The marriage line under the little finger shows timing of significant relationships.

At HastRekhaAi, we provide comprehensive marriage compatibility analysis considering both astrological and palmistry factors. Get insights into your ideal partner and auspicious timing.`,
    contentHi: `विवाह जीवन की सबसे महत्वपूर्ण घटनाओं में से एक है, और वैदिक ज्योतिष और हस्तरेखा दोनों आपकी विवाह संभावनाओं में अंतर्दृष्टि प्रदान करते हैं।`,
    date: 'Jan 25, 2026',
    readTime: '10 min read',
    category: 'Astrology',
  },
  {
    slug: 'lucky-numbers-colors',
    titleEn: 'How to Find Your Lucky Numbers and Colors Through Astrology',
    titleHi: 'ज्योतिष के माध्यम से अपने भाग्यशाली संख्याएं और रंग कैसे खोजें',
    contentEn: `Every person has lucky numbers, colors, and days based on their unique astrological makeup. These elements resonate with your planetary influences and can enhance positive energy in your life.

Your lucky number is typically derived from your date of birth and numerological value. It amplifies your natural strengths and attracts positive opportunities.

Colors correspond to specific planets: Red for Mars, Yellow for Jupiter, White for Moon, Blue for Mercury, and Green for Venus. Wearing or surrounding yourself with these colors activates their beneficial energies.

Days of the week also align with planetary energies. Your ruling planet's day becomes particularly auspicious for important decisions and activities.

Discover your personalized lucky elements at HastRekhaAi. Our AI analyzes your birth chart and palm lines to identify your most powerful lucky elements and how to use them effectively.`,
    contentHi: `हर व्यक्ति के पास अपनी अनोखी ज्योतिषीय संरचना के आधार पर भाग्यशाली संख्याएं, रंग और दिन होते हैं।`,
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    category: 'Guidance',
  },
  {
    slug: 'hastrekha-vigyan-history',
    titleEn: 'The Rich History of Hastrekha Vigyan in Indian Culture',
    titleHi: 'भारतीय संस्कृति में हस्तरेखा विज्ञान का समृद्ध इतिहास',
    contentEn: `Hastrekha Vigyan, the science of palm reading, has been practiced in India for over 5,000 years. References to palmistry appear in ancient Vedic texts, particularly in the Rig Veda and Atharva Veda.

The great sage Valmiki, author of the Ramayana, is credited with developing much of the foundational knowledge of palmistry. His work, "Shastra Samudrika," became a cornerstone text for palm readers across Asia.

During the reign of the Mauryan Empire (322-185 BCE), palmistry flourished as a respected science. Kings employed palmists as advisors, considering palm readings essential for important decisions.

Palmistry was preserved and advanced during the medieval period by Hindu, Muslim, and Buddhist scholars who recognized its profound insights into human nature and destiny.

In modern India, palmistry remains deeply integrated with Vedic astrology and spiritual practice. Discover the wisdom of this ancient science at HastRekhaAi, where tradition meets modern AI technology.`,
    contentHi: `हस्तरेखा विज्ञान (Hastrekha Vigyan) को भारत में 5,000 से अधिक वर्षों से प्रचलित किया जाता है।`,
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    category: 'History',
  },
  {
    slug: 'triangle-in-palm',
    titleEn: 'Is There a Triangle on Your Palm? Discover Its Mystical Meaning',
    titleHi: 'क्या आपकी हथेली में त्रिकोण बना है? इसका रहस्यमय अर्थ जानें',
    contentEn: `In palmistry, a triangle formed by the convergence of three major lines is considered one of the most auspicious marks. This rare symbol indicates heightened intuition, spiritual awareness, and exceptional problem-solving abilities. People with triangle marks on their palms often possess natural healing abilities and deep philosophical understanding. The location of the triangle on the palm determines which aspect of life it influences most strongly.`,
    contentHi: `हस्तरेखा विज्ञान में, तीन प्रमुख रेखाओं के संगम से बना त्रिकोण सबसे शुभ चिन्हों में से एक माना जाता है।`,
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    category: 'Palmistry',
  },
  {
    slug: 'letter-m-palm',
    titleEn: 'The Mystical Letter M on Your Palm: What It Means',
    titleHi: 'आपकी हथेली पर रहस्यमय अक्षर M: इसका मतलब क्या है',
    contentEn: `The letter M naturally formed on the palm by the convergence of multiple lines is an exceptionally rare and powerful mark. People with an M on their palm are believed to possess extraordinary luck, business acumen, and leadership qualities. This mark indicates a person who is destined for success and recognition. The M formation suggests strong determination and the ability to overcome obstacles.`,
    contentHi: `हथेली पर कई रेखाओं के संगम से प्राकृतिक रूप से बना अक्षर M एक असाधारण दुर्लभ और शक्तिशाली निशान है।`,
    date: 'Mar 3, 2026',
    readTime: '5 min read',
    category: 'Palmistry',
  },
  {
    slug: 'split-life-line',
    titleEn: 'What Does a Split Life Line Mean in Palmistry?',
    titleHi: 'हस्तरेखा में विभाजित जीवन रेखा का क्या मतलब है?',
    contentEn: `A split life line in palmistry indicates significant life changes and new directions. Rather than signifying hardship, a divided life line suggests multiple life paths and opportunities for growth. This mark often appears before major decisions or transformations. People with split life lines are adaptable, resilient, and capable of thriving in different environments.`,
    contentHi: `हस्तरेखा विज्ञान में विभाजित जीवन रेखा जीवन में महत्वपूर्ण परिवर्तन और नई दिशा को दर्शाती है।`,
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    category: 'Palmistry',
  },
  {
    slug: 'fish-symbol-palm',
    titleEn: 'Fish Symbol on Palm: A Sign of Prosperity and Spirituality',
    titleHi: 'हथेली पर मछली का प्रतीक: समृद्धि और आध्यात्मिकता का संकेत',
    contentEn: `The fish symbol (Matsya Mudra) appearing on the palm is one of the most auspicious marks in Vedic palmistry. This rare mark indicates great fortune, spiritual awakening, and the blessing of divine protection. In Hindu tradition, the fish symbol is sacred and represents Lord Vishnu. People with fish marks are believed to attract wealth and success effortlessly.`,
    contentHi: `हथेली पर दिखाई देने वाला मछली का प्रतीक (मत्स्य मुद्रा) वैदिक हस्तरेखा में सबसे शुभ निशानों में से एक है।`,
    date: 'Feb 25, 2026',
    readTime: '7 min read',
    category: 'Palmistry',
  },
  {
    slug: 'circle-marks-palm',
    titleEn: 'Circle and Ring Marks on Palm: Their Hidden Meanings',
    titleHi: 'हथेली पर वृत्त और वलय के निशान: उनके छिपे हुए अर्थ',
    contentEn: `Circle marks on the palm carry different meanings depending on their location. Circles on the life line indicate challenging periods that need attention. On the heart line, they suggest emotional intensity. These marks are not negative but rather indicate areas where personal focus and awareness are needed. Understanding their placement helps in navigating life challenges.`,
    contentHi: `हथेली पर वृत्त के निशान उनके स्थान के आधार पर विभिन्न अर्थ रखते हैं।`,
    date: 'Feb 22, 2026',
    readTime: '6 min read',
    category: 'Palmistry',
  },
  {
    slug: 'straight-heart-line',
    titleEn: 'Straight Heart Line: The Meaning and Personality Traits',
    titleHi: 'सीधी हृदय रेखा: अर्थ और व्यक्तित्व विशेषताएं',
    contentEn: `A straight heart line that runs horizontally across the palm indicates emotional stability and practicality in relationships. People with straight heart lines tend to be logical in love matters and seek stable, committed relationships. They are reliable partners who approach emotions rationally. This line suggests honesty, directness, and clarity in emotional expression.`,
    contentHi: `हथेली के आर-पार क्षैतिज रूप से चलने वाली सीधी हृदय रेखा भावनात्मक स्थिरता और संबंधों में व्यावहारिकता को दर्शाती है।`,
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    category: 'Palmistry',
  },
  {
    slug: 'curved-head-line',
    titleEn: 'Curved Head Line: What It Reveals About Your Mind',
    titleHi: 'घुमावदार सिर की रेखा: आपके दिमाग के बारे में क्या कहती है',
    contentEn: `A curved or drooping head line suggests a creative, intuitive mind with strong imaginative capabilities. People with curved head lines are often artists, innovators, and visionary thinkers. They approach problems creatively and are comfortable with abstract thinking. This line indicates emotional sensitivity and the ability to understand the deeper meaning of situations. Such individuals excel in creative fields.`,
    contentHi: `एक घुमावदार या झुकी हुई सिर की रेखा रचनात्मक, अंतर्ज्ञानी दिमाग के साथ मजबूत कल्पनाशील क्षमताओं का सुझाव देती है।`,
    date: 'Feb 18, 2026',
    readTime: '6 min read',
    category: 'Palmistry',
  },
  {
    slug: 'missing-fate-line',
    titleEn: 'No Fate Line? Understanding Life Without a Destiny Mark',
    titleHi: 'कोई भाग्य रेखा नहीं? भाग्य चिन्ह के बिना जीवन को समझें',
    contentEn: `The absence of a fate line doesn't indicate a lack of destiny but rather freedom and personal choice. People without a prominent fate line have the power to create their own destiny without being bound by predetermined paths. They are self-determined, independent, and capable of making bold life choices. This indicates freedom from external constraints and the ability to shape one's future actively.`,
    contentHi: `भाग्य रेखा की अनुपस्थिति भाग्य की कमी नहीं बल्कि स्वतंत्रता और व्यक्तिगत विकल्प को दर्शाती है।`,
    date: 'Feb 15, 2026',
    readTime: '7 min read',
    category: 'Palmistry',
  },
  {
    slug: 'sun-line-strong',
    titleEn: 'Strong Sun Line: The Mark of Success and Recognition',
    titleHi: 'मजबूत सूर्य रेखा: सफलता और मान्यता का निशान',
    contentEn: `A strong, clear sun line running from the base of the palm to the ring finger is one of the most auspicious marks in palmistry. It indicates natural talent, charisma, and the potential for achieving public recognition. People with strong sun lines are creative, expressive, and have the potential to make a significant impact. This line suggests success in creative fields and public recognition of your talents.`,
    contentHi: `हथेली के आधार से अनामिका तक चलने वाली एक मजबूत, स्पष्ट सूर्य रेखा हस्तरेखा में सबसे शुभ निशानों में से एक है।`,
    date: 'Feb 12, 2026',
    readTime: '7 min read',
    category: 'Palmistry',
  },
  {
    slug: 'double-marriage-line',
    titleEn: 'Double Marriage Line: Multiple Relationships or Life Chapters?',
    titleHi: 'दोहरी विवाह रेखा: कई संबंध या जीवन अध्याय?',
    contentEn: `Multiple marriage lines on the palm don't necessarily indicate multiple marriages but rather significant relationships and important connections that shape your life. These lines can represent deep emotional bonds, partnerships, and major life chapters. Each line reflects a significant relationship that influences your personal growth. The interpretation depends on their depth and clarity.`,
    contentHi: `हथेली पर कई विवाह रेखाएं जरूरी नहीं कि कई विवाह को दर्शाती हैं बल्कि महत्वपूर्ण संबंध और महत्वपूर्ण जीवन अध्यायों को दर्शाती हैं।`,
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    category: 'Palmistry',
  },
  {
    slug: 'grid-pattern-palm',
    titleEn: 'Grid Pattern on Palm: Meaning and Interpretations',
    titleHi: 'हथेली पर जाली पैटर्न: अर्थ और व्याख्या',
    contentEn: `A grid or lattice pattern appearing on the palm indicates a period of challenge and spiritual evolution. Rather than being negative, this pattern suggests that obstacles are opportunities for growth and transformation. People with grid patterns are resilient and capable of turning difficulties into strengths. It represents a period of intense learning and personal development.`,
    contentHi: `हथेली पर दिखाई देने वाला जाली या जाली पैटर्न चुनौती और आध्यात्मिक विकास की अवधि को दर्शाता है।`,
    date: 'Feb 8, 2026',
    readTime: '5 min read',
    category: 'Palmistry',
  },
  {
    slug: 'wealth-indicators-astrology',
    titleEn: 'Money and Wealth Indicators: What Your Palm and Stars Reveal',
    titleHi: 'धन और संपत्ति संकेतक: आपकी हथेली और तारे क्या बताते हैं',
    contentEn: `Various palm markings and astrological indicators suggest financial prosperity. The Jupiter finger (index finger) represents abundance, while the wealth lines and money triangles indicate financial potential. In astrology, Jupiter's position and the 2nd, 8th, and 11th houses govern finances. A strong sun line, clear money triangles, and favorable Jupiter placement all suggest financial success. Understanding these signs helps you optimize your financial decisions.`,
    contentHi: `विभिन्न हथेली के निशान और ज्योतिषीय संकेतक वित्तीय समृद्धि का सुझाव देते हैं।`,
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    category: 'Guidance',
  },
  {
    slug: 'samudrika-lucky-hands',
    titleEn: 'According to Samudrika Shastra: What Makes a Hand Lucky?',
    titleHi: 'समुद्रिक शास्त्र के अनुसार: हाथ को भाग्यशाली क्या बनाता है?',
    contentEn: `According to Samudrika Shastra, certain hand characteristics are considered inherently lucky. These include well-proportioned fingers, a strong life line, clear heart and head lines, and auspicious marks like fish symbols or triangles. The color, texture, and shape of hands also matter. Hands with smooth skin, balanced proportions, and auspicious lines are considered naturally fortunate. Understanding these characteristics helps you appreciate your inherent advantages.`,
    contentHi: `समुद्रिक शास्त्र के अनुसार, कुछ हाथ की विशेषताओं को स्वाभाविक रूप से भाग्यशाली माना जाता है।`,
    date: 'Jan 28, 2026',
    readTime: '9 min read',
    category: 'Palmistry',
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageShell>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link href="/blog">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-0">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 font-serif">{post.titleEn}</h1>
          <p className="text-lg text-muted-foreground font-serif">{post.titleHi}</p>
          <p className="text-sm text-muted-foreground mt-4">{post.date}</p>
        </div>

        <article className="prose prose-invert max-w-none mb-12">
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap mb-8">
            {post.contentEn}
          </div>
        </article>

        <div className="border-t border-border pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 font-serif">हिंदी संस्करण</h2>
          <article className="prose prose-invert max-w-none">
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
              {post.contentHi}
            </div>
          </article>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Want detailed analysis? <Link href="/palm-reading" className="text-primary hover:text-primary/80">Get your AI-powered palm reading at HastRekhaAi</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
