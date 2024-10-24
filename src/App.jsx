import './App.css'
import React, { useState } from 'react';
import TrainingForm from "./Components/TrainingForm"
import TrainingListForm from './Components/TariningListForm'



function App() {
  const [list, setList] = useState([]); 

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleTrainingSubmit = (data) => {

    const sameTraining = list.findIndex(item => item.dateOfTaining === data.dateOfTaining);
      if (sameTraining !== -1) {
        const updatedList = [...list]; 
        updatedList[sameTraining].distanceOfTraining = Number(updatedList[sameTraining].distanceOfTraining) + Number(data.distanceOfTraining);
        setList(updatedList);
      } else {
        setList([...list, data]);
      };

      if (sameTraining === -1) {
        list.forEach(item => {
          if(item.dateOfTaining < data.dateOfTaining) {
            setList([data, ...list]);
          };
        });
      }
  };

  return (
    <>
      <TrainingForm onTrainingSubmit={handleTrainingSubmit} />
      <div className="container">
        <div className="trainigList">
          <TrainingListForm listOfTraining={list} onDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}

export default App
