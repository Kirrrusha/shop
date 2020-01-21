# Template shop - TeachLead Program

## Environment

 - node >=10.15.0
 - npm >=6.10.0

## Deployment instructions

 - npm ci - install node_modules according to package-lock.json
 - npm test
 - npm run build
 
 
Last command will create `build` folder.

# Development

### Git branching model

Git [flow](https://nvie.com/posts/a-successful-git-branching-model/). You can find latest version on `develop` branch. Latest stable version on `release` branch.
You must be able to clone repository by shh connection. Make sure that you put your public SSH key in your [profile](https://gitlab.dataart.com/profile/keys).

### Web App
 - `cd <root project folder>`
 - `npm ci` - install node_modules according to package-lock.json
 - Running the application. This will build css styles from sass and run development server on [localhost:3000](http://localhost:3000). This will also watch and recompile changes in `scss` and `js` files.

### Testing
 - `cd <root project folder>`
 - `npm install` if not done already
 - `npm test`

### Technologies stack

- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Redux](https://redux.js.org/api/api-reference)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [A proposal for bundling reducers, action types and actions when using Redux](https://github.com/erikras/ducks-modular-redux)
- CSS frameworks and preprocessors
  - [CASS/SCSS preprocessor](https://sass-lang.com/guide)
  - [CSS modules](https://devopedia.org/css-modules)
 - Testing frameworks
    - [JEST](https://jestjs.io)
    - [Enzyme](https://airbnb.io/enzyme/)
