import styled from 'styled-components'
import { theme, mq } from '../constants/theme'

const { colors } = theme

export const ContactForm = styled.form`
/* display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2.4rem; */

display: flex;
flex-wrap: wrap;
gap: 3rem;
width: 100%;
flex: 1 1 400px;

/* > * {
    flex: 1 1 100%;
} */

.half {
    flex: 1 0 46% !important;
}

input {
    border: solid .1rem;
    border-radius: 1rem;
    height: 60px;
    width: 100%;
    padding-left: 10%;

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
    padding: 0 2rem;
    /* width: 70%; */
}
`;
