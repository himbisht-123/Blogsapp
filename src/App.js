// import logo from './logo.svg';
import './App.css';
import {selectSignedIn} from './Redux/UserSlice';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';

function App() {
  const isSignedIn=useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar/>
     <HomePage/>
     {isSignedIn && <Blog></Blog>}
    </div>
  );
}

export default App;
