import styled from 'styled-components'
import homeBanner from "../public/images/homeBanner.png"
import { theme, mq } from '../constants/theme'

const { colors } = theme


export const Section = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

h1 {
    text-align: center;
    letter-spacing: .5rem;
    margin-top: 5.4rem;
}

h3 {
    text
}
&.main-banner {
    height: 782px;
    flex-direction: column;
    justify-content: flex-start;
    content: "";
    height: 782px;
    width: 100%;
    background: rgb(213,32,71);
    background: rgb(213,32,71);
    background: linear-gradient(90deg, rgba(213,32,71,.8) 0%, rgba(238,61,27,.8) 100%);

}
&.main-banner > * {
    color: ${colors.accent2};
    text-align: center;
}

&.main-banner::after {
    /* content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(213,32,71,1) 0%, rgba(237,76,92,1) 100%);
    position: absolute;
    /* opacity: 80%; */
    z-index: 0; */
}

.main-banner-img {
    /* position: absolute;
    top: 0;
    left: 0; */
    /* height: 782px; */
    /* height: 100%; */
}

`;

export const HomeBannerImg = styled.img`
    height: 782px;
    width: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    /* height: 782px; */
`;

export const SectionIndent = styled.div`
    width: 80%;
`;


