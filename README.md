# Overview
![ads-checkout](https://user-images.githubusercontent.com/830979/212459828-60b577f2-e7cd-422e-a152-85447b903c2f.jpg)

This is a coding test for seek.\
This test focused on the frontend of ads checkout. For the concern of the time frame, I only focus on the checkout functionality assuming all auth control, backend and UX were done.\
The frontend project is in web-app/.\

web-app/src/shared is a shared library for frontend and backend.\
The proper method should use either npm package or git submodule.\
For the limited time frame, just put it into the shared folder.\
The reason I what to share the discount logic in frontend and backend,\
1, frontend need quick response while users add/update/delete items, it should not rely on the backend calculation\
2, frontend is not trustable, so the backend should only use the item info from the frontend, getting the pricing rules from DB and re-calculate to velidate the total amount\
3, the calculation logic should be abstract to a library, which is easy to maintain and test\

As mentioned above, the pricing rules should dynamically generated from backend. It should rely on the context of the logged in user.\
I used MYER pricing rules as the default, which mocking as the MYER user is logging in.\
The default cart contains 7 items, 1 premium, 2 classic and 4 standout ads.\

here is the required pricing rules of MYER:
```
MYER
- Gets a ​5 for 4​ deal on ​Stand out Ads
- Gets a discount on ​Premium Ads​ where the price drops to ​$389.99​ per ad
```
While the user goes to the cart, it shows $2221.93, with only discount on 'premium' ads. Once the user changed one 'classic' to 'standout', the price would drop to $1951.94. Because it triggered the `​5 for 4​ deal on ​Stand out Ads`.\

The rules would be stored in DB for users like this,
```
User - AdType   - NumberOfUnits - Price
MYER - standout - 5             - 129196   // This is for a group deal, eg. how many for 3 standout ads.
MYER - standout - 1             - 32299    // This is the price for a single ad, with or without discount
...
```
The rules are easy to update with new negociation per the requirement.\
Currenty, one adType for one user only support one group deal, but the logic is easy to be extended with multiple level gourp discount rules.


## Install

git
npm

## Usage

```
cd web-app
npm ci // install all packages required for the project
npm start
```


## Test

1, Unit Test
```
npm test // run all unit tests
```

## License

MIT © Anthony Liu
