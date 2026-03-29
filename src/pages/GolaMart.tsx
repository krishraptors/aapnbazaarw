import PageMeta from '@/components/common/PageMeta';
import Footer from '@/components/sections/Footer';
import { motion } from 'motion/react';

export default function GolaMart() {
  return (
    <>
      <PageMeta title="GolaMart" description="GolaMart is coming soon." />

      <div className="min-h-screen bg-background">
        <section className="relative flex min-h-[78vh] items-center overflow-hidden pb-20 pt-32 xl:pb-28 xl:pt-36">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.42),hsl(var(--background)))]" />
          <div className="surface-grid absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute left-[10%] top-20 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute right-[10%] top-28 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />

          <div className="container relative px-4">
            <motion.div
              className="mx-auto max-w-3xl rounded-[34px] border border-border/70 bg-background/82 p-10 text-center shadow-[0_30px_90px_-44px_hsl(var(--foreground)/0.42)] backdrop-blur sm:p-14"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                GolaMart
              </div>
              <h1 className="font-heading mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl xl:text-6xl">
                Coming Soon
              </h1>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
