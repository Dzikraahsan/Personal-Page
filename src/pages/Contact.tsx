import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Dzikraahsan", handle: "@Dzikraahsan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dzikra-ahsan-1b2154386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", handle: "in/Dzikra Ahsan Imawan" },
  { icon: Mail, label: "Email", href: "mailto:dzikraahsan10@gmail.com", handle: "dzikraahsan10@gmail.com" },
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
      const { error } = await supabase.from("messages").insert([
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
        <Reveal className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">let's talk</h1>
          <p className="text-muted-foreground mb-12">
            have a project in mind, a question, or just want to say hi? i'd love to hear from you.
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
                <s.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">{s.handle}</span>
              </Reveal>
            ))}
          </div>

          {/* Contact Form */}
          <Reveal delay={0.15}>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-2">send a message</h2>
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
      </div>
    </PageTransition>
  );
};

export default Contact;