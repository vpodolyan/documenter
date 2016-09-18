import expect from 'expect';
import documentReducer from '../../reducers/document';

describe('Document reducer tests', () =>{
    it('should update field', () => {
        const beforeState = {
            name: 'test',
            price: 10
        }
        const afterState = {
            name: 'updated',
            price: 10
        }
        const action = {
            type: 'UPDATE_DOCUMENT',
            field: 'name',
            value: afterState.name
        }

        expect(documentReducer(beforeState, action)).toEqual(afterState);
    })
})
