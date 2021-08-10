import styled from 'styled-components';
import { theme, mq } from '../constants/theme';
import Logo from '../public/images/logo.svg';
import Image from 'next/image';
import { useState } from 'react';

const { colors } = theme;

const NavWrap = styled.div`
    width: 100%;
    /* display: flex; */
    position: relative;
    
    @media ${mq.tablet.narrow.max} {
        .desktop-nav{
            display: none;
        }
        .mobile-nav {
            display: flex;
        }
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5.8rem;
    color: ${colors.accent2};
    width: 100%;
    text-align: center;

    * {
        color: ${colors.accent2};
    }
`;

const NavLogo = styled.div`
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
    /* width: 100%; */
    justify-self: flex-end;
    color: ${colors.accent2};
`;

const LoginContainer = styled.div`
`;

const LanguageContainer = styled.div`
`;

const LoginButton = styled.button`
    background-color: transparent;
    border: solid .2rem ${colors.accent2};
    border-radius: .5rem;
    width: 17rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.22);
    text-shadow: 0px 0px 12px rgba(0,0,0,0.5);
`

const MobileNav = styled.div`
    display: none;
    /* position: fixed; */
    left: 0;
    /* right: 0; */
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    justify-self: flex-end;
    margin-left: auto;
    position: relative;


    svg {
        fill: ${colors.main};
        margin-top: 2rem;
        z-index: 1;
        position: relative;
        margin: auto;
        cursor: pointer;
    }

    .button-wrap {
        position: fixed;
        top: 10%;
        height: 50px;
        width: 50px;
        background: ${colors.accent2};
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .mobile-modal {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: rgb(0, 0, 0, .5);
        left: 0;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transition: opacity .25s ease;

        &.show {
            opacity: 1;
            visibility: visible;
        }
    }

    .mobile-nav-links {
        background: ${colors.accent2};
        max-width: 50%;
        min-width: 300px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${colors.main};
        text-align: left;
        gap: 2rem;
        
        .mobile-link::after {
            content: '';
            position: absolute;
            transition: opacity .35s ease;
            opacity: 0;
            left: 0;
            top: 0%;
            width: 100%;
            height: 2px;
            background: ${colors.main};
            transform: scaleX(0);   
        }
        
        .mobile-link::before{
            content: '';
            position: absolute;
            transition: opacity .35s ease;
            opacity: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: ${colors.main};
            transform: scaleX(0); 
        }

        a:hover::after, a:hover::before{
            transform: scaleX(1);
            opacity: 1;
        }   

        > * { 
            
            margin-left: 4rem;
            font-size: 3.2rem;
            line-height: 6rem;
            width: fit-content;
            
        }
    }
`;

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <NavWrap>
            {/* desktop banner */}

            <NavContainer
                className="desktop-nav"
            >
                <NavLogo>
                    <img src={Logo} alt="" />
                </NavLogo>
                <NavLinks>
                    <a className="link" href="/#overview">OVERVIEW</a>
                    <a className="link" href="/#features">FEATURES</a>
                    <a className="link" href="/#technology">TECHNOLOGY</a>
                    <a className="link" href="/#contact">CONTACT</a>
                </NavLinks>
                <LoginContainer>
                    <a href="/#contact">
                        <LoginButton>GET STARTED</LoginButton>
                    </a>
                </LoginContainer>
            </NavContainer>

            {/* mobile / tablet banner */}

            <MobileNav
                className="mobile-nav"
            >
                <div className="button-wrap">
                    <svg
                        onClick={() => setShowModal((showModal) => !showModal)}
                        height="32px" id="Layer_1" style={{ enableBackground: 'new 0 0 32 32' }} version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
                </div>
                <div className={showModal ? "mobile-modal show" : "mobile-modal"}>
                    <div className="mobile-nav-links">
                        <a
                            onClick={() => setShowModal((showModal) => !showModal)} className="mobile-link" href="/#overview">
                            OVERVIEW
                        </a>

                        <a
                            onClick={() => setShowModal((showModal) => !showModal)} className="mobile-link"
                            className="mobile-link" href="/#features">
                            FEATURES
                        </a>

                        <a
                            onClick={() => setShowModal((showModal) => !showModal)} className="mobile-link"
                            className="mobile-link" href="/#technology">
                            TECHNOLOGY
                        </a>

                        <a
                            onClick={() => setShowModal((showModal) => !showModal)} className="mobile-link"
                            className="mobile-link" href="/#contact">
                            CONTACT
                        </a>
                    </div>
                </div>

            </MobileNav>
        </NavWrap>
    )
}

export default NavBar;