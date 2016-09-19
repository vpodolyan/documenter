import React, {PropTypes} from 'react'

import Label from './Label'

const DocumentBody = ({fields}) => (
    <div>
    <h1>Title</h1>
        {fields.map(({name, value}) =>
            <Label key={name} name={name} text={value} />
        )}
    </div>
)

DocumentBody.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.isRequired,
  }).isRequired).isRequired
}

export default DocumentBody
