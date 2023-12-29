import Delete from './Components/Custom/Buttons/Delete';
import Edit from './Components/Custom/Buttons/Edit';
import Position from './Components/Custom/Buttons/Position';
import ViewDetails from './Components/Custom/Buttons/ViewDetails';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
function App() {
  return (
    <div>
      <Navigation/>
     
      <Position/>
      <ViewDetails/>
      <Edit/>
      <Footer/>
      <Delete/>
     
    </div>
  );
}

export default App;
