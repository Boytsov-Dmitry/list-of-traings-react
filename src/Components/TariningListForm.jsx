import { v4 as uuidv4 } from 'uuid'

export default function TrainingListForm({ listOfTraining }) {
    const mappingListOfTraining = listOfTraining.map(training =>   
        <li className='trainingListForm' key={uuidv4()}>
            <div className='trainingListFormData'>{training.dateOfTaining}</div>
            <div className='trainingListFormDistance'>{training.distanceOfTraining}</div>
            <div className='trainingListFormButtonContainer'>
                <button className='trainingListFormButton'>X</button>
            </div>
        </li>
    );

    return(
        <ul>{mappingListOfTraining}</ul>
    )
};