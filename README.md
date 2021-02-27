# react-scrollchor (React Scrollchor)

[![npm version](https://img.shields.io/npm/v/@seinopsys-forks/react-scrollchor)](https://www.npmjs.com/package/@seinopsys-forks/react-scrollchor)
[![npm downloads](https://img.shields.io/npm/dm/@seinopsys-forks/react-scrollchor.svg?style=flat-square)](https://www.npmjs.com/package/@seinopsys-forks/react-scrollchor)

> A React component for scroll to `#hash` links with smooth animations.
> Scrollchor is a mix of `Scroll` and `Anchor`, a joke name for a useful component.

See it in action:
* demo [video](https://github.com/SeinopSys/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true)
* example [page](https://seinopsys.github.io/react-scrollchor/) and [source code](https://github.com/SeinopSys/react-scrollchor/tree/example)


`hash` is the `id` of a HTML tag on current page.


## Installation

### npm

```bash
npm install @seinopsys-forks/react-scrollchor --save
```

### Dependencies
* User should provide their own `React` package


## Usage

```js
import Scrollchor from '@seinopsys-forks/react-scrollchor';

export default (props) => (
  <Page>

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
      <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
    </Navbar>


  <Section id="sample-code">

  </Section>

  <div id="features">

  </div>

  <footer id="footer">

  </footer>

</Page>
```

## Props
The component is written in TypeScript and the npm package contains type definitions which will help you with IDE autocompletion.

## Custom animations

Animation behavior can be customized:

```js
<Scrollchor to="#aboutus" animate={{offset: 20, duration: 600}} className="nav-link">Home</Scrollchor>
```

### default animation settings
```js
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

### more `Easing` functions

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)


## `before` and `after` Animate callbacks
Use these callbacks to trigger behaviors like: update state, load async stuff, etc.
```js
<Scrollchor to="#aboutus" afterAnimate={() => updateState(this)}>Home</Scrollchor>
```

## Simulate click API
Scrollchor includes a dedicate API to do animate scroll programmatically that works like normal click events using `simulateClick()`.

Example: [using simulateClick](https://github.com/SeinopSys/react-scrollchor/blob/example/src/App.js#L16)

When used programmatically, some use-cases don't need `anchor tags`. On these cases use childless `Scrollchor`.

### Childless  `Scrollchor`
This component will render `null` and the user is reponsible for storing the component [reference](https://facebook.github.io/react/docs/refs-and-the-dom.html), Ex: [childless](https://github.com/SeinopSys/react-scrollchor/blob/example/src/App.js#L23)
```js
<Scrollchor ref={ref => (this._back = ref)} to="_back" />
```
Example: [calling `simulateClick()` on childless `ref`](https://github.com/SeinopSys/react-scrollchor/blob/example/src/App.js#L16)
```js
_afterAnimate = () => {
  this.setState({ to: this._iterator.next().value });
    setTimeout(() => this._back.simulateClick(), 1000);
};
```

## Scrollable ancestor container
Scrollchor works within any scrollable parent container. The root element of the `document` will be choose if none is specified.

Hosted example show how to use a different container using prop `target`.
* Click `Within scrollable container` checkbox: [hosted example](https://seinopsys.github.io/react-scrollchor/)(full example below)


## Full Example

[react-scrollchor--example](https://github.com/SeinopSys/react-scrollchor/tree/example)

## Credits

### author
* bySabi Files <> [@bySabi](https://github.com/bySabi)

### maintainers
* xehpuk <> [@xehpuk](https://github.com/xehpuk)
* SeinopSys <david@seinopsys.dev> [@SeinopSys](https://seinopsys.dev)

### contributors
* Jean Chung <> [@jeanchung](https://github.com/jeanchung)
* Chua Kang Ming <> [@kambing86](https://github.com/kambing86)
* Benjamin MICHEL <> [@SBRK](https://github.com/SBRK)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
