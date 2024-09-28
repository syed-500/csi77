import { BrowserRouter,Route,Routes,Navigate,Router,Link, Outlet } from 'react-router-dom';
import React from 'react';
import '../../src/blogs.css'
import { Postid_1,Postid_2 } from './blogcomponents';

import Header from './Header';
import Home from './blogcomponents';
function Blogs() {
  return (
      <div style={{marginTop:"100px"
      }}>
        
        <Header1/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
    <Route
       path="lorem-ipsum-dolor-sit-amet-consectetur"
      element={<Postid_1/>}
    />
    <Route path="lorem-ipsum-dolor-sit" element={<Postid_2/>} />

  </Routes>
      </div>
  );
}

class Header1 extends React.Component {
  render() {
    //header
    return <Header/> ;
  }
}
export default Blogs;
