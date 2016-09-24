const initialState = {
    city: {
        value: 'Тверь'
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
