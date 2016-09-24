import React from 'react'

import InputText from '../containers/InputText'
import DatePicker from '../containers/DatePicker'

const Form = () => (
    <form className="form">
        <div className="form-group">
            <label>Город</label>
            <InputText field={'city'} />
        </div>
        <div className="form-group">
            <label>Дата</label>
            <DatePicker field={'date'}/>
        </div>
        <div className="form-group">
            <label>Фамилия</label>
            <InputText field={'lastName'}/>
        </div>
        <div className="form-group">
            <label>Имя</label>
            <InputText field={'firstName'}/>
        </div>
        <div className="form-group">
            <label>Отчество</label>
            <InputText field={'middleName'}/>
        </div>
        <div className="form-group">
            <label>Адрес</label>
            <InputText field={'address'}/>
        </div>
        <div className="form-group">
            <label>Паспорт (номер/серия)</label>
            <InputText field={'passportNum'}/>
        </div>
        <div className="form-group">
            <label>Паспорт выдан</label>
            <InputText field={'passportIssuedBy'}/>
        </div>
    </form>
)

export default Form;
