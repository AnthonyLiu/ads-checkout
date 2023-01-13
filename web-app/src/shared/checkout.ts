import { AdType, PricingRules } from './types';

export const checkout = (items: AdType[], pricingRules: PricingRules[]) => {
  let total = 0;
  if (pricingRules.length < 3) {
    throw new Error('Missing pricing rules');
  }

  const adsCount: { [key in AdType]: number } = {
    'classic': 0,
    'standout': 0,
    'premium': 0
  }

  // get the total quantity for each ad type
  items.forEach(i => {
    if (i === 'classic') {
      adsCount.classic++;
    } else if (i === 'standout') {
      adsCount.standout++;
    } else if (i === 'premium') {
      adsCount.premium++;
    } else {
      throw new Error('Incorrect ad type.');
    }
  })

  pricingRules.forEach(p => {
    let groupAdsTotal = 0;
    let singleAdsTotal = 0;
    const adType = p.adType;

    if (!p.singleAdsPricing) {
      throw new Error('Invalid pricing rule');
    }

    // calculate based on the pricing rule
    if (p.groupedAdsPricing) {
      groupAdsTotal = Math.floor(adsCount[adType] / p.groupedAdsPricing.numberOfUnits) * p.groupedAdsPricing.price;
      singleAdsTotal = (adsCount[adType] % p.groupedAdsPricing.numberOfUnits) * p.singleAdsPricing.price;
    } else {
      singleAdsTotal = adsCount[adType] * p.singleAdsPricing.price;
    }

    total += groupAdsTotal + singleAdsTotal;
  })


  return total;
}
