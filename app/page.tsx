import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, Users, Award, Heart, Star, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary text-white py-20 lg:py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-info rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30 opacity-0-animate animate-fade-in">
              Transforming Lives Through NLP & Hypnosis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0-animate animate-fade-in-up animate-delay-100">
              Empowering Minds.
              <span className="text-brand-secondary"> Transforming Lives.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground/80 max-w-3xl mx-auto opacity-0-animate animate-fade-in-up animate-delay-200">
              Unlock your potential with world-class NLP, Hypnosis, and Corporate Training programs designed to create
              lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-animate animate-fade-in-up animate-delay-300">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Intro Video
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Intro Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0-animate animate-fade-in-up">
              A Message from Yousif Mangi
            </h2>
            <p className="text-xl text-muted-foreground mb-8 opacity-0-animate animate-fade-in-up animate-delay-100">
              Founder & Chief Learning Officer at Konnecting Dots
            </p>
            <div className="relative aspect-video bg-gradient-to-br from-brand-primary to-info rounded-2xl overflow-hidden shadow-2xl opacity-0-animate animate-scale-in animate-delay-200 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="mr-2 h-8 w-8" />
                  Play Video
                </Button>
              </div>
            </div>
            <div className="mt-8 text-left max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p className="text-lg">
                Yousif Mangi is a seasoned professional in personal development and organizational transformation. With
                a decade-long background in Learning and Development, he has conducted 80+ workshops across various
                sectors, impacting 10,000+ individuals. As a certified Trainer of NLP, Hypnotherapy, and Success Coach,
                he empowers individuals and organizations to reach their full potential.
              </p>
              <p className="text-lg">
                His approach is rooted in the belief that internal transformation leads to external success. With a
                global reach, he coaches clients from 15 countries and continues to inspire deep transformation
                worldwide.
              </p>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <h3 className="text-base font-semibold text-foreground mb-4">Areas of Expertise</h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Emotional intelligence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Negotiation skills
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Stress management
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Work-life balance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Team building, collaboration and leadership
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Sales and customer relationships
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    First-time managers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Conflict management
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Personality, behavior & managing state
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Quick Overview Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0-animate animate-fade-in-up">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0-animate animate-fade-in-up animate-delay-100">
              Comprehensive programs designed to unlock human potential and drive organizational success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg opacity-0-animate animate-fade-in-up animate-delay-100 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-secondary/20 transition-colors transform group-hover:scale-110 duration-300">
                  <Users className="h-8 w-8 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">One-on-One Coaching</h3>
                <p className="text-muted-foreground mb-6">
                  Personalized NLP & Hypnosis sessions focused on deep, lasting change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    60-90 minute sessions
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    In-person or online
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    4-12 sessions, $50 per session
                  </li>
                </ul>
                <Link href="/services#one-on-one">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-brand-secondary hover:text-brand-secondary/80 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg opacity-0-animate animate-fade-in-up animate-delay-200 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors transform group-hover:scale-110 duration-300">
                  <Award className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Corporate Training & Organizational Development</h3>
                <p className="text-muted-foreground mb-6">
                  NLP, leadership, coaching, and workplace excellence programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Half-day to multi-day formats
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Onsite, online, or hybrid delivery
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Fully customized to your needs
                  </li>
                </ul>
                <Link href="/services#corporate">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-brand-primary hover:text-brand-primary/80 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg opacity-0-animate animate-fade-in-up animate-delay-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-info/20 transition-colors transform group-hover:scale-110 duration-300">
                  <TrendingUp className="h-8 w-8 text-info" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Train the Trainer Certification</h3>
                <p className="text-muted-foreground mb-6">
                  Become a certified NLP, Hypnosis, and corporate trainer.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    03 month, in-person program
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Three professional certifications
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    USD 5,000 investment
                  </li>
                </ul>
                <Link href="/services#train-trainer">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-info hover:text-info/80 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg md:col-span-2 lg:col-span-1 opacity-0-animate animate-fade-in-up animate-delay-500 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors transform group-hover:scale-110 duration-300">
                  <Award className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">NLP & Hypnotherapy Practitioner</h3>
                <p className="text-muted-foreground mb-6">
                  Practitioner & Master Practitioner certification pathway.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    4-month, live practice-based training
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Triple certification (ABH, PBH, KDP)
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    PKR 350,000 (special 300,000)
                  </li>
                </ul>
                <Link href="/services#practitioner">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-success hover:text-success/80 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Client Logos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-muted-foreground">Companies worldwide trust us to transform their teams</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-muted h-16 rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors duration-300 transform hover:scale-105"
              >
                <span className="text-muted-foreground font-semibold">Company {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real transformations from real people</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0-animate animate-fade-in-up animate-delay-100">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">
                  "The NLP training transformed our leadership team's communication and boosted our productivity by 40%.
                  The results were immediate and lasting."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-secondary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Davidson</h4>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0-animate animate-fade-in-up animate-delay-200">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">
                  "The hypnosis sessions helped me overcome anxiety that had held me back for years. I now feel
                  confident and in control of my life."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-primary font-bold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Mitchell</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0-animate animate-fade-in-up animate-delay-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">
                  "The DEI training created a more inclusive culture and improved employee satisfaction by 60%. Our team
                  is stronger than ever."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-accent font-bold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Johnson</h4>
                    <p className="text-sm text-muted-foreground">HR Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                View All Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="opacity-0-animate animate-fade-in-up animate-delay-100">
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div className="opacity-0-animate animate-fade-in-up animate-delay-200">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Companies Trained</div>
            </div>
            <div className="opacity-0-animate animate-fade-in-up animate-delay-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-teal-100">Success Rate</div>
            </div>
            <div className="opacity-0-animate animate-fade-in-up animate-delay-400">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands who have already experienced the power of NLP and Hypnosis. Start your transformation journey
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-secondary-foreground font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Book Your Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-800 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
