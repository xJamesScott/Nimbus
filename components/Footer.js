import styled from 'styled-components'
import { theme, mq } from '../constants/theme'
import { SectionIndent } from '../components/SectionIndent'
import facebook from '../public/icons/facebook.svg'
import twitter from '../public/icons/twitter.svg'
import linkedin from '../public/icons/linkedin.svg'
import creditlogos from '../public/images/credit-logos.png'

const { colors } = theme

const FooterContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${colors.accent4};
    overflow: hidden;
    /* height: 435px; */
`;


const FooterContent = styled.div`
    display: flex;
    justify-content:center;
    justify-content: space-between;
    /* align-items: center; */
    gap: 2.5rem;
    flex-wrap: wrap;
    margin-bottom: 8rem;
    margin: 4rem auto;
    
    

`;

const FooterIndent = styled(SectionIndent)`
    
    
    &.footer {
        
        flex-direction: column;
    #copyright {
        align-self: flex-start;
        color: #7f7f7f;
    }
}
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    flex:0 0 250px;
    /* width: 200px; */

    > * {
        margin: 0;
        padding-right: 20%;
    }

    h3 {
        margin-bottom: 2.5rem;
    }

    a, p {
        font-size: 1.4rem;
        line-height: 2.5rem;
        letter-spacing: .1rem;
    }

    .social-icons > *{
        margin-right: 2rem;
    }
    
`;

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <FooterIndent
                    className="footer"
                >
                    <FooterContent>
                        <TextBox>
                            <h3>Contact</h3>
                            <p>Pipang Ltd, Griva Digeni,
                                81-83 Jacovides Tower, 1st Floor
                                1090 Picosia USA</p>
                        </TextBox>

                        <TextBox>
                            <h3>Services</h3>
                            <a href="/#overview">Overview</a>
                            <a href="/#features">Features</a>
                            <a href="/#technology">Technology</a>
                            <a className="disabled" href="">Terms & Conditions</a>
                            <a className="disabled" href="">Privacy</a>

                        </TextBox>

                        <TextBox>
                            <h3>Contact</h3>
                            <div className="text-box-content">
                                <p>info@nimbus.com</p>
                                <p>+1 844-721-7120 </p>
                                <div className="social-icons">
                                    <a href="https://facebook.com"><img src={facebook} /></a>
                                    <a href="https://linkedin.com"><img src={linkedin} /></a>
                                    <a href="https://twitter.com"><img src={twitter} /></a>
                                </div>
                            </div>
                        </TextBox>

                        <TextBox>
                            <h3>We Support</h3>
                            <img
                                src={creditlogos}
                            />
                        </TextBox>

                    </FooterContent>
                    <p id="copyright">&#169; {new Date().getFullYear()} Nimbus</p>
                </FooterIndent>
            </FooterContainer>
        </>
    )
}

export default Footer