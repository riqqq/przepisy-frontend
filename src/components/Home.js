import React, { Component } from 'react';
import '../App.css'
import AppNavbar from './AppNavbar';
import {Container} from 'reactstrap';



class Home extends Component {
  render() {
    
    return (
      <div>
        <AppNavbar/>
        <Container>
        <div>
        <h1 style={{padding: "10px", fontFamily: "Arial", fontSize: "50px", textAlign: "center"}}>
          Witaj!</h1>
        <h1 style={{padding: "0px", fontFamily: "Arial", fontSize: "30px" }}>
          Wpisz swoje produkty a poniższa lista pokaże Ci jakie pyszności możesz przyrządzić. Smacznego!</h1>
        </div>
        </Container>
        
        <Container>
          <div
           className="App"><input type="text" placeholder="Wpisz posiadane produkty"/>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default Home;