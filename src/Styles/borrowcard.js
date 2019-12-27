import Style from 'styled-components';

export const BorrowContainer = Style.div`
height:200px;
max-width:320px;
font-size:13px;

`;

export const BorrowWrapper = Style.div`
height:auto;
border-radius:10px;
Background:${props => props.background};
color:${props => props.color};
font-size:13px
`;
export const Chip = Style.div``;
export const Img = Style.img`
margin-left:40px;
margin-bottom:10px;
`;
export const FirstCircle = Style.div`
width:40px;
height:40px;
background:red;
border-radius:100px;
position: relative;
left: 20px;
}
`;
export const SecondCircle = Style.div`
width:40px;
height:40px;
background:green;
border-radius:100px;
`;
export const Span = Style.span`
font-weight:500;
`;

export const Top = Style.div`
display:${props => props.display};
justify-content:space-between
`;
export const Para = Style.p`
margin: ${props => props.margin};
padding-top:${props => props.marginTop}

`;
export const Dash = Style.div`
background:red;
width:50px;
border-radius:15px;
height:8px;
`;
export const cardFooter = Style.div`
margin:10px;
padding-bottom:10px
`;
export const Div = Style.div`
display:${props => props.display};
width: ${props => props.width};
justify-content:${props => props.justifyContent};
margin-left:${props => props.marginLeft};
flex:${props => props.flex};
padding:${props => props.padding};
margin-Right:${props => props.marginRight};
margin-top:${props => props.marginTop}
`;
export const Date = Style.div`
margin-right: ${props => props.marginRight};

`;
