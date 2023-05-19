# MFE
Micro frontends app

# Microfrontend PoC (Webpack)

This repository explores how to implement microfrontends using [Webpack](https://webpack.js.org/concepts/)
and [webpack-plugin-federation](https://webpack.js.org/concepts/module-federation/).

![microfrontends.gif](microfrontends.gif)

## Requirements

- Multiple "apps" can be developed independently and then deployed into a platform web application.
- The platform consists of:
    - A static header
    - A navigation bar allowing the user to switch between the different apps
    - A main area showing the currently active app
- Each individual app can also be run as a standalone web application.

## Example scenario

This repository implements two apps called "GrassN"(first-app) and "TankMix"(second-app). Both are stubs showing only a welcome message and an
input field to demonstrate internal state. The language of the welcome message can be parameterized from the outside. 
There is a simple Authorization layer as well.

The apps each expose a React component and the platform is a React application rendering these components.

## How to use the examples

### Prerequisites

Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

Run `yarn && yarn start` in these folders:

- `first-app` => GrassN app will be started in isolation in the browser [http://localhost:3001/](http://localhost:3001/])
- `second-app` => TankMix app will be started in isolation in the browser [http://localhost:3002/](http://localhost:3002/)
- `container-app` => Container app will be started with both apps running in the browser [http://localhost:3000/](http://localhost:3000/)

The active app can be switched using the buttons on the left or these deep links:

- [http://localhost:3000/grassn](http://localhost:3000/grassn)
- [http://localhost:3000/tankmix](http://localhost:3000/tankmix)

The language can be switched using the buttons on the upper right.
Switching between apps causes a remount so that internal state is lost, for that reason we persist the state in the localStorage, this might be not appropriate depending on the data 
we want to save.

#### Running the apps altogether

- [http://localhost:3000](http://localhost:3000)


#### Running each app in isolation

- [http://localhost:3001/](http://localhost:3001/) (GrassN)
- [http://localhost:3002/](http://localhost:3002/) (TankMix)

## Evaluation

Easy to start if you are familiar with webpack and it's configurations.

When started in development mode, hot reload for the container app works immediately when some change is made, 
but needs refresh of the page when change is made to some of the remote apps.

No problems with React hooks used in the remote apps so far.

