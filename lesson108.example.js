/*

Forms often include the input field, which can be used to create several different form controls. The type attribute on this element indicates what kind of input element will be created.

You may have noticed the text and submit input types in prior challenges, and HTML5 introduced an option to specify a date field. Depending on browser support, a date picker shows up in the input field when it's in focus, which makes filling in a form easier for all users.

For older browsers, the type will default to text, so it helps to show users the expected date format in the label or placeholder text just in case.

Here's an example:

*/

<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
