import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { allTestimonials, type TestimonialTheme } from "@/lib/testimonials"

const THEME_STYLES: Record<
  TestimonialTheme,
  { label: string; avatarBg: string; avatarText: string }
> = {
  secondary: {
    label: "text-brand-secondary",
    avatarBg: "bg-brand-secondary/10",
    avatarText: "text-brand-secondary",
  },
  primary: {
    label: "text-brand-primary",
    avatarBg: "bg-brand-primary/10",
    avatarText: "text-brand-primary",
  },
  accent: {
    label: "text-brand-accent",
    avatarBg: "bg-brand-accent/10",
    avatarText: "text-brand-accent",
  },
}

type SiteTestimonialsGridProps = {
  /** Enables staggered fade-in-up animation (home Success Stories). */
  animated?: boolean
}

export function SiteTestimonialsGrid({ animated = false }: SiteTestimonialsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allTestimonials.map((item, index) => {
        const styles = THEME_STYLES[item.theme]
        const delayClass = animated
          ? index % 3 === 0
            ? "animate-delay-100"
            : index % 3 === 1
              ? "animate-delay-200"
              : "animate-delay-300"
          : ""
        const anim = animated ? `opacity-0-animate animate-fade-in-up ${delayClass}` : ""
        return (
          <Card
            key={item.id}
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${anim}`}
          >
            <CardContent className="p-8">
              <p className={`text-sm font-semibold mb-3 ${styles.label}`}>{item.label}</p>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-brand-secondary fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6">"{item.quote}"</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${styles.avatarBg}`}>
                  <span className={`font-bold ${styles.avatarText}`}>{item.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
