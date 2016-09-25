import React, {PropTypes} from 'react'

import Label from './Label'

import '../../css/document.css'

const DocumentBody = ({fields}) => (
    <div className="document">
        <div className="document__content">
            <h1 className="document__content__title">Доверенность</h1>
            <div className="document__content__row">
                <div className='document__content__city-label'>
                    город&nbsp;
                    <Label fields={fields} name={'city'} />
                </div>
                <div className='document__content__date-label'>
                    Дата&nbsp;
                    <Label fields={fields} name={'date'} />
                    г.
                </div>
            </div>
            <div className="document__content__name document__content__row">
                Я, &nbsp;
                <Label fields={fields} name={'lastName'} />&nbsp;
                <Label fields={fields} name={'firstName'} />&nbsp;
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
                    паспорт &nbsp;
                    <Label fields={fields} name={'passportNum'} />
                </div>
                <div className="document__content__issuedBy">
                    ,выдан &nbsp;
                    <Label fields={fields} name={'passportIssuedBy'} />
                </div>
            </div>
            <hr className="document__content__splitter" />
            <div className="document__content__row">
                настоящей доверенностью уполномочиваю &nbsp;
                <Label fields={fields} name={'representativeLastName'} />&nbsp;
                <Label fields={fields} name={'representativeFirstName'} />&nbsp;
                <Label fields={fields} name={'representativeMiddleName'} />
            </div>
            <div className="document__content__row">
                <div className="document__content__passport">
                    паспорт &nbsp;
                    <Label fields={fields} name={'representativePassportNum'} />
                </div>
                <div className="document__content__issuedBy">
                    ,выдан &nbsp;
                    <Label fields={fields} name={'representativePassportIssuedBy'} />
                </div>
            </div>
            <div className="document__content__row">
                на представление моих интересов в федеральных органах исполнительной власти,
                исполнительных органах государственной, в органах государственных внебюджетных фондов,
                в органах местного самоуправления, других органах и организациях в целях получения для меня
                государственных услуг, муниципальных услуг и совершение в этих целях всех необходимых действий,
                в том числе подписание запросов, заявлений, заверение копий документов, дачу согласия от моего имени
                на обработку персональных данных, получение результатов государственных услуг, муниципальных услуг,
                результатов услуг, которыеявляются необходимыми и обязательными для предоставления государственных и
                муниципальных услуг.
            </div>
            <div className="document__content__row">
                Срок действия доверенности: до &nbsp;
                <Label fields={fields} name={'expireDate'} />
                г.
            </div>
            <div className="document__content__row">
                <div className="document__content__signature">
                    <div className="document__content__signature__placeholder">
                    </div>
                </div>
                <div className="document__content__signature-author">
                    <Label fields={fields} name={'lastName'} />&nbsp;
                    <Label fields={fields} name={'firstName'} />&nbsp;
                    <Label fields={fields} name={'middleName'} />
                </div>
            </div>
        </div>
    </div>
)

DocumentBody.propTypes = {
  fields: PropTypes.shape(PropTypes.shape({
    value: PropTypes.isRequired
  }).isRequired).isRequired
}

export default DocumentBody
