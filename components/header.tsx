"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import BookingModal from "./booking-modal"
import { useTheme } from "next-themes"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
              alt="Konnecting Dots Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-foreground hover:text-brand-primary font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4 bg-card">
                    <div className="space-y-3">
                      <Link href="/services/one-on-one-coaching" className="block p-3 rounded-lg hover:bg-accent">
                        <h4 className="font-semibold text-card-foreground">ONE on ONE Coaching</h4>
                        <p className="text-sm text-muted-foreground">Personalized NLP and Hypnosis sessions</p>
                      </Link>
                      <Link href="/services/corporate-training" className="block p-3 rounded-lg hover:bg-accent">
                        <h4 className="font-semibold text-card-foreground">Corporate Training Programs</h4>
                        <p className="text-sm text-muted-foreground">Transform your organization</p>
                      </Link>
                      <Link href="/services/dei-training" className="block p-3 rounded-lg hover:bg-accent">
                        <h4 className="font-semibold text-card-foreground">Diversity, Equity & Inclusion Training</h4>
                        <p className="text-sm text-muted-foreground">Build inclusive workplaces</p>
                      </Link>
                      <Link href="/services/train-the-trainer" className="block p-3 rounded-lg hover:bg-accent">
                        <h4 className="font-semibold text-card-foreground">Train the Trainer</h4>
                        <p className="text-sm text-muted-foreground">Become a certified trainer</p>
                      </Link>
                      <Link href="/services/practitioner-master" className="block p-3 rounded-lg hover:bg-accent">
                        <h4 className="font-semibold text-card-foreground">Practitioner & Master Practitioner</h4>
                        <p className="text-sm text-muted-foreground">NLP certification programs</p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Success Stories
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-foreground hover:text-brand-primary font-medium transition-colors">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <BookingModal>
              <Button className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-semibold">
                Book Session
              </Button>
            </BookingModal>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto max-h-screen">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                    alt="Konnecting Dots"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                  />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-4 pb-8">
                <Link
                  href="/"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="py-2 px-4 text-lg font-medium text-foreground">Services</p>
                  <Link
                    href="/services/one-on-one-coaching"
                    className="block py-2 px-6 text-base text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    ONE on ONE Coaching
                  </Link>
                  <Link
                    href="/services/corporate-training"
                    className="block py-2 px-6 text-base text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Corporate Training Programs
                  </Link>
                  <Link
                    href="/services/dei-training"
                    className="block py-2 px-6 text-base text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    DEI Training
                  </Link>
                  <Link
                    href="/services/train-the-trainer"
                    className="block py-2 px-6 text-base text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Train the Trainer
                  </Link>
                  <Link
                    href="/services/practitioner-master"
                    className="block py-2 px-6 text-base text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Practitioner & Master Practitioner
                  </Link>
                </div>
                <Link
                  href="/resources"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/testimonials"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/events"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 px-4 text-lg font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-6 space-y-3">
                  <BookingModal>
                    <Button className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-semibold">
                      Book Session
                    </Button>
                  </BookingModal>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    // </CHANGE>
  )
}
