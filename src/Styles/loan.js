import Style from 'styled-components';

export const FormContainer = Style.div`
width:80%;
margin:0px auto;
padding-top:30px;
background:#fff;
height:auto;
margin-top:30px;
margin-bottom:60px
`;
export const formWrapper = Style.div``;

export const Form = Style.form`

`;

export const Div = Style.div`
margin-top:${props => props.marginTop};
padding:${props => props.padding};
width:${props => props.width};
height:${props => props.height};
margin-left:${props => props.marginleft};
margin:${props => props.margin};
background:${props => props.background};
text-align:${props => props.align};
font-size :${props => props.size};
margin-bottom:${props => props.marginBottom};
color:${props => props.color}
`;
export const FormRow = Style.div``;

export const formGroup = Style.div``;
