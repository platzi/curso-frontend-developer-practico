## Sometimes, the easiest solution is the best.
## Reusable reusable reusable.
## Fast decitions and solutions often end up with more time spent in the future.
## Local
### Important items: 
	- Clicking anywhere else but a specific element triggers an action
	- Local and global scope is key in JS since you can nest functions
	- Many events tend to make the system more complex if they start interfering with eachother.

## How to avoid too many listeners:
Using event delegation: Instead of assigning an event listener to each individual element, you can take advantage of the concept of event delegation. This involves assigning a single event listener to the parent container and then using the event information to determine which child element triggered the event. This reduces the number of required event listeners, especially when there are many similar elements on the page.