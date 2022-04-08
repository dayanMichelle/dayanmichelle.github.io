import { AppBar } from './components/AppBar';
import './App.css';
import { AppBarMovil } from './components/AppBarMovil';


function App() {
  
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
  <AppBar /> 
  {/* <AppBarMovil />  */}
      
    </div>
  );
}

export default App;
