# CSS Notes

## Markup

1. Empty `<div>` does not take space
2. 

## Style

1. If using a `float: left`, you need to have at least one `float: right`
2. CSS2 and even CSS3 was not designed to produce empty layouts. A layout-first approach is catered for by flexbox and CSSGrid.



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


# Steps

1. Vanilla CSS
2. SCSS
3. Library / Flexbox+CSSGrid