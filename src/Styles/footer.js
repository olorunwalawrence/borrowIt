import Style from 'styled-components';

export const Footer = Style.div`

background:#343a40;
width:100%;
margin:1px auto;
`;
export const wrapper = Style.div`
display:flex;
justify-content:space-between;
width:70%;
`;

export const footerWrapper = Style.div`
width:80%;
margin:0px auto;
display:flex;
justify-content:space-between;
`;

export const FooterTopContainer = Style.div`
display:flex;
justify-content:space-between;
height:auto;
padding:50px 0px;
width:80%;
margin:0px auto;
`;
export const IMG = Style.img``;

export const Newsletter = Style.h3`
color:#778191;
width:45%;

`;

export const divider = Style.hr`
background:#778191;
margin:1px auto;
width:80%;
`;

export const secondSection = Style.div`
display:flex;
width:80%;
margin:1px auto;
padding-bottom:50px;

`;
export const SectionText = Style.div`
flex:1;
color:#778191;
text-align:justify;
margin:50px 30px 10px 0px

`;
export const sectiontextWrapper = Style.div`
display:flex;
color:#778191;
flex:1;
`;
export const AddressText = Style.p`
font-weight:700;
margin-right:50px;
`;
export const Call = Style.p`
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
`;
export const SectionNa2 = Style.div`

`;
export const sectonNav3 = Style.div`

`;
export const NavWrapper = Style.div`
display:flex;
margin-top:50px;
`;

export const SecondSection1 = Style.div`
width:60%;
`;
export const SecondSection2 = Style.div`
width:40%;
color:#778191;
`;

export const List = Style.li`
padding-bottom:10px;
`;

export const Littlefooter = Style.div`
max-height:3rem
display:flex;
background:#16191e;
margin:-1px auto;
`;

export const Para = Style.p`
color:#778191;
text-align: ${props => props.align};
padding-top:10px;



`;
