"use client";

import React from "react"

import { PageShell } from "@/components/page-shell";
import { StarField } from "@/components/zodiac-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "abhijain.technical@gmail.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Varanasi, Uttar Pradesh",
    description: "The spiritual capital of India",
  },
  {
    icon: Clock,
    title: "Available Hours",
    detail: "9 AM - 9 PM IST",
    description: "Monday to Saturday",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <StarField className="absolute inset-0" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Contact HastRekhaAI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Have questions about your reading, feedback, or need support? We are here to help you on your spiritual journey. Reach out to us anytime!
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We respond to all inquiries within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Get In Touch
          </h2>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Info Cards */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary">{item.detail}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border/50 bg-card p-6 lg:col-span-3 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We will get back to you within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="border-border/50 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="border-border/50 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      required
                      className="border-border/50 bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="border-border/50 bg-background text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
