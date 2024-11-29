import './App.css'
// import HookForm from './components/HookForm/HookForm';
import ReUsableForm from './components/ReUsableForm/ReUsableForm';


const App = () => {

  const handleSignUp = data => {
    console.log('sign up', data)
}

const handleUpdateProfile = data => {
  console.log('update profile ', data)
}

  return (
    <div>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm formTitle={'sign Up'}
       handleSubmit={handleSignUp}>
       </ReUsableForm>

      <ReUsableForm formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile} 
       submitBtnText='Update'></ReUsableForm>

    </div>
  );
};

export default App;