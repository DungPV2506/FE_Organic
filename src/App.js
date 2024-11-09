import './App.css';
import Banner from './Components/LayOut/Banner/Banner';
import Navbar from './Components/LayOut/Navbar/Navbar';
import Features from './Components/LayOut/Products/Features/Features';
import FruitList from './Components/LayOut/Products/FruitList/FruitList';
import SideBar from './Components/SideBar/SideBarSignIn/SideBar';

function App() {
    return (
        <div className='App'>
            <SideBar />

            <div className='App-Organic'>
                <Navbar />
                <Banner />
                <Features />
                <FruitList />
            </div>
        </div>
    );
}

export default App;
