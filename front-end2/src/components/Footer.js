import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`
margin-top: 1%;
color: white;
font-family: 'cookie', cursive;

`

const Footer = (props) => {




    return (
        <StyledFooter>
        <div className="footer">
            <div className="footer-border">
                <div className="footer-border-radius-left footer-bg">
                </div>
                
            </div>
            <div className="footer-bar">
                <a>find a meal</a>
                &nbsp;•&nbsp;

                <a>plan a meal</a>
                &nbsp;•&nbsp;

                <a>view a sample</a>
                &nbsp;•&nbsp;

                <a>group meal ideas</a>
                &nbsp;•&nbsp;

                <a>(in)frequently asked questions</a>
                &nbsp;•&nbsp;

                <a>our story</a>
                &nbsp;•&nbsp;

                <a>contact us</a>

                <br/>
                <span>Copyright 2010-2021</span>
                &nbsp;•&nbsp;

                <a>privacy policy</a>
                &nbsp;•&nbsp;

                <a>terms of use</a>
                
                
            </div>

            <div>

            </div>
        </div>
        </StyledFooter>
    )
}
export default Footer;