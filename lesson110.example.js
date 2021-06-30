/*
Have you noticed that all of the applied accessibility 
challenges so far haven't used any CSS?
This shows the importance of using a logical document
outline and semantically meaningful tags around your content 
before introducing the visual design aspect.

However, CSS's magic can also improve accessibility 
on your page when you want to visually hide content meant 
only for screen readers. This happens when information is in
a visual format (like a chart), but screen reader 
users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.

Here's an example of the CSS rules that accomplish this:
*/
.sr-ony{
  position: absolute;
  left: -100000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
