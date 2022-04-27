import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './Pages/AdminPanel/AdminPage/AdminPage';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SavedEvents from './Pages/SavedEvents/SavedEvents';


export const DisplyNameContext = createContext("")

function App() {
  const [displyName, setDisplyName] = useState("")
  return (
    <DisplyNameContext.Provider value={[displyName, setDisplyName]}>
      <div className="App">
        <Header></Header>
        <Toaster></Toaster>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/savedEvent' element={<SavedEvents></SavedEvents>}></Route>
          <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
        </Routes>
      </div>
    </DisplyNameContext.Provider>

  );
}

export default App;
