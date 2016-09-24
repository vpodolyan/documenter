import React from 'react';
import { connect } from 'react-redux'
import { updateDocument } from '../actions'

import DayPicker from 'react-day-picker'
import '../../node_modules/react-day-picker/lib/style.css'

class DatePicker extends React.Component {
    constructor() {
        super();

        this.state = { visible: false }
    }

    onInputClick() {
        this.setState({ visible: true });
    }


    render() {
        const { dispatch, field } = this.props;
        return (
            <div className='date-picker'>
            <input type='text' className='form-control' ref='input'
                onFocus={(e)=>{
                this.onInputClick();
            }}/>
            { this.state.visible &&
                <div style={{ position: 'relative' }}>
                    <DayPicker className='date-picker__calendar'
                        ref='daypicker'
                        onDayClick={(e, day) => {
                            const date = day.toLocaleDateString()
                            this.refs.input.value = date

                            dispatch(updateDocument(field, date))

                            this.setState({ visible: false })
                    }} />
                </div>
            }
            </div>


        )
    }
}

DatePicker = connect()(DatePicker)

export default DatePicker


// <input type='date'
//     className='form-control'
//     onChange={e => {
//         dispatch(updateDocument(field, e.target.value))
//         console.log("TTTT")
//     }
//     }
//     ref={(ref) => this.input = ref} />
