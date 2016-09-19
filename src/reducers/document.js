export default function document(state = [{name: 'first', value: ''}], action) {
    switch (action.type) {
        case "UPDATE_DOCUMENT":
            return state.map((field) => {
                if (field.name !== action.name) {
                    return field
                }

                return Object.assign({}, field, { value: action.value })
            })
        default:
            return state
    }
}
