# Part 1

1. Implement 2 columns vertically max height, and resizable horizontally.
2. Ensure the code works when placing this in any container.
 - Is there any point in accommodating smaller containers than the viewport? It may or may not pass responsiveness requirements...let's wait and see.
3. Produce the same effect for 2 horizontal panes.
4. Modify (1) for 3 panes.
  - if your only option is to set a boundary and not allow infinite nesting, in your css only solution, then generate your CSS via SCSS logic. Do not manually type styles out at each nesting level of markup for example.
  - nesting has shown that the children elements require dynamic minimum widths, otherwise, the minimum width can fall below the threshold of being 20% of the root element, which is our minimum pane width. NOW the markup solution must move away from nesting and try only one parent container and thereafter only siblings.
  - Tried siblings but still found that in order to accommodate a large number of panes, we must abandon min and max widths of panes, because there are multiple conflicting combinations i.e. the max-width of one crosses over the boundary set by the min-width of another. The size of each pane has to be limitless i.e. anything goes. This will prevent a oversizing problem where things are knocked onto the next row. If the panes are of fixed width and a limited number, SCSS could generate a nice set of rules. Otherwise, we need a flexible layout where the container movements are independent of the content i.e. the content of a pane should not dictate its size and force it to any particular size. Although a fit to content behaviour makes sense as a default.
  - **Time to try adding additional containers for the text inside the panes, so that they also have a min-width of their own and text does not continue to fall to the next line**
5. Determine the logic of how the other 2 panes should resize: equally? proportionately? Once one is dragged to zero, should it have a knockon effect where the drag motion continues and carries on dragging the pane next to it?




# Part 2

1. Make it possible to nest infinitely, and physically minimise (hide) the panes that are not needed in view (e.g. because their content is safe to hide in the user experience).
2. Add a rule where only 6 panes are visible at any one time. Others are automatcally minimised based on some relationship to the position of the most recently expanded pane.
3. Make your design fully responsive by adding style/logic to accommodate tablets and mobile screens. You may even want to make your columns behave like row sections. [media queries and breakpoints]