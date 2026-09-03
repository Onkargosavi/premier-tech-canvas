import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  Star,
  BookOpen,
  Trophy,
  ArrowRight,
  Plus,
  Minus,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Quote,
  Menu,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import { TechMarquee } from "@/components/site/Marquee";
import { WhyUsGallery } from "@/components/site/WhyUsGallery";
import { AboutCollage } from "@/components/site/AboutCollage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HATAEC TECH | IT Training, Internships & Placement Support" },
      {
        name: "description",
        content:
          "HATAEC TECH trains students in Java, MERN, Python and Cloud with real projects, mentorship and placement support. 1200+ students trained since 2024.",
      },
      { property: "og:title", content: "HATAEC TECH | IT Training & Placement" },
      {
        property: "og:description",
        content:
          "Job-ready IT training with real projects, expert mentors and placement support across 48+ course tracks.",
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { icon: Users, value: "1200+", title: "STU", label: "Students" },
  { icon: Star, value: "48+", title: "Course", label: "Categories" },
  { icon: BookOpen, value: "150+", title: "Place", label: "Mentored" },
  { icon: Trophy, value: "200+", title: "Projects", label: "Completed" },
];

const VALUES = ["Curious", "Consistent", "A Builder", "Job Ready", "A Team Player", "Unstoppable"];

const COURSES = [
  {
    title: "Full Stack Java",
    detail: "Core Java, Advanced Java, Spring Boot, Hibernate and live project delivery.",
    duration: "6 months",
  },
  {
    title: "MERN Stack",
    detail: "React, Node, Express and MongoDB with deployment and API design practice.",
    duration: "5 months",
  },
  {
    title: "Python & Cloud",
    detail: "Python, Django basics, AWS fundamentals and CI/CD workflow training.",
    duration: "4 months",
  },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const COURSE_LIST = [
  { name: "C Programming", icon: "c/c-original.svg" },
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "Core Java", icon: "java/java-original.svg" },
  { name: "Advanced Java", icon: "java/java-original.svg" },
  { name: "Spring Boot", icon: "spring/spring-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "AWS Cloud", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "HTML5 & CSS3", icon: "html5/html5-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
  { name: "PHP & MySQL", icon: "php/php-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "Docker", icon: "docker/docker-original.svg" },
];

const FAQS = [
  {
    q: "Do you provide placement assistance after the course?",
    a: "Yes. Every student gets resume reviews, mock interviews and direct referrals to our hiring partners until placed.",
  },
  {
    q: "Are the classes online or offline?",
    a: "Both. You can join our classroom batches or attend the same live sessions online with recordings available.",
  },
  {
    q: "Do beginners with no coding background fit here?",
    a: "Absolutely. Every track starts from programming fundamentals before moving into frameworks and live projects.",
  },
  {
    q: "Will I work on real projects?",
    a: "Each learner ships at least two production-style projects with code reviews from working industry mentors.",
  },
];

const AWARDS = [
  "Best IT Training Institute 2024",
  "Excellence in Placements",
  "Top Rated Java Academy",
  "Student Choice Award",
  "Skill Partner of the Year",
];

const TESTIMONIALS = [
  {
    quote:
      "The Java track was brutally practical. I built two full applications and cleared my first interview within weeks.",
    name: "Sneha Patil",
    role: "Software Engineer, Pune",
  },
  {
    quote:
      "Mentors reviewed my code line by line. That habit is the reason I passed the technical rounds so comfortably.",
    name: "Rohit Kulkarni",
    role: "MERN Developer, Bengaluru",
  },
  {
    quote:
      "I came from a non-IT degree. The fundamentals were explained patiently and placement support never stopped.",
    name: "Aditi Sharma",
    role: "Cloud Associate, Hyderabad",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              H
            </span>
            <span className="font-display text-lg font-semibold tracking-[0.22em] text-primary">
              HATAEC
              <span className="ml-2 rounded-md border border-border px-2 py-0.5 text-[10px] tracking-[0.18em] text-muted-foreground">
                TECH
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Enquire Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="animate-fade-in border-t border-border bg-card px-5 py-4 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Admissions open 2026
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
                Learn the skills that <span className="text-gradient">get you hired</span> in tech.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                HATAEC TECH turns beginners into job-ready engineers through live mentorship,
                production-grade projects and placement support that does not stop at the last class.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="animate-fade-in overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img
                src={heroImage}
                alt="Students learning software development at HATAEC TECH"
                width={1280}
                height={960}
                className="h-80 w-full object-cover sm:h-[28rem] lg:h-[32rem]"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ icon: Icon, value, title, label }) => (
              <div key={value} className="surface-card p-7 text-center">
                <Icon className="mx-auto h-7 w-7 text-secondary" />
                <p className="mt-4 font-display text-3xl font-semibold text-primary">{value}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-border bg-muted/40 py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="animate-fade-in">
              <AboutCollage />
            </div>

            <div className="animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Who we are
              </span>
              <h2 className="mt-4 font-display text-3xl leading-[1.12] text-primary sm:text-4xl lg:text-5xl">
                Building skills. <span className="text-gradient">Creating opportunities.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                HATAEC TECH began in 2024 as a single mentor-led classroom and grew into a training
                studio where every batch ships real software before graduating. We rebuild our
                syllabus with hiring managers, pair every learner with a mentor, and back it with
                placement support that continues until the offer letter is signed.
              </p>

              <div className="mt-9 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                {[
                  { value: "Since 2024", label: "Mentor-led since day one" },
                  { value: "1200+", label: "Students taught" },
                  { value: "48+", label: "Course tracks" },
                ].map((s) => (
                  <div key={s.value}>
                    <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {VALUES.map((v) => (
                  <span
                    key={v}
                    className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]"
                  >
                    {v}
                  </span>
                ))}
              </div>

              <a
                href="#courses"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                Discover our journey <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-primary sm:text-4xl">Signature Programs</h2>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              See more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {COURSES.map((c) => (
              <article key={c.title} className="surface-card flex flex-col gap-3 p-7">
                <span className="w-fit rounded-lg bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.duration}
                </span>
                <h3 className="font-display text-xl font-semibold text-primary">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-16 text-center font-display text-2xl text-primary sm:text-3xl">
            The Courses We Provide
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(showAllCourses ? COURSE_LIST : COURSE_LIST.slice(0, 8)).map((c) => (
              <div key={c.name} className="surface-card flex flex-col items-center px-5 py-6 text-center">
                <img
                  src={`${DEVICON}${c.icon}`}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="h-10 w-10 object-contain"
                />
                <p className="mt-3 text-sm font-medium text-foreground">{c.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCourses((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              {showAllCourses ? "Show less" : "See more courses"}
              <ArrowRight className={`h-4 w-4 transition-transform ${showAllCourses ? "-rotate-90" : ""}`} />
            </button>
          </div>
        </section>

        {/* TECH STACK MARQUEE */}
        <section className="border-y border-border bg-muted/40 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">Tech Stack We Teach</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              The exact tools, frameworks and platforms used inside our project labs.
            </p>
          </div>
          <div className="mt-10">
            <TechMarquee />
          </div>
        </section>

        {/* WHY US — cinematic gallery */}
        <section className="border-y border-border bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/60">
              The HATAEC difference
            </span>
            <h2 className="mt-3 font-display text-3xl text-primary-foreground sm:text-4xl">
              Why students choose <span className="text-accent">us</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
              Five promises, delivered in every batch — hover a card to read the story.
            </p>
          </div>
          <div className="mt-10">
            <WhyUsGallery />
          </div>
        </section>

        {/* AWARDS */}
        <section id="awards" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">Awards & Rewards</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {AWARDS.map((a) => (
              <div key={a} className="surface-card flex flex-col items-center gap-3 px-4 py-7 text-center">
                <ShieldCheck className="h-9 w-9 text-secondary" />
                <p className="text-sm font-medium text-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-y border-border bg-muted/40 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">Student Feedback</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="surface-card p-7">
                  <Quote className="h-7 w-7 text-secondary" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
          <h2 className="text-center font-display text-3xl text-primary sm:text-4xl">FAQs</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    {open ? (
                      <Minus className="h-4 w-4 shrink-0 text-secondary" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {open && (
                    <p className="animate-fade-in px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3 lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-primary">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>
                  2nd Floor, Tech Park Avenue
                  <br />
                  Baner, Pune 411045
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@hataectech.com">info@hataectech.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="transition-colors hover:text-secondary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-primary">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay updated with our latest courses, batches and offers.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-ring/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 HATAEC TECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
