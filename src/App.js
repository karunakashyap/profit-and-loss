import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import PnlForm from "./Pages/PnlForm";
import jsonData from './assets/Jsons/Data.json'
import React from "@heroicons/react";
import PnlMonthlyConstant from "./Pages/PnlMonthlyConstant";
import monthlyConstant from './assets/Jsons/MonthlyConstant.json'
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/design_guidelines" element={<HomePage />} />
          <Route path="form_field/monthly_input" element={<div className='border-2 p-4 w-[700px] ml-[500px] mb-32'><PnlForm jsonData={jsonData} /></div>} />
          <Route path="/monthly_constants" element={<div className='border-2 p-4 w-[700px] ml-[500px] mb-32'><PnlMonthlyConstant monthlyConstant={monthlyConstant}/></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
