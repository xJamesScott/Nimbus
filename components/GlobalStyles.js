import { createGlobalStyle } from 'styled-components';
import { theme, mq } from '../constants/theme';

export const GlobalStyles = createGlobalStyle`
    
    
    @media ${mq.phone.wide.max} {
        .main-title {
            font-size: 4.2rem;
        }
    }
`;

