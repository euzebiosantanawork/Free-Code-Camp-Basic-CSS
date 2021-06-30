/*
HTML5's audio element gives semantic meaning 
when it wraps sound or audio stream content in your markup.
Audio content also needs a text alternative to be accessible
to people who are deaf or hard of hearing. 
This can be done with nearby text on the page or a link to a transcript.

The audio tag supports the controls attribute.
This shows the browser default play, pause, and other
controls, and supports keyboard functionality. 
This is a boolean attribute, meaning it doesn't need a value,
its presence on the tag turns the setting on.
*/

<audio id="meowClip" controls>
  <source src= "audio?meow.mp3" type = "audio/mped">
  <source src= "audio/meow.ogg" type= "audio/ogg">
 </audio>
