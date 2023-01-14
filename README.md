# Overview

This is a coding test for seek.
This test focused on the frontend of ads checkout. For the concern of the time frame, I only focus on the checkout functionality assuming all auth control, backend and UX were done.
The frontend project is in web-app/.

web-app/src/shared is a shared library for frontend and backend.
The proper method should use either npm package or git submodule.
For the limited time frame, just put it into the shared folder.

The reason I what to share the discount logic in frontend and backend,
1, frontend need quick response while users add/update/delete items, it should not rely on the backend calculation
2, frontend is not trustable, so the backend should only use the item info from the frontend, getting the pricing rules from DB and re-calculate to velidate the total amount
3, the calculation logic should be abstract to a library, which is easy to maintain and test


## Install

git
npm

## Usage

```
cd web-app
npm ci // install all packages required for the project
npm start // start the api, localhost:3000/images/
```


## Test

1, Unit Test
```
npm test // run all unit tests
```

## License

MIT © Anthony Liu
