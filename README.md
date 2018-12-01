# Kata API Challenge

Practice the basics of [Express](https://expressjs.com/) by configuring an Express server to provide HTTP endpoints to sit in front of your [JavaScript Basics](https://github.com/MCRcodes/javascript-basics) katas.

We have provided an [end-to-end](https://medium.freecodecamp.org/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504) test suite written using [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com/), a popular alternative to Jest.

We have also provided the most basic Express configuration possible in `src/app.js`

You challenge is to configure this Express server and integrate your *JavaScript Basics* code to make the tests pass.

### Install
- Fork this repository
- `git clone git@github.com:<your-github-username>/kata-api.git`
- `npm install`

### Move over your JavaScript Basics code
Copy the `src` code from your JavaScript Basics repository into a `lib` directory in this repositories `src` directory. You should end up with the following file structure in this project:
```
src
├── app.js
└── lib
    ├── arrays.js
    ├── booleans.js
    ├── numbers.js
    ├── objects.js
    └── strings.js
```

### Running the API
- `npm start` uses [Nodemon](https://github.com/remy/nodemon#nodemon) to run the development server with file-watch enabled.

### Running the Tests
- `npm test` uses [Mocha](https://mochajs.org) to run e2e tests defined in `tests` directory
