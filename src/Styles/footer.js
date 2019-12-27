import Style from 'styled-components';

export const Footer = Style.div`
height:93vh;
background:#343a40;
width:100%;

`;

export const FooterTopContainer = Style.div`
display:flex;
justify-content:space-around;
height:auto;
padding:50px;
`;
export const IMG = Style.img``;

export const Newsletter = Style.h3`
color:#778191;

`;

export const divider = Style.hr`
background:red;
margin:1px auto;
width:80%;
`;

export const secondSection = Style.div`
display:flex;

`;
export const SectionText = Style.div`
flex:1;
color:#778191;
text-align:justify;
margin:50px;

`;
export const sectiontextWrapper = Style.div`
display:flex;
color:#778191;
flex:1;
`;
export const AddressText = Style.p`
margin:50px;
padding:20px;
font-weight:700;
`;
export const Call = Style.p`
margin:50px;
padding:20px;
font-weight:700;
`;
export const Span = Style.span`
color:#778191;
font-size:40px;
font-weight:700;
`;
export const fontAwesome = Style.i``;
export const SectionNav1 = Style.div`
flex:1;
padding:10px;
`;
export const SectionNa2 = Style.div`
flex:1;
`;
export const sectonNav3 = Style.div`
flex:1;
`;
export const NavWrapper = Style.div`
display:flex;
margin-top:50px;
`;

export const SecondSection1 = Style.div`
flex:1;
`;
export const SecondSection2 = Style.div`
flex:1;
color:#778191;
`;

export const List = Style.li`
padding-top:10px;
`;

export const Littlefooter = Style.div`
height:7vh;
display:flex;
background:#16191e;
`;

export const Para = Style.p`
color:#778191;
text-align: ${props => props.align};
flex:1;
padding:10px 50px 0px 50px;


`;
