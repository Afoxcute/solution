import logo from './logo.svg';
import './App.css';
import EncryptionApp from './EncryptionApp';
import EncryptionDecryptionApp from './entrypoint';

function App() {
  return (
    <div className="App">
      {/* <EncryptionApp/> */}
      <EncryptionDecryptionApp/>
    </div>
  );
}

export default App;
