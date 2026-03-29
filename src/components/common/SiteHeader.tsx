import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'GolaMart', href: '/golamart' },
  { label: 'GoStratups', href: '/startups' },
  { label: 'Contact', href: '/#contact' },
];

export default function SiteHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const currentHref = `${location.pathname}${location.hash}`;

  const isNavItemActive = (href: string) => {
    if (href === '/#home') {
      return location.pathname === '/' && (!location.hash || location.hash === '#home');
    }

    if (href === '/my-product') {
      return location.pathname.startsWith('/my-product');
    }

    return currentHref === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-4">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 shadow-[0_20px_60px_-32px_hsl(var(--foreground)/0.55)] sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="AapnBazaar logo"
              className="h-12 w-12 rounded-full object-cover shadow-[0_16px_32px_-16px_hsl(var(--secondary)/0.75)] ring-1 ring-primary/15"
            />
            <div>
              <div className="font-heading text-lg font-semibold">AapnBazaar</div>
              <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Global commerce and product studio
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isNavItemActive(item.href)
                      ? 'bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))] text-primary-foreground shadow-[0_14px_30px_-18px_hsl(var(--primary)/0.75)]'
                      : 'text-foreground/75 hover:bg-muted hover:text-foreground hover:shadow-[0_12px_24px_-18px_hsl(var(--primary)/0.55)]'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button asChild className="rounded-full px-5">
              <Link to="/aapnbazaar">Open B2B</Link>
            </Button>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="glass-panel mt-3 rounded-[28px] p-4 shadow-[0_24px_60px_-36px_hsl(var(--foreground)/0.55)] xl:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
                    isNavItemActive(item.href)
                      ? 'bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))] text-primary-foreground'
                      : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 space-y-3">
              <Button asChild className="w-full rounded-full">
                <Link to="/aapnbazaar" onClick={() => setIsOpen(false)}>
                  Open B2B
                </Link>
              </Button>
              <ThemeToggle className="w-full" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
