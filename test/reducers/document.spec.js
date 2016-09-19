import expect from 'expect';
import documentReducer from '../../src/reducers/document';
import { updateDocument } from '../../src/actions'

describe('Document reducer tests', () =>{
    it('should update field', () => {
        const beforeState = [
            {
                name: 'first',
                value: 10
            },
            {
                name: 'second',
                value: 0
            }]

        const afterState = [
            {
                name: 'first',
                value: 10
            },
            {
                name: 'second',
                value: 100
            }]

        expect(documentReducer(beforeState, updateDocument('second', 100))).toEqual(afterState);
    })
})
