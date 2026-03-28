import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Clock3,
  Network,
  PackageCheck,
  ShoppingCart,
  Store,
} from 'lucide-react';
import { motion } from 'motion/react';

const productCategories = [
  {
    id: 'product-AapnBazaar',
    href: '#product-AapnBazaar',
    title: 'AapnBazaar',
    tag: 'B2B Commerce',
    description:
      'Wholesale marketplace for suppliers, retailers, and distribution-led business networks.',
    points: ['Direct B2B ordering', 'Catalog-led commerce', 'Operational buying workflows'],
    icon: ShoppingCart,
    className:
      'border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,247,250,0.94))]',
    iconClassName: 'bg-primary/10 text-primary',
  },
  {
    id: 'coming-soon',
    title: 'Comming Soon',
    tag: 'Next Product',
    description:
      'This space is reserved for the next product launch.',
    points: ['Comming Soon'],
    icon: Clock3,
    className:
      'border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,247,250,0.94))]',
    iconClassName: 'bg-secondary/15 text-secondary',
    isComingSoon: true,
  },
];

const productDetails = [
  {
    id: 'product-AapnBazaar',
    title: 'AapnBazaar',
    eyebrow: 'Marketplace Product 01',
    subtitle: 'The main B2B ecommerce engine for wholesale trade.',
    description:
      'AapnBazaar is the core marketplace product built for factories, wholesalers, distributors, and retailers. It is designed to handle catalog visibility, B2B ordering, pricing workflows, and scalable marketplace operations.',
    highlights: [
      'B2B ordering with supplier and retailer workflows',
      'Marketplace-ready catalog and demand operations',
      'Built for fast expansion into categories and regions',
    ],
    capabilities: [
      'Supplier onboarding',
      'Bulk order journeys',
      'Retail and distributor workflows',
      'Commerce operations dashboard',
    ],
    metrics: [
      { label: 'Commerce Mode', value: 'B2B Marketplace' },
      { label: 'Fit', value: 'Suppliers to retailers' },
      { label: 'Execution', value: 'Live growth platform' },
    ],
    icon: Store,
    className:
      'border-border/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(245,247,250,0.92)_54%,rgba(231,248,249,0.9))]',
    iconClassName: 'bg-primary/10 text-primary',
    ctaHref: '/#contact',
    ctaLabel: 'Discuss AapnBazaar',
  },
];

export default function MyProductsShowcase() {
  return (
    <section id="my-products" className="scroll-mt-28 relative overflow-hidden py-20 xl:py-32">
      <div className="absolute inset-0 bg-muted/35" />
      <div className="surface-grid absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-[10%] top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-16 h-60 w-60 rounded-full bg-secondary/15 blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/85 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
            <Network className="h-4 w-4" />
            My Products
          </div>
          <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">
            Product categories that open into
            <span className="gradient-text"> AapnBazaar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            This parent section highlights AapnBazaar first and keeps the second product
            slot reserved as a simple coming soon placeholder.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.title}
              className={`group relative overflow-hidden rounded-[32px] border p-6 shadow-[0_24px_80px_-52px_hsl(var(--foreground)/0.45)] transition-all duration-500 sm:p-7 ${product.className} ${product.isComingSoon ? '' : 'hover:-translate-y-1'}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,136,151,0.14),transparent_44%)]" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${product.iconClassName}`}>
                    <product.icon className="h-7 w-7" />
                  </div>
                  <div className="rounded-full bg-background/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                    {product.tag}
                  </div>
                </div>

                <h3 className="font-heading mt-6 text-2xl font-semibold">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>

                <div className="mt-6 space-y-3">
                  {product.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                      <span className="text-foreground/85">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  {product.isComingSoon ? (
                    <Button
                      disabled
                      className="w-full rounded-full bg-secondary text-secondary-foreground opacity-100 disabled:cursor-default disabled:opacity-100"
                    >
                      Comming Soon
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3 backdrop-blur transition-all duration-500 group-hover:border-primary/30 group-hover:bg-background/80">
                      <span className="text-sm font-medium text-foreground/80">Open category details</span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        View
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6">
          {productDetails.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              className={`scroll-mt-32 rounded-[36px] border p-6 shadow-[0_24px_90px_-55px_hsl(var(--foreground)/0.45)] sm:p-8 ${product.className}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
                    <product.icon className="h-4 w-4" />
                    {product.eyebrow}
                  </div>
                  <h3 className="font-heading mt-5 text-3xl font-semibold leading-tight xl:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-lg font-medium text-foreground/80">{product.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {product.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-3xl border border-border/70 bg-background/70 px-5 py-5 backdrop-blur">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="font-heading mt-3 text-xl font-semibold">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full px-6">
                      <a href={product.ctaHref}>
                        {product.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-primary/20 bg-background/80">
                      <a href="/#contact">Request Product Demo</a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[30px] border border-border/70 bg-background/82 p-6 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                      Core Highlights
                    </p>
                    <div className="mt-5 space-y-3">
                      {product.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl bg-muted/40 px-4 py-3">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
                          <p className="text-sm leading-6 text-foreground/84">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-border/70 bg-foreground p-6 text-background shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/70">
                      Capability Stack
                    </p>
                    <div className="mt-5 grid gap-3">
                      {product.capabilities.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-background/10 bg-background/8 px-4 py-3 text-sm font-medium text-background/84"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-border/70 bg-background/82 p-6 backdrop-blur lg:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${product.iconClassName}`}>
                        <PackageCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Product Positioning
                        </p>
                        <h4 className="font-heading mt-1 text-2xl font-semibold">
                          Built as a focused B2B marketplace product
                        </h4>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      This structure keeps the homepage focused on AapnBazaar and its
                      core wholesale commerce workflows without mixing in other product
                      features here.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
