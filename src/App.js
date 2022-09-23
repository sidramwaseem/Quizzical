import React from 'react';
import Question from './components/Questions/Questions.jsx';



function App() {
  const [question, setQuestion] = React.useState('');

// https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple
fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
.then((response) => response.json())
.then((data) => setQuestion(data.results.question));
console.log(question);
  return (
    <div>
     <Question/>
    </div>
  )
}

export default App
