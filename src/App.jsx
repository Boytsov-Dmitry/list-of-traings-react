import './App.css'
import React, { useState } from 'react';
import TrainingForm from "./Components/TrainingForm"
import TrainingListForm from './Components/TariningListForm'



function App() {
  const [list, setList] = useState([]); 

  const handleTrainingSubmit = (data) => {

    const sameTraining = list.findIndex(item => item.dateOfTaining === data.dateOfTaining);
      if (sameTraining !== -1) {
        const updatedList = [...list]; 
        updatedList[sameTraining].distanceOfTraining = Number(updatedList[sameTraining].distanceOfTraining) + Number(data.distanceOfTraining);
        setList(updatedList);
      } else {
        setList([...list, data]);
      };

      list.forEach(item => {
        if(item.dateOfTaining < data.dateOfTaining) {
          setList([data, ...list]);
        };
      });
  };

  return (
    <>
      <TrainingForm onTrainingSubmit={handleTrainingSubmit}/>
      <div className="container">
        <div className="trainigList">
          <TrainingListForm listOfTraining={list}/>
        </div>
      </div>
    </>
  )
}

export default App
