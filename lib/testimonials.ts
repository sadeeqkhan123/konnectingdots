export type TestimonialTheme = "secondary" | "primary" | "accent"

export interface Testimonial {
  id: string
  label: string
  name: string
  role: string
  initials: string
  quote: string
  theme: TestimonialTheme
}

export const allTestimonials: Testimonial[] = [
  {
    id: "ghina-asad",
    label: "Practitioner Program",
    name: "Ghina Asad",
    role: "Psychologist",
    initials: "GA",
    theme: "secondary",
    quote:
      "Yousif is an incredible human being and an exceptional NLP coach. I had the privilege of completing my NLP certification under his guidance, and his teaching made complex concepts easy to understand and apply. He is always available and offers valuable insights that help navigate challenges effectively. His support has played a key role in my personal and professional growth. I highly recommend Yousif to anyone seeking a trusted and impactful coach.",
  },
  {
    id: "sarfraz-ali-shah",
    label: "Webinars",
    name: "Sarfraz Ali Shah",
    role: "Podcast Host - Educationalist",
    initials: "SA",
    theme: "primary",
    quote:
      "The sessions were truly transformative, and I thoroughly enjoyed learning about the concepts and techniques shared during the program. I also want to comment about the trainer, Mr. Yousif Mangi. I felt more comfortable with him as his way of defining everything was very impressive. Thanks for the opportunity, Yousif.",
  },
  {
    id: "aqsa-kamran",
    label: "Master Practitioner",
    name: "Aqsa Kamran",
    role: "Teacher & Life Coach",
    initials: "AK",
    theme: "accent",
    quote:
      "Highly recommended, very approachable trainer (Yousif Mangi), interactive sessions. I have completed my Master Practitioner of NLP and Hypnosis program. The journey up till now is very smooth, empowering and transforming. I recommend this program to everyone who is looking forward to grow in personal and professional life.",
  },
  {
    id: "urania-nelom",
    label: "Master Practitioner Training",
    name: "Urania Nelom",
    role: "Life Coach - Netherlands",
    initials: "UN",
    theme: "secondary",
    quote:
      "I have studied my Master Practitioner of NLP and Hypnosis training with Yousif, and it was truly an incredible experience. Yousif is knowledgeable, clear in his teaching, and brings NLP to life through his presence and practical approach. I felt supported and empowered throughout the journey, and I am so grateful for the solid foundation he helped me build. Excited to continue and become a Master Practitioner soon. Thank you, Yousif!",
  },
  {
    id: "rehman-khosani",
    label: "NLP Programs",
    name: "Rehman Khosani",
    role: "Trainer & L&D Professional - Pakistan",
    initials: "RK",
    theme: "primary",
    quote:
      "I have attended two programs from Yousif Mangi via Konnecting Dots and my experience was amazing. The way he teaches the concepts is very easy and applicable. He is very kind, helpful and cooperative. Always available to help you in any instance and I recommend everyone to learn from experts like him.",
  },
  {
    id: "roomana-shazad",
    label: "Master Practitioner",
    name: "Roomana Shazad",
    role: "Teacher - Canada",
    initials: "RS",
    theme: "accent",
    quote:
      "Absolutely amazing experience. Yousif is a very calm and patient teacher, and has all the time in the world for his students to ensure that they understand each concept fully. I am certainly walking away with better self-awareness and a skill set that I can use to communicate effectively in future as well as help others develop those very important skills for a successful life. Thanks Yousif for all the help and support!",
  },
]

export const homeTestimonials = allTestimonials.slice(0, 3)

export const practitionerProgramTestimonials = allTestimonials.filter((t) =>
  ["ghina-asad", "urania-nelom", "roomana-shazad"].includes(t.id),
)

export const trainTheTrainerTestimonials = allTestimonials.filter((t) =>
  ["sarfraz-ali-shah", "rehman-khosani", "aqsa-kamran"].includes(t.id),
)

export const getTestimonialById = (id: string) => allTestimonials.find((t) => t.id === id)
