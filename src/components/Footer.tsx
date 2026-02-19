import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">
                Event<span className="text-primary">Work</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Connecting catering services with skilled workers for events across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/worker-signup" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Find Work
              </Link>
              <Link to="/authoriser-signup" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Hire Workers
              </Link>
            </div>
          </div>

          {/* For Workers */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">For Workers</h4>
            <div className="flex flex-col gap-3">
              <Link to="/worker-signup" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Register as Worker
              </Link>
              <Link to="/worker-login" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Worker Login
              </Link>
              <span className="text-secondary-foreground/70">Browse Jobs</span>
              <span className="text-secondary-foreground/70">My Applications</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@eventwork.in</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-secondary-foreground/50">
          <p>© 2026 EventWork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
