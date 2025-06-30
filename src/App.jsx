import { useEffect,useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';
import middleImg from './assets/middle.png';
import topImg from './assets/topp.png';
import middle1Img from './assets/middle1.png';

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBBUcmWmfxYXEx86GEoNibQlaxR74cKVnU",
  authDomain: "photonics-photo.firebaseapp.com",
  projectId: "photonics-photo",
  storageBucket: "photonics-photo.firebasestorage.app",
  messagingSenderId: "999810702515",
  appId: "1:999810702515:web:aec2c4900fee264af4a4c6",
  measurementId: "G-GK7YLTQSWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
  const [formData, setFormData] = useState({
    registerNo: '',
    name: '',
    title: '',
    imageLink: '',
    year: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, 'photo_submissions'), {
      registerNo: formData.regNo,
      name: formData.name,
      title: formData.title,
      imageLink: formData.imageUrl,
      year:formData.year,
      timestamp: new Date()
    });

    setSuccess(true);
    setFormData({ regNo: '', name: '', year: '', title: '', imageUrl: '' });
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

  return (
    <div className="main-bg">
          <h1 className="panel-title" style={{ marginLeft: '100px' }}>                     Submit Entries </h1>
          {success && <p className="success-msg" style={{ marginLeft: '190px' }}> Submission successful!</p>}
          <hr style={{ border: '1px solid #ffffff', margin: '20px 0',  transform: 'translateX(530px)'}} />
<form onSubmit={handleSubmit} className="form-vertical" style={{ marginLeft: '100px' }}>
  <input
    name="regNo"
    value={formData.regNo}
    onChange={handleChange}
    placeholder="Register Number"
    required
    className="glass-input"
  />
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Name"
    required
    className="glass-input"
  />
  <input
    name="year"
    value={formData.year}
    onChange={handleChange}
    placeholder="Year"
    required
    className="glass-input"
  />
  <input
    name="title"
    value={formData.title}
    onChange={handleChange}
    placeholder="Photo Title"
    required
    className="glass-input"
  />
  <input
    name="imageUrl"
    value={formData.imageUrl}
    onChange={handleChange}
    placeholder="Google Photos Link"
    required
    className="glass-input"
  />
  <button type="submit" className="submit-btn">Submit</button>
</form>
{formData.imageUrl && (
  <div
    style={{
      position: 'absolute',    
      top: '310px',           
      left: '555px',         
    }}
  >
    <img
      src={formData.imageUrl}
      alt="Preview"
      style={{
        width: '400px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
      }}
    />
  </div>
)}
<hr style={{ border: '1px solid #ffffff', margin: '20px 0',  transform: 'translateX(530px)'}} />
          <div className="panel-images">
  <img
  src={middleImg}
  alt="Sample 1"
  className="img-bottom"
/>

<img
  src={topImg}
  alt="Sample 1"
  className="img-bottom2"
/>

<img
  src={middle1Img}
  alt="Sample 2"
  className="img-top"
/>
</div>
        <div
          className="glass-panel"
          style={{
            backgroundColor: '#333333',          
            borderRadius: '12px',               
            padding: '24px',                     
            color: '#fff',                       
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)', 
            width: '300px',                      
            height: '700px',                     
            position: 'absolute',               
            top: '35px',                         
            right: '40px'                       
          }}
        >
        </div>
        <p style={{
  position: 'absolute',      
  top: '340px',               
  left: '1110px',    
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 700,
  fontSize: '30px',
  fontFamily: "'Orbitron', 'Segoe UI', Arial, sans-serif",
  textShadow: '0 2px 8px rgba(0,0,0,0.25)',
  color: '#fff'
}}>
  PHOTOGRAPHY
</p>

    </div>
  );
}

export default App;
