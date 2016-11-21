import React from 'react';
import Document from '../containers/Document';
import FormContainer from '../containers/FormContainer';

const App = () => (
    <div className="container app-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <FormContainer />
            </div>
            <div className="col-sm-8 document-wrapper">
                <Document />
            </div>
        </div>
    </div>
)

export default App;
