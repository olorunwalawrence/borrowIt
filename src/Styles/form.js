import Style from 'styled-components';

export const Input = Style.input`
padding:${props => props.padding};
width:${props => props.width};
border:${props => props.border};
`;

export const Button = Style.button`
width:${props => props.width};
background: ${props => props.background};
color: ${props => props.color};
font-weight: ${props => props.fontWeight};
padding:${props => props.padding};
text-align:${props => props.align};
border:${props => props.border};
`;
export const Form = Style.form`
`;
