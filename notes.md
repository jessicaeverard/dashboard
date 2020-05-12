# How to navigate your own industry

## Initial Planning and Research

1. Columns are simply divisions with a full height and either fixed or variable width.
a) What interactions are there?
b) How is it all affected by different screen sizes?

2. Always choose your devices.
3. Always know the browsers and versions.

4. Which browser vendors are keeping up with the standard?
5. Are users even using the latest browser?
6. Polyfills can bridge the delay between a new standard, and its device-wide implementation.

7. Graceful degradataion - website does not break without explanation, it either copes without, or states it cannot work.
8. Another word is 'fallback' or 'shiv', a fallback is either catered for in your design, or you rely on a polyfill to enable the behaviour you need.

## Implementation

1. Are there any existing patterns for what you are trying to do? A particular solution that has been executed successfully and frequently that the community has adopted it as a status quo.
2. In CSS, respected ways of doing things often end up in a library. Twitter's Bootstrap was infamous for finally standardising a number of layouts and UI components.
3. For a while, there were endless new libraries attempting to be better, smaller, or not rely on javascript.
4. Fallbacks technically work everywhere, whereas the new technology that you are trying, only works in a limited number of places - which begs the question, why try the new tech at all? It seems to only be ADDITIONAL work, ADDITIONAL code - and we do not like unnecessary code! [Law of least code]

## Decision

1. What are the differences?
2. Do you really need it?
3. What are you fighting for? Help the new and better way take off, gain adoption?
4. Is it part fo your mission to push the web forward? Or is it just about most maintainable least effort code?
5. Personal / Professional / Commercial decision making.
6. What does the projec need? How will it change over time? 

## Final research points

1. What's the difference not just in how they work, but the thoughts that help you choose which to use? Are they different developer mindsets? - "1-D vs 2-D layouts" [W3C -> flexbox 1D CSS Grid 2D]
- https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/
2. Can you reach a compromise? Best of both worlds? Combine them?
- https://getflywheel.com/layout/combine-flexbox-and-css-grids-for-layouts-how-to/

## Questions

1. Will CSS Grid every fully replace flexbox? Was it made to do that?
Grid is not a replacement for flexbox as both function differently. Flexbox can do things Grid can't do and vice versa and can also be used in conjunction with eachother.
2. If you have to create a fallback ANYWAY, you may need to still use the more reliable tech as the fallback?

# AJAX

1. Code a full page reload first
2. Hijack links with JS

# Resources

## Polyfill

Detect what the users browser can and cannot do
https://github.com/Modernizr/Modernizr
Pull in appropiate polyfills
https://polyfill.io/v3/

## CSS

Patterns
https://csslayout.io/

## CSS Grid

"Here's what I learned"
https://css-tricks.com/things-ive-learned-css-grid-layout/
"Manual"
https://css-tricks.com/snippets/css/complete-guide-grid/

