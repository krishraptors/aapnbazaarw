import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Check,
  Clock3,
  Globe2,
  Layers3,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';

const regions = [
  {
    region: 'United States',
    coverage: 'EST, CST, PST aligned delivery',
    focus: 'Product-led apps, SaaS platforms, internal systems, and enterprise integrations.',
    model: 'Rapid squads, MVP builds, modernization, and AI workflow rollout.',
  },
  {
    region: 'Europe',
    coverage: 'GMT and CET collaboration windows',
    focus: 'Web platforms, multilingual websites, operations software, and automation layers.',
    model: 'Structured sprint delivery with stable release cycles and product clarity.',
  },
  {
    region: 'GCC & APAC',
    coverage: 'Flexible overlap with India-led delivery',
    focus: 'Commerce systems, service operations, customer support automation, and platform scale.',
    model: 'Extension teams, launch support, 24/7 handoff, and ongoing technical execution.',
  },
];

const serviceLanes = [
  {
    title: 'App Engineering',
    description: 'iOS, Android, and cross-platform products with backend and release ownership.',
  },
  {
    title: 'Website & Platform Builds',
    description: 'Fast websites, admin dashboards, portals, and custom digital experiences.',
  },
  {
    title: 'Agentic AI Systems',
    description: 'Assistants and workflow agents designed to automate repetitive business actions.',
  },
  {
    title: 'SLM-Powered Products',
    description: 'Small language model integration for private, domain-specific, secure AI usage.',
  },
  {
    title: 'Technical Delivery Support',
    description: 'Architecture, APIs, cloud setup, migrations, QA, performance, and rescue work.',
  },
];

const operatingPrinciples = [
  'Timezone-aligned communication for global teams',
  'Clear sprint planning, demos, and ownership',
  'Support from discovery to deployment',
  'English-first reporting with fast response windows',
];

const globalMetrics = [
  { value: '24/7', label: 'support coverage' },
  { value: 'Multi-region', label: 'delivery operating model' },
  { value: 'End-to-end', label: 'technical ownership' },
];

export default function GlobalServices() {
  return (
    <section id="global-services" className="scroll-mt-28 relative overflow-hidden py-20 xl:py-32">
      <div className="surface-grid absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute left-[4%] top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[6%] top-1/3 h-60 w-60 rounded-full bg-secondary/15 blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
            <Globe2 className="h-4 w-4" />
            International delivery for product and technical execution
          </div>
          <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">
            Global coverage with
            <span className="gradient-text"> serious technical depth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            If you need a partner that can support product teams in the USA, Europe,
            and worldwide, this is built for that model. The team can handle core
            engineering work, AI implementation, platform delivery, and long-term support.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="h-full overflow-hidden rounded-[32px] border border-primary/15 p-8 text-background shadow-[0_30px_100px_-48px_hsl(var(--foreground)/0.7)]"
              style={{
                background:
                  'linear-gradient(145deg, hsl(var(--foreground)), hsl(var(--foreground) / 0.92) 62%, hsl(var(--primary) / 0.65))',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10">
                  <Building2 className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-background/65">
                    Global Operating Model
                  </p>
                  <h3 className="font-heading mt-1 text-3xl font-semibold">
                    One engineering partner across regions, time zones, and product stages.
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-background/72">
                Whether the requirement is a new mobile app, a better website, agentic AI,
                SLM integration, or broad technical execution, the engagement can cover
                discovery, design, build, deployment, and support without fragmenting the work
                across multiple vendors.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {globalMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-background/10 bg-background/6 px-5 py-4 backdrop-blur"
                  >
                    <div className="font-heading text-2xl font-semibold">{metric.value}</div>
                    <p className="mt-1 text-sm text-background/68">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-background/10 bg-background/6 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-secondary" />
                  <p className="font-medium">How the work is managed</p>
                </div>
                <div className="mt-4 space-y-3">
                  {operatingPrinciples.map((principle) => (
                    <div key={principle} className="flex items-start gap-3 text-sm text-background/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel h-full border-border/80 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)]">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                          {region.coverage}
                        </p>
                        <h3 className="font-heading mt-2 text-2xl font-semibold">{region.region}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Globe2 className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[24px] border border-border/70 bg-background/80 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          Primary Focus
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{region.focus}</p>
                      </div>
                      <div className="rounded-[24px] border border-border/70 bg-muted/45 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Workflow className="h-4 w-4 text-primary" />
                          Delivery Model
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{region.model}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-border/80 bg-background/85 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)]">
            <CardContent className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/80">
                    Service Lanes
                  </p>
                  <h3 className="font-heading mt-1 text-2xl font-semibold">
                    What clients can hire us for
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {serviceLanes.map((lane) => (
                  <div
                    key={lane.title}
                    className="rounded-[24px] border border-border/70 bg-muted/35 p-4 text-left"
                  >
                    <h4 className="font-heading text-lg font-semibold">{lane.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {lane.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex h-full flex-col justify-between rounded-[32px] border border-primary/15 bg-primary/10 p-6 text-left shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)] sm:p-7">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Clock3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Delivery Promise
                  </p>
                  <h3 className="font-heading mt-1 text-2xl font-semibold">
                    Built for long-term technical partnership
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Built for companies that need a reliable partner to support product delivery,
                engineering velocity, and technical growth across multiple regions without
                compromising speed or clarity.
              </p>
            </div>

            <div className="mt-6 rounded-[28px] border border-primary/15 bg-background/70 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Globe2 className="h-4 w-4 text-primary" />
                24/7 Global Support Available
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Best for companies that need product thinking, engineering execution, and
                international responsiveness in one team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
