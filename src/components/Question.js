import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);



// //////////////////////////////////////////
//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimeRemaining((prevCount) => {
//         if (prevCount === 0) {
//           setTimeRemaining(10) // Reset the count to 10 when it reaches 0
//           onAnswered(false) 
//         } else {
//           return prevCount - 1; // Decrease the count by 1
//         }
//       });
//     }, 1000);

//     return () => {
//       clearInterval(countdown); // Clean up the interval when the component unmounts
//     };
//   }, []);

//////////////////////////////////////////////////
    //add useEffect code
// function checkTimerRemaining(){
//   if (timeRemaining === 0){
//       setTimeRemaining(10)
//       onAnswered(false)
//   }
// }

// useEffect (()=>{
//   const countDown = setInterval(()=> {
//       setTimeRemaining((prevTime => prevTime-1)) 
//       }, 1000)
//       checkTimerRemaining()
//       return()=>clearInterval(countDown)

//   }, [timeRemaining])


//////////////////////////////////////////
  // Function to check if timeRemaining is 0
  function checkTimeRemaining() {
    // console.log(timeRemaining);
    if (timeRemaining === 0) {
      setTimeRemaining(10); // reset timeRemaining to 10 seconds
      onAnswered(false); // call the onAnswered callback prop with a value of false
    }
  }

  // add useEffect code
  useEffect(() => {
    const countDown = setTimeout(() => {
    setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);
    checkTimeRemaining()
    // Call the checkTimeRemaining function periodically, e.g., every second

    return () => clearTimeout(countDown);
    },[timeRemaining]);
    


//////////////////////////////////////////
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
