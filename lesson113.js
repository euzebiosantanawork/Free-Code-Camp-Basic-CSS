/*
The HTML tabindex atribute has three distinct functions relating to an elements`s keyboard focus. When
its on a tag, it indicates that the element can be focused on. The value (an integer that`s
positive, negative, or zero) determines the behavior.

Certain elements, such as links and form control, automatically receives keyborad focus when a user tabs 
thorugh a page. It's in the same order as the elements come in the HTML source markeup. This same functionality 
can be given to other elements, such as div, span and, p by placing a tabindex = "0" atribute on them.

*/

//here`an example:

<div tabindex="0"> I need keyboard focus!</div>
