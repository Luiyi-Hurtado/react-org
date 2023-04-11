import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import './App.css';

function App() {
  const [showForm, updateShowForm] = useState(false)

  function changeShow() {
    updateShowForm(!showForm);
  }

  return (
    <div>
      <Header />
      {showForm ? <Form /> : <></>}
      {/* {showForm && <Form />} */}
      <MyOrg changeShow={changeShow} />
      <Team team="Programación" />
      <Team team="Front-End" />
      <Team team="Data Science" />
      <Team team="DeOps" />
      <Team team="UX y Diseño" />
      <Team team="Móvil" />
      <Team team="Innovación y Gestión" />
    </div>
  );
}

export default App;
