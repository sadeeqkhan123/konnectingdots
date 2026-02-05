import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo-dark.png" alt="Konnecting Dots Logo" width={180} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering minds and transforming lives through world-class NLP, Hypnosis, and Corporate Training
              programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Cvf5iD3YT/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="hover:text-brand-primary hover:bg-accent">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <Button size="icon" variant="ghost" className="hover:text-brand-primary hover:bg-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <a href="https://www.instagram.com/konnectingdots_?igsh=eTc1YW55N2FxN3Bx" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="hover:text-brand-primary hover:bg-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <Button size="icon" variant="ghost" className="hover:text-brand-primary hover:bg-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-brand-primary hover:bg-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Training Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-admin"
                  className="text-brand-secondary hover:text-brand-secondary/80 transition-colors font-semibold"
                >
                  Blog Admin
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#one-on-one"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  One-on-One Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services#corporate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Corporate Training & Organizational Development
                </Link>
              </li>
              <li>
                <Link href="/services#dei" className="text-muted-foreground hover:text-foreground transition-colors">
                  DEI Training
                </Link>
              </li>
              <li>
                <Link
                  href="/services#train-trainer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Train the Trainer Certification
                </Link>
              </li>
              <li>
                <Link
                  href="/services#practitioner"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  NLP & Hypnotherapy Practitioner
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Free Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-secondary" />
                <a href="mailto:Connect@konnectingdots.org" className="text-muted-foreground hover:text-foreground transition-colors">
                  Connect@konnectingdots.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-secondary" />
                <a href="tel:+923311365146" className="text-muted-foreground hover:text-foreground transition-colors">
                  +92 331 1365146
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-secondary" />
                <span className="text-muted-foreground">Karachi, Pakistan</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4">Get the latest insights and updates</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-accent border-border" />
                <Button className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 Konnecting Dots. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </CHANGE>
  )
}
