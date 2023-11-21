import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import DisplayData from './Component/DisplayData';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserContextProvider from './Component/UserContextProvider';

function App() {
  return (
   
    <>
   <UserContextProvider>
    <LoginPage/>
    <DisplayData/>
    </UserContextProvider>
    </>
  );
}


export default App;
