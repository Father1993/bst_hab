export interface Product {
  id: string
  name: string
  slug: string
  description: string
  features: string[]
  specifications: {
    capacity: string
    dimensions: {
      length: number
      width: number
      height: number
      units: string
    }
    area: {
      value: number
      units: string
    }
    temperature: {
      min: number
      max: number
      units: string
    }
  }
  includes: string[]
  images: {
    main: string
    gallery: string[]
    blueprint: string
  }
  pricing: {
    rent: {
      monthly: number
      currency: string
      period: string
    }
    sale: {
      price: number
      currency: string
    }
  }
  availability: {
    forRent: boolean
    forSale: boolean
    inStock: boolean
  }
  isPopular: boolean
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface Category {
  id: string
  name: string
  description: string
  slug: string
  items: Product[]
}

export interface CatalogFilters {
  purposes: string[]
  features: string[]
  capacity: string[]
}

export interface SortOption {
  id: string
  name: string
}

export interface CatalogMetadata {
  lastUpdated: string
  version: string
  contacts: {
    phone: string
    whatsapp: string
    email: string
  }
}

export interface CatalogData {
  categories: Category[]
  filters: CatalogFilters
  sorting: SortOption[]
  metadata: CatalogMetadata
}

export interface FilterState {
  purposes: string[]
  features: string[]
  capacity: string[]
}

export interface Filters {
  purposes: string[]
  features: string[]
  capacity: string[]
}
