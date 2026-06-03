"use client";

import { useState } from "react";
import { BookOpen, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

interface Book {
  id: string;
  title: string;
  titleHi: string;
  author: string;
  pdfUrl: string;
  description: string;
  descriptionHi: string;
  pages: number;
  year: number;
}

const HASTREKHA_BOOKS: Book[] = [
  {
    id: "vrihud-hastrekha",
    title: "Vrihud Hastrekha Shastra",
    titleHi: "वृहद हस्तरेखा शास्त्र",
    author: "Ancient Vedic Text",
    pdfUrl: "https://ia601507.us.archive.org/14/items/in.ernet.dli.2015.429689/2015.429689.VrihudHastrekhaShastraAC4926_text.pdf",
    description: "Comprehensive guide to palmistry and hand analysis in Sanskrit and English",
    descriptionHi: "हस्तरेखा विज्ञान का संपूर्ण और विस्तृत विवरण",
    pages: 250,
    year: 2015,
  },
  {
    id: "dynamic-astrology",
    title: "Dynamic Astrology",
    titleHi: "गतिशील ज्योतिष",
    author: "Vedic Scholars",
    pdfUrl: "https://ia801407.us.archive.org/13/items/in.ernet.dli.2015.464310/2015.464310.Dynamic-Astrology.pdf",
    description: "Advanced techniques for planetary analysis and hand reading integration",
    descriptionHi: "ग्रहों के विश्लेषण और हस्तरेखा विज्ञान का संयोजन",
    pages: 320,
    year: 2015,
  },
];

export function BookReadingSection() {
  const { t } = useLanguage();
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const handleBookSelect = (bookId: string) => {
    setSelectedBook(bookId);
  };

  const selectedBookData = HASTREKHA_BOOKS.find((b) => b.id === selectedBook);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background py-16 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary">Learn Hastrekha Science</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Hastrekha Vigyan Ki Kitaab
            <span className="block text-2xl text-primary md:text-3xl lg:text-4xl mt-2">
              हस्तरेखा विज्ञान की किताब
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
            Explore authentic texts on palmistry, hand reading, and the science behind Hastrekha. Learn from ancient Vedic knowledge and modern interpretations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Books List */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <h3 className="font-serif text-lg font-bold text-foreground">Available Books</h3>
              <div className="space-y-3">
                {HASTREKHA_BOOKS.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => handleBookSelect(book.id)}
                    className={`w-full text-left rounded-lg border-2 p-4 transition-all ${
                      selectedBook === book.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {book.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{book.titleHi}</p>
                        <p className="text-[10px] text-muted-foreground/60 mt-2">
                          {book.pages} pages • {book.year}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PDF Viewer / Book Details */}
          <div className="lg:col-span-2">
            {selectedBook && selectedBookData ? (
              <div className="space-y-4">
                {/* Book Header */}
                <div className="rounded-lg border-2 border-border bg-card p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {selectedBookData.title}
                  </h3>
                  <p className="text-lg text-primary mt-2">{selectedBookData.titleHi}</p>
                  <p className="text-sm text-muted-foreground mt-3">{selectedBookData.author}</p>
                  <p className="text-sm text-muted-foreground mt-2">{selectedBookData.description}</p>
                  <p className="text-sm text-muted-foreground italic mt-1">{selectedBookData.descriptionHi}</p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={selectedBookData.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button className="gap-2" size="sm">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </a>
                    <a
                      href={`https://archive.org/details/?query=${encodeURIComponent(
                        selectedBookData.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Source
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Book Information Card */}
                <div className="rounded-lg border-2 border-border bg-card p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Book Details</h4>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>
                          <strong>Pages:</strong> {selectedBookData.pages}
                        </p>
                        <p>
                          <strong>Published:</strong> {selectedBookData.year}
                        </p>
                        <p>
                          <strong>Source:</strong> Internet Archive (Archive.org)
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        Use the download button above to access the PDF on your device, or view it on Archive.org for online reading.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-border bg-muted/20 p-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground font-medium">
                  Select a book from the list to begin reading
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore authentic texts on Hastrekha science and palmistry
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Learning Benefits */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "📖",
              title: "Ancient Knowledge",
              desc: "Learn from original Vedic texts",
            },
            {
              icon: "🔍",
              title: "Detailed Analysis",
              desc: "Comprehensive palmistry guides",
            },
            {
              icon: "⭐",
              title: "Expert Insights",
              desc: "Scholarly interpretations included",
            },
            {
              icon: "🌟",
              title: "Free Access",
              desc: "All books available for download",
            },
          ].map((benefit) => (
            <div key={benefit.title} className="rounded-lg border-2 border-border bg-card p-6 text-center">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h4 className="font-semibold text-foreground">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
