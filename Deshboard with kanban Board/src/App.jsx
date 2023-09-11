import Layout from "./Components/Layout/Layout";
import BoardPage from "./pages/Board/Board";
import Calendar from "./pages/Calender/Calendar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGrid from "./pages/DataGrid/DataGrid";

const App = () => {

  return (

    <div id="dashboard">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="users" element={<DataGrid />} />

        </Route>
        
      </Routes>
      </BrowserRouter>

  </div>

  )
  
};

export default App;
