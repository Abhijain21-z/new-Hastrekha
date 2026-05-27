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

The Life Line represents your physical vitality and life force. Contrary to popular belief, it doesn't determine your lifespan but rather the quality of your life and your ability to overcome obstacles.

The Head Line reveals your intellectual capacity, thinking patterns, and analytical abilities. A clear, deep head line indicates strong mental clarity and focus in life.

The Heart Line shows your emotional nature, capacity for love, and relationship dynamics. The quality of this line reveals your depth of feeling and emotional stability.

The Fate Line represents your career path and life purpose. Its strength indicates how much control you have over your destiny versus being swept along by fate.

The Sun Line, though not present in everyone, indicates success, fame, and spiritual enlightenment. When present, it suggests favorable outcomes in your endeavors.

Understanding these lines in combination with the mounts and other markings gives a complete picture of your personality and life path. At HastRekhaAi, we provide detailed analysis of all these elements.`,
    contentHi: `हस्तरेखा विज्ञान और ज्योतिष प्राचीन विज्ञान हैं जो आपके व्यक्तित्व, भाग्य और जीवन पथ को प्रकट करते हैं। यह व्यापक मार्गदर्शन हस्तरेखा पढ़ने और वैदिक ज्योतिष से इसके संबंध के बारे में जानने के लिए आवश्यक सभी चीजें शामिल करता है।

पांच प्रमुख हथेली रेखाएं - जीवन रेखा, सिर की रेखा, हृदय रेखा, भाग्य रेखा, और सूर्य रेखा - आपके जीवन के बारे में एक अनोखी कहानी बताती हैं। इन रेखाओं को समझने से आप अपने भाग्य को समझने और सूचित निर्णय लेने में मदद पाते हैं।

आपकी हथेली पर सात माउंट, जिनमें से प्रत्येक विभिन्न ग्रहीय प्रभावों का प्रतिनिधित्व करता है, आपके चरित्र और संभावना में अतिरिक्त अंतर्दृष्टि प्रदान करते हैं। भारतीय परंपरा में, हस्तरेखा विज्ञान वैदिक ज्योतिष और आपके जन्म के समय ग्रहों की स्थिति से गहराई से जुड़ा है।

अपनी हथेली को पढ़ना सीखें, गौण रेखाओं और निशानों को समझें, और ज्योतिषीय सिद्धांतों के आधार पर अपने भाग्यशाली तत्वों की खोज करें। आपकी हथेलियां आपकी अनोखी जीवन यात्रा को समझने की कुंजी रखती हैं।

जीवन रेखा आपकी शारीरिक शक्ति और जीवन शक्ति का प्रतिनिधित्व करती है। आम धारणा के विपरीत, यह आपकी जीवन अवधि निर्धारित नहीं करती, बल्कि आपके जीवन की गुणवत्ता को दर्शाती है।

सिर की रेखा आपकी बौद्धिक क्षमता, सोच के तरीकों और विश्लेषणात्मक क्षमताओं को प्रकट करती है। स्पष्ट, गहरी सिर की रेखा मजबूत मानसिक स्पष्टता का संकेत देती है।

हृदय रेखा आपकी भावनात्मक प्रकृति, प्रेम की क्षमता और संबंध की गतिशीलता को दर्शाती है। यह रेखा आपकी भावनाओं की गहराई और भावनात्मक स्थिरता को प्रकट करती है।

भाग्य रेखा आपके करियर पथ और जीवन उद्देश्य का प्रतिनिधित्व करती है। इसकी शक्ति दर्शाती है कि आप अपने भाग्य पर कितना नियंत्रण रखते हैं।

सूर्य रेखा, यद्यपि सभी में मौजूद नहीं है, सफलता, प्रसिद्धि और आध्यात्मिक ज्ञान को दर्शाती है। जब यह मौजूद होती है, तो यह आपके प्रयासों में अनुकूल परिणामों का सुझाव देती है।`,
    date: 'Mar 10, 2026',
    readTime: '15 min read',
    category: 'Palmistry',
  },
  {
    slug: 'understanding-palm-lines',
    titleEn: 'Understanding the Major Palm Lines: A Complete Guide',
    titleHi: 'मुख्य हस्तरेखाओं को समझना: संपूर्ण मार्गदर्शन',
    contentEn: `Palmistry is one of the oldest sciences in the world, with roots tracing back over 5,000 years to ancient India and China. The major palm lines are considered windows into your destiny and personality. The four primary lines are Heart Line, Head Line, Life Line, and Fate Line. Each line tells a unique story about your emotional nature, intellect, vitality, and life path.

The Heart Line represents your emotional capacity and relationships. A long, clear heart line suggests deep emotional connections, while a short line may indicate reserved emotions.

The Head Line reveals your intellectual capacity and thinking patterns. Its depth and clarity show mental clarity and focus.

The Life Line indicates your physical vitality and life force. Contrary to popular belief, it doesn't determine lifespan but rather life quality.

The Fate Line represents your career and life purpose. Its presence or absence suggests the level of control you have over your destiny.`,
    contentHi: `हस्तरेखा विज्ञान दुनिया के सबसे पुराने विज्ञानों में से एक है, जिसकी जड़ें 5,000 से अधिक वर्ष पहले प्राचीन भारत और चीन में मिलती हैं। मुख्य हथेली की रेखाएं आपके भाग्य और व्यक्तित्व की खिड़कियां मानी जाती हैं। चार प्राथमिक रेखाएं हैं - हृदय रेखा, सिर की रेखा, जीवन रेखा और भाग्य रेखा।

हृदय रेखा आपकी भावनात्मक क्षमता और संबंधों का प्रतिनिधित्व करती है। एक लंबी, स्पष्ट हृदय रेखा गहरे भावनात्मक संबंधों का सुझाव देती है।`,
    date: 'Feb 8, 2026',
    readTime: '8 min read',
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
      <div className="max-w-4xl mx-auto py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.titleEn}</h1>
          <p className="text-lg text-muted-foreground">{post.titleHi}</p>
          <p className="text-sm text-muted-foreground mt-4">{post.date}</p>
        </div>

        <article className="prose prose-invert max-w-none mb-12">
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
            {post.contentEn}
          </div>
        </article>

        <div className="border-t border-slate-800 pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">हिंदी संस्करण</h2>
          <article className="prose prose-invert max-w-none">
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
              {post.contentHi}
            </div>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
