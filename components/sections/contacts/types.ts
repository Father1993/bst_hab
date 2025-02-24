export interface ContactOffice {
  city: string
  address: string
  phone: string
  email: string
  workHours: string
  coordinates: [number, number]
  features: string[]
  imageUrl: string
}

export interface SocialLink {
  icon: string
  name: string
  url: string
  color: string
  followers?: string
}

export interface ContactMethod {
  icon: string
  title: string
  description: string
  action: string
  link: string
  responseTime: string
  availableHours: string
  benefits: string[]
}

export interface TeamMember {
  name: string
  position: string
  photo: string
  experience: string
  specialization: string[]
}

export interface Testimonial {
  author: string
  company: string
  text: string
  rating: number
  date: string
  avatar?: string
}

export interface FAQ {
  question: string
  answer: string
  category: string
}
