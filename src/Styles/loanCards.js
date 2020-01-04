import Style from 'styled-components';

export const cardContainer = Style.div`
display:flex;
@media only screen and (max-width:800px){
font-size:13px;
}
@media only screen and (max-width:450px){
display:block;
}

`;
export const cards = Style.div`
flex:1;
color:blue;
height:100px
border-right:0.2px solid #778191;
display:flex;
justiffy-item:space-between;

@media only screen and (max-width:800px){
display:block;
height:auto;
padding-left:6%;

}
@media only screen and (max-width:450px){
display:block;
height:auto;
padding-left:37%;
border-bottom:0.2px solid #778191;
}

`;

export const Diviver = Style.div``;

export const LoanRate = Style.h1`
margin-top:20px;
color:#778191;

@media only screen and (max-width:800x) {
margin-top:5px;
font-size:30px;
}
@media only screen and (max-width:450px) {
margin-top:5px;
font-size:40px;
}
`;
export const RateTitle = Style.small`
color:#778191;
font-size:16px;
@media only screen and (max-width:800px) {
font-size:17px;
  width:70%;
}
`;
export const FontAwesome = Style.i`
font-size:48px;
color:#17a2b8;
padding:25px 70px 0px 30px;

@media only screen and (max-width:800px) {
  font-size:30px;
  width:70%;
 
}
@media only screen and (max-width:450px) {
  font-size:30px

}

`;
