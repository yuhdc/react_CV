import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Nav(props) {
    return (
        <StyledNav>
            <h1>
                <NavLink activeClassName='activeNavLin' className="nav-link" to="/"> Resume</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink activeClassName='activeNavLin' className="nav-link" to="/Home"> 1. About us</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='activeNavLin' className="nav-link" to="/work"> 2. Our work</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='activeNavLin' className="nav-link" to="/contact"> 3. Contact</NavLink>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content:space-between ;
align-items: center;
padding: 1rem 10rem;
a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style-type: none;
}
li{
    padding-left: 10rem;
    position: relative;
}
#logo{
    font-size: 1.5rem;
    font-family: "Lobster",cursive;
    font-weight: lighter;
}
`;

export default Nav;