import React, {PropTypes} from 'react'

import Label from './Label'

const DocumentBody = ({fields}) => (
    <div className="document">
        <div className="document__content">
            <h1 className="document__content__title">Доверенность</h1>
            <div className="document__content__row">
                <div className='city-label'>
                    город&nbsp;
                    <Label fields={fields} name={'city'} />
                </div>
                <div className='date-label'>
                    Дата
                    <Label fields={fields} name={'date'} />
                    г.
                </div>
            </div>
            <div className="document__content__name document__content__row">
                Я,
                <Label fields={fields} name={'lastName'} />
                <Label fields={fields} name={'firstName'} />
                <Label fields={fields} name={'middleName'} />
                ,
            </div>
            <div className="document__content__row">
                зарегистрированный (ая) по адресу:<br/>
                <Label fields={fields} name={'address'} />
                ,
            </div>
            <div className="document__content__row">
                <div className="document__content__passport">
                    паспорт
                    <Label fields={fields} name={'passportNum'} />
                </div>
                <div className="document__content__issuedBy">
                    ,выдан
                    <Label fields={fields} name={'passportIssuedBy'} />
                </div>
            </div>
            <div className="document__content__row">
                ОГРНИП и данные свидетельства о государственной регистрации
                индивидуального предпринимателя (заполняется ИП)
            </div>
            <hr />
        </div>
    </div>
)

DocumentBody.propTypes = {
  fields: PropTypes.shape(PropTypes.shape({
    value: PropTypes.isRequired
  }).isRequired).isRequired
}

export default DocumentBody
