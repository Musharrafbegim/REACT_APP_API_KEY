import React from "react";
import { Link } from "react-router-dom";
//Styles

import { Wrapper, Content } from "./BreadCrum.styles";

const BreadCrum = ({ movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span> | </span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrum;