import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import BreadCrumbs from './Components/UI/BreadCrumbs/BreadCrumbs';
import HomePage from './Components/HomePage';
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/design_guidelines" element={<HomePage />} />
          <Route path='/overview' element={<BreadCrumbs/>}></Route>
          <Route path='/overview/payouts' element={<BreadCrumbs/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
