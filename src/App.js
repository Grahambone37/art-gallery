import React, { useState, useEffect } from 'react'
import './App.css';
import { Gallery } from './gallery';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
    </div>
  );
}

export default App;
