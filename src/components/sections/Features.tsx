import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';
import { motion } from 'motion/react';

const capabilities = [
  {
    title: 'Cloud and AWS Services',
    image: '/images/services/cloud-platform.svg',
    description:
      'Landing zones, migration programs, environment hardening, governance, and cost-aware cloud operations.',
  },
  {
    title: 'Application Engineering',
    image: '/images/services/application-engineering.svg',
    description:
      'Custom web platforms, internal tools, customer systems, and scalable product engineering for modern businesses.',
  },
  {
    title: 'Data, AI and Automation',
    image: '/images/services/ai-trust.svg',
    description:
      'Data pipelines, AI-enabled operations, workflow automation, and analytics platforms tied to measurable business outcomes.',
  },
  {
    title: 'Cyber Security and Resilience',
    image: '/images/services/cyber-resilience.svg',
    description:
      'Security reviews, access controls, monitoring, backup design, incident readiness, and recovery planning.',
  },
  {
    title: 'Network and Edge Operations',
    image: '/images/services/network-edge.svg',
    description:
      'Reliable network architecture, edge connectivity, infrastructure visibility, and operational support for distributed systems.',
  },
  {
    title: 'Managed Workplace and Support',
    image: '/images/services/digital-workplace.svg',
    description:
      'Managed service desks, collaboration tooling, device support, workplace platforms, and ongoing operational care.',
  },
];

export default function Features() {
  return (
    <section id="capabilities" className="relative overflow-hidden py-20 xl:py-24">
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
            <Activity className="h-4 w-4" />
            Capabilities
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] xl:text-5xl">
            Technology capabilities for
            <span className="gradient-text"> serious delivery teams</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A tighter view of what we actually provide: cloud platforms, application delivery,
            AI systems, cybersecurity, network operations, and managed support.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/70 bg-background/90 shadow-[0_24px_70px_-52px_hsl(var(--foreground)/0.3)]">
                <CardContent className="p-5 sm:p-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-[24px] border border-border/70 bg-muted/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="/#contact">View all capabilities</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
