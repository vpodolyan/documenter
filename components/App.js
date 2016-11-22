import React from 'react';
import Document from '../containers/Document';
import Form from '../containers/Form';

const App = () => (
    <div className="container app-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <Form />
            </div>
            <div className="col-sm-8 document-wrapper">
                <Document />
            </div>
        </div>
    </div>
)

export default App;
