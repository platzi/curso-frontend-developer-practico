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