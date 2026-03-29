import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const serviceActions = [
  {
    title: 'Cloud and AWS Services',
    description:
      'Architecture, migration, platform operations, governance, and cost-aware delivery for production workloads.',
    image: '/images/services/cloud-platform.svg',
    tag: 'Cloud Delivery',
  },
  {
    title: 'Web and App Development',
    description:
      'Business websites, portals, custom apps, and digital products built for launch, growth, and long-term maintainability.',
    image: '/images/services/application-engineering.svg',
    tag: 'App Development',
  },
  {
    title: 'iOS and Android Development',
    description:
      'iOS, Android, and cross-platform mobile applications designed for customer journeys, internal tools, and operational use cases.',
    image: '/images/services/mobile-app.svg',
    tag: 'iOS & Android',
  },
  {
    title: 'Agentic AI Workflow Systems',
    description:
      'Agentic AI systems, copilots, task automation, and workflow orchestration built around real business processes.',
    image: '/images/services/agentic-workflow.svg',
    tag: 'Agentic AI',
  },
  {
    title: 'Enterprise Application Engineering',
    description:
      'Internal platforms, operational systems, dashboards, and integration-led applications for modern delivery teams.',
    image: '/images/services/ai-trust.svg',
    tag: 'Platform Engineering',
  },
  {
    title: 'Cyber Security and Resilience',
    description:
      'Security hardening, access control, observability, backup strategy, and recovery planning across critical environments.',
    image: '/images/services/cyber-resilience.svg',
    tag: 'Secure Operations',
  },
];

const serviceCategories = [
  'AWS Architecture',
  'Web Platforms',
  'App Development',
  'iOS Development',
  'Android Development',
  'Agentic AI Workflows',
  'DevSecOps and CI/CD',
  'Managed Cloud Support',
  'Network and Security',
];

const consultingHighlights = [
  {
    title: 'Technology Consulting',
    description:
      'Roadmaps, solution architecture, platform planning, and delivery strategy for business-critical technology programs.',
    image: '/images/services/modernization.svg',
  },
  {
    title: 'Transformation Office',
    description:
      'Governance, migration planning, stakeholder alignment, and execution oversight for modernization and scale initiatives.',
    image: '/images/services/network-edge.svg',
  },
  {
    title: 'Managed Delivery',
    description:
      'A single operating model covering implementation, release management, monitoring, support, and continuous improvement.',
    image: '/images/services/digital-workplace.svg',
  },
];

export default function ServicesShowcase() {
  return (
    <section id="solutions" className="relative overflow-hidden py-20 xl:py-24">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="surface-grid absolute inset-0 opacity-20" />

      <div className="container relative px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
            <Building2 className="h-4 w-4" />
            Services
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] xl:text-5xl">
            Technology services built for
            <span className="gradient-text"> modern business delivery</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We deliver cloud platforms, web and app development, iOS and Android development,
            agentic AI workflow systems, cybersecurity, and managed technology execution.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceActions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/70 bg-background/90 shadow-[0_24px_70px_-50px_hsl(var(--foreground)/0.35)]">
                <CardContent className="p-5 sm:p-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-[24px] border border-border/70 bg-muted/40">
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
                  <h3 className="font-heading mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[30px] border border-border/70 bg-foreground p-6 text-background shadow-[0_24px_70px_-50px_hsl(var(--foreground)/0.55)] sm:p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/70">
                Services that drive business results
              </p>
              <h3 className="font-heading mt-2 text-2xl font-semibold">
                Core capability lanes
              </h3>
            </div>
            <Button asChild variant="secondary" className="rounded-full">
              <a href="/#contact">
                View all services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCategories.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-background/10 bg-background/6 px-4 py-4"
              >
                <span className="text-sm font-medium text-background/88">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="consulting"
          className="mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              <Cpu className="h-4 w-4" />
              Consulting
            </div>
            <h3 className="font-heading text-3xl font-semibold tracking-[-0.03em] xl:text-4xl">
              Consulting and execution designed for high-accountability delivery
            </h3>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {consultingHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/70 bg-background/90 shadow-[0_24px_70px_-50px_hsl(var(--foreground)/0.35)]">
                  <CardContent className="p-5 sm:p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-[24px] border border-border/70 bg-muted/40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-heading mt-5 text-2xl font-semibold">{item.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    <a
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
