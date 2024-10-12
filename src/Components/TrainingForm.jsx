import TrainingList from './TariningList'

export default function TrainingForm() {
    const handleSumbit = evt => {
        evt.preventDefault();
        
        const { target } = evt;
        <TrainingList item={target} />
        // const elements = [...target.elements]
        // console.log(elements[0].value)
        // console.log(target[0].value)
    }

    return(
        <form className='trainingForm' onSubmit={handleSumbit}>
            <div className="dataTrainingFormContainer">
                <label className="dataTrainingFormTitel">Дата (ДД.ММ.ГГ)</label>
                <input type='date' className="dataTrainingFormInput"/>
            </div>
            <div className="distanceTrainingFormContainer">
                <label className="distanceTrainingFormTitel">Пройдено км.</label>
                <input type='number' className="distanceTrainingFormInput"/>
            </div>
            <div className="buttonTrainingFormContainer">
                <button type='submit' className="buttonTrainingFormInput">Ok</button>
            </div>
        </form>
    )
}