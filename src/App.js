import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {
const App =()=>{
const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API
  // state={
  //   progress: 0
  // }
  const[progress,setProgress]=useState(0)
  // setProgress=(progress)=>{
  //   setState({progress: progress})
  // }
  // render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={< News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ < News setProgress={setProgress} apiKey={apiKey} key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={< News setProgress={setProgress} apiKey={apiKey} key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/Health" element={ < News setProgress={setProgress} apiKey={apiKey} key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ < News setProgress={setProgress} apiKey={apiKey} key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ < News setProgress={setProgress} apiKey={apiKey} key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ < News setProgress={setProgress} apiKey={apiKey}  key='technology}>' pageSize={pageSize} country="in" category="technology"/>}></Route>

        </Routes>
        </BrowserRouter>
      </div>
    )
  // }
}
export default App