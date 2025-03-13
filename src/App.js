import './App.css';
import demoImage from './components/demo.png'
import heroImage from './components/heroImage.jpg'

function App() {
  return (
    <div className="App">
      


      <header>
        <div className='nav_bar'>
          <div className='logo'>
            <img src={demoImage} className='logo_image'/>
            <p className="logo_name"><a>Memory Maker</a></p>
          </div>

          <div className='menu'>
            <ul className="menu_items">
              <li><a href='#' className='navmenu_link'>Home</a></li>
              <li><a href='#' className='navmenu_link'>Portfolio</a></li>
              <li><a href='#' className='navmenu_link'>Blog</a></li>
              <li><a href='#' className='navmenu_link'>Contact Us</a></li>
              <li><a href='#' className='primary_btn' id='book'>Book Now</a></li>
            </ul>
          </div>
        </div>


        <div className='hero-section'>
          <div className='hero_content'>
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing things and explore our services.</p>
            <a href="#services" className="cta_button">Get Started</a>
          </div>

          <div className='hero_Image'>
            <img src={heroImage} className='heroImage'/>
          </div>
        </div>


      </header>



    </div>
  );
}

export default App;
