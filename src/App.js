
import './App.css';
import Announcements from './component/Announcements';
import Attendance from './component/Attendance';
import Header from './component/header';
import Payslip from './component/Payslip';
import { Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      
            <Route exact path="/" element={<Header/>} />
            <Route path="/announcements" element={<Announcements/>} />
            <Route path="/attendance" element={<Attendance/>} />
            <Route path="/payslip" element={<Payslip/>} />
          
      </Routes>
  );
}

export default App;
