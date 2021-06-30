/*
The fieldset element is expected to establish a new block formatting context.
If the fieldset element has a child that matches the conditions
in the list below, then the first such child is the fieldset element's
rendered legend:
*/

<form id="app-login"
action="rpocess.hp">
  <fieldset>
  <legend> Login Getails</legend>
<div>
  <label for ="user-name">Username:
  </label>
<input name="user-name"
type="email"
placeholger+"Your username is your email adress" required autofocus>
  </div>
  </div>
<label for="Password">Password:
</label>
<input name="password"
type="password" placeholder="6 digits, a combination of numbers and letteres" required>
 </div>
<div>
  <input name="login" type="submit" value="Login">
   </div>
</fieldset>
    <form>
