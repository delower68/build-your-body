import './App.css';
import Shop from './components/Shop/Shop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Records from './records.json'

function App() {
  return (
    <div className='App'>
      <Shop></Shop>
    </div>
  );
}

export default App;
