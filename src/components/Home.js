import React, { Component } from 'react';
import '../App.css'
import AppNavbar from './AppNavbar';
import {Container} from 'reactstrap';
import SearchBar from './SearchBar';
import { Table } from 'reactstrap';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {przepisy: [] };
  }

  onSearchSubmit = (term) => {
    fetch(`/api/przepisy/${term}`)
      .then(response => response.json())
      .then(data => this.setState({przepisy: data}));
}

  render() {
    const {przepisy} = this.state;

    const przepisyList = przepisy.map(przepis => {
      return <tr key={przepis._id}>
          <td style={{whiteSpace: 'nowrap'}}>{przepis.nazwa}</td>
          <td>{przepis.opis}</td>
          <td>{przepis.trudnosc}</td>
          <td>{przepis.wymaganeProdukty.join(", ")}</td>
          <td>{przepis.postedBy}</td>
      </tr>
  });
    
    return (
      <div>
        <AppNavbar/>
        <Container>
        <div>
        <h1 style={{padding: "10px", fontFamily: "Arial", fontSize: "50px", textAlign: "center"}}>
          Witaj!</h1>
        <h1 style={{padding: "0px", fontFamily: "Arial", fontSize: "30px" }}>
          Wpisz posiadane produkty, naciśnij enter a poniższa lista pokaże Ci jakie pyszności możesz przyrządzić. Smacznego!</h1>
        </div>
        </Container>
        
        <Container>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </Container>

        <Container fluid>
                    <h3>Lista przepisow</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Nazwa</th>
                                <th width="20%">Opis</th>
                                <th width="20%">Trudnosc</th>
                                <th width="20%">Wymagane produkty</th>
                                <th>Wstawiony przez</th>
                            </tr>
                        </thead>
                        <tbody>
                            {przepisyList}
                        </tbody>
                    </Table>
                </Container>
      </div>
    );
  }
}

export default Home;