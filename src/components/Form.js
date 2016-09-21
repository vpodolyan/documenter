import React from 'react'

import InputText from '../containers/InputText'

const Form = () => (
    <form className="form">
        <div className="form-group">
            <InputText field={'first'} />
        </div>
        <div className="form-group">
            <InputText field={'second'} />
        </div>
    </form>
)

export default Form;
