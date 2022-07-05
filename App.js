import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Nav from './Navbar';
import Home from './Home';
import Main from './Main';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import About from './Pages/About';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Gallery from './Gallery';
import Top from './Top';
import Species from './Pages/Species';
import Fishingunit from './Pages/Fishingunit';
import Fishertype from './Pages/Fishertype';
import Fishingactarea from './Pages/Fishingactarea';
import Carousel from './Pages/Carousel'
import AdminNavbar from './Pages/AdminNavbar';

import Footer from './CSS/Footer';
import './CSS/Services.css';
import AllFishers from './Pages/AllFishers';
import AddFisher from './Pages/AddFisher';
import EditFisher from './Pages/EditFisher';
import FisherListComponent from './Pages/FisherListComponent';
import CreateFisherComponent from './Pages/CreateFisherComponent';
import UpdateFihserComponent from './Pages/UpdateFisherComponent';
// import EditFisher from './Pages/EditUser';ss


function App() {
  return (
    <Router>

   <div >
   
   <AdminNavbar />
     <Nav />
     <Carousel/>
     <CreateFisherComponent />
  
     
    
  
     <Switch>
      
     <Route path="/Home" component={Home}/>
     <Route path="/Home" component={Home}/>
     <Route path="/News" component={News}/>
     <Route path="/Contact"component={Contact}/>
     <Route path="/Services" component={Services}/>
     <Route path="/About" component={About}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Registration" component={Registration}/>
     <Route path="/Species" component={Species}/>
     <Route path="/Fishingunit" component={Fishingunit}/>
     <Route path="/Fishertype" component={Fishertype}/>
     <Route path="/Fishingactarea" component={Fishingactarea}/>
     {/* <Route path="/AllFishers" component={AllFishers}/> */}
     {/* <Route path="/AddFisher" component={AddFisher}/> */}
     {/* <Route path="/EditFisher" component={EditFisher}/> */}
     {/* step 1 */}
     <Route path="/CreateFisherComponent/:id" component={CreateFisherComponent}/>
    <Route path="/FisherListComponent" component={FisherListComponent}/>
    <Route path="/Update-Fisher/:id" component={UpdateFihserComponent}/>
     
     
     </Switch>
     <Footer />
    </div>

    </Router>

    
  
  );
}

export default App;
