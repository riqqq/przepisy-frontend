import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class PrzepisyList extends Component {
    constructor(props){
        super(props);
        this.state = {przepisy: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/przepisy')
            .then(response => response.json())
            .then(data => this.setState({przepisy: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/przepis/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPrzepisy = [...this.state.przepisy].filter(i => i._id !== id);
            this.setState({przepisy: updatedPrzepisy});
        })
    }

    render() {
        const {przepisy, isLoading} = this.state;

        if (isLoading){
            return <p>Loading...</p>;
        }

        const przepisyList = przepisy.map(przepis => {
            return <tr key={przepis._id}>
                <td style={{whiteSpace: 'nowrap'}}>{przepis.nazwa}</td>
                <td>{przepis.opis}</td>
                <td>{przepis.trudnosc}</td>
                <td>{przepis.wymaganeProdukty.join(", ")}</td>
                <td>{przepis.postedBy}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/przepisy/" + przepis._id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(przepis._id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/przepisy/new">Add Przepis</Button>
                    </div>
                    <h3>Lista przepisow</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Nazwa</th>
                                <th width="20%">Opis</th>
                                <th width="20%">Trudnosc</th>
                                <th width="20%">Wymagane produkty</th>
                                <th>Wstawiony przez</th>
                                <th width="10%">Akcje</th>
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

export default PrzepisyList;