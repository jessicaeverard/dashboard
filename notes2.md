# CSS Notes

## Markup

1. Empty `<div>` does not take space
2. The `onresize` event is for browser window resize event, not the element's own resize - therefore any element given a function for this event is only listening for window resize. It is not like `onclick` where it is relative to the element the function is assigned to.

## Style

1. If using a `float: left`, you need to have at least one `float: right`
2. CSS2 and even CSS3 was not designed to produce empty layouts. A layout-first approach is catered for by flexbox and CSSGrid.
3. `auto` leaves the browser default - beware this can be different for different browsers.


### CSS Units

1. You need to set some principles and coding standards that you will follow throughout the entire design.

> CSS units must be consistent

```
.pane {
  min-height: 100%;
  height: 100%;
  width: 49%; /* percentage */
  float: left;

  background: black;
  border: 2px solid red; /* Pixels */
}
```
However, you cannot use all units everywhere: ` border: 1% solid red;` is **not allowed** - no % on borders.

> Pixels cannot always perfectly represent percentages if a proportionate number are not availabe on the screen, this can cause little gaps to emerge in awkward breakpoints. The key thing is to test on your *intended* braekpoints, not every one you come across during responsive resizing.

- The modern way to use percentages is `vw` and `vh` where each are equivalent to 100%, therefore `1vw` for instance is 1%.

> If layout arithmetic does not add up, double check that you applied a CSS reset.

- Calc() enables you to use mixed units, and form layouts based on calculations
e.g.
```
  border: 20px solid red;
  width: calc(50vw - 40px); /* 40px is double the border, 1 left 1 right */
  /* The effect is 50% of viewport less the space taken by the borders of this element */  
```

2. You cannot derive values via CSS from paren elements. Your logic has to manage using variables and arithmetic only, with perhaps relative calculations using `calc`. There is no pseudo `::parent` selector in CSS to attain a parent's value for any CSS attribute.

# CSS dimensions

## js `getBoundingClientRect()`

```
<div id="x" style="color: black; background: red; display: inline; margin: 30px; padding: 50px;">
    Check
  </div>
```
Gives
```
bottom: 67.33333587646484
height: 117.33333587646484
left: 30
right: 170.875
top: -50
width: 140.875
x: 30
y: -50
```
Width is calculated from 50px x 2 = 100, +width-of-text('check').

If you need to know the total amount of space an element occupies, including the width of the visible content, scrollbars (if any), padding, and border, you want to use the HTMLElement.offsetWidth and HTMLElement.offsetHeight properties.

Most of the time these are the same as width and height of Element.getBoundingClientRect(), when there aren't any transforms applied to the element. In case of transforms, the offsetWidth and offsetHeight returns the element's layout width and height, while getBoundingClientRect() returns the rendering width and height. As an example, if the element has width: 100px; and transform: scale(0.5); the getBoundingClientRect() will return 50 as the width, while offsetWidth will return 100.

## Research these and add notes

```
* {
  box-sizing: border-box;
}
```

  width
  outerWidth
  getComputedStyle

## Research this and add notes

### grid view

`.col-3`

### media queries
```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
### breakpoints

### mobile first design

1.Twitter bootstrap default style is `xs`.
2. Designs should start from the smallest screen that is served, then build up with the additional screen real estate that the content can use and benefit from. Starting from a big device, and going backwards is very difficult and you find that you cannot work out how to display things, where to hide things etc.


# Steps

1. Vanilla CSS
2. SCSS
3. Library / Flexbox+CSSGrid