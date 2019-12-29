import Style from 'styled-components';

export const CardContainer = Style.div`
font-family:Poppins, sans-serif;
`;
export const StyleWrapper = Style.div``;

export const wrapper = Style.div`
margin-left:40px;
`;
export const BannerWrapper = Style.div``;
export const banner = Style.div`
background:url("https://i.pinimg.com/originals/85/aa/49/85aa497382cb2a7d9f5164f426c93d5a.jpg");
height:450px;
width:100%;
background-repeat:no-repeat;
background-size:cover;
`;

export const SinglecardTop = Style.div`
display:flex;

`;

export const text = Style.div`
flex:1;
padding:30px;
text-align:justify;
font-weight:700;
color:#778191;
width:500px;
`;
export const header = Style.p`
color: #3c4d6b;
font-size:30px;
text-align:center;
margin-top:-30px;
`;
export const BtnAction = Style.div`
padding-top:12px;
flex:0.5;
background:#f51f8a;
width:150px
color:#fff;
font-weight:500;
text-align:center;
margin-top:20px;
height:50px;
`;

export const secondSection = Style.div`
margin-top:50px;
`;

export const Header = Style.h3`
margin-top:15px;
`;
export const FontAwesome = Style.i`
font-size:25px;
margin-right:30px
color:#10a874;
`;

export const Span = Style.span`
color: #778191;

`;

export const Tab = Style.div`
margin-top:100px;
border:1px solid #dee7f2;
`;

export const FlexibilitytWrapper = Style.div`
background:#eff4f9;
width:90%;
margin:1px auto;
   border:1px solid #dee7f2;
`;
export const flexibilyText = Style.p`
    font-size: 14px;
    font-style: initial;
    text-transform: uppercase;
    font-weight: 500;
    color: #7e93ae;
    flex:${props => props.flex};
    margin-left:${props => props.marginLeft}
    margin-top:20px;
`;

export const flexibilyPara = Style.p`
    font-size: 12px;
    font-style: initial;
    text-transform: uppercase;
    color: #7e93ae;
    margin-left:${props => props.marginLeft}
    margin-top:20px;
`;
export const flexibilyHeader = Style.h4`
margin:20px 0px 20px 54px;
`;
