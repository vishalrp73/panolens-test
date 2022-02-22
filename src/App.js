import './App.css';

import * as PANOLENS from 'panolens';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama('/assets/pano-test.jpg');
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector('#panoramaDiv'),
      autoRotate: true,
      autoRotateSpeed: 0.1
    })
    viewer.add(panorama);
  }, [])


  return (
    <div className="App">
      <p>Panolens test</p>
      <div id = 'panoramaDiv' htmlstyle = 'height:100%' >
        {}
      </div>
    </div>
  );
}

export default App;
