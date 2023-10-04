import './App.css';
import { SignupForm } from './components/Signup';
import Veterinarians from './components/Veterinary';

function App() {
  return (
    <div className="App">
        <SignupForm/>
        <Veterinarians/>
    </div>
  );
}

export default App;
