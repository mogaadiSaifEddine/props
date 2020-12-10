import './App.css';
import ProfilImage from './profile/65465563_2280138628869742_3010518860404097024_o.jpg'
import ProfileComp from './profile/ProfileComponent'

function App() {
  return (
    <div className="App">
   <ProfileComp fullName = 'Mogaadi saif eddine ' profession='student' bio='jeune diplomé en informatique' >
     <img src={ProfilImage} alt ='profil' ></img>
     </ProfileComp>  
    </div>
  );
}

export default App;
