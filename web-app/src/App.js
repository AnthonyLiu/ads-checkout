import './App.css';
import AdsCart from './components/ads-cart.tsx';
import { checkout } from './shared/checkout.ts';

/**
 * this function should getting from backend, based on the user information in context
 * For the limited time frame, here is only a mock function doing a query
 */
function getPricingRules(userName) {
  if (userName === 'MYER') {
    return [
      {
        "adType": "classic",
        "singleAdsPricing": {
          "price": 26999
        }
      },
      {
        "adType": "standout",
        "groupedAdsPricing": {
          "numberOfUnits": 5,
          "price": 129196
        },
        "singleAdsPricing": {
          "price": 32299
        }
      },
      {
        "adType": "premium",
        "singleAdsPricing": {
          "price": 38999
        }
      }
    ];
  }
}

function App() {

  const userPricingRules = getPricingRules('MYER');

  const adsList= [
    {name: 'job ad 1', type: 'classic'},
    {name: 'job ad 2', type: 'standout'},
    {name: 'job ad 3', type: 'standout'},
    {name: 'job ad 4', type: 'standout'},
    {name: 'job ad 5', type: 'standout'},
    {name: 'job ad 6', type: 'premium'},
    {name: 'job ad 7', type: 'classic'}
  ]

  return (
    <div className="App">
      <div>Ads checkout</div>
      <div className='checkout-container'>
        <AdsCart adsList={adsList} pricingRules={userPricingRules} checkout={checkout}></AdsCart>
      </div>
    </div>
  );
}

export default App;
