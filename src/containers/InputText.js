import React from 'react';
import { connect } from 'react-redux'
import { updateDocument } from '../actions'

let InputText = ({ dispatch, field }) => {
    return (
        <input type='text'
            className='form-control'
            onChange={e =>
                dispatch(updateDocument(field, e.target.value))
            } />
    )
}

InputText = connect()(InputText)

export default InputText
