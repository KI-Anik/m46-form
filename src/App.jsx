import './App.css'
import SimpleForm from './components/Form/SimpleForm';
import StateFulForm from './components/Form/StateFulForm/StateFulForm';
import RefForm from './components/RefForm/RefForm';


const App = () => {
  return (
    <div>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      <RefForm></RefForm>
    </div>
  );
};

export default App;