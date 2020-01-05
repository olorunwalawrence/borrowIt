import Style from 'styled-components';

export const container = Style.div`

`;
export const Div = Style.div``;

export const wrapper = Style.div`
width:${props => props.width};
margin:${props => props.margin};
`;

export const Header = Style.h2`
margin-bottom:1.5rem
`;

export const Input = Style.input`
height:100px;
width:200px;
`;
