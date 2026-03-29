import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import {
  ArrowRight,
  Bot,
  Globe2,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';

const serviceSignals = ['Web Platforms', 'AI Systems', 'Cloud Delivery'];

const proofPoints = [
  { value: 'Global', label: 'delivery coverage' },
  { value: '24/7', label: 'team overlap' },
  { value: 'Single Team', label: 'delivery ownership' },
];

const coreLanes = [
  {
    icon: Layers3,
    title: 'Product Engineering',
    description: 'Web platforms, business systems, and customer-facing digital products.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Practical workflow automation, copilots, and business-facing AI systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Operational Reliability',
    description: 'Architecture, cloud readiness, and delivery support for production use.',
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
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-background py-20 xl:py-24"
      style={{
        backgroundImage:
          'linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted) / 0.42), hsl(var(--background)))',
      }}
    >
      <div className="surface-grid absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute left-[10%] top-24 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-20 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          <motion.div
            className="space-y-8 text-center xl:text-left"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              <Globe2 className="h-4 w-4" />
              Professional digital delivery for modern businesses
            </div>

            <div className="space-y-5">
              <h1 className="font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl xl:text-7xl">
                Technology delivery with
                <span className="gradient-text mt-3 block">clarity, speed, and accountability.</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground xl:mx-0 xl:text-xl">
                We help companies build websites, platforms, automation workflows, and
                digital systems with one accountable team from planning to launch.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 xl:justify-start">
              {serviceSignals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/85 px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row xl:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-12 rounded-full px-7 text-base"
              >
                Discuss Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToSolutions}
                className="h-12 rounded-full border-primary/20 bg-background/80 px-7 text-base"
              >
                View Services
              </Button>
              <WhatsAppButton size="lg" className="h-12 rounded-full px-7" />
            </div>

            <div className="grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-border/70 bg-background/75 px-5 py-4 text-center xl:text-left"
                >
                  <div className="font-heading text-2xl font-semibold text-foreground">
                    {point.value}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{point.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div className="glass-panel overflow-hidden rounded-[30px] border border-border/70 p-6 shadow-[0_30px_80px_-46px_hsl(var(--foreground)/0.38)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Delivery Overview
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-semibold">
                    A streamlined model for product and platform work.
                  </h2>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Executive-friendly reporting
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {coreLanes.map((lane) => (
                  <div
                    key={lane.title}
                    className="rounded-[26px] border border-border/70 bg-background/85 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <lane.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold">{lane.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {lane.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-border/70 bg-foreground px-5 py-5 text-background">
                  <p className="text-sm uppercase tracking-[0.18em] text-background/65">
                    Coverage
                  </p>
                  <p className="font-heading mt-3 text-xl font-semibold">
                    USA, Europe, GCC, APAC
                  </p>
                  <p className="mt-2 text-sm leading-6 text-background/72">
                    Delivery aligned to regional operating windows and business priorities.
                  </p>
                </div>

                <div className="rounded-[24px] border border-border/70 bg-background/85 px-5 py-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    Governance
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-foreground/85">
                    <div className="rounded-2xl bg-muted/50 px-4 py-3">Weekly progress reviews</div>
                    <div className="rounded-2xl bg-muted/50 px-4 py-3">Clear owners and priorities</div>
                    <div className="rounded-2xl bg-muted/50 px-4 py-3">Launch and post-launch support</div>
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
