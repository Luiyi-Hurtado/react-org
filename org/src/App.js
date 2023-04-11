import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import './App.css';

function App() {
  const [showForm, updateShowForm] = useState(true)

  function changeShow() {
    updateShowForm(!showForm);
  }

  return (
    <div>
      <Header />
      {showForm ? <Form /> : <></>}
      {/* {showForm && <Form />} */}
      <MyOrg changeShow={changeShow} />
    </div>
  );
}

export default App;
