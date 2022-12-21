import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const pacmanHtml = "files/pacman.html";
  return (
    <div className="App">
      <iframe class="pacman-iframe" title="pacman" src={pacmanHtml} />
    </div>
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
