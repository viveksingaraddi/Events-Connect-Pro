import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Briefcase, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle2,
  ChefHat,
  Utensils,
  PartyPopper,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Landing() {
  const steps = [
    {
      icon: Users,
      title: 'Create Your Profile',
      description: 'Sign up as a worker or caterer in just 2 minutes',
    },
    {
      icon: Briefcase,
      title: 'Find or Post Jobs',
      description: 'Browse available jobs or post your requirements',
    },
    {
      icon: CheckCircle2,
      title: 'Start Working',
      description: 'Get hired instantly and earn daily wages',
    },
  ];

  const workerBenefits = [
    'Flexible daily work opportunities',
    'Instant payment after events',
    'Work near your location',
    'No experience required for some jobs',
    'Build your reputation with reviews',
    'Access to premium events',
  ];

  const catererBenefits = [
    'Hire workers within minutes',
    'Verified worker profiles',
    'Flexible staffing solutions',
    'Reduce hiring costs',
    'Quality workforce guarantee',
    'Easy scheduling management',
  ];

  const testimonials = [
    {
      name: 'Rahul Verma',
      role: 'College Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      quote: 'I earn ₹15,000-20,000 monthly working weekends at events. Perfect for students!',
    },
    {
      name: 'Sunita Devi',
      role: 'Royal Caterers',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      quote: 'Finding reliable workers for big events used to be a nightmare. Not anymore!',
    },
    {
      name: 'Mohammed Ali',
      role: 'Part-time Worker',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      quote: 'The app is so easy to use. I found work on my first day of signing up.',
    },
  ];

  const eventTypes = [
    { icon: PartyPopper, label: 'Weddings', count: '500+' },
    { icon: Utensils, label: 'Receptions', count: '300+' },
    { icon: ChefHat, label: 'Parties', count: '450+' },
    { icon: Building, label: 'Corporate', count: '200+' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Star className="w-4 h-4" />
              Trusted by 10,000+ workers and caterers
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Earn Money Working in{' '}
              <span className="gradient-text">Events Near You</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Students and job seekers can find daily wage work in weddings, parties and functions. 
              Catering services can instantly hire workers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/worker-signup">
                <button className="btn-hero flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Find Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/authoriser-signup">
                <button className="btn-hero-outline flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Hire Workers
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {eventTypes.map((event, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border border-border card-hover">
                  <event.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{event.count}</p>
                  <p className="text-sm text-muted-foreground">{event.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in 3 simple steps and start earning or hiring today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-card rounded-2xl p-8 text-center card-hover border border-border"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Workers */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                For Workers
              </h3>
              <div className="space-y-4">
                {workerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/worker-signup" className="mt-8 inline-block">
                <Button size="lg" className="gap-2">
                  Start Earning <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* For Caterers */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-8 md:p-12">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                For Catering Services
              </h3>
              <div className="space-y-4">
                {catererBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/authoriser-signup" className="mt-8 inline-block">
                <Button variant="secondary" size="lg" className="gap-2">
                  Start Hiring <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What People Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied workers and caterers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 card-hover border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-secondary rounded-3xl p-8 md:p-16 text-center text-secondary-foreground">
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted & Secure Platform
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-8">
              All workers and caterers go through verification. Your data and payments are secure with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/worker-signup">
                <Button size="lg" className="gap-2">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
