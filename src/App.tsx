import React from 'react';
import './App.css';
import {MainView} from "./component/views/MainView";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainView/>}/>
              <Route path="*" element={<MainView/>}/>
          </Routes>

      </>
  );
}

export default App;
