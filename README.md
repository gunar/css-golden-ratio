# css-golden-ratio

Font size, line height, and line width the golden ratio way.

- Made for CSS-in-JS tools
- Works with any unit (e.g. `px`, `em`, `rem`, `%`)
- Inspired by [Kareem Elansary](https://medium.com/@zkareemz/golden-ratio-62b3b6d4282a)

Usage:

```js
const { lineWidth, lineHeight } = require('css-golden-ratio');

const styles = {
  p {
    font-size: `${14}px`;
    max-width: `${lineWidth(14)}px`;
    line-height: `${lineHeight(14)}px`;
  }
}
```
