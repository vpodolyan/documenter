import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Label from '../../src/components/Label'

function setup(fields, fieldName) {
    const component = shallow(
        <Label fields={fields} name={fieldName} />
    )

    return { component }
}

describe('Label component', () => {
    it('should display text', () => {
        const fields = {
            first: {
                value: 'test text'
            }
        }

        const { component } = setup(fields, 'first');
        expect(component.find('span').text()).toBe(fields.first.value);
    })
})
