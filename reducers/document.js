export default function document(state = {}, action) {
    switch (action.type) {
        case "UPDATE_DOCUMENT":
            return Object.assign({}, state, {
                [action.field]: action.value
            });
        default:
            return state;
    }
}
