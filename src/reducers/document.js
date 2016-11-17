import initialState from '../consts/emptyDocument'

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
