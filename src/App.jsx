import React from 'react';
import PatientDirectory from './components/PatientDirectory';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex-grow">
      <Navbar />
      {/* <div > */}
      <PatientDirectory />

      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;