import Style from 'styled-components';

export const TopNav = Style.div`
background:#15549A;
display:flex;
height:50px;
color:#83BCFA;
width:100%;
`;

export const WelcomeText = Style.p`
padding-top:12px;
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
display:flex;
justify-content:space-between;
@media (min-width:450px){

 
}
`;

export const Span = Style.span`
flex:1;
margin-left:30px;
`;

export const Container = Style.div`
text-align:right;
padding:15px 55px 0px 0px;

width:100%;
@media(min-width:500px){
  
}
`;
