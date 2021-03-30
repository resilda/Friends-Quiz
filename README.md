This quiz demo is created using React JS and more specifically hooks.

--> Let's refer to App.js file first. 

After the proper imports of React components such as 'useState' and 'useEffect', we create the question and specify them with the right answer so we can keep the score.

Using useState and useEffect to update the status of the actions and also the countdown timer to see if the user can take the quiz under 60 seconds. 

In line 105 inside of App.js, useEffect makes sure the update and the decremetation of the seconds as time passes by. I haven't used an identification for the update (such as an array of variables as a condition to update when one of the variables changes) because I want the render to happen as I pass by every question. 

It is important that each question should have an unique ID. This time I used a function (shown in line 134) that generates a random ID each times it renders, for each question obviously. But this is so against React comunity rules. THEY SHOULD BE STABLE. 

-->  So, just make another variable called << key: 345085!$%^ >> inside of questions array for each object of question. <--

Also, inside of App.css i rearranged all the components using -->  display: flex  <--

The navigation is made by --> Browser Router <-- (index.js file). Even though it is usually used for single page application, I created it this way as when the server doesn't work it will just go to a 404 error message to specify the creation of Broweser Router Navigator.
