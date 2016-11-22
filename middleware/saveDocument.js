// Creates SaveDocument middleware using storage passed to
export default storage => {

        return store => next => action => {
        let result = next(action);

        storage.saveDoc(store.getState().doc);

        return result;
    }
}
