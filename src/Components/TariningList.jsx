import React, { useState } from 'react';
import TrainingForm from './TrainingForm'


const listOfTainings = []

export default function TrainingList({ target }) {
    const [ list, setList ] = useState(listOfTainings)
    console.log(target)


    return(
        <form className="">
            <div></div>
            <div></div>
            <div>
                <button>X</button>
            </div>
        </form>
    )
}