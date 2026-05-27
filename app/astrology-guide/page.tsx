"use client";

import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";

const zodiacSigns = [
  { symbol: "\u2648", name: "Aries", element: "Fire", dates: "Mar 21 - Apr 19", traits: "Bold, ambitious, and energetic. Natural leaders who thrive on challenge and competition." },
  { symbol: "\u2649", name: "Taurus", element: "Earth", dates: "Apr 20 - May 20", traits: "Reliable, patient, and devoted. Values stability and finds comfort in material pleasures." },
  { symbol: "\u264A", name: "Gemini", element: "Air", dates: "May 21 - Jun 20", traits: "Versatile, curious, and expressive. Masters of communication with a playful spirit." },
  { symbol: "\u264B", name: "Cancer", element: "Water", dates: "Jun 21 - Jul 22", traits: "Intuitive, sentimental, and protective. Deeply connected to home and family." },
  { symbol: "\u264C", name: "Leo", element: "Fire", dates: "Jul 23 - Aug 22", traits: "Creative, passionate, and generous. Natural performers who love to be in the spotlight." },
  { symbol: "\u264D", name: "Virgo", element: "Earth", dates: "Aug 23 - Sep 22", traits: "Analytical, kind, and hardworking. Detail-oriented perfectionists with a desire to serve." },
  { symbol: "\u264E", name: "Libra", element: "Air", dates: "Sep 23 - Oct 22", traits: "Diplomatic, fair-minded, and social. Seekers of harmony and balance in all relationships." },
  { symbol: "\u264F", name: "Scorpio", element: "Water", dates: "Oct 23 - Nov 21", traits: "Resourceful, powerful, and brave. Deeply passionate with an unmatched intensity." },
  { symbol: "\u2650", name: "Sagittarius", element: "Fire", dates: "Nov 22 - Dec 21", traits: "Optimistic, freedom-loving, and philosophical. Adventurers with a thirst for knowledge." },
  { symbol: "\u2651", name: "Capricorn", element: "Earth", dates: "Dec 22 - Jan 19", traits: "Disciplined, responsible, and ambitious. Masters of self-control and long-term planning." },
  { symbol: "\u2652", name: "Aquarius", element: "Air", dates: "Jan 20 - Feb 18", traits: "Progressive, original, and independent. Visionaries who fight for a better world." },
  { symbol: "\u2653", name: "Pisces", element: "Water", dates: "Feb 19 - Mar 20", traits: "Compassionate, artistic, and intuitive. Deeply empathetic souls connected to the spiritual realm." },
];

const elementColors: Record<string, string> = {
  Fire: "border-red-500/30 bg-red-500/5",
  Earth: "border-green-500/30 bg-green-500/5",
  Air: "border-sky-500/30 bg-sky-500/5",
  Water: "border-blue-500/30 bg-blue-500/5",
};

const elementTextColors: Record<string, string> = {
  Fire: "text-red-400",
  Earth: "text-green-400",
  Air: "text-sky-400",
  Water: "text-blue-400",
};

export default function AstrologyGuidePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Vedic Astrology Guide
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore the twelve zodiac signs, their elements, and how celestial
            bodies influence your personality and life path according to Vedic
            astrology.
          </p>
        </div>
      </section>

      {/* Elements Overview */}
      <section className="bg-card/50 py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Fire", "Earth", "Air", "Water"].map((element) => (
              <div
                key={element}
                className={`rounded-xl border p-4 text-center ${elementColors[element]}`}
              >
                <div className={`text-2xl font-bold ${elementTextColors[element]}`}>
                  {element === "Fire" ? "\u{1F525}" : element === "Earth" ? "\u{1F30D}" : element === "Air" ? "\u{1F4A8}" : "\u{1F30A}"}
                </div>
                <div className={`mt-1 text-sm font-semibold ${elementTextColors[element]}`}>
                  {element}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {element === "Fire"
                    ? "Passion & Energy"
                    : element === "Earth"
                      ? "Stability & Growth"
                      : element === "Air"
                        ? "Intellect & Freedom"
                        : "Emotion & Intuition"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            The 12 Zodiac Signs
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zodiacSigns.map((sign) => (
              <div
                key={sign.name}
                className={`rounded-xl border p-5 transition-all hover:shadow-lg hover:shadow-primary/5 ${elementColors[sign.element]}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{sign.symbol}</span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {sign.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{sign.dates}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${elementTextColors[sign.element]} bg-background/50`}>
                    {sign.element}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {sign.traits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vedic vs Western */}
      <section className="bg-card/50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
            Vedic vs. Western Astrology
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="mb-3 font-serif text-lg font-semibold text-primary">Vedic (Jyotish)</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>{"- Uses the sidereal zodiac (fixed star positions)"}</li>
                <li>{"- Incorporates Nakshatras (27 lunar mansions)"}</li>
                <li>{"- Emphasizes karma and spiritual evolution"}</li>
                <li>{"- Dashas system for timing predictions"}</li>
                <li>{"- Originated in ancient India (5000+ years)"}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <h3 className="mb-3 font-serif text-lg font-semibold text-accent">Western</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>{"- Uses the tropical zodiac (season-based)"}</li>
                <li>{"- Focuses on Sun sign as primary indicator"}</li>
                <li>{"- Emphasizes psychological profiling"}</li>
                <li>{"- Transit-based prediction system"}</li>
                <li>{"- Popularized in Greek/Roman era"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
