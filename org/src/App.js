import { v4 as uuidv4 } from "uuid"
import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [showForm, updateShowForm] = useState(false)
  const [colaborators, setColaborators] = useState([{
    id: uuidv4(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor"
  },
  {
    id: uuidv4(),
    team: "Programación",
    photo: "https://github.com/genesysaluralatam.png",
    name: "Genesys Rondón",
    position: "Desarrolladora de Software e Instructora"
  },
  {
    id: uuidv4(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora en Alura Latam"
  },
  {
    id: uuidv4(),
    photo: "https://github.com/christianpva.png",
    team: "Programación",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor"
  },
  {
    id: uuidv4(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzales",
    position: "Dev Fullstack"
  }])
  const [teams, setTeams] = useState([
    // team list
    {
      id: uuidv4(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuidv4(),
      title: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuidv4(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuidv4(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])
  // Show form or not show
  function changeShow() {
    updateShowForm(!showForm);
  }
  // Register colaborator
  function registerColab(colaborator) {
    console.log("New Colaborator", colaborator)
    setColaborators([...colaborators, colaborator])
  }
  // Delete Colaborator
  function deleteColab(id) {
    console.log(`eliminiar colaborador ${id}`)
    const newColab = colaborators.filter((colab) => colab.id != id)
    setColaborators(newColab)
  }
  // Update team color
  function setTeamColor(color, id) {
    console.log(`Actualizar: ${color}, ${id}`)
    const updateTeams = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    })
    setTeams(updateTeams)
  }
  // create Team
  function createTeam(newTeam) {
    console.log(newTeam)
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }
  // return "page"
  return (
    <div>
      <Header />
      {showForm && <Form teams={teams.map((team) => team.title)}
        registerColab={registerColab}
        createTeam={createTeam}

      />}
      <MyOrg changeShow={changeShow} />
      {teams.map((team, index) => <Team teamData={team} key={index}
        colaborators={colaborators.filter(colaborator => colaborator.team === team.title)}
        deleteColab={deleteColab}
        setTeamColor={setTeamColor}
      />)
      }
      <Footer />
    </div>
  );
}

export default App;
