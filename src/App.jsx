import './App.css'
import Granpa from './components/Family/Granpa';
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
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReUsableForm formTitle={'sign Up'}
       handleSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <p>Please fill up</p>
       </ReUsableForm>

      <ReUsableForm formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile} 
       submitBtnText='Update'>
        <h1>Update Profile</h1>
        <p>Always keep updated</p>
       </ReUsableForm> */}

       <Granpa></Granpa>

    </div>
  );
};

export default App;