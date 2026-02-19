import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  Shield, 
  Heart, 
  Target, 
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Empowering Lives',
      description: 'We believe everyone deserves access to fair work opportunities and dignified employment.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Verified profiles and secure platform ensure safe interactions for all users.',
    },
    {
      icon: Target,
      title: 'Local Focus',
      description: 'Connecting workers with opportunities in their own cities and communities.',
    },
    {
      icon: Zap,
      title: 'Instant Matching',
      description: 'Quick and efficient job matching to meet urgent staffing needs.',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Workers Registered' },
    { value: '2,000+', label: 'Caterers Onboard' },
    { value: '50,000+', label: 'Jobs Completed' },
    { value: '10', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Connecting <span className="gradient-text">Workers & Caterers</span> Across India
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              EventWork bridges the gap between catering services seeking temporary staff 
              and workers looking for flexible daily wage opportunities.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-secondary text-secondary-foreground">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-secondary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  India has millions of students, job seekers, and individuals looking for 
                  flexible work. At the same time, thousands of catering businesses struggle 
                  to find reliable temporary workers for events.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  EventWork solves this by creating a simple, trustworthy platform where 
                  both parties can connect instantly. We're not just building a job board — 
                  we're building economic opportunities for communities across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/worker-signup">
                    <Button size="lg" className="gap-2">
                      <Briefcase className="w-5 h-5" />
                      Find Work
                    </Button>
                  </Link>
                  <Link to="/authoriser-signup">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Users className="w-5 h-5" />
                      Hire Workers
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mx-auto mb-3 shadow-md">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              How We Help
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Workers */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">For Workers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Students can earn while studying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Job seekers get instant employment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Flexible work hours that fit your schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Daily wages paid after each event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Build experience in hospitality industry</span>
                  </li>
                </ul>
              </div>

              {/* For Caterers */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">For Caterers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hire workers within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Access verified worker profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scale your workforce as needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Reduce recruitment costs and time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manage all hires from one dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-primary to-orange-medium rounded-3xl p-8 md:p-12 text-primary-foreground text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Have questions? We'd love to hear from you. Reach out to us through any of these channels.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-medium">support@eventwork.in</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Mumbai, India</span>
                </div>
              </div>

              <Link to="/worker-signup">
                <Button size="lg" variant="secondary" className="gap-2">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
