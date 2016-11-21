import React from 'react'

import InputText from '../containers/InputText'
import DatePicker from '../containers/DatePicker'

import '../../css/form.css'

const Form = ({doc}) => (
    <form className="form">
        <div className="form-group">
            <label>Город</label>
            <InputText doc={doc} field={'city'} />
        </div>
        <div className="form-group">
            <label>Дата</label>
            <DatePicker doc={doc} field={'date'}/>
        </div>
        <div className="form-group">
            <label>Фамилия</label>
            <InputText doc={doc} field={'lastName'}/>
        </div>
        <div className="form-group">
            <label>Имя</label>
            <InputText doc={doc} field={'firstName'}/>
        </div>
        <div className="form-group">
            <label>Отчество</label>
            <InputText doc={doc} field={'middleName'}/>
        </div>
        <div className="form-group">
            <label>Адрес</label>
            <InputText doc={doc} field={'address'}/>
        </div>
        <div className="form-group">
            <label>Паспорт (номер/серия)</label>
            <InputText doc={doc} field={'passportNum'}/>
        </div>
        <div className="form-group">
            <label>Паспорт выдан</label>
            <InputText doc={doc} field={'passportIssuedBy'}/>
        </div>
        <div className="form-group">
            <label>Фамилия доверенного лица</label>
            <InputText doc={doc} field={'representativeLastName'}/>
        </div>
        <div className="form-group">
            <label>Имя доверенного лица</label>
            <InputText doc={doc} field={'representativeFirstName'}/>
        </div>
        <div className="form-group">
            <label>Отчество доверенного лица</label>
            <InputText doc={doc} field={'representativeMiddleName'}/>
        </div>
        <div className="form-group">
            <label>Паспорт (номер/серия) доверенного лица</label>
            <InputText doc={doc} field={'representativePassportNum'}/>
        </div>
        <div className="form-group">
            <label>Паспорт доверенного лица выдан</label>
            <InputText doc={doc} field={'representativePassportIssuedBy'}/>
        </div>
        <div className="form-group">
            <label>Дата окончания действия доверенности</label>
            <DatePicker field={'expireDate'}/>
        </div>
    </form>
)

export default Form;
