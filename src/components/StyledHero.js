import styled from 'styled-components';
import defaultImg from '../images/room-3.jpeg'
const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img || defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
    `;
//background: url(${props => props.img}) center/cover no-repeat;
    export default StyledHero
