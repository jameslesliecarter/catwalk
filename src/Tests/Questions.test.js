import { mount, render, shallow } from 'enzyme';
import React from 'react';
import QandA from '../QandA/QandA.jsx';


describe('App', () => {
  it('Should render to the page', () =>{
    const component = mount(
      <QandA />
    );
    expect(component.state().questions).toHaveLength(0);
  });
});
