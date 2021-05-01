import styled from 'styled-components'
import { theme, mq } from '../constants/theme'

const { colors } = theme

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 3rem;
    &.features {
        margin-top: 6.5rem;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-basis: 350px;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-grow: 2;

    &.technology {
        align-items: flex-start;
        gap: 1.9rem;
        
        > * {
        padding: 3.4rem;
    }
    }

`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 350px;
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 80%;
    background-color: ${colors.accent2};
    border-radius: 1rem;
    box-shadow: -1px 21px 44px 4px rgba(0,0,0,0.2);
    transform: translateY(-50%);
    padding: 3rem;
    gap: 2rem;

    * {
        margin: 0;
    }

    a {
        color: ${colors.main};
    }
`;

export const GiantText = styled.div`
    font-size: 10rem;
    font-weight: 800;
    color: ${colors.mainText};
    opacity: 8%;
`;

export const CardTextTech = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.9rem;
    transform: translateY(-6rem);

    * {
        margin: 0;
    }

    img {
        height: 80px;
        width: 80px;
    }
`;