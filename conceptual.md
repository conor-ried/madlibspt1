### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React allows a user to reuse code, the changes are handled dynamically instead of full page reloads and allows for build around one html.

- What is Babel?
--It allows for users to write code and look at what it would like in older versions that dont support the newest version of code. 

- What is JSX?
JSX is what allows user to write html code in react without using traditional html syntax. 
- How is a Component created in React?
a component is created by creating a js file and then extending that file back to the app so it can be used. 
- What are some difference between state and props?
-Props are non modifiable and passed from another js file so it has to be used the way it was define in the parent file. State refers to the state of an application so what is stored in memory. 
- What does "downward data flow" refer to in React?
-downward data flow refers to the fact that react reads line by line for execution.
- What is a controlled component?
-where the value passed in is defined 
- What is an uncontrolled component?
-where the value passed into a function is undefined
- What is the purpose of the `key` prop when rendering a list of components?
-key prop allows for their to be a unique identifier 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
-- array index is a bad choice because if you modify the array it sometimes leads to unexpected results where the keys get defined incorrectly , really if youre making any modifcations it can cause issues , also duplicates can occur as well

- Describe useEffect.  What use cases is it used for in React components?
-useEffect is used to modify the styling of the html page
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
like usestate and useeffect, UseRef is a hook that is used to acces and sotre values , changing the value of a ref does not trigger a re-render
- When would you use a ref? When wouldn't you use one?
-refs are not used as much but theyre used to manipulate a DOM element directly store values that persist across renders or 
- What is a custom hook in React? When would you want to write one?
- custom hooks are a good way of creating reusable code that allows functions to be used by different parts sort of like the helper functions. 