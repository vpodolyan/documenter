import React from 'react'

import InputText from '../containers/InputText'
import DatePicker from '../containers/DatePicker'

import '../../css/form.css'

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
        <div className="form-group">
            <label>Фамилия доверенного лица</label>
            <InputText field={'representativeLastName'}/>
        </div>
        <div className="form-group">
            <label>Имя доверенного лица</label>
            <InputText field={'representativeFirstName'}/>
        </div>
        <div className="form-group">
            <label>Отчество доверенного лица</label>
            <InputText field={'representativeMiddleName'}/>
        </div>
        <div className="form-group">
            <label>Паспорт (номер/серия) доверенного лица</label>
            <InputText field={'representativePassportNum'}/>
        </div>
        <div className="form-group">
            <label>Паспорт доверенного лица выдан</label>
            <InputText field={'representativePassportIssuedBy'}/>
        </div>
        <div className="form-group">
            <label>Дата окончания действия доверенности</label>
            <DatePicker field={'expireDate'}/>
        </div>
    </form>
)

export default Form;
