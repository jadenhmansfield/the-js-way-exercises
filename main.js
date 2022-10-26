/*
chapter 3 exercise
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. 
Incorrect inputs must be taken into account.
*/

function chapter3(){
    let input = prompt("Enter a day of the week: ");
    let day = input.toLowerCase();
  switch (day) {
    case "sunday":
      console.log("The following day is Monday");
      alert("The following day is Monday");
      break;
    case "monday":
      console.log("The following day is Tuesday");
      alert("The following day is Tuesday");
      break;
    case "tuesday":
      console.log("The following day is Wednesday");
      alert("The following day is Wednesday");
      break;
    case "wednesday":
      console.log("The following day is Thursday");
      alert("The following day is Thursday");
      break;
    case "thursday":
      console.log("The following day is Friday");
      alert("The following day is Friday");
      break;
    case "friday":
      console.log("The following day is Saturday");
      alert("The following day is Saturday");
      break;
    case "saturday":
      console.log("The following day is Sunday");
      alert("The following day is Sunday");
      break;
    default:
      console.log("Not a valid day");
  }
  }
  
  /*
  chapter 4 exercise
  Carousel
  Write a program that launches a carousel for 10 turns, showing the turn number each time.
  When it's done, improve it so that the number of turns is given by the user.
  */
  
  /*
  function chapter4(){
  for (let i = 0; i < 10; i++){
      console.log("Turn " + (i+1));
      alert("turn" + (i+1))
  }
  }
  */
  
  function chapter4(){
  let turns = Number(prompt("How many turns? "));
  for (let i = 0; i < turns; i++){
      console.log("Turn " + i+1);
      alert(`Turn ${i+1}`);
  }
  }
  
  /*
  chapter 5 exercise
  Improved hello
  Complete the following program so that it asks the user for his first and last names, 
  then show the result of the sayHello() function.
  */
  
  
  function chapter5() {
    function sayHello(firstName, lastName) {
      const message = `Hello, ${firstName} ${lastName}!`;
      return message;
  }
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result
  
  const firstName = prompt("Enter your first name: ");
  const lastName = prompt("Enter your last name: ");
  alert(sayHello(firstName, lastName));
  }  