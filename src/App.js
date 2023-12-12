
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Producs from "./components/page/Producs";
import Basket from "./components/page/basket";
import Favorites from "./components/page/Favorites";
import ProducsDetail from "./components/page/ProducsDetail";
import {useState} from "react";
import Search from "./components/Search/Search";


function App() {
    const [dark,setDark] = useState('')
  return (
    <div style={{
        background: dark === true ? 'black' : '#ffffff',
        transition:'0.8s',
        height:'20000px'
    }} className="App ">
      <Header dark={dark} setDark={setDark} />
        <Routes>
            <Route path="/" element={<Producs/>}/>
            <Route path="/:id" element={<ProducsDetail/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path={'/movie/search/:movieName'} element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;
