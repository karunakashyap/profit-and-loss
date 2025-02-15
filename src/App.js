import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import PnlForm from './Pages/PnlForm';
import React from '@heroicons/react';
import PnlMonthlyConstant from './Pages/PnlMonthlyConstant';
import DesignGuidelines from './Pages/DesignGuidelines';
import DashBoard from './Pages/DashBoard';
import AllData from './Pages/AllData';
import MonthlyData from './Pages/MonthlyData';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/design_guidelines" element={<DesignGuidelines />} />
                    <Route path="/pnl/:2024/:January" element={<PnlForm />} />
                    <Route
                        path="/monthly_constants/2024/January"
                        element={<PnlMonthlyConstant />}
                    />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/all-data" element={<AllData />} />
                    <Route path="/monthly-data" element={<MonthlyData />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
