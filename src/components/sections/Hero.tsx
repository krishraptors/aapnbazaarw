import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bot,
  Clock3,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { motion } from 'motion/react';

const serviceChips = [
  'Android Apps',
  'iOS Apps',
  'Web Platforms',
  'Agentic AI',
  'Cloud & Infra',
  'Managed IT',
  'SLM Integration',
  'Technical Services',
];

const proofPoints = [
  { value: '50+', label: 'markets supported' },
  { value: '24/7', label: 'handoff and support' },
  { value: '<3 weeks', label: 'rapid sprint kickoff' },
];

const deliveryStreams = [
  {
    icon: Code2,
    title: 'Apps & Web Platforms',
    description: 'Consumer apps, admin panels, SaaS products, and marketplaces.',
    progress: '88%',
  },
  {
    icon: Bot,
    title: 'Agentic Workflows',
    description: 'AI copilots, workflow automation, and task-driven agent systems.',
    progress: '82%',
  },
  {
    icon: Cpu,
    title: 'SLM Integration',
    description: 'Private model integration, retrieval flows, and domain assistants.',
    progress: '79%',
  },
];

export default function Hero() {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const solutions = document.getElementById('solutions');
    solutions?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-20 xl:py-28"
      style={{
        backgroundImage:
          'radial-gradient(circle at 12% 12%, hsl(var(--primary) / 0.16), transparent 28%), radial-gradient(circle at 86% 18%, hsl(var(--secondary) / 0.18), transparent 26%), linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted) / 0.45), hsl(var(--background)))',
      }}
    >
      <div className="surface-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-[8%] top-24 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[10%] h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="grid items-center gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          <motion.div
            className="space-y-8 text-center xl:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              USA, Europe, GCC and APAC delivery-ready
            </div>

            <div className="space-y-5">
              <h1 className="font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl xl:text-7xl">
                Build digital products that feel
                <span className="gradient-text mt-3 block">global from day one.</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground xl:mx-0 xl:text-xl">
                We design and deliver Android apps, iOS products, websites, agentic AI
                systems, cloud-backed platforms, and broader IT solutions for companies
                operating across the USA, Europe, and beyond. From product strategy to
                technical execution, the team can own the full delivery layer.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 xl:justify-start">
              {serviceChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/70 bg-background/85 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row xl:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/20"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToSolutions}
                className="h-12 rounded-full border-primary/20 bg-background/80 px-7 text-base backdrop-blur"
              >
                Explore Solutions
              </Button>
              <WhatsAppButton size="lg" className="h-12 rounded-full px-7" />
            </div>

            <div className="grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-center shadow-sm backdrop-blur xl:text-left"
                >
                  <div className="font-heading text-2xl font-bold text-primary">{point.value}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{point.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full border border-primary/20 bg-background/70 backdrop-blur" />
            <div className="pointer-events-none absolute -right-6 bottom-24 h-32 w-32 rounded-full border border-secondary/20 bg-background/70 backdrop-blur" />

            <div className="glass-panel relative overflow-hidden rounded-[32px] p-6 shadow-[0_30px_100px_-40px_hsl(var(--foreground)/0.45)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                    Global Delivery Cockpit
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-semibold">
                    One partner for product, engineering, AI, and launch.
                  </h2>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Live scope across regions
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {deliveryStreams.map((stream, index) => (
                  <motion.div
                    key={stream.title}
                    className="rounded-3xl border border-border/70 bg-background/75 p-5 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.12 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <stream.icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-heading text-lg font-semibold">{stream.title}</h3>
                          <span className="text-sm font-medium text-muted-foreground">
                            {stream.progress}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {stream.description}
                        </p>
                        <div className="mt-4 h-2 rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            style={{ width: stream.progress }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/70 bg-foreground px-5 py-5 text-background shadow-lg">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-secondary" />
                    <p className="text-sm uppercase tracking-[0.2em] text-background/65">
                      Primary Markets
                    </p>
                  </div>
                  <p className="mt-3 font-heading text-2xl font-semibold">USA, Europe, GCC, APAC</p>
                  <p className="mt-2 text-sm leading-6 text-background/70">
                    Delivery windows built around your operating hours, not just ours.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-background/80 px-5 py-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Layers3 className="h-5 w-5 text-primary" />
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Execution Model
                    </p>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3">
                      <span className="flex items-center gap-2 font-medium">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Product + UX + Engineering
                      </span>
                      <span className="text-muted-foreground">End-to-end</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3">
                      <span className="flex items-center gap-2 font-medium">
                        <Clock3 className="h-4 w-4 text-primary" />
                        Delivery Rhythm
                      </span>
                      <span className="text-muted-foreground">Weekly sprint cadence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
