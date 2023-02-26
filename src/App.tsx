import React from 'react';
import './App.css';
import {MainView} from "./component/views/MainView";
import {Route, Routes} from "react-router-dom";
import {ApplyView} from "./component/views/ApplyView";
import {MapView} from "./component/views/MapView";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/map" element={<MapView/>}/>
                <Route path="/apply/:id" element={<ApplyView/>}/>
                <Route path="*" element={<MainView/>}/>
            </Routes>

      </>
  );
}

export default App;
