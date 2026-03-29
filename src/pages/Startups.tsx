import PageMeta from '@/components/common/PageMeta';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  HandCoins,
  Landmark,
  Rocket,
} from 'lucide-react';
import { motion } from 'motion/react';

const startupStats = [
  { value: 'Seed', label: 'funding readiness' },
  { value: 'MCA', label: 'company setup support' },
  { value: 'Banking', label: 'current account guidance' },
  { value: 'Compliance', label: 'ongoing operational support' },
];

const launchCards = [
  {
    eyebrow: 'Startup launch',
    tag: 'Incorporation',
    title: 'Company setup and legal registration',
    description:
      'We support founders through entity formation, registration planning, and the first legal-operational setup.',
    image: '/images/startups/legal-setup.svg',
  },
  {
    eyebrow: 'Capital readiness',
    tag: 'Seed Funding',
    title: 'Investor and funding preparation',
    description:
      'From early fundraising readiness to documentation support, we help founders prepare for the next capital conversation.',
    image: '/images/startups/funding-readiness.svg',
  },
];

const startupServices = [
  {
    tag: 'Launch Setup',
    title: 'Company Incorporation',
    description:
      'Private limited setup, founder documentation guidance, and launch-stage structuring support.',
    image: '/images/startups/legal-setup.svg',
  },
  {
    tag: 'Registrations',
    title: 'GST, Startup India and Trademark Support',
    description:
      'Registration support across key startup requirements so the business is ready for operations and growth.',
    image: '/images/startups/compliance-ops.svg',
  },
  {
    tag: 'Banking',
    title: 'Bank Account and Payment Setup',
    description:
      'Support for banking-ready documentation, current account setup flow, and payment infrastructure readiness.',
    image: '/images/startups/banking-stack.svg',
  },
  {
    tag: 'Funding',
    title: 'Seed Funding Readiness',
    description:
      'Founder positioning, core startup documents, and preparation for angel, seed, and early-stage investor discussions.',
    image: '/images/startups/funding-readiness.svg',
  },
  {
    tag: 'Operations',
    title: 'Compliance and Back-office Support',
    description:
      'Support for recurring filings, business documentation, and operational finance workflows as the company scales.',
    image: '/images/startups/compliance-ops.svg',
  },
  {
    tag: 'Investor Pack',
    title: 'Deck, Data Room and Documentation',
    description:
      'Pitch deck guidance, investor-facing materials, and structured documentation for due diligence and follow-ups.',
    image: '/images/startups/investor-readiness.svg',
  },
];

const startupJourney = [
  {
    step: '01',
    title: 'Start and Incorporate',
    description:
      'Choose the right structure and complete the initial company setup with founder-ready documentation.',
    icon: Building2,
  },
  {
    step: '02',
    title: 'Register and Enable',
    description:
      'Move through GST, Startup India, trademark, and other setup layers needed to operate with confidence.',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: 'Bank and Operate',
    description:
      'Get banking, payment, compliance, and finance workflows aligned so daily operations can run smoothly.',
    icon: Landmark,
  },
  {
    step: '04',
    title: 'Prepare to Raise',
    description:
      'Build the investor-facing story, documents, and traction-ready structure for seed and early-stage funding.',
    icon: HandCoins,
  },
];

const operatingSignals = [
  'Founder-first advisory',
  'Registration support',
  'Banking readiness',
  'Seed-stage preparation',
  'Compliance continuity',
  'Execution-oriented support',
];

export default function Startups() {
  return (
    <>
      <PageMeta
        title="Startups"
        description="Startup support services from incorporation and registrations to banking, compliance, and seed funding readiness."
      />

      <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden pb-20 pt-32 xl:pb-28 xl:pt-36">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.45),hsl(var(--background)))]" />
          <div className="surface-grid absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute left-[8%] top-20 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[10%] top-28 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

          <div className="container relative px-4">
            <div className="grid items-center gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
              <motion.div
                className="space-y-8 text-center xl:text-left"
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
                  <Rocket className="h-4 w-4" />
                  Startup Launch and Funding Support
                </div>

                <div className="space-y-5">
                  <h1 className="font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl xl:text-7xl">
                    Startups from
                    <span className="gradient-text mt-3 block">registration to funding readiness</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground xl:mx-0 xl:text-xl">
                    We support founders from company incorporation and registrations to banking,
                    compliance, investor documentation, and seed-stage preparation.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row xl:justify-start">
                  <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                    <a href="#startup-services">
                      View Startup Services
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-primary/20 bg-background/80 px-7 text-base"
                  >
                    <a href="/#contact">Talk to Our Team</a>
                  </Button>
                  <WhatsAppButton size="lg" className="h-12 rounded-full px-7" />
                </div>

                <div className="grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                  {startupStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/70 bg-background/75 px-5 py-4 text-center shadow-sm backdrop-blur xl:text-left"
                    >
                      <div className="font-heading text-3xl font-bold text-primary">
                        {item.value}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {launchCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      className="group rounded-[28px] border border-border/70 bg-background/82 p-5 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1 sm:p-6"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.22 + index * 0.1 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-[24px] border border-border/70 bg-muted/40">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-5 inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {card.tag}
                      </div>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {card.eyebrow}
                      </p>
                      <div className="mt-2">
                        <h2 className="font-heading text-xl font-semibold">{card.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative mx-auto w-full max-w-2xl"
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full border border-primary/20 bg-background/70 backdrop-blur" />
                <div className="pointer-events-none absolute -right-6 bottom-16 h-32 w-32 rounded-full border border-secondary/20 bg-background/70 backdrop-blur" />

                <div className="glass-panel relative overflow-hidden rounded-[34px] p-6 shadow-[0_30px_100px_-40px_hsl(var(--foreground)/0.45)] sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                        Startup Services Desk
                      </p>
                      <h2 className="font-heading mt-2 text-2xl font-semibold">
                        A structured founder journey from setup to scale.
                      </h2>
                    </div>
                    <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      Founder-first support
                    </div>
                  </div>

                  <div className="mt-6 aspect-[16/10] overflow-hidden rounded-[30px] border border-border/70 bg-muted/40">
                    <img
                      src="/images/startups/startup-launchpad.svg"
                      alt="Startup launch support"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border border-border/70 bg-foreground p-5 text-background shadow-lg">
                      <div className="flex items-center gap-3">
                        <BriefcaseBusiness className="h-5 w-5 text-secondary" />
                        <p className="text-sm uppercase tracking-[0.2em] text-background/65">
                          Coverage
                        </p>
                      </div>
                      <p className="font-heading mt-4 text-2xl font-semibold">
                        Incorporation, banking, compliance and seed-stage readiness
                      </p>
                      <p className="mt-3 text-sm leading-6 text-background/70">
                        One advisory-led track for founders building the legal, financial,
                        and operational base of a new company.
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-border/70 bg-background/82 p-5 backdrop-blur">
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-5 w-5 text-primary" />
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                          Service signals
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {operatingSignals.map((signal, index) => (
                          <span
                            key={signal}
                            className={`inline-flex rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                              index % 2 === 0
                                ? 'border-primary/20 bg-primary/10 text-primary'
                                : 'border-secondary/20 bg-secondary/10 text-secondary'
                            }`}
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[30px] border border-border/70 bg-background/82 p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                        <Banknote className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Support model
                        </p>
                        <h3 className="font-heading mt-1 text-2xl font-semibold">
                          Structured around founder milestones, not isolated tasks
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {startupJourney.map((item, index) => (
                        <div
                          key={item.title}
                          className={`rounded-2xl border px-4 py-4 ${
                            index % 2 === 0
                              ? 'border-primary/20 bg-primary/5'
                              : 'border-secondary/20 bg-secondary/5'
                          }`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {item.step}
                          </p>
                          <p className="font-heading mt-2 text-lg font-semibold">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="startup-services"
          className="relative overflow-hidden py-20 xl:py-28"
        >
          <div className="absolute inset-0 bg-muted/35" />
          <div className="surface-grid absolute inset-0 opacity-25" />

          <div className="container relative px-4">
            <motion.div
              className="mx-auto mb-14 max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
                <HandCoins className="h-4 w-4" />
                Startup Services
              </div>
              <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">
                Services designed for founders
                <span className="gradient-text"> from launch to fundraise</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                This page is separate from the home page and focuses only on startup
                support across registrations, finance setup, compliance, and investor readiness.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {startupServices.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group rounded-[30px] border border-border/70 bg-background/88 p-5 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)] backdrop-blur transition-all duration-500 hover:-translate-y-1 sm:p-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-[24px] border border-border/70 bg-muted/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.tag}
                  </div>
                  <h3 className="font-heading mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 xl:py-24">
          <div className="absolute inset-0 bg-background" />
          <div className="surface-grid absolute inset-0 opacity-15" />

          <div className="container relative px-4">
            <motion.div
              className="mx-auto mb-14 max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
                <BadgeCheck className="h-4 w-4" />
                Founder Journey
              </div>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] xl:text-5xl">
                A clear startup journey,
                <span className="gradient-text"> step by step</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {startupJourney.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="rounded-[30px] border border-border/70 bg-background/90 p-6 shadow-[0_24px_70px_-52px_hsl(var(--foreground)/0.3)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    </>
  );
}
