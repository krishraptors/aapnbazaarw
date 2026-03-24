import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, Search, MessageSquare, Handshake } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Register Your Business',
    description: 'Sign up as a factory, wholesaler, or shop. Complete your business profile with verification.'
  },
  {
    icon: Search,
    step: '02',
    title: 'Browse & Connect',
    description: 'Search for products or buyers. Filter by category, location, and business type.'
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Negotiate & Deal',
    description: 'Chat directly with sellers or buyers. Negotiate prices and terms without any middlemen.'
  },
  {
    icon: Handshake,
    step: '04',
    title: 'Trade & Grow',
    description: 'Complete transactions with logistics support. Build long-term business relationships.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            How <span className="gradient-text">Aapnbazaar</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in four simple steps and transform the way you do business
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}

              <Card className="relative border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
