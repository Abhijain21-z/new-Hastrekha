import { zodiacData } from "@/lib/zodiac-data";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StarField } from "@/components/zodiac-icons";
import { notFound } from "next/navigation";

interface ZodiacDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return zodiacData.map((zodiac) => ({
    id: zodiac.id,
  }));
}

export default async function ZodiacDetailPage({ params }: ZodiacDetailPageProps) {
  const { id } = await params;
  const zodiac = zodiacData.find((z) => z.id === id);

  if (!zodiac) {
    notFound();
  }

  return (
    <PageShell>
      <div className="relative min-h-screen">
        {/* Background */}
        <StarField className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10">
          {/* Back Button */}
          <Link href="/zodiac">
            <Button variant="outline" size="sm" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Zodiac Signs
            </Button>
          </Link>

          {/* Header Section */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-b from-primary/10 to-background/50 overflow-hidden">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:items-center">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-lg border border-primary/30 bg-primary/5 shadow-lg">
                  <Image
                    src={zodiac.image}
                    alt={zodiac.name_en}
                    fill
                    sizes="256px"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="font-serif text-sm font-semibold text-primary mb-2">
                  {"Rashi / राशि"}
                </p>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
                  {zodiac.name_en}
                </h1>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                  {zodiac.name_hi}
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-muted-foreground font-semibold">
                    {zodiac.dates}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {"तारीख / Date Range"}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Content Sections */}
          <div className="grid gap-8 mb-12">
            {/* Nature */}
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {"स्वभाव / Nature"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"भविष्यफल (Hindi)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {zodiac.nature_hi}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"Prediction (English)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {zodiac.nature_en}
                  </p>
                </div>
              </div>
            </Card>

            {/* Personality Traits */}
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {"व्यक्तित्व गुण / Personality Traits"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"भविष्यफल (Hindi)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {zodiac.traits_hi}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"Prediction (English)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {zodiac.traits_en}
                  </p>
                </div>
              </div>
            </Card>

            {/* Love and Relationships */}
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {"प्रेम और संबंध / Love and Relationships"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"भविष्यफल (Hindi)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {zodiac.love_hi}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"Prediction (English)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {zodiac.love_en}
                  </p>
                </div>
              </div>
            </Card>

            {/* Career and Success */}
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {"करियर और सफलता / Career and Success"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"भविष्यफल (Hindi)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {zodiac.career_hi}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"Prediction (English)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {zodiac.career_en}
                  </p>
                </div>
              </div>
            </Card>

            {/* Chinese Zodiac Connection */}
            <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background/50 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {"चीनी राशि संबंध / Chinese Zodiac Connection"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"भविष्यफल (Hindi)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {zodiac.chinese_hi}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {"Prediction (English)"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {zodiac.chinese_en}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center mb-12">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              {"Get Your Complete Astrological Profile"}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Combine your zodiac wisdom with a detailed palm reading analysis for a complete 
              understanding of your cosmic destiny.
            </p>
            <Link href="/palm-reading">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Your Palm Reading
              </Button>
            </Link>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Link href="/zodiac">
              <Button variant="outline" className="w-full sm:w-auto">
                {"← Back to All Signs"}
              </Button>
            </Link>
            <Link href="/palm-reading">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                {"Get Palm Reading →"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
