import React, { useState } from 'react';

export default function TrainingForm({ onTrainingSubmit }) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
  
    const handleSumbit = (evt) => {
      
      evt.preventDefault();
  
      const { target } = evt;
      const formData = new FormData(target);
      const submittedDate = formData.get('date');
      const submittedDistance = formData.get('distance');
  
      onTrainingSubmit({ dateOfTaining: submittedDate, distanceOfTraining: submittedDistance });
    };
  
    return (
      <form className='trainingForm' onSubmit={handleSumbit}>
        <div className="dataTrainingFormContainer">
          <label className="dataTrainingFormTitel">Дата (ДД.ММ.ГГ)</label>
          <input
            type='date'
            className="dataTrainingFormInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
          />
        </div>
        <div className="distanceTrainingFormContainer">
          <label className="distanceTrainingFormTitel">Пройдено км.</label>
          <input
            type='number'
            className="distanceTrainingFormInput"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            name="distance"
          />
        </div>
        <div className="buttonTrainingFormContainer">
          <button type='click' className="buttonTrainingFormInput">
            Ok
          </button>
        </div>
      </form>
    );
};