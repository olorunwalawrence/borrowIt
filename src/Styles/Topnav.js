import Style from 'styled-components';

export const TopNav = Style.div`
background:#15549A;
display:flex;
height:50px;
color:#83BCFA;

`;
export const Container = Style.div`
display:flex;
padding-top:15px
width:100%;
@media(min-width:500px){
  
}

`;

export const WelcomeText = Style.p`
@media(max-width:450px){
  display:${props => props.Display}
}
@media(max-width:800px){
  width: 400px;
    padding-left: 30px;
}
@media(min-width:1000px){
width:700px
  padding-left: 30px;
}
;
`;

export const para = Style.div`
@media (min-width:450px){

 
}
`;

export const Span = Style.span`
flex:1;
padding-left:30px;


`;
