import React, { useState } from 'react';
import Hello from './Hello';
import About from './About';
import './App.css'
import Login from './Login';
import Footer from './Footer';
import Description from './Description';
import ExpressTask from './ExpressTask';

function App() {
  const college_name='kongu';
  const name="swetha";
  const rollno="21ITR112";
  const desc="i am a full stack developer, ui/ux developer";
  const footer="swethav.21it@kongu.edu";
  const [number, setNumber] = useState('');

  const checkNumber = () => {
    if (number > 0) {
      console.log('Income');
    } else {
      console.log('Expense');
    }
  };

  return (
    <>

<div>
        Enter the Number:{' '}
        <input
          type="text"
          placeholder="Enter the number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={checkNumber}>Check</button>
      </div>

      {/* Pass checkNumber function as a prop to ExpressTask */}
      <ExpressTask checkNumber={checkNumber} />
     <Login/>
      <Hello college={college_name}/>
      <About name={name} rollno={rollno}/>
      <Description desc={desc}/>
      <Footer email={footer}/>
     
      
    </>
  )
}

export default App;




{/* <ExpressTask checkNumber={checkNumber} />
     <Login/>
      <Hello college={college_name}/>
      <About name={name} rollno={rollno}/>
      <Description desc={desc}/>
      <Footer email={footer}/> */}
     