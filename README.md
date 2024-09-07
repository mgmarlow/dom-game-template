# DOM game template

Sometimes you don't need a canvas.

This template is a [snabbdom](https://github.com/snabbdom/snabbdom) +
[Redux](https://redux-toolkit.js.org/) template for building games with
TypeScript, inspired by
[Lichess](https://github.com/lichess-org/lila/tree/master). Although
Lichess doesn't use Redux in its implementation, I found it a good
compliment for the types of games that can get by with just the
plain old browser DOM (which in my case are typically turn-based
puzzle games not unlike Chess).

## Get started

Click "Use this template" in the upper-right corner of the repository page.

1. Install dependencies:

```
yarn install
```

2. Run the development server:

```
yarn dev
```

You can also use `yarn lint` and `yarn typecheck` to check your source
files with Prettier and TypeScript, respectively.

## Publishing

When it comes time to publish your game, run `yarn build` and upload the
contents of the `dist/` folder to your static file host of choice.
