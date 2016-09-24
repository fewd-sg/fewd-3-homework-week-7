# FEWD Week 7: Working with Arrays

## Description

The team from CitiPix has reached out for iteration on their prototype.  Instead of using a user's text input to change the background of the interface, the CitiPix user experience designers have asked to see how a drop-down menu would work in place of an input field.  The product managers are hopeful it will also lead to less error handling for their engineers and data team.  Use what you've learned this week about data-types and arrays and use the starter code - or your code from last week - and make the adjustments to your JavaScript file. Be sure to start out with Pseudocode.

## Real-World Applications

- Use data stored in an array to manipulate the DOM
- Write pseudocode before writing any JavaScript, in order to demonstrate an understanding of interactive programming theory
- Revisit applications and code you've written in the past to find solutions to problems you've already solved and iterate on a project

## Technical Requirements

- Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the `<select>` menu by using `forEach` in JavaScript or `each` in jQuery (don't update the HTML to do this!)
- When the user changes the input of the drop-down, update the background image based on what they selected
- Use `$.append()` in to add items to the drop-down menu
- Use the `$.attr()` function or `$.addClass()/$.removeClass()` to update html classes
- Get the value of user input using `$.val()`
- Use the `$.change` event handler to capture user actions
- Use `if/else` conditionals to control the flow of your application
- Write pseudocode in the form of Javascript comments

## Bonus

- [Read](http://bavotasan.com/2011/style-select-box-using-only-css/) [up](https://css-tricks.com/dropdown-default-styling/) on your own and incorporate some more styles on the drop down menu
- While the dropdown menu should update the page in the same way it did after your work last week, take a look at what your final product should look like with a dropdown menu:

## Resources

- jQuery `each`: [http://api.jquery.com/jquery.each/](http://api.jquery.com/jquery.each/)
- jQuery `append`: [http://api.jquery.com/append/](http://api.jquery.com/append/)
- jQuery `change`: [https://api.jquery.com/change/](https://api.jquery.com/change/)
- HTML `<select>` tag: [https://developer.mozilla.org/en/docs/Web/HTML/Element/select](https://developer.mozilla.org/en/docs/Web/HTML/Element/select)
- HTML `<option>` tag: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)

![Deliverable](citipix_solution_week6.png)
