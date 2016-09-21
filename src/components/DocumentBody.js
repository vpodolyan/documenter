import React, {PropTypes} from 'react'

import Label from './Label'

const DocumentBody = ({fields}) => (
    <div className="document">
        <div className="document-content">
            <h1>Title</h1>
            Hello,
            <Label fields={fields} name={'first'} /><br />
            Goodbye
            <Label fields={fields} name={'first'} />
        </div>
    </div>
)

DocumentBody.propTypes = {
  fields: PropTypes.shape(PropTypes.shape({
    value: PropTypes.isRequired
  }).isRequired).isRequired
}

export default DocumentBody
