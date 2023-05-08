import {useState} from 'react';
import NavbarComponent from './components/Navbar';
import HomeComponent from './components/HomeContent.tsx';

import './stylesheets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentContent, setCurrentContent ] = useState(HomeComponent);

  return (
    <>
      <div className="body">
        <NavbarComponent setContent={setCurrentContent}/>
        {currentContent}
        <h1>Home Page</h1>
      </div>
    </>
  )
}

export default App
