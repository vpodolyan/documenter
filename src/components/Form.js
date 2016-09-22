import React from 'react'

import InputText from '../containers/InputText'
import DatePicker from '../containers/DatePicker'

const Form = () => (
    <form className="form">
        <div className="form-group">
            <InputText field={'first'} />
        </div>
        <div className="form-group">
            <InputText field={'second'} />
            <DatePicker field={'first'}/>
        </div>
    </form>
)

export default Form;
