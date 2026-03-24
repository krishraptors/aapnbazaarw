import { Card, CardContent } from '@/components/ui/card';
import {
  Bot,
  Cpu,
  Globe2,
  Layers3,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';

const solutionPillars = [
  {
    icon: Smartphone,
    title: 'Apps & Product Builds',
    description:
      'Native and cross-platform apps for consumer products, internal tools, and operational systems.',
  },
  {
    icon: Globe2,
    title: 'Web Experiences',
    description:
      'High-conversion websites, custom dashboards, SaaS panels, and performance-focused frontends.',
  },
  {
    icon: Bot,
    title: 'Agentic Systems',
    description:
      'Task-oriented AI agents, workflow automations, and internal copilots that reduce manual operations.',
  },
  {
    icon: Cpu,
    title: 'SLM Integration',
    description:
      'Domain-tuned language model integrations, retrieval pipelines, and secure private AI workflows.',
  },
];

const engagementModes = [
  {
    icon: Rocket,
    title: 'New Product Launches',
    description: 'From concept and UX to architecture, development, QA, and release.',
  },
  {
    icon: Layers3,
    title: 'Modernization Projects',
    description: 'Redesign legacy systems, upgrade user experience, and improve maintainability.',
  },
  {
    icon: Workflow,
    title: 'Automation & AI Rollouts',
    description: 'Deploy agents, assistants, and business workflows into real operations.',
  },
];

const technicalRequirements = [
  'Product discovery and technical architecture',
  'API development and third-party integrations',
  'Cloud deployment, DevOps, and release pipelines',
  'Security, QA, monitoring, and performance tuning',
  'Admin panels, CRM workflows, and operational dashboards',
  'Post-launch support, scaling, and rescue work',
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 xl:py-32">
      <div className="absolute inset-0 bg-muted/35" />
      <div className="surface-grid absolute inset-0 opacity-30" />

      <div className="container relative px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Enterprise delivery model
          </div>
          <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">
            Why companies keep us
            <span className="gradient-text"> as a long-term engineering partner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond the solution list, the delivery model is built around strong ownership,
            architecture discipline, launch clarity, and technical support that continues
            after the first release.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-panel h-full overflow-hidden border-primary/10 shadow-[0_24px_80px_-48px_hsl(var(--foreground)/0.5)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                      Execution Pillars
                    </p>
                    <h3 className="font-heading mt-3 text-3xl font-semibold leading-tight">
                      Product engineering that covers build, AI, and operations.
                    </h3>
                  </div>
                  <div className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
                    Strategy to launch
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {solutionPillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      className="rounded-[28px] border border-border/70 bg-background/80 p-5 shadow-sm"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <pillar.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-heading mt-5 text-xl font-semibold">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-primary px-5 py-5 text-primary-foreground">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
                      Product Focus
                    </p>
                    <p className="font-heading mt-3 text-2xl font-semibold">Fast, sharp, launchable</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-background/80 px-5 py-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Architecture
                    </p>
                    <p className="font-heading mt-3 text-xl font-semibold">Scalable foundations</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-background/80 px-5 py-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Delivery Style
                    </p>
                    <p className="font-heading mt-3 text-xl font-semibold">Clear sprints, clear ownership</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/80 bg-background/90 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)]">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Workflow className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/80">
                        Engagement Modes
                      </p>
                      <h3 className="font-heading mt-1 text-2xl font-semibold">
                        How the team plugs in
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {engagementModes.map((mode) => (
                      <div
                        key={mode.title}
                        className="rounded-[24px] border border-border/70 bg-muted/40 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-background text-primary shadow-sm">
                            <mode.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-semibold">{mode.title}</h4>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {mode.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/80 bg-foreground text-background shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.65)]">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10 text-secondary">
                      <Server className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/70">
                        Technical Scope
                      </p>
                      <h3 className="font-heading mt-1 text-2xl font-semibold">
                        Technical requirements we can own
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {technicalRequirements.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-background/6 px-4 py-3"
                      >
                        <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-secondary" />
                        <p className="text-sm leading-6 text-background/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
