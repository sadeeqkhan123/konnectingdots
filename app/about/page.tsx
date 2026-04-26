import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Heart,
  Users,
  Award,
  Tv,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800">About Konnecting Dots</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Minds.
              <span className="text-teal-600"> Transforming Lives.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              For over 15 years, we've been at the forefront of personal and organizational transformation through the
              power of NLP, Hypnosis, and innovative training methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where every individual and organization can unlock their full potential, break
                  through limitations, and achieve extraordinary results through the transformative power of NLP and
                  conscious communication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class NLP, Hypnosis, and DEI training that empowers individuals to overcome limiting
                  beliefs, enhance their communication skills, and create positive change in their personal and
                  professional lives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integrity & Authenticity
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellence & Innovation
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inclusivity & Respect
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Continuous Growth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Yousif Mangi Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Yousif Mangi</h2>
              <p className="text-xl text-gray-600">Founder & Chief Learning Officer</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-16 w-16" />
                    </div>
                    <h3 className="text-2xl font-bold">Yousif Mangi</h3>
                    <p className="text-teal-100">Founder & Chief Learning Officer</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Transformational Leader</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Yousif Mangi, Founder and Chief Learning Officer at Konnecting Dots, is a seasoned professional in
                    personal development and organizational transformation. With a decade-long background in Learning
                    and Development, he has conducted 80+ workshops across diverse sectors, impacting 10,000+ individuals.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As a certified Trainer of NLP, Hypnotherapy, and Success Coach, he empowers individuals and
                    organizations to reach their full potential. His approach is rooted in the belief that internal
                    transformation leads to external success, and he continues to coach clients across 15 countries.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-yellow-600" />
                      Areas of Expertise
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
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
                        Team building, collaboration, and leadership
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
                        Personality, behavior, and managing state
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Tv className="mr-2 h-5 w-5 text-blue-600" />
                      Professional Highlights
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Decade-long experience in Learning and Development
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        80+ workshops across diverse sectors
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        10,000+ individuals impacted
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Certified Trainer of NLP, Hypnotherapy, and Success Coach
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Coaching clients across 15 countries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoya Yousif Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Zoya Yousif</h2>
              <p className="text-xl text-gray-600">Co-Founder & Program Director</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-16 w-16" />
                    </div>
                    <h3 className="text-2xl font-bold">Zoya Yousif</h3>
                    <p className="text-emerald-100">Co-Founder & Program Director</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Inclusion & Well-being Specialist</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Zoya Yousif is a certified trainer and advocate for inclusion and workplace well-being, bringing
                    over 10 years of experience in training, facilitation, and corporate engagement. As Co-Founder and
                    Program Director at Konnecting Dots, she contributes to the design and delivery of impactful
                    learning and development initiatives.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    She specializes in employee development, disability sensitization, and effective communication, and
                    holds certifications in NLP, NLP Master Practitioner, and Train the Young Trainer. Her approach
                    integrates empathy, communication psychology, and interactive facilitation to build inclusive,
                    aware, and people-centric workplace cultures.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-yellow-600" />
                    Core Expertise
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    {[
                      "Diversity, Equity & Inclusion (DEI) trainings",
                      "Disability sensitization & inclusive workplaces",
                      "Communication & interpersonal skills",
                      "Soft skills development",
                      "Emotional intelligence & workplace well-being",
                      "Women empowerment & leadership development",
                      "Confidence building & personal effectiveness",
                      "Team collaboration & workplace behavior",
                      "Mental health awareness & psychological safety",
                      "Facilitation & experiential learning",
                      "NLP-based coaching & behavioral transformation",
                      "Youth development & capacity building",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zubair Ahmed Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Zubair Ahmed</h2>
              <p className="text-xl text-gray-600">Corporate Consultant & NLP Coach</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-indigo-500 to-sky-600 rounded-2xl flex items-center justify-center mb-8">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-16 w-16" />
                    </div>
                    <h3 className="text-2xl font-bold">Zubair Ahmed</h3>
                    <p className="text-sky-100">Corporate Consultant & NLP Coach</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Corporate Consultant and NLP Coach</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Zubair Ahmed is a dynamic Corporate Consultant and Certified NLP Coach with over 9 years of
                    experience in Learning and Development. He has delivered impactful training and facilitation across
                    corporates, academia, NGOs, and youth platforms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Guided by the principle of "Perception is Projection," he integrates applied linguistics,
                    psychology, and mind sciences to build deep self-awareness, emotional intelligence, and sustainable
                    behavioral change.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-yellow-600" />
                      Core Expertise
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {[
                        "Emotional intelligence & workplace effectiveness",
                        "Communication & interpersonal skills",
                        "Negotiation skills",
                        "Stress management & resilience",
                        "Growth mindset & performance development",
                        "NLP tools for values alignment and transformation",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Tv className="mr-2 h-5 w-5 text-blue-600" />
                      Experience & Impact
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {[
                        "400+ training sessions conducted",
                        "35,000+ individuals empowered",
                        "Extensive work with corporates, NGOs, academia, and youth groups",
                        "Industry experience: textile, pharma, BPO, and development sector",
                        "Highly interactive, reflective, and practical facilitation style",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Collaborators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Meet the people behind your transformation</p>
          </div>

          <div className="grid max-w-5xl mx-auto md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">YM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Yousif Mangi</h3>
                <p className="text-gray-600 mb-4">Founder & Chief Learning Officer</p>
                <p className="text-sm text-gray-500">
                  80+ workshops, 10,000+ individuals impacted, coaching clients across 15 countries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">ZY</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Zoya Yousif</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Program Director</p>
                <p className="text-sm text-gray-500">
                  Inclusion, workplace well-being, and impactful learning program design
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold text-xl">ZA</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Zubair Ahmed</h3>
                <p className="text-gray-600 mb-4">Corporate Consultant & NLP Coach</p>
                <p className="text-sm text-gray-500">
                  400+ sessions conducted, 35,000+ individuals empowered across diverse sectors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliated boards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Affiliated boards</h2>
            <p className="text-xl text-gray-600">Certification and professional standards we align with</p>
          </div>

          <div className="grid max-w-5xl mx-auto md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-32 flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/board-logos/anlp.png"
                    alt="Association for NLP Trainer Member"
                    width={130}
                    height={130}
                    className="h-28 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold mb-2">Association of NLP CIC UK</h3>
                <p className="text-sm text-gray-600">United Kingdom</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-32 flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/board-logos/abh.png"
                    alt="American Board of Hypnotherapy seal"
                    width={130}
                    height={130}
                    className="h-28 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold mb-2">American Board of Hypnotherapy (ABH) USA</h3>
                <p className="text-sm text-gray-600">United States</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-32 flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/board-logos/pbh.png"
                    alt="Professional Board of Hypnosis seal"
                    width={130}
                    height={130}
                    className="h-28 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold mb-2">Professional Board of Hypnosis (PBH) Canada</h3>
                <p className="text-sm text-gray-600">Canada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-teal-100">Companies Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a global community committed to personal growth, professional excellence, and positive
            change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-800 bg-transparent"
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
