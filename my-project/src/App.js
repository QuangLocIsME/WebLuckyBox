import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Homepage from './Page/Homepage/Homepage';
 import AddBox from './Page/AddBox/addbox';
import {ViewDetailBox} from './Page/ViewDetailBox/ViewDetailBox';
function App() {
  return (
    <div>
<BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddBox />} />
          <Route path="/box/:id" element={<ViewDetailBox />} />
      
        </Routes>
      </Container>
    </BrowserRouter>
      
    </div>
  )
    
}


export default App;
