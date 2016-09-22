import React from 'react';
import { connect } from 'react-redux'
import { updateDocument } from '../actions'

import '../../node_modules/react-day-picker/lib/style.css'
// import TinyDatePicker from 'tiny-date-picker'

import DayPicker from 'react-day-picker'

class DatePicker extends React.Component {
    constructor() {
        super();
    }

    // componentDidMount() {
    //     TinyDatePicker(this.input)
    //     this.input.readOnly = false
    // }



    render() {
        const { dispatch, field } = this.props;
        return (
            <div className='date-picker'>
            <input type='text' ref='input' onClick={(e)=>{
                this.refs.daypicker.className = 'date-picker__calendar'
            }}/>
            <DayPicker className='date-picker__calendar_hidden'
                ref='daypicker'
                onDayClick={(e, day) => {

                const date = day.toLocaleDateString()
                this.refs.input.value = date
                this.refs.daypicker.className = 'date-picker__calendar_hidden'

                dispatch(updateDocument(field, date))
                // console.log(day.toLocaleDateString())
            }} />
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
