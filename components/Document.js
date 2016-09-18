import React from 'react'

import Label from './Label'

class Document extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        return (
            <div>
                <h1>Title</h1>
                <Label text={"test"} />
            </div>
        )
    }
}

export default Document
