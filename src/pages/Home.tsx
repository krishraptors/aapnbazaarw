import { Suspense, lazy, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import DeferredSection from '@/components/common/DeferredSection';
import Hero from '@/components/sections/Hero';
import { cn } from '@/lib/utils';

const ServicesShowcase = lazy(() => import('@/components/sections/ServicesShowcase'));
const Features = lazy(() => import('@/components/sections/Features'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const Footer = lazy(() => import('@/components/sections/Footer'));

function HomeSectionFallback({ minHeightClassName }: { minHeightClassName: string }) {
  return (
    <div className="container px-4 py-10">
      <div
        className={cn(
          'min-h-[320px] rounded-[32px] border border-border/60 bg-muted/30 shadow-sm',
          minHeightClassName
        )}
      />
    </div>
  );
}

export default function Home() {
  const location = useLocation();
  const shouldLoadAllSections = location.pathname === '/' && location.hash.length > 0;

  const renderSection = (section: ReactNode, minHeightClassName: string) => {
    const fallback = <HomeSectionFallback minHeightClassName={minHeightClassName} />;

    if (shouldLoadAllSections) {
      return <Suspense fallback={fallback}>{section}</Suspense>;
    }

    return (
      <DeferredSection fallback={fallback} minHeightClassName={minHeightClassName}>
        {section}
      </DeferredSection>
    );
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<HomeSectionFallback minHeightClassName="min-h-[980px]" />}>
        <ServicesShowcase />
      </Suspense>
      {renderSection(<Features />, 'min-h-[560px]')}
      {renderSection(<Contact />, 'min-h-[640px]')}
      {renderSection(<Footer />, 'min-h-[220px]')}
    </div>
  );
}
