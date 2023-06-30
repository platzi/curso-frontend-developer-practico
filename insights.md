### Sometimes, the easiest solution is the best.
### Reusable reusable reusable.
### Fast decitions and solutions often end up with more time spent in the future.
### Local vs global: key concept to keep in mind when creating functions inside functions... etc
### Important items: 
	- Clicking anywhere else but a specific element triggers an action
	- Local and global scope is key in JS since you can nest functions
	- Many events tend to make the system more complex if they start interfering with eachother.

## How to avoid too many listeners:
Using event delegation: Instead of assigning an event listener to each individual element, you can take advantage of the concept of event delegation. This involves assigning a single event listener to the parent container and then using the event information to determine which child element triggered the event. This reduces the number of required event listeners, especially when there are many similar elements on the page.

## Conclussions on creating complex html elements with js.
	- Using innerHTML to create HTML elements with js is not recommended due to security concerns.
	- append() instead of appendChild() to add html elements/nodes inside other elements/nodes is a newer and faster way to create the HTML elements we want to add. There are some cases where appendChild() could be preferable:
		1- Old browsers compatibility
		2- Performance when adding only 1 element/node. DOM native function
		3- Some libraries integrate it instead of append().
		4- Return value: append() returns undefined, while appendChild() returns the child node added.


## Screen size options:
	1- const isDocumentWideEnough = document.documentElement.clientWidth > 640; 	*Sidebar included*
	2- const isDocumentWideEnough = window.innerWidth > 640; 	*Sidebar included*
	3- const isDocumentWideEnough = window.matchMedia("(max-width: 640px)").matches; 	*Sidebar NOT included*
	4- const isDocumentWideEnough = $(window).width();		*WHEN USING JQUERY*

## Elements to remark/show something clicked
	1- <details> + <summary>
	2- modal
	3- <aside>
	4- 

## Update about complexity in the js docs.
	If a solution makes something work but is too complex, it's a bad solution. It will make it really hard to maintain, specially for devs that didnt participate in the project. But even after six months lets say, that complexsity will be a challenge even for those who wrote the code.
	
	Keep it simple, even if it takes more time now vs much much more time after when some change or update is needed.

## Events and childs. bubbling.:
When the overlay is clicked, the click event is propagated from the innermost element to the outermost element.

By adding the event listener to the overlay and checking if the event target (event.target) is the overlay itself, we ensure that the click happened directly on the overlay area and not on any of its internal elements, such as the overlay. modal content. In this case, the "inactive" class is added to the overlay, which causes the modal to close.

If any elements within the overlay are clicked, such as the modal's buttons, the click event will bubble to those elements first and not reach the overlay itself. So the modal will not close in those cases.

This technique is based on event propagation in JavaScript, which allows you to catch events in outermost elements and check the event target to perform specific actions as needed by your code.

## Alternative to the generation of eventListeners for a series of elements created in a loop:
Event delegation, instead of one event listener for each group of html elements, a single event listener for the main container surrounding the created elements. And then we verify if the event.target is the one we want to trigger an action. Something similar to this:
```JavaScript
 body.addEventListener('click', (event) => {
  const overlay = event.target.closest('.overlay');
  if (!overlay) {
    // No se hizo clic en el overlay ni en sus elementos hijos
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach((overlay) => {
      overlay.classList.add('inactive');
    });
  }
});
``` 

## eventListener functions as arguments:
The eventListener has two parameters, one is the event, and the other the performed action.
When you give:
```JavaScript
variable.addEventListener('click', myFunction(randomParameter));
```
This listener will receive the output of myFunction instead of performint it, working weirly, like running myFunction even when the event was not triggered.