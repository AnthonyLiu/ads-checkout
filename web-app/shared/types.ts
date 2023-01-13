export type AdType = 'classic' | 'standout' | 'premium';

export interface PricingRules {
  adType: AdType,
  groupedAdsPricing?: {
    numberOfUnits: number,
    price: number
  },
  singleAdsPricing: {
    price: number
  }
}

export type UnitsPrice = {
  [key: number]: number
}