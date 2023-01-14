import { render, screen } from '@testing-library/react';
import AdsCart from './ads-cart.tsx';
import { checkout } from '../shared/checkout.ts';

test('render correct table with data and pricing rules', () => {
  const adsList= [
    {name: 'job ad 1', type: 'classic'},
    {name: 'job ad 2', type: 'standout'},
    {name: 'job ad 3', type: 'premium'}
  ]

  const userPricingRules = [
      {
        "adType": "classic",
        "singleAdsPricing": {
          "price": 199
        }
      },
      {
        "adType": "standout",
        "singleAdsPricing": {
          "price": 299
        }
      },
      {
        "adType": "premium",
        "singleAdsPricing": {
          "price": 399
        }
      }
    ]

  render(<AdsCart adsList={adsList} pricingRules={userPricingRules} checkout={checkout}></AdsCart>);

  expect(screen.getByText(adsList[0].name)).toBeInTheDocument();
  expect(screen.getByText(adsList[2].name)).toBeInTheDocument();
  expect(screen.getByTestId('ads-cart-total')).toHaveTextContent('$8.97');
});