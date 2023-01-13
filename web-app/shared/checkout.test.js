import {expect, test} from '@jest/globals';
import checkout from './checkout.ts';

const singleAd = ['classic'];
const wrongAds = ['classic', 'classic', 'wrongAd', 'standout'];

describe('test checkout', () => {
  describe.skip('when passing wrong parameters', () => {
    test('it should throw missing pricing rules error', () => {
      expect(() => {
        checkout(singleAd, [{}]);
      }).toThrow('Missing pricing rules');
    });

    test('it should throw invalid pricing rule error', () => {
      expect(() => {
        checkout(singleAd, [{}, {}, {}]);
      }).toThrow('Invalid pricing rule');
    });

    test('it should throw Incorrect ad type error', () => {
      expect(() => {
        checkout(wrongAds, [{}, {}, {}]);
      }).toThrow('Incorrect ad type.');
    });
  })

  describe('when passing ads with pricing rules', () => {
    test('it should return correct total', () => {

      const result = checkout(['classic', 'classic', 'standout'], [{
        adType: 'classic',
        groupedAdsPricing: {
          numberOfUnits: 2,
          price: 15
        },
        singleAdsPricing: {
          price: 10
        }
      }]);
      expect(result).toBe(15)
    });
  })
})