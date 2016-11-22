import React from 'react';
import { connect } from 'react-redux'
import { updateDocument } from '../actions'

let InputText = ({ dispatch, field, doc }) => {
    return (
        <input type='text'
            value={doc[field].value}
            className='form-control'
            onChange={e =>
                dispatch(updateDocument(field, e.target.value))
            } />
    )
}

InputText = connect()(InputText)

export default InputText
