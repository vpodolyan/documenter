const initialState = {
    city: {
        value: ''
    },
    date: {
        value: ''
    },
    firstName: {
        value: ''
    },
    lastName: {
        value: ''
    },
    middleName: {
        value: ''
    },
    address: {
        value: ''
    },
    passportNum: {
        value: ''
    },
    passportIssuedBy: {
        value: ''
    },
    representativeLastName: {
        value: ''
    },
    representativeFirstName: {
        value: ''
    },
    representativeMiddleName: {
        value: ''
    },
    representativePassportNum: {
        value: ''
    },
    representativePassportIssuedBy: {
        value: ''
    },
    expireDate: {
        value: ''
    }
}

export default function document(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_DOCUMENT":
            return {
                ...state,
                [action.name]: {
                    value: action.value
                }
            }
        default:
            return state
    }
}
