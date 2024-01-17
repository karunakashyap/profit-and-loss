import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import PnlForm from './Pages/PnlForm';
import React from '@heroicons/react';
import PnlMonthlyConstant from './Pages/PnlMonthlyConstant';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/design_guidelines" element={<HomePage />} />
                    <Route path="/pnl/2024/January" element={<PnlForm />} />
                    <Route
                        path="/monthly_constants/2024/January"
                        element={<PnlMonthlyConstant />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
