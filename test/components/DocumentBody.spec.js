import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import DocumentBody from '../../src/components/DocumentBody'

function setup(fields) {
    const component = shallow(
        <DocumentBody fields={fields} />
    )

    return { component }
}

describe('DocumentBody component', () => {
    it('should create right count of child components ', () => {
        const fields = [{
             name: 'firstName',
             text: 'Test'
         },
         {
             name: 'lastName',
             text: 'Testov'
         }]

        const { component } = setup(fields);
        expect(component.find('Label').length).toBe(fields.length);
    }),

    it('should display title', () => {
        const { component } = setup([]);
        expect(component.find('h1')).toExist();
    })
})
