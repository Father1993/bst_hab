export interface ContactOffice {
  city: string
  address: string
  phone: string
  email: string
  workHours: string
  coordinates: [number, number]
}

export interface SocialLink {
  icon: string
  name: string
  url: string
}

export interface ContactMethod {
  icon: string
  title: string
  description: string
  action: string
  link: string
}
