import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [showForm, updateShowForm] = useState(false)
  const [colaborators, setColaborators] = useState([])
  // Show form or not show
  function changeShow() {
    updateShowForm(!showForm);
  }
  // Register colaborator
  function registerColab(colaborator) {
    console.log("New Colaborator", colaborator)
    setColaborators([...colaborators, colaborator])
  }
  // team list
  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      title: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      title: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      title: "UX Y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ];

  return (
    <div>
      <Header />
      {showForm
        ? <Form
          teams={teams.map((team) => team.title)}
          registerColab={registerColab} />
        : <></>
      }
      <MyOrg changeShow={changeShow} />
      {teams.map((team, index) => <Team teamData={team} key={index}
        colaborators={colaborators.filter(colaborator => colaborator.team === team.title)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
