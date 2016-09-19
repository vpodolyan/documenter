export const updateDocument = (fieldName, value) => {
    return {
        type: 'UPDATE_DOCUMENT',
        name: fieldName,
        value
    }
}
