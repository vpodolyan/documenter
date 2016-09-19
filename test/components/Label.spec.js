import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Label from '../../src/components/Label'

function setup(text) {
    const component = shallow(
        <Label text={text} />
    )

    return { component }
}

describe('Label component', () => {
    it('should display text', () => {
        const targetText = "Test text";
        const { component } = setup(targetText);
        expect(component.find('span').text()).toBe(targetText);
    })
})
