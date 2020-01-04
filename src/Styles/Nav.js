import Style from 'styled-components';

export const NavContainer = Style.div`
display:flex;
@media(max-width:450px){
display:block;
}
`;
export const Container = Style.div`
flex:2;
@media(max-width:450px){
padding-top:0px;
}
`;

export const LogoCOntainer = Style.div`
flex:1;

@media(max-width:360px){
display:none;

}
`;

export const Img = Style.img`
padding-left: 80px;

`;

export const Span = Style.span`
color:#fff;
padding-right:40px;
`;

export const Show = Style.div`
 display: ${props => (props.show ? 'none' : 'block')};
`;

export const Opacity = Style.div`
background:#15549A;
height:400px;
z-index:10;
opacity:.0.5;
position:relative;
`;
