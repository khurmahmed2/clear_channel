import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai'
import Article from './Article';

describe('Article component test', () => {

  it('should retrieve the correct props', () => {
    const wrapper = shallow(<Article title="test" description="some description" image="/image.jpg" />)
  
    expect(wrapper.instance().props.title).to.equal('test')
    expect(wrapper.instance().props.description).to.equal('some description')
    expect(wrapper.instance().props.image).to.equal('/image.jpg')
  });

  it('should render with correct format', () => {
    const wrapper = shallow(<Article title="test" description="some description" image="/image.jpg" />)
  
    expect(wrapper.html()).to.equal('<div class="article"><img src="/image.jpg"/><h3>test</h3><p>some description</p></div>')
  });

  it('should set the correct class', () => {
    const wrapper = shallow(<Article title="test" description="some description" image="/image.jpg" />)
  
    expect(wrapper.find('.article').exists()).to.equal(true)
  });

  it('should not display with incorrect prop', () => {
    const wrapper = shallow(<Article description="some description" image="/image.jpg" />)
  
    expect(wrapper.html()).to.not.equal('<div class="article"><img src="/image.jpg"/><h3>test</h3><p>some description</p></div>')
  });

});