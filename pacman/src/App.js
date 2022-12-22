import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OnboardModal from './components/OnboardModal';
import { GlobalContextProvider } from './context';
import PacmanGame from './pages/PacmanGame';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <OnboardModal />
        <div className="App">
          {/* <p>Hi i am app.js</p> */}
          <PacmanGame />
        </div>
      </GlobalContextProvider >
    </BrowserRouter >

  );

  // let[htmlFileString, setHtmlFileString] = useState();

  // async function fetchHtml() {
  //   console.log('hi');
  //   setHtmlFileString(await (await fetch(`files/pacman.html`)).text());
  //   console.log(htmlFileString);
  // }
  // useEffect(() => {
  //   fetchHtml();
  // }, []);

  // return(
  //   <div className="App">
  //     <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
  //   </div>
  // )
}

export default App;
