import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form as FORM, FormGroup as FORMGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class PrzepisEdit extends Component {
    emptyPrzepis = {
        nazwa: '',
        opis: '',
        trudnosc: '',
        wymanageProdukty: '',
        postedBy: ''
    };

    constructor(props){
        super(props);
        this.state = {
            item: this.emptyPrzepis
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if(this.props.match.params.id !== 'new'){
            const przepis = await (await fetch(`/api/przepis/${this.props.match.params.id}`)).json();
            this.setState({item: przepis});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/przepis', {
            method: (item._id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/przepisy');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item._id ? 'Edit Przepis' : 'Add Przepis'}</h2>

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <FORM onSubmit={this.handleSubmit}>
                    <FORMGroup>
                        <Label for="nazwa">Nazwa</Label>
                        <Input type="text" name="nazwa" id="nazwa" value={item.nazwa || ''} onChange={this.handleChange} autoComplete="nazwa"/>
                    </FORMGroup>
                    <FORMGroup>
                        <Label for="opis">Opis</Label>
                        <Input type="text" name="opis" id="opis" value={item.opis || ''} onChange={this.handleChange} autoComplete="opis"/>
                    </FORMGroup>
                    <FORMGroup>
                        <Label for="trudnosc">Trudnosc</Label>
                        <Input type="text" name="trudnosc" id="trudnosc" value={item.trudnosc || ''} onChange={this.handleChange} autoComplete="trudnosc"/>
                    </FORMGroup>
                    <FORMGroup>
                        <Label for="wymaganeProdukty">Wymagane produkty</Label>
                        <Input type="text" name="wymaganeProdukty" id="wymaganeProdukty" value={item.wymaganeProdukty || ''} onChange={this.handleChange} autoComplete="wymaganeProdukty"/>
                    </FORMGroup>
                    <FORMGroup>
                        <Label for="postedBy">Autor</Label>
                        <Input type="text" name="postedBy" id="postedBy" value={item.postedBy || ''} onChange={this.handleChange} autoComplete="postedBy"/>
                    </FORMGroup>
                    <FORMGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/przepisy">Cancel</Button>
                    </FORMGroup>
                </FORM>
            </Container>
        </div>
    }
}

export default withRouter(PrzepisEdit);