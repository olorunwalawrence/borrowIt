import Style from 'styled-components';

export const AccountContainer = Style.div`
width:100%;
`;

export const Wrapper = Style.div`
flex:${props => props.flex};
display:${props => props.display};
justify-content:${props => props.justifyContent};
padding-top:${props => props.paddingTop};
padding:${props => props.padding};


@media only screen and (max-width:800px){
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}


@media only screen and (max-width:540px){
  display:${props => props.mediaDisplay};
  flex-direction:${props => props.mediaflexdirection};
  align-items:${props => props.mediaAlignItems};

}

`;

export const Card = Style.div`
width:30%;
@media only screen and (max-width:800px){
  width:46%;
}

@media only screen and (max-width:540px){
  width:90%;
}


`;

export const Div = Style.div`
`;

export const Header = Style.h2`
text-align:center;
text-transform:capitalize;
`;

export const Cover = Style.div`
width:80%;
margin:1px auto;
background:#fff;
height:auto;
`;
