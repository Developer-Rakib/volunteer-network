import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './Pages/AdminPanel/AddEvent/AddEvent';
import AdminPage from './Pages/AdminPanel/AdminPage/AdminPage';
import VolunteerList from './Pages/AdminPanel/VolunteerList/VolunteerList';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
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
          <Route path='/savedEvent' element={
            <RequireAuth>
              <SavedEvents></SavedEvents>
            </RequireAuth>
          }></Route>

          <Route path='/admin' element={
            <RequireAuth>
              <AdminPage></AdminPage>
            </RequireAuth>
          }>
            <Route path='volunteer' element={<VolunteerList></VolunteerList>}></Route>
            <Route path='addEvent' element={<AddEvent></AddEvent>}></Route>
          </Route>

        </Routes>
      </div>
    </DisplyNameContext.Provider>

  );
}

export default App;
