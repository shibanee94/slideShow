import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const slideShow =[
  {
    title: "Today's workout plan",
    text: "we're gonna do 3 fundamental exercises."
  },
  {
    title: "First, 15 push-ups",
    text: "Do 10 reps. Remember about full range of motion"
  },
  {
    title: "Next, 20 sit ups",
    text: "Do 3 sets of sit ups"
  },
  {
    title:"Last, 30 skiping",
    text: "Do it contineously till 30"
  },
  {
    title: "Great job!",
    text: "You made it, see you next time"
  }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App slides={slideShow} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
