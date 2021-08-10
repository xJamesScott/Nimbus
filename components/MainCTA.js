import styled from 'styled-components'
import { theme, mq } from '../constants/theme'

const { colors } = theme

const Container = styled.div`
    margin-top: 3.9rem;
`;

const CTAButton = styled.button`
    color: ${colors.main};
    background-color: ${colors.accent2};
    height: 5rem;
    width: 16rem;
`;

const MainCTA = () => {
    return (
        <>
            <Container>
                <a href="/#contact">
                    <CTAButton>SIGN UP</CTAButton>
                </a>
            </Container>
        </>
    )
}

export default MainCTA;