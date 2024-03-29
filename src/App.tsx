import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Works from './components/tic-tac-toe';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Link to="/">Home</Link>
          <br />
          <Link to={{ pathname: '/about', search: '?id=25' }}>About</Link>
          <br />
          <Link to="/works/65">Works</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/:id" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          {/*<Footer />}*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
