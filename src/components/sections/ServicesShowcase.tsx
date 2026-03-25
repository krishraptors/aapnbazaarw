import { Card, CardContent } from '@/components/ui/card';
import {
  Bot,
  Building2,
  CloudCog,
  Cpu,
  DatabaseZap,
  Globe2,
  Layers3,
  LockKeyhole,
  MonitorCog,
  Network,
  PackageCheck,
  RadioTower,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';

const solutionCategories = [
  {
    id: 'solution-app-platforms',
    title: 'App and Platform Engineering',
    tag: 'Android, iOS, web, ecommerce',
    description: 'Product builds for startups, enterprise teams, marketplaces, and digital operations.',
    icon: Smartphone,
  },
  {
    id: 'solution-ai-automation',
    title: 'AI and Automation',
    tag: 'Agentic AI, SLM, copilots',
    description: 'Task-driven AI systems, retrieval workflows, and automation layers inside real products.',
    icon: Bot,
  },
  {
    id: 'solution-cloud-infra',
    title: 'Cloud and IT Infrastructure',
    tag: 'Cloud, infra, deployment',
    description: 'Cloud strategy, hosting, environment setup, and infrastructure modernization.',
    icon: CloudCog,
  },
  {
    id: 'solution-security-managed',
    title: 'Security and Managed IT',
    tag: 'Security, support, continuity',
    description: 'Cyber security, network readiness, managed support, and technical continuity.',
    icon: ShieldCheck,
  },
];

const solutionGroups = [
  {
    id: 'solution-app-platforms',
    eyebrow: 'Solution Category 01',
    title: 'App, website, and marketplace development for every digital business layer.',
    description:
      'This capability block is focused on product engineering. It covers mobile apps, websites, web applications, ecommerce systems, dashboards, and custom product builds.',
    accentClassName: 'text-secondary',
    cards: [
      {
        icon: Smartphone,
        title: 'Android App Development',
        description: 'Build Android apps for commerce, field operations, logistics, and customer products.',
        points: ['Kotlin or cross-platform delivery', 'Play Store release support', 'Scalable backend integration'],
      },
      {
        icon: Smartphone,
        title: 'iOS Development',
        description: 'Ship polished iPhone and iPad experiences with premium UI and strong performance.',
        points: ['Swift-ready product delivery', 'App Store launch support', 'Premium mobile UX'],
      },
      {
        icon: Globe2,
        title: 'Website Development',
        description: 'Corporate websites, startup landing pages, portals, and high-conversion web experiences.',
        points: ['Brand-led web presence', 'Modern frontend architecture', 'Performance-focused execution'],
      },
      {
        icon: ShoppingCart,
        title: 'Web App and Ecommerce Platforms',
        description: 'Custom dashboards, ecommerce builds, seller panels, and marketplace ecosystems.',
        points: ['B2B and B2C commerce', 'Marketplace operations', 'Custom admin and catalog workflows'],
      },
    ],
  },
  {
    id: 'solution-ai-automation',
    eyebrow: 'Solution Category 02',
    title: 'Agentic AI, SLM integration, and automation systems for product and operations teams.',
    description:
      'This block presents the company as a strong AI product and automation partner. It covers copilots, agentic workflows, private AI systems, product intelligence, and process automation.',
    accentClassName: 'text-primary',
    cards: [
      {
        icon: Bot,
        title: 'Agentic AI Systems',
        description: 'Deploy task-driven agents that automate work, improve response time, and unlock new workflows.',
        points: ['Ops automation', 'Support copilots', 'Task-based workflow orchestration'],
      },
      {
        icon: Cpu,
        title: 'SLM and AI Integration',
        description: 'Bring focused language models, retrieval pipelines, and domain assistants into products.',
        points: ['Private AI deployment', 'RAG and domain retrieval', 'Business system integration'],
      },
      {
        icon: Workflow,
        title: 'Workflow Automation',
        description: 'Connect products, APIs, internal systems, and approval chains into cleaner automated operations.',
        points: ['Cross-system automation', 'Operational efficiency', 'Reduced manual handoffs'],
      },
      {
        icon: Layers3,
        title: 'Product Management and UX',
        description: 'Support roadmap definition, requirement shaping, user experience design, and launch clarity.',
        points: ['Product discovery', 'Feature prioritization', 'UX flow architecture'],
      },
    ],
  },
  {
    id: 'solution-cloud-infra',
    eyebrow: 'Solution Category 03',
    title: 'Cloud, infrastructure, deployment, and enterprise technology modernization.',
    description:
      'This section is closer to the Arrow-style enterprise solutions structure. It presents broader IT readiness beyond app development, including cloud, infrastructure, deployment, and data-center-aligned execution.',
    accentClassName: 'text-secondary',
    cards: [
      {
        icon: CloudCog,
        title: 'Cloud Services',
        description: 'Cloud migration, hosting architecture, environment design, and multi-stage deployment planning.',
        points: ['Cloud readiness', 'Deployment architecture', 'Operational resilience'],
      },
      {
        icon: Server,
        title: 'Data Center and Infrastructure',
        description: 'Infrastructure planning, compute foundations, hosting strategy, and modernization support.',
        points: ['Infrastructure planning', 'Hosting and compute support', 'Modernization pathways'],
      },
      {
        icon: DatabaseZap,
        title: 'Integration and Deployment',
        description: 'Third-party integrations, release management, system setup, and environment provisioning.',
        points: ['API integration', 'Deployment pipelines', 'Release and environment ownership'],
      },
      {
        icon: Building2,
        title: 'Infrastructure Modernization',
        description: 'Refresh legacy stacks, improve technical reliability, and move businesses onto stronger foundations.',
        points: ['Legacy upgrades', 'Reliability improvements', 'Operational modernization'],
      },
    ],
  },
  {
    id: 'solution-security-managed',
    eyebrow: 'Solution Category 04',
    title: 'Cyber security, managed IT services, communication systems, and technical continuity.',
    description:
      'This category rounds out the wider IT partner story with security, support, managed operations, network readiness, and end-user technical environments.',
    accentClassName: 'text-primary',
    cards: [
      {
        icon: LockKeyhole,
        title: 'Cyber Security Solutions',
        description: 'Security posture design, access control, protection architecture, and safer digital operations.',
        points: ['Risk reduction', 'Secure architecture', 'Operational safeguards'],
      },
      {
        icon: Network,
        title: 'Network Security',
        description: 'Protected connectivity, safer internal routing, and secure infrastructure design for enterprises.',
        points: ['Protected connectivity', 'Secure routing', 'Enterprise safeguards'],
      },
      {
        icon: MonitorCog,
        title: 'IT Managed Services',
        description: 'Support, maintenance, monitoring, continuity workflows, and long-term technical ownership.',
        points: ['Monitoring and maintenance', 'Continuity support', 'Managed technical execution'],
      },
      {
        icon: RadioTower,
        title: 'Unified Communication and EUC',
        description: 'Communication tooling, collaboration systems, workstation environments, and business productivity layers.',
        points: ['Team collaboration systems', 'End user computing', 'Internal enablement environments'],
      },
    ],
  },
];

const solutionSignals = [
  'Delivery-ready for startups, enterprises, and operations-heavy businesses',
  'Structured for USA, Europe, India, GCC, and wider global execution',
  'Works across product engineering, AI systems, and core IT solution delivery',
];

const deliveryModels = [
  'Consulting-led discovery',
  'Dedicated engineering squads',
  'Managed product and sprint delivery',
  'Long-term technical support and modernization',
];

const enterpriseCoverage = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description: 'Consumer apps, internal tools, field apps, and operational mobile systems.',
  },
  {
    icon: Smartphone,
    title: 'iOS Development',
    description: 'Premium iPhone and iPad products with launch-ready UI and performance.',
  },
  {
    icon: Globe2,
    title: 'Website Development',
    description: 'Corporate websites, landing pages, portals, and conversion-focused web presence.',
  },
  {
    icon: Bot,
    title: 'AI Systems',
    description: 'Agentic workflows, copilots, retrieval systems, and private AI layers.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Services',
    description: 'Cloud setup, migrations, deployments, hosting, and environment architecture.',
  },
  {
    icon: Network,
    title: 'Infrastructure',
    description: 'Infrastructure planning, hosting strategy, network readiness, and modernization.',
  },
  {
    icon: LockKeyhole,
    title: 'Cyber Security',
    description: 'Secure architecture, access control, protection layers, and safer operations.',
  },
  {
    icon: MonitorCog,
    title: 'Support and Managed IT',
    description: 'Ongoing support, monitoring, maintenance, and long-term technical ownership.',
  },
];

const positioningCoverage = [
  'App development',
  'iOS development',
  'Website development',
  'AI systems and agentic workflows',
  'Cloud and deployment services',
  'Infrastructure modernization',
  'Cyber security and network protection',
  'Integration, support, and managed execution',
];

export default function ServicesShowcase() {
  return (
    <section id="solutions" className="scroll-mt-28 relative overflow-hidden py-20 xl:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(255,255,255,1)_34%,rgba(241,245,249,0.96)_100%)] dark:bg-[linear-gradient(180deg,rgba(6,10,21,0.98),rgba(11,17,33,0.98)_40%,rgba(8,12,25,0.98)_100%)]" />
      <div className="surface-grid absolute inset-0 opacity-30 dark:opacity-15" />
      <div className="pointer-events-none absolute left-[6%] top-16 h-44 w-44 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-10 h-60 w-60 rounded-full bg-secondary/14 blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/10 dark:text-secondary">
            <Sparkles className="h-4 w-4" />
            Enterprise-grade solutions
          </div>
          <h2 className="font-heading mb-4 text-3xl font-bold text-slate-950 dark:text-white xl:text-5xl">
            Solutions arranged like
            <span className="gradient-text"> a real IT capability portfolio</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The solutions section now opens like an enterprise catalog. It groups mobile,
            web, AI, cloud, infrastructure, security, and managed technology delivery
            into clearer categories instead of a flat service list.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 rounded-[36px] border border-slate-200/90 bg-white/95 p-6 shadow-[0_28px_90px_-54px_rgba(15,23,42,0.32)] backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-[0_28px_90px_-54px_rgba(0,0,0,0.72)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                Clear Coverage
              </p>
              <h3 className="font-heading mt-3 text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
                A stronger solutions layout that clearly shows what your IT team can deliver.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                Instead of one vague agency paragraph, this section now breaks the company into
                clear enterprise solution lanes. The text stays dark and readable in light mode,
                and it keeps strong contrast in dark mode.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {enterpriseCoverage.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-slate-50/95 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/15">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutionCategories.map((category, index) => (
            <motion.a
              key={category.id}
              href={`#${category.id}`}
              className="group rounded-[30px] border border-slate-200/90 bg-white/95 p-5 text-slate-950 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.28)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_70px_-42px_rgba(37,99,235,0.22)] dark:border-white/10 dark:bg-slate-950/75 dark:text-white dark:shadow-[0_18px_60px_-42px_rgba(0,0,0,0.72)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 dark:bg-primary/15">
                <category.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:bg-white/10 dark:text-slate-300">
                {category.tag}
              </div>
              <h3 className="font-heading mt-5 text-xl font-semibold text-slate-950 dark:text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{category.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary">
                Open category
                <PackageCheck className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-6 xl:grid-cols-[0.84fr_1.16fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[32px] border border-slate-200/90 bg-white/95 p-6 text-slate-950 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:bg-white/10 dark:text-secondary">
              <ShieldCheck className="h-4 w-4" />
              Solution Architecture
            </div>
            <h3 className="font-heading mt-6 text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
              Product engineering on one side, enterprise IT capability on the other.
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              The structure takes cues from enterprise solution firms: digital product
              builds, AI systems, cloud and infrastructure, security, support, and wider
              IT modernization all presented as one coherent solutions portfolio.
            </p>

            <div className="mt-8 space-y-3">
              {solutionSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{signal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/90 bg-white/95 p-6 text-slate-950 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.28)] sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
              Delivery Models
            </p>
            <h3 className="font-heading mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
              Built for product launches, long-term support, and full technical ownership
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliveryModels.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6">
          {solutionGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              id={group.id}
              className="scroll-mt-32 rounded-[36px] border border-slate-200/90 bg-white/95 p-6 text-slate-950 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:text-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${group.accentClassName}`}>
                    {group.eyebrow}
                  </p>
                  <h3 className="font-heading mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{group.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {group.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: cardIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full border-slate-200 bg-slate-50/95 text-slate-950 shadow-[0_20px_60px_-46px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-[0_20px_60px_-46px_rgba(0,0,0,0.72)]">
                        <CardContent className="p-6 sm:p-7">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <card.icon className="h-7 w-7" />
                          </div>

                          <h4 className="font-heading mt-6 text-2xl font-semibold text-slate-950 dark:text-white">{card.title}</h4>
                          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                            {card.description}
                          </p>

                          <div className="mt-6 space-y-3">
                            {card.points.map((point) => (
                              <div key={point} className="flex items-center gap-3 text-sm">
                                <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                                <span className="text-slate-900 dark:text-slate-100">{point}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[36px] border border-slate-200/90 bg-white/95 p-6 text-slate-950 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 dark:border-white/10 dark:bg-slate-950/75 dark:text-white">
            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/80">
                Global IT Solutions Positioning
              </p>
              <h3 className="font-heading mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
                Designed to look less like a basic agency and more like a serious technology partner
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                The solutions structure now covers app development, iOS development,
                website development, AI systems, cloud services, infrastructure, cyber
                security, integration, support, and long-term managed execution in one
                stronger enterprise layout.
              </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {positioningCoverage.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
