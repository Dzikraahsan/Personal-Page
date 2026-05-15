import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Clock,
  MapPin,
  MessageSquare,
  Zap,
  CalendarCheck,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Dzikraahsan",
    handle: "@Dzikraahsan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dzikra-ahsan-1b2154386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    handle: "in/Dzikra Ahsan Imawan",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dzikraahsan10@gmail.com",
    handle: "dzikraahsan10@gmail.com",
  },
];

const highlights = [
  {
    icon: Zap,
    label: "Response Time",
    value: "Within 24 hours",
    sub: "usually much faster",
  },
  {
    icon: CalendarCheck,
    label: "Availability",
    value: "Open to work",
    sub: "freelance & collaborations",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Majalengka, Indonesia",
    sub: "remote-friendly worldwide",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri",
    sub: "09:00 – 20:00 WIB",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter a valid name (at least 2 characters).");
      return;
    }
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.trim().length < 5) {
      toast.error("Please enter a message (at least 5 characters).");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase
        .from("messages")
        .insert([
          { name: name.trim(), email: email.trim(), message: message.trim() },
        ]);
      if (error) throw error;
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="container pt-32 -mb-8">
        {/* Two-column grid: left = existing content, right = info panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── LEFT COLUMN (unchanged content) ─────────────────────── */}
          <Reveal className="max-w-xl w-full">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              let's talk
            </h1>
            <p className="text-muted-foreground mb-12">
              have a project in mind, a question, or just want to say hi? i'd
              love to hear from you.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mb-16">
              {socials.map((s, i) => (
                <Reveal
                  as="a"
                  key={s.label}
                  index={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3 border-b border-border/40 hover:border-primary/40 transition-colors"
                >
                  <s.icon
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    {s.handle}
                  </span>
                </Reveal>
              ))}
            </div>

            {/* Contact Form */}
            <Reveal delay={0.15}>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
                  send a message
                </h2>
                <input
                  type="text"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
                <input
                  type="email"
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-md hover:glow-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? "sending..." : "send"} <Send size={14} />
                </button>
              </form>
            </Reveal>
          </Reveal>

          {/* RIGHT COLUMN */}
          <Reveal delay={0.2} className="w-full lg:pt-[3.75rem]">
            {/* Sticky wrapper */}
            <div className="lg:sticky lg:top-32 flex flex-col gap-6">
              {/* Header accent */}
              <div>
                <span className="font-mono text-xs text-primary tracking-widest uppercase">
                  quick info
                </span>
                <div className="mt-3 h-px w-12 bg-primary/40" />
              </div>

              {/* Highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <Reveal
                    key={item.label}
                    index={i}
                    delay={0.25 + i * 0.07}
                    className="group flex items-start gap-3 bg-card border border-border/40 hover:border-primary/30 rounded-lg px-4 py-4 transition-colors duration-300"
                  >
                    <div className="mt-0.5 shrink-0 w-7 h-7 rounded-md border border-border/60 group-hover:border-primary/40 flex items-center justify-center transition-colors duration-300">
                      <item.icon
                        size={13}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground leading-snug">
                        {item.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-border/30" />

              {/* Let's connect blurb */}
              <Reveal delay={0.55}>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0 w-7 h-7 rounded-md border border-border/60 flex items-center justify-center">
                    <MessageSquare size={13} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">
                      preferred contact
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      the form on the left is the fastest way to reach me. for
                      quick chats, email or LinkedIn work just as well.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Subtle status pill */}
              <Reveal delay={0.65}>
                <div className="inline-flex items-center gap-2 border border-border/40 rounded-full px-3.5 py-1.5 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground tracking-wide">
                    available for new projects
                  </span>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
