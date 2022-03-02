import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useParams, useSearchParams
} from "react-router-dom";
import DataGridReservations from './components/ReservationsDataGridComponent/dataGridReservations.component';
import CalendarReservation from './components/calendarReservationsComponent/calendarReservation.component';
import { useEffect, useState } from 'react';

const App =() => {
  const[id, setId] =useState();
  useEffect(()=>{
    let search = window.location.search;
    let params = new URLSearchParams(search);
    setId(params.get('id'))
  }, [])
 return (
    <div>
      
      

      <div>
        <Router>
          <div className='navigation'>
            <h4><Link to={"/reservationsTest/?id="+id}> Reservations</Link></h4>
            <h4><Link to={"/calendar?id="+id}> Calendar</Link></h4>
          </div>
         
        
        
        <Routes>
          <Route  path="/reservationsTest" element={<DataGridReservations/>} />
          <Route  path="/calendar" element={<CalendarReservation/>} />
        </Routes></Router>
          
          
        
      </div>
    </div>
  );
}

export default App;
