import React, { useState, useEffect } from 'react'
import './App.css';
import Gallery from './gallery';
import ButtonBar from './button-bar';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  return (
    <div className="App" title={document.title = data.title || 'Welcome to ArtWorld'}>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
