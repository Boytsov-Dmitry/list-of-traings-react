import React, { useState, useEffect } from 'react';

export default function TrainingListForm({ data, distance }) {
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //   setList([...list, { data, distance }]);
    // }, [data, distance]);

    return(
        <form className='trainingListForm'>
            <div className='trainingListFormData'>{data}</div>
            <div className='trainingListFormDistance'>{distance}</div>
            <div className='trainingListFormButtonContainer'>
                <button className='trainingListFormButton'>X</button>
            </div>
        </form>
    )
}