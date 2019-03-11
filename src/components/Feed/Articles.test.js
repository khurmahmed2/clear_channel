import React from 'react'
import { shallow } from 'enzyme'
import Articles from './Articles'

let article = {
	'media:content': [],
	title: ['test'],
	description: ['test']
}
article['media:content'][0] = {
	'$': {
		url: 'test'
	}
}

describe('Articles component test', () => {

  it('should render', () => {
    const wrapper = shallow(<Articles items={[article]} />)
  
    expect(wrapper).toMatchSnapshot()
  });

  it('should retrieve the correct number of articles', () => {
    const wrapper = shallow(<Articles items={[article]} />)
  
    expect(wrapper.instance().props.items.length).toEqual(1)
  });

  it('should retrieve the correct props', () => {
    const wrapper = shallow(<Articles items={[article]} />)
  
    expect(wrapper.instance().props.items).toEqual([article])
  });
});