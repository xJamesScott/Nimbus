import styled from 'styled-components'
import { theme, mq } from '../constants/theme'
import Logo from '../public/images/logo.svg'
import Image from 'next/image'

const { colors } = theme

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


    
`

const NavBar = () => {
    return (
        <NavContainer>
            <NavLogo>
                <img src={Logo} alt="" />
            </NavLogo>
            <NavLinks>
                <a href="">OVERVIEW</a>
                <a href="">FEATURES</a>
                <a href="">TECHNOLOGY</a>
                <a href="">CONTACT</a>
                {/* <a href="">SIGNUP</a> */}
            </NavLinks>
            <LoginContainer>
                <LoginButton>GET STARTED</LoginButton>
            </LoginContainer>
        </NavContainer>
    )
}

export default NavBar;