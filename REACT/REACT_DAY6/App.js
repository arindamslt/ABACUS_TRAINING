
import './App.css';
import Nav from './components/Nav';
import Food from './components/Food';
import { Route,Routes } from 'react-router-dom';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import SearchFood from './components/SearchFood';
import "bootstrap/dist/css/bootstrap.css";
import FoodFirst from './components/FoodFirst';
import FoodList from './components/FoodList';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <h2>REACT BOOT INTEGRATION PROJECT</h2>
     <Nav/>
     <Routes>
     <Route path={"/"} element={<FoodFirst/>}/>
     <Route path={"/home"} element={<Home/>}/>
     <Route path={"/flist"} element={<FoodList/>}/>
      <Route path={"/food"} element={<Food/>}>
        <Route path={"add"} element={<AddFood/>}/>
        <Route path={"del"} element={<DeleteFood/>}/>
        <Route path={"upd"} element={<UpdateFood/>}/>
        <Route path={"search"} element={<SearchFood/>}/>
        </Route>
      
     </Routes>
    </div>
  );
}

export default App;
