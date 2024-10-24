import { v4 as uuidv4 } from 'uuid'

export default function TrainingListForm({ listOfTraining, onDelete }) {
    const mappingListOfTraining = listOfTraining.map((training, index) =>   
        <li className='trainingListForm' key={uuidv4()}>
            <div className='trainingListFormData'>{training.dateOfTaining}</div>
            <div className='trainingListFormDistance'>{training.distanceOfTraining}</div>
            <div className='trainingListFormButtonContainer'>
                <button onClick={() => onDelete(index)} className='trainingListFormButton'>X</button>
            </div>
        </li>
    );

    return(
        <ul>{mappingListOfTraining}</ul>
    )
};