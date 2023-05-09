import './App.css';
import NavigationBar from './Componets/NavigationBar';
import "./Style/homepage.css"
import Intro from './Componets/Intro';
import Trending from './Componets/Trending';
import Action from './Componets/Action';
import Thriller from './Componets/Thriller';
import Footer from './Componets/Foooter';

function App() {
  return (
    <div>
      <div className="myBg">
      <NavigationBar/>
      <Intro/>
      </div>
    <div className='Trend'>
      <Trending/>
    </div>
    <div className='Action'>
      <Action/>
    </div>
    <div className='Thriller'>
    <Thriller/>
    </div>
    <div className='footer'>
      <Footer/>
    </div>
    </div>
);
}

export default App;
