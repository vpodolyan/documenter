const initialState = {
    first: {
        value: 10
    },
    second: {
        value: 0
    }}

export default function document(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_DOCUMENT":
            return {
                ...state,
                [action.name]: {
                    value: action.value
                }
            }
            // return state.map((field) => {
            //     if (field.name !== action.name) {
            //         return field
            //     }
            //
            //     return Object.assign({}, field, { value: action.value })
            // })
        default:
            return state
    }
}
