import './App.css'
import React, { useState } from 'react';
import TrainingForm from "./Components/TrainingForm"
import TrainingListForm from './Components/TariningListForm'

function App() {
  const [data, setData] = useState('')
  const [distance, setDistance] = useState('')

  const handleTrainingSubmit = (data) => {
    setData(data.dateOfTaining)
    setDistance(data.distanceOfTraining)
  };



  return (
    <>
      <TrainingForm onTrainingSubmit={handleTrainingSubmit}/>
      <div className="container">
        <div className="trainigList">
          <TrainingListForm data={data} distance={distance}/>
        </div>
      </div>
    </>
  )
}

export default App
