import './App.css';
import React,{useState} from "react";

function App() {
  const questions = [
    {
      question: "What is the biggest land animal?",
      options: ["Parrot", "Cheetah", "Elephant", "Giraffe"],
      answer: "Elephant"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Venus", "Mars", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which element is represented by the chemical symbol 'H'?",
      options: ["Hydrogen", "Helium", "Iron", "Gold"],
      answer: "Hydrogen"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Rushmore"],
      answer: "Mount Everest"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: "Au"
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
      answer: "Charles Babbage"
    },
    {
      question: "Which country is famous for the Great Barrier Reef?",
      options: ["Australia", "Brazil", "Canada", "India"],
      answer: "Australia"
    }
  ];
  
  const [score,setScore] = useState(0);
  const [isQuizOver,setIsQuizOver] = useState(false);
  const [qnIndex,setQnIndex] = useState(0);
  const [selectedOption,setSelectedOption] = useState(null);
  const [isSetAlert,setAlert] = useState(false);

  function handleSelect(eachOption,answer,optionIndex,e){
    setAlert(false);
    setSelectedOption(eachOption);
    if (eachOption === answer){
      let prevScore = score;
      setScore(prevScore + 1);
    }
  }

  function handleSubmit(qnIndex){
    if(selectedOption !== null){
      let prevQnIndex = qnIndex;
      setQnIndex(prevQnIndex + 1); 
      if(qnIndex === questions.length-1){
        setIsQuizOver(true);
      }
      // reset
      setSelectedOption(null);
    }
    else{
      setAlert(true);
    }
  }

  function handleReload(){
    window.location.reload();
  }

  return (
    <div>
      {isQuizOver ? 
      <div>
        <h1>Score : {score}/{questions.length}</h1> 
        <button onClick={handleReload}>Start over</button>
      </div>
      : 
      <div>
        <h1>{questions[qnIndex].question}</h1>
        {questions[qnIndex].options.map((option,optionIndex) => {
              return(
              <div>
               <label><input 
               type="radio" 
               name={qnIndex} 
               onChange={() => handleSelect(option,questions[qnIndex].answer,optionIndex)} 
               key={optionIndex} 
               checked={selectedOption === option}/>
                {option}</label>
              </div>
              )
              })}
       <button onClick={() => handleSubmit(qnIndex)}>Submit</button>
       {isSetAlert ? <h1>Please select an option</h1> : ""}
       </div>
    }
    </div>
  );
}

export default App;
