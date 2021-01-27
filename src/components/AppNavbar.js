import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaYoutube, FaGithub, FaUtensils } from "react-icons/fa";

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand  style={{color: 'orange'}}><FaUtensils/> Pyszności</NavbarBrand>
            <NavbarBrand tag={Link} to="/" style={{color: '#ffca69'}}>Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/przepisy" style={{color: '#ffca69'}}>Lista przepisów</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://youtube.com" style={{color: 'red'}}><FaYoutube/> YouTube</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/"><FaGithub/> GitHub</NavLink>
                    </NavItem>
                </Nav>
                
            </Collapse>
        </Navbar>;
    }
}