import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import AddPlayer from '../AddPlayer/AddPlayer'
import Comp from '../Comp.js';
import AddPlayer from '../AddPlayer/AddPlayer';

configure({adapter: new Adapter()});

describe("<AddPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
       expect(wrapper).toContainReact(<Comp />) ;
    })
})