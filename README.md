# Tailwind Base



#Example Grid with Friendly Class Names
```css
  .row {
    gap:2rem;
  }
}

.column,
    .columns {
  grid-column:1 / -1;
}

/* Column Sizes for Small Screens */

.small-1 {
  grid-column:span 1 / span 1;
}

.small-2 {
  grid-column:span 2 / span 2;
}
```
