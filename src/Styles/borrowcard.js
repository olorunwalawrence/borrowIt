import Style from 'styled-components';

export const BorrowContainer = Style.div`
height:auto;
width:auto;
font-size:0.8rem;
`;

export const ChipContainer = Style.div`
  
`;

export const BorrowWrapper = Style.div`
height:auto;
border-radius:10px;
Background:${props => props.background};
color:${props => props.color};
font-size:inherit;
width:100%;
padding:5px 5px;
`;
export const Chip = Style.div`
border-radius:20px;
`;
export const Img = Style.img`
margin-left:40px;
margin-bottom:0.5rem;
`;
export const FirstCircle = Style.div`
width:2rem;
height:2rem;
background:red;
border-radius:100px;
position: relative;
left: 20px;
}
`;
export const SecondCircle = Style.div`
width:2rem;
height:2rem;
background:gold;
border-radius:100px;
`;
export const Span = Style.span`

`;

export const Top = Style.div`
display:${props => props.display};
justify-content:space-between;

`;
export const Para = Style.p`

`;
export const Dash = Style.div`
background:#f4f6f8;

width:50px;
border-radius:15px;
height:8px;
`;
export const cardFooter = Style.div`

`;
export const Div = Style.div`
display:${props => props.display};
width: ${props => props.width};
justify-content:${props => props.justifyContent};
margin-left:${props => props.marginLeft};
flex:${props => props.flex};
padding:${props => props.padding};
margin-Right:${props => props.marginRight};
margin-top:${props => props.marginTop};
height:${props => props.height};
background:${props => props.bgcolor};
margin:${props => props.margin};
position:${props => props.position};
top:${props => props.top};
padding-top:${props => props.paddingTop};
border-bottom:${props => props.borderBotton}
border : ${props => props.border};

@media  only screen and (max-width:360px){
  justify-content:${props => props.mediaJustify};
  flex:${props => props.mediaflex};
}

`;
export const Date = Style.div`
margin-right: ${props => props.marginRight};
padding-right:10px

@media  only screen and (max-width:360px){
  padding-right:5px
}

`;
