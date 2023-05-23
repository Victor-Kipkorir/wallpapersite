import './App.css';

import welcomeImage from './images/welcome.jpg';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';
import photo7 from './images/photo7.jpg';
import photo8 from './images/photo8.jpg';
import photo9 from './images/photo9.jpg';
import photo10 from './images/photo10.jpg';
import photo11 from './images/photo11.jpg';
import photo12 from './images/photo12.jpg';
import photo13 from './images/photo13.jpg';
import photo14 from './images/photo14.jpg';
import photo15 from './images/photo15.jpg';
import photo16 from './images/photo16.jpg';
import photo17 from './images/photo17.jpg';
import photo18 from './images/photo18.jpg';
import photo19 from './images/photo19.jpg';
import photo20 from './images/photo20.jpg';
import photo21 from './images/photo21.jpg';
import photo22 from './images/photo22.jpg';
import photo23 from './images/photo23.jpg';
import photo24 from './images/photo24.jpg';
import photo25 from './images/photo25.jpg';
import photo26 from './images/photo26.jpg';
import photo27 from './images/photo27.jpg';
import photo28 from './images/photo28.jpg';
import photo29 from './images/photo29.jpg';
import photo30 from './images/photo30.jpg';
import photo31 from './images/photo31.jpg';
import photo32 from './images/photo32.jpg';
import photo33 from './images/photo33.jpg';
import photo34 from './images/photo34.jpg';
import photo35 from './images/photo35.jpg';
import photo36 from './images/photo36.jpg';
import photo37 from './images/photo37.jpg';
import photo38 from './images/photo38.jpg';
import photo39 from './images/photo39.jpg';
import photo40 from './images/photo40.jpg';
import victor from './images/victor.jpg'
import { useState } from 'react';

function downloadImage(imageUrl, imageName, setClickCount) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = imageName;
  link.click();
  setClickCount(prevCount => prevCount + 1);
}


function App() {
  const [clickCount, setClickCount] = useState(0);


  return (
<div className="App">

<h1>Hello &#128074;</h1>

<div className="header">
  <h2>Download The Best Home Workspace Setup Wallpapers</h2>
  <img className='victor' src= {victor} alt='vicki' />
  <p>Designed by: <span className='reacto1'>Victor Cheruiyot</span></p>
  <p className='reacto'>React js</p>
</div>

<div className="image-preview">
  <img className="photo"  src={welcomeImage} alt='welcomeImage'/>
<div className='secPanel'>
<p className="budget">Budget:500,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(welcomeImage,'welcome.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>

<div className="image-preview">
  <img className="photo" src={photo1} alt='photo1'/>
  <div className='secPanel'>
<p className="budget">Budget:190,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo1,'photo1.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo2} alt='photo2'/>
  <div className='secPanel'>
<p className="budget">Budget:145,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo2,'photo2.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo3} alt='photo3'/>
  <div className='secPanel'>
<p className="budget">Budget:213,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo3,'photo3.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>

<div className="image-preview">
  <img className="photo" src={photo4} alt='photo4'/>
  <div className='secPanel'>
<p className="budget">Budget:70,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo4,'photo4.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>

<div className="image-preview">
  <img className="photo" src={photo5} alt='photo5'/>
  <div className='secPanel'>
<p className="budget">Budget:180,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo5,'photo5.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo6} alt='photo6'/>
  <div className='secPanel'>
<p className="budget">Budget:150,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo6,'photo6.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo7} alt='photo7'/>
  <div className='secPanel'>
<p className="budget">Budget:123,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo7,'photo7.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo8} alt='photo8'/>
  <div className='secPanel'>
<p className="budget">Budget:80,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo8,'photo8.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo9} alt='photo9'/>
  <div className='secPanel'>
<p className="budget">Budget:634,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo9,'photo9.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo10} alt='photo10'/>
  <div className='secPanel'>
<p className="budget">Budget:327,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo10,'photo10.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo11} alt='photo11'/>
  <div className='secPanel'>
<p className="budget">Budget:432,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo11,'photo11.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo12} alt='photo12'/>
  <div className='secPanel'>
<p className="budget">Budget:574,500</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo12,'photo12.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo13} alt='photo13'/>
  <div className='secPanel'>
<p className="budget">Budget:450,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo13,'photo13.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo14} alt='photo14'/>
  <div className='secPanel'>
<p className="budget">Budget:312,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo14,'photo14.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo15} alt='photo15'/>
  <div className='secPanel'>
<p className="budget">Budget:418,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo15,'photo15.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo16} alt='photo16'/>
  <div className='secPanel'>
<p className="budget">Budget:416,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo16,'photo16.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo17} alt='photo17'/>
  <div className='secPanel'>
<p className="budget">Budget:190,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo17,'photo17.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo18} alt='photo18'/>
  <div className='secPanel'>
<p className="budget">Budget:100,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo18,'photo18.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo19} alt='photo19'/>
  <div className='secPanel'>
<p className="budget">Budget:300,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo19,'photo19.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo20} alt='photo20'/>
  <div className='secPanel'>
<p className="budget">Budget:600,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo20,'photo20.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo21} alt='photo21'/>
  <div className='secPanel'>
<p className="budget">Budget:350,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo21,'photo21.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo22} alt='photo22'/>
  <div className='secPanel'>
<p className="budget">Budget:500,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo22,'photo22.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo23} alt='photo23'/>
  <div className='secPanel'>
<p className="budget">Budget:400,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo23,'photo23.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo24} alt='photo24'/>
  <div className='secPanel'>
<p className="budget">Budget:450,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo24,'photo24.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo25} alt='photo25'/>
  <div className='secPanel'>
<p className="budget">Budget:250,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo25,'photo25.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo26} alt='photo26'/>
  <div className='secPanel'>
<p className="budget">Budget:530,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo26,'photo26.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo27} alt='photo27'/>
  <div className='secPanel'>
<p className="budget">Budget:250,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo27,'photo27.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo28} alt='photo28'/>
  <div className='secPanel'>
<p className="budget">Budget:320,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo28,'photo28.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo29} alt='photo29'/>
  <div className='secPanel'>
<p className="budget">Budget:290,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo29,'photo29.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo30} alt='photo30'/>
  <div className='secPanel'>
<p className="budget">Budget:612,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo30,'photo30.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo31} alt='photo31'/>
  <div className='secPanel'>
<p className="budget">Budget:500,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo31,'photo31.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo32} alt='photo32'/>
  <div className='secPanel'>
<p className="budget">Budget:380,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo32,'photo32.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo33} alt='photo33'/>
  <div className='secPanel'>
<p className="budget">Budget:700,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo33,'photo33.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo34} alt='photo34'/>
  <div className='secPanel'>
<p className="budget">Budget:517,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo34,'photo34.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo35} alt='photo35'/>
  <div className='secPanel'>
<p className="budget">Budget:612,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo35,'photo35.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo36} alt='photo36'/>
  <div className='secPanel'>
<p className="budget">Budget:590,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo36,'photo36.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo37} alt='photo37'/>
  <div className='secPanel'>
<p className="budget">Budget:817,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo37,'photo37.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo38} alt='photo38'/>
  <div className='secPanel'>
<p className="budget">Budget:200,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo38,'photo38.jpg', setClickCount) } 
className='download-button' >DOWNLOAD ({clickCount})</button>
</div>
</div>


<div className="image-preview">
  <img className="photo" src={photo39} alt='photo39'/>
  <div className='secPanel'>
<p className="budget">Budget300,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo39,'photo39.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


<div className="image-preview">
  <img className="photo" src={photo40} alt='photo40'/>
  <div className='secPanel'>
<p className="budget">Budget:340,000</p>
<p className='likeButton'>&#128077;</p>
<p className='likeButton'>&#128078;</p>
<button onClick={() =>downloadImage(photo40,'photo40.jpg', setClickCount) }
 className='download-button' >DOWNLOAD ({clickCount})</button>
 </div>
</div>


</div>

  );
}

export default App;
