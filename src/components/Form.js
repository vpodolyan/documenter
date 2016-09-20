import React from 'react'

import InputText from '../containers/InputText'

const Form = () => (
    <div className="form">
        <InputText field={'first'} />
        <InputText field={'second'} />
    </div>
)

export default Form;
