import Style from 'styled-components';

export const Card = Style.div`
width:${props => props.width};
height: ${props => props.height};
border: ${props => props.border};
margin-left: ${props => props.marginLeft};
box-shadow: ${props => props.BoxShadow};
display:${props => props.display};
background:${props => props.background}
margin:${props => props.margin}
flex:${props => props.flex}
font-family:${props => props.fontFamily};
margin-bottom:${props => props.marginBottom}
`;

export const img = Style.i`
font-size:48px;
position:relative;
left:190px;
margin-bottom:30px;
padding-top:30px;
color:#17a2b8

`;
export const CardContainer = Style.div`
display:${props => props.display}
margin:${props => props.margin}
width:${props => props.width}
justify-content:${props => props.justifyContent};

`;
