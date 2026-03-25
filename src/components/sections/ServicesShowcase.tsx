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
    highlights: ['Mobile apps', 'Web platforms', 'Commerce systems'],
    coverage: ['Customer mobile apps', 'Seller and admin panels', 'Dashboards and portals', 'Marketplace workflows'],
    result: 'Best when the business needs one team to design, build, launch, and improve the full product layer.',
    icon: Smartphone,
  },
  {
    id: 'solution-ai-automation',
    title: 'AI and Automation',
    tag: 'Agentic AI, SLM, copilots',
    description: 'Task-driven AI systems, retrieval workflows, and automation layers inside real products.',
    highlights: ['AI assistants', 'Workflow automation', 'Private intelligence layers'],
    coverage: ['Support copilots', 'Domain retrieval', 'Internal automation', 'Operational decision flows'],
    result: 'Best when AI needs to be tied to actual business workflows instead of being left as a demo feature.',
    icon: Bot,
  },
  {
    id: 'solution-cloud-infra',
    title: 'Cloud and IT Infrastructure',
    tag: 'Cloud, infra, deployment',
    description: 'Cloud strategy, hosting, environment setup, and infrastructure modernization.',
    highlights: ['Cloud setup', 'Deployment ownership', 'Infrastructure upgrades'],
    coverage: ['Hosting architecture', 'Release environments', 'API integrations', 'Legacy modernization'],
    result: 'Best when the company needs stronger technical foundations, rollout discipline, and cleaner infrastructure ownership.',
    icon: CloudCog,
  },
  {
    id: 'solution-security-managed',
    title: 'Security and Managed IT',
    tag: 'Security, support, continuity',
    description: 'Cyber security, network readiness, managed support, and technical continuity.',
    highlights: ['Security posture', 'Managed support', 'Long-term continuity'],
    coverage: ['Access and protection', 'Network hardening', 'Technical continuity', 'Managed service coverage'],
    result: 'Best when teams want dependable support, lower operational risk, and long-term technical continuity.',
    icon: ShieldCheck,
  },
];

const solutionGroups = [
  {
    id: 'solution-app-platforms',
    eyebrow: 'Solution Category 01',
    title: 'App, website, and marketplace development for every digital business layer.',
    description:
      'This category is about product engineering in plain business terms. It covers mobile apps, websites, web applications, ecommerce systems, dashboards, and custom platforms built to help a company launch, operate, and scale faster.',
    accentClassName: 'text-secondary',
    summaryPoints: [
      'Good fit for startups, internal tools, marketplaces, and digital operations.',
      'Covers design, engineering, release planning, and practical backend integration.',
      'Works for customer-facing products as well as admin, seller, and workflow systems.',
    ],
    coverageBands: ['Android and iOS apps', 'Corporate and campaign websites', 'Web apps and dashboards', 'B2B and B2C marketplaces'],
    outcomes: [
      'Moves businesses from idea or outdated stack into a launch-ready product layer.',
      'Keeps UI, backend, integrations, and commercial workflows in one delivery stream.',
    ],
    cards: [
      {
        icon: Smartphone,
        title: 'Android App Development',
        description: 'Build Android apps for commerce, field operations, logistics, and customer-facing products.',
        fit: 'Best for operations apps, retail products, and field teams.',
        useCases: ['Sales and ordering apps', 'Logistics and field operations'],
        points: ['Kotlin or cross-platform delivery', 'Play Store release support', 'Scalable backend integration'],
      },
      {
        icon: Smartphone,
        title: 'iOS Development',
        description: 'Ship polished iPhone and iPad experiences with premium UI, strong performance, and launch-ready quality.',
        fit: 'Best for premium consumer products and founder-led launches.',
        useCases: ['Consumer product launches', 'Premium mobile journeys'],
        points: ['Swift-ready product delivery', 'App Store launch support', 'Premium mobile UX'],
      },
      {
        icon: Globe2,
        title: 'Website Development',
        description: 'Build corporate websites, startup landing pages, portals, and high-conversion web experiences that explain the business clearly.',
        fit: 'Best for brand visibility, lead generation, and enterprise presence.',
        useCases: ['Corporate visibility', 'Campaign and lead generation'],
        points: ['Brand-led web presence', 'Modern frontend architecture', 'Performance-focused execution'],
      },
      {
        icon: ShoppingCart,
        title: 'Web App and Ecommerce Platforms',
        description: 'Develop custom dashboards, ecommerce builds, seller panels, buyer journeys, and marketplace ecosystems.',
        fit: 'Best for B2B, B2C, marketplace, and catalog-heavy business models.',
        useCases: ['Commerce operations', 'Seller and admin ecosystems'],
        points: ['B2B and B2C commerce', 'Marketplace operations', 'Custom admin and catalog workflows'],
      },
    ],
  },
  {
    id: 'solution-ai-automation',
    eyebrow: 'Solution Category 02',
    title: 'Agentic AI, SLM integration, and automation systems for product and operations teams.',
    description:
      'This category presents the company as a practical AI and automation partner. It covers copilots, agentic workflows, private AI systems, domain intelligence, and process automation that support real teams instead of staying as demos.',
    accentClassName: 'text-primary',
    summaryPoints: [
      'Built for teams that want AI tied to actual workflows, documents, approvals, and support.',
      'Works for internal automation, customer support, research flows, and domain assistants.',
      'Combines product thinking, system integration, and operational rollout support.',
    ],
    coverageBands: ['Agentic workflows', 'SLM and private AI', 'Automation chains', 'Product and UX clarity'],
    outcomes: [
      'Turns AI into a usable business system with clear ownership, workflow fit, and rollout logic.',
      'Helps teams reduce manual work while keeping the product experience understandable for users.',
    ],
    cards: [
      {
        icon: Bot,
        title: 'Agentic AI Systems',
        description: 'Deploy task-driven agents that automate work, improve response time, and unlock new workflows across products and operations.',
        fit: 'Best for support, internal ops, repetitive workflows, and task automation.',
        useCases: ['Internal copilots', 'Task automation desks'],
        points: ['Ops automation', 'Support copilots', 'Task-based workflow orchestration'],
      },
      {
        icon: Cpu,
        title: 'SLM and AI Integration',
        description: 'Bring focused language models, retrieval pipelines, and domain assistants into products without overcomplicating the stack.',
        fit: 'Best for private AI, domain search, and business-specific assistants.',
        useCases: ['Knowledge assistants', 'Private business AI'],
        points: ['Private AI deployment', 'RAG and domain retrieval', 'Business system integration'],
      },
      {
        icon: Workflow,
        title: 'Workflow Automation',
        description: 'Connect products, APIs, internal systems, and approval chains into cleaner automated operations with fewer manual handoffs.',
        fit: 'Best for approvals, CRM flows, internal tools, and system-to-system execution.',
        useCases: ['Approvals and CRM flows', 'API and ops handoffs'],
        points: ['Cross-system automation', 'Operational efficiency', 'Reduced manual handoffs'],
      },
      {
        icon: Layers3,
        title: 'Product Management and UX',
        description: 'Support roadmap definition, requirement shaping, user experience design, and launch clarity so teams move faster with less confusion.',
        fit: 'Best for founders, product teams, and businesses refining what to build next.',
        useCases: ['Discovery and roadmap shaping', 'Launch-ready user flows'],
        points: ['Product discovery', 'Feature prioritization', 'UX flow architecture'],
      },
    ],
  },
  {
    id: 'solution-cloud-infra',
    eyebrow: 'Solution Category 03',
    title: 'Cloud, infrastructure, deployment, and enterprise technology modernization.',
    description:
      'This category moves beyond product builds and into wider IT readiness. It covers cloud, infrastructure, deployment, integration, and modernization work for businesses that need stronger technical foundations.',
    accentClassName: 'text-secondary',
    summaryPoints: [
      'Good fit for migrations, rollout planning, environment setup, and system modernization.',
      'Covers infrastructure planning as well as release, integration, and reliability work.',
      'Helps businesses move from scattered systems to cleaner technical ownership.',
    ],
    coverageBands: ['Cloud readiness', 'Infrastructure planning', 'Release and integration', 'Legacy modernization'],
    outcomes: [
      'Gives businesses a stronger operating base for product launches, internal systems, and future scale.',
      'Reduces technical sprawl by bringing hosting, deployment, integration, and modernization into one plan.',
    ],
    cards: [
      {
        icon: CloudCog,
        title: 'Cloud Services',
        description: 'Cloud migration, hosting architecture, environment design, and multi-stage deployment planning for stable growth.',
        fit: 'Best for migrations, scaling plans, and production-ready hosting setups.',
        useCases: ['Cloud migration programs', 'Production hosting design'],
        points: ['Cloud readiness', 'Deployment architecture', 'Operational resilience'],
      },
      {
        icon: Server,
        title: 'Data Center and Infrastructure',
        description: 'Infrastructure planning, compute foundations, hosting strategy, and modernization support for evolving systems.',
        fit: 'Best for enterprises upgrading core environments and technical reliability.',
        useCases: ['Compute and hosting planning', 'Core environment upgrades'],
        points: ['Infrastructure planning', 'Hosting and compute support', 'Modernization pathways'],
      },
      {
        icon: DatabaseZap,
        title: 'Integration and Deployment',
        description: 'Handle third-party integrations, release management, system setup, and environment provisioning in a cleaner way.',
        fit: 'Best for API-heavy stacks, release ownership, and connected business systems.',
        useCases: ['Release and rollout ownership', 'Connected system delivery'],
        points: ['API integration', 'Deployment pipelines', 'Release and environment ownership'],
      },
      {
        icon: Building2,
        title: 'Infrastructure Modernization',
        description: 'Refresh legacy stacks, improve technical reliability, and move businesses onto stronger, easier-to-manage foundations.',
        fit: 'Best for rescue work, upgrades, and replacing fragile older systems.',
        useCases: ['Legacy rescue projects', 'Reliability-led upgrades'],
        points: ['Legacy upgrades', 'Reliability improvements', 'Operational modernization'],
      },
    ],
  },
  {
    id: 'solution-security-managed',
    eyebrow: 'Solution Category 04',
    title: 'Cyber security, managed IT services, communication systems, and technical continuity.',
    description:
      'This category rounds out the wider IT partner story with security, support, managed operations, network readiness, and end-user technical environments that keep day-to-day systems dependable.',
    accentClassName: 'text-primary',
    summaryPoints: [
      'Useful for businesses that need more than one-time builds and want steady technical continuity.',
      'Combines security, managed support, and communication environment planning.',
      'Built to support uptime, safer operations, and long-term ownership.',
    ],
    coverageBands: ['Cyber protection', 'Network security', 'Managed support', 'Communication environments'],
    outcomes: [
      'Supports day-to-day continuity so internal teams are not left alone after launch or migration.',
      'Improves protection, stability, and operational response across products and wider IT systems.',
    ],
    cards: [
      {
        icon: LockKeyhole,
        title: 'Cyber Security Solutions',
        description: 'Security posture design, access control, protection architecture, and safer digital operations across products and IT systems.',
        fit: 'Best for growing teams that need stronger protection and lower operational risk.',
        useCases: ['Security posture upgrades', 'Access and protection layers'],
        points: ['Risk reduction', 'Secure architecture', 'Operational safeguards'],
      },
      {
        icon: Network,
        title: 'Network Security',
        description: 'Protected connectivity, safer internal routing, and secure infrastructure design for enterprises with operational exposure.',
        fit: 'Best for offices, distributed teams, and infrastructure-led security upgrades.',
        useCases: ['Office and branch security', 'Protected internal routing'],
        points: ['Protected connectivity', 'Secure routing', 'Enterprise safeguards'],
      },
      {
        icon: MonitorCog,
        title: 'IT Managed Services',
        description: 'Support, maintenance, monitoring, continuity workflows, and long-term technical ownership that reduce internal pressure.',
        fit: 'Best for businesses that need an external technical team to stay close over time.',
        useCases: ['Monitoring and maintenance', 'Continuity-led support models'],
        points: ['Monitoring and maintenance', 'Continuity support', 'Managed technical execution'],
      },
      {
        icon: RadioTower,
        title: 'Unified Communication and EUC',
        description: 'Communication tooling, collaboration systems, workstation environments, and business productivity layers for smoother internal operations.',
        fit: 'Best for collaboration upgrades, internal systems, and end-user enablement.',
        useCases: ['Team collaboration environments', 'End-user productivity systems'],
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

const pillarContext = [
  'Each category is written in simpler language so buyers quickly understand what is covered.',
  'The cards now hold more context, so the layout feels filled and balanced instead of airy.',
  'The structure is still enterprise-focused, but it reads like human business language.',
];

const positioningNotes = [
  {
    title: 'Enterprise delivery model',
    description:
      'The structure is shaped to show category clarity, real coverage, and stronger technical ownership instead of generic agency wording.',
  },
  {
    title: 'Why companies stay long-term',
    description:
      'Businesses keep this kind of partner close when they need product builds, architecture decisions, rollout support, and post-launch continuity from one team.',
  },
  {
    title: 'Plain language, stronger trust',
    description:
      'The content is intentionally simpler and more human so founders, operators, and enterprise buyers can quickly understand what is being offered.',
  },
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

              <div className="mt-6 space-y-3">
                {pillarContext.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
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
              <div className="mt-5 space-y-2">
                {category.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span className="text-slate-900 dark:text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.coverage.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {category.result}
              </div>
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
                <div className="space-y-5">
                  <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${group.accentClassName}`}>
                    {group.eyebrow}
                  </p>
                  <h3 className="font-heading mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{group.description}</p>

                  <div className="space-y-3">
                    {group.summaryPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.coverageBands.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {group.outcomes.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-white/5"
                      >
                        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
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

                          <div className="mt-6 flex flex-wrap gap-2">
                            {card.useCases.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                            {card.fit}
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

                <div className="mt-6 space-y-3">
                  {positioningNotes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
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
