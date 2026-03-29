import PageMeta from '@/components/common/PageMeta';
import AppDownload from '@/components/sections/AppDownload';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import HowItWorks from '@/components/sections/HowItWorks';
import VendorForm from '@/components/sections/VendorForm';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CircleDollarSign,
  PackageCheck,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { value: '0%', label: 'Commission' },
  { value: '100%', label: 'Verified' },
  { value: '24/7', label: 'Support' },
];

const heroCards = [
  {
    eyebrow: 'Business partnership',
    tag: 'Factory Connect',
    title: 'Direct Trading',
    description: 'Connect with verified manufacturers without middlemen.',
    image: '/images/aapnbazaar/direct-trade.svg',
  },
  {
    eyebrow: 'Logistics delivery',
    tag: 'Verified Fulfilment',
    title: 'Secure Platform',
    description: 'End-to-end logistics support and verified sellers.',
    image: '/images/aapnbazaar/logistics-delivery.svg',
  },
];

const whyChooseItems = [
  {
    tag: 'Pricing Edge',
    title: 'Zero Commission',
    description:
      'Keep 100% of your earnings. No hidden fees, no commission charges. Trade freely and grow your business.',
    image: '/images/aapnbazaar/zero-commission.svg',
  },
  {
    tag: 'Market Access',
    title: 'Direct Factory Network',
    description:
      'Connect directly with verified manufacturers and wholesalers. Cut out middlemen and get better prices.',
    image: '/images/aapnbazaar/marketplace-network.svg',
  },
  {
    tag: 'Delivery Flow',
    title: 'End-to-End Logistics',
    description:
      'Reliable logistics support for safe and timely delivery of goods across India.',
    image: '/images/aapnbazaar/logistics-delivery.svg',
  },
  {
    tag: 'Trust Layer',
    title: 'Verified Sellers & Buyers',
    description:
      'Trade with confidence. All businesses are verified to reduce fraud and increase trust.',
    image: '/images/aapnbazaar/verified-trade.svg',
  },
  {
    tag: 'Speed to Deal',
    title: 'Fast & Easy Trading',
    description:
      'Simple platform designed for quick deals. List products, connect with buyers, and close deals faster.',
    image: '/images/aapnbazaar/fast-growth.svg',
  },
  {
    tag: 'India-first',
    title: 'Built for India',
    description:
      'Practical, scalable, and local-first platform designed specifically for Indian businesses.',
    image: '/images/aapnbazaar/india-network.svg',
  },
];

const networkSignals = [
  'Verified manufacturers',
  'Factory-direct pricing',
  'Pan-India logistics',
  'Fast buyer-seller connection',
];

const tradeFlowSteps = [
  'Factory discovery',
  'Direct negotiation',
  'Order visibility',
  'Logistics-assisted delivery',
];

export default function AapnBazaar() {
  return (
    <>
      <PageMeta
        title="AapnBazaar"
        description="Aapnbazaar is India's zero-commission B2B marketplace for direct factory and wholesaler trade."
      />

      <div className="b2b-hero-surface min-h-screen bg-background">
        <section className="relative overflow-hidden pb-20 pt-32 xl:pb-28 xl:pt-36">
          <div className="b2b-hero-surface absolute inset-0" />
          <div className="surface-grid absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute left-[8%] top-20 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[10%] top-28 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="container relative px-4">
            <div className="grid items-center gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
              <motion.div
                className="space-y-8 text-center xl:text-left"
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 backdrop-blur dark:border-sky-400/20 dark:bg-white/10 dark:text-sky-300">
                  <CircleDollarSign className="h-4 w-4" />
                  Zero Commission B2B Platform
                </div>

                <div className="space-y-5">
                  <h1 className="font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl xl:text-7xl">
                    Connect Directly with
                    <span className="gradient-text mt-3 block">Factories &amp; Wholesalers</span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground xl:mx-0 xl:text-xl">
                    Aapnbazaar is India&apos;s first zero-commission B2B marketplace. Trade
                    directly, save more, and grow your business with verified
                    manufacturers and buyers.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row xl:justify-start">
                  <Button asChild size="lg" className="h-12 rounded-full bg-[linear-gradient(135deg,#1d4ed8,#14b8a6)] px-7 text-base text-white hover:opacity-95">
                    <a href="#vendor-form">
                      Register as Vendor
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-sky-400/25 bg-white/75 px-7 text-base text-sky-700 hover:bg-white/90 dark:border-sky-400/20 dark:bg-white/10 dark:text-sky-300"
                  >
                    <a href="#app-download">Download App</a>
                  </Button>
                  <WhatsAppButton size="lg" className="h-12 rounded-full border border-emerald-300/40 bg-emerald-500 px-7" />
                </div>

                <div className="grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="b2b-card rounded-2xl border border-sky-200/70 px-5 py-4 text-center shadow-[0_20px_60px_-42px_hsl(var(--foreground)/0.25)] backdrop-blur xl:text-left dark:border-sky-400/10"
                    >
                      <div className="font-heading text-3xl font-bold text-sky-700 dark:text-sky-300">
                        {item.value}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {heroCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      className="b2b-card group rounded-[28px] border border-sky-200/70 p-5 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.28)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-teal-300/55 hover:shadow-[0_28px_90px_-48px_rgba(20,184,166,0.24)] sm:p-6 dark:border-sky-400/10"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.22 + index * 0.1 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-[24px] border border-sky-200/60 bg-sky-50/70 dark:border-sky-400/10 dark:bg-slate-900/40">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`mt-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                          index % 2 === 0
                            ? 'border-sky-300/50 bg-sky-100/80 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300'
                            : 'border-emerald-300/50 bg-emerald-100/80 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300'
                        }`}
                      >
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
                <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full border border-sky-300/20 bg-white/60 backdrop-blur" />
                <div className="pointer-events-none absolute -right-6 bottom-16 h-32 w-32 rounded-full border border-emerald-300/20 bg-white/60 backdrop-blur" />

                <div className="b2b-panel relative overflow-hidden rounded-[34px] border border-sky-200/70 p-6 shadow-[0_30px_100px_-40px_rgba(14,116,144,0.22)] sm:p-8 dark:border-sky-400/10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/80 dark:text-sky-300/80">
                        AapnBazaar Trade Network
                      </p>
                      <h2 className="font-heading mt-2 text-2xl font-semibold">
                        Built for direct B2B growth across India.
                      </h2>
                    </div>
                    <div className="rounded-full border border-emerald-300/40 bg-emerald-100/80 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Zero middlemen
                    </div>
                  </div>

                  <div className="mt-6 aspect-[16/10] overflow-hidden rounded-[30px] border border-sky-200/60 bg-sky-50/60 dark:border-sky-400/10 dark:bg-slate-900/40">
                    <img
                      src="/images/aapnbazaar/marketplace-network.svg"
                      alt="AapnBazaar trade network"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="b2b-deep-panel rounded-[28px] border border-sky-300/10 p-5 text-background shadow-lg">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-emerald-300" />
                        <p className="text-sm uppercase tracking-[0.2em] text-background/68">
                          Network
                        </p>
                      </div>
                      <p className="font-heading mt-4 text-2xl font-semibold">
                        Verified buyers, sellers, and factories
                      </p>
                      <p className="mt-3 text-sm leading-6 text-background/70">
                        One focused platform for direct discovery, negotiation, and repeat
                        wholesale trade.
                      </p>
                    </div>

                    <div className="b2b-soft rounded-[28px] border border-emerald-200/70 p-5 backdrop-blur dark:border-emerald-400/10">
                      <div className="flex items-center gap-3">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                          Marketplace signals
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {networkSignals.map((signal, index) => (
                          <span
                            key={signal}
                            className={`inline-flex rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                              index % 2 === 0
                                ? 'border-sky-300/40 bg-sky-100/75 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300'
                                : 'border-emerald-300/40 bg-emerald-100/75 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300'
                            }`}
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="b2b-soft mt-6 rounded-[30px] border border-sky-200/70 p-6 backdrop-blur dark:border-sky-400/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100/80 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Visual Marketplace Snapshot
                        </p>
                        <h3 className="font-heading mt-1 text-2xl font-semibold">
                          A more professional trade flow from discovery to delivery
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {tradeFlowSteps.map((signal, index) => (
                        <div
                          key={signal}
                          className={`rounded-2xl border px-4 py-4 text-sm font-medium ${
                            index % 2 === 0
                              ? 'border-sky-300/35 bg-sky-100/65 text-foreground dark:border-sky-400/15 dark:bg-sky-400/10'
                              : 'border-emerald-300/35 bg-emerald-100/65 text-foreground dark:border-emerald-400/15 dark:bg-emerald-400/10'
                          }`}
                        >
                          {signal}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 xl:py-28">
          <div className="b2b-soft absolute inset-0" />
          <div className="surface-grid absolute inset-0 opacity-25" />

          <div className="container relative px-4">
            <motion.div
              className="mx-auto mb-14 max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 backdrop-blur dark:border-sky-400/20 dark:bg-white/10 dark:text-sky-300">
                <PackageCheck className="h-4 w-4" />
                Why Choose Aapnbazaar?
              </div>
              <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">
                We&apos;re revolutionizing B2B commerce in India
                <span className="gradient-text"> with features built for growth</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Practical, scalable, and business-first workflows designed to help Indian
                buyers, wholesalers, and manufacturers trade with more confidence.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="b2b-card group rounded-[30px] border border-sky-200/70 p-5 shadow-[0_24px_80px_-52px_rgba(14,116,144,0.18)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/55 hover:shadow-[0_28px_90px_-48px_rgba(16,185,129,0.2)] sm:p-6 dark:border-sky-400/10"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-[24px] border border-sky-200/60 bg-sky-50/60 dark:border-sky-400/10 dark:bg-slate-900/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`mt-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                      index % 2 === 0
                        ? 'border-sky-300/45 bg-sky-100/80 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300'
                        : 'border-emerald-300/45 bg-emerald-100/80 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300'
                    }`}
                  >
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

        <HowItWorks />
        <VendorForm />
        <AppDownload />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
