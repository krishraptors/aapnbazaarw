import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function GolaMartShowcase() {
  return (
    <section
      id="golamart-section"
      className="scroll-mt-28 relative overflow-hidden py-20 xl:py-32"
    >
      <div className="agri-showcase-surface absolute inset-0" />
      <div className="surface-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-[8%] top-20 h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-10 h-64 w-64 rounded-full bg-lime-200/25 blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur">
            <Leaf className="h-4 w-4" />
            GolaMart
          </div>
          <h2 className="font-heading mb-4 text-3xl font-bold xl:text-5xl">GolaMart</h2>
          <p className="text-lg text-emerald-950/72 dark:text-emerald-50/72">
            This section is reserved for the upcoming GolaMart launch.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-3xl justify-center rounded-[36px] border border-emerald-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,253,244,0.94)_55%,rgba(220,252,231,0.8))] p-10 shadow-[0_24px_90px_-55px_hsl(var(--foreground)/0.32)] dark:border-emerald-900/50 dark:bg-[linear-gradient(135deg,rgba(5,24,16,0.98),rgba(8,34,22,0.94)_55%,rgba(10,50,30,0.84))] sm:p-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            disabled
            className="rounded-full bg-emerald-600 px-8 text-base text-white opacity-100 hover:bg-emerald-600 disabled:cursor-default disabled:opacity-100"
          >
            Coming Soon
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
