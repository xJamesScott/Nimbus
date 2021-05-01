import styled from 'styled-components'
import { theme, mq } from '../constants/theme'

const { colors } = theme

export const ContactForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2.4rem;

input {
    border: solid .1rem;
    border-radius: 1rem;
    height: 60px;
    width: 100%;
    padding-left: 2.5rem;

    &.full {
        grid-column: 1/3;
    }

    ::placeholder {
    opacity: 40%;
}
}

input[type=submit] {
    font-size: 2rem;
    letter-spacing: .2rem;
    color: ${colors.accent2};
    background-color: ${colors.accent3};
    padding: 0;
    width: 70%;
}
`;
