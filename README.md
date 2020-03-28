# Flow 3 Week 1
Exercises for days 24/03 -> 27/03

## JavaScript/React
These assignments can be found here: ![24-03-2020/react1](24-03-2020/react1)
<br>(App,App2, and App3)

## State med useState og useEffect
These assignments can be found here: 25-03-2020/day2
<br>(All of the exercises are created as different Apps)

## Exercises Lists and Keys
These assignments can be found here: 24-03-2020/react1
<br>(App4.js and App5.js)

## Forms with React
These assignments can be found here: 26-03-2020/day3

## Lifting State
These assignments can be found here: 26-03-2020/lifting-state

## Api Interaction with Fetch
These assignments can be found here: 26-03-2020/react-crud-rest-exercise

## Exam preparation exercise
These assignments can be found here: 26-03-2020/ReactStateandFetch

## Questions and Anwsers
I have gathered all of the questions from the different exercises here below, with the corresponding anwser.

### Forms and Controlled Components
Exercises can be found in App.js and App2.js
**In a Controlled Component React state is made the "Single source of truth", so how:**
<br>**Q: Do we ensure that input controls like text, textarea or select always presents the value found in the components state?**
<br>A: By assigning the value of the input, to the value saved in the state. fx. for the input 'Country', we assign the input's value like so: <input ... value={reservation.country/>

<br>**Q: Do we ensure that a controls state, always matches the value found in an input control?**
<br>A: By making a onChange handler, so that whenever something in the form changes, the state is updated also.

<br>**Q: What is the purpose of doing event.preventDefault() in an event handler?**
<br>A: As we don't want the whole page to refresh, we must prevent the default operation for at submit, which would be to reload the entire page.

<br>**Q: What would be the effect of NOT doing event.preventDefault in a submit handler**
<br>A: In submit handler, the default operation would be to actually go ahead and try to submit the form, ie. causing the page to reload.

<br>**Q: Why don't we want to submit the traditional way, in a single page application?**
<br>A: In a single page application, we would like the page not to reload constantly, fx when going from one 'page' to another. This goes for the submit as well, the traditional way of submitting, would cause the entire page to reload.

<br>**Q: Explain in words what it takes to implement the "Controlled Component" pattern for a form**
<br>A: By holding state and through handlers, such as handleChange or handleSumit we can control the state of the form, and thereby keep a single source of truth (such as in the reservation exercise)

### Lifting State 
**Q: What is meant by the react term “Lifting State Up”?**
<br>A: Moving state up, to a common parent.

<br>**Q: Where do you lift it up to?**
<br>A: State is lifted to the closest common parent, so in the case of App.js holding state for NewTodo.js and TodoList.js 

<br>**Q: Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?**
<br>A: React is built as a hierarchy of parent-child relations, and therefore the recommended dataflow is unidirectioonal between the parent and the child, if data is shared between siblings - lifting state up should be used.

<br>**Q: Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?**
<br>A: We get a single source of truth, even when we are sharing state between a multitude of siblings.

### Exam Preparation (React, State, and Fetch)
**Q: Describe the term Single Page Application and why it has become so popular for modern web-applications**
<br>A: A Single Page Application, is a webapplication where when navigating the application, the app does not reload the entire page. There is only 'one page' which never seems to reload. The UX is what makes this type of web-application so popular. 

<br>**Q: Explain the “recommended” React way of passing data into Components (at the top, or at the bottom or..)**
<br>A: The recommended way of passing data, is through props, which is state passed to a child, from a parent. If data is to be passed from the child to the parent, it is recommended to make use of callback-functions. If siblings are to pass data to each other, they cannot do this directly. In this case we make use of 'Lifting State Up' where state is held in the closest common parent.

<br>**Q: Explain how JavaScript array methods, like filter, map and (reduce) can be used to generate dynamic HTML structures (tables, ul's etc.)**
<br>A: Filter is a good way of dynamically filter out data in a tables, fx. is its possible with a simple input-field an array of persons could be filtered base on the given input. Map is a great way of taking a JS-array and create table data for a HTML table. Fx. with the following piece of code a full table body could be genereted from an array of 'persons'
persons.map( person => {
    return <tr><td>{person.id}</td><td>{person.name}</td></tr>
}); 

<br>**Q: Explain about the Observer pattern, and where you have used it, both with Java and JavaScript.**
<br>A: So the Observer pattern, is use to 'observe' the state of something and then do something. In JS this is mostly seen in the useEffect functions, in which we can specific a specific state (fx. a persons array) and when something changes the state of the given object, we run the code within the useEffect function.
<br>
In Java we have to interfaces: "Observer" and "Observable". Observer has a single method called update, which will be called when an Observable, which the Observer is observing, changes state.
The Observable has a few more methods but the most important is the addObserver, this will be used for assigning the two with eachother.
And example of where these might be used, could be in a Publisher-Subscriber pattern, in which when something changes in a publishers state, the subscriber gets a notification on the change.


















