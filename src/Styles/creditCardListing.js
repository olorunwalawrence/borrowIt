import Style from 'styled-components';

export const Container = Style.div``;
export const wrapper = Style.div``;
export const wrapperContainer = Style.div`
display:${props => props.display};
background:${props => props.background};
height: ${props => props.height};
width:${props => props.width};
margin: ${props => props.margin};
position:${props => props.position};
top:${props => props.top};
`;
export const BannerText = Style.div`

`;
export const subNavWrapper = Style.div`
margin:1px auto;
width:93%;
height:60px
background:#e2e7ee;
position:relative;
top:107px;
border-top: 1px solid #7e93ae;
display:flex
`;

export const subNav = Style.div`
flex: ${props => props.flex};
justify-content:center;
display:flex;
color:#7e93ae;
font-weight:500;
font-size:17px;
text-transform:uppercase;
margin-top:12px
`;

export const Div = Style.div`
width:${props => props.width};
height:${props => props.height};
background:${props => props.background};
margin-left:${props => props.marginLeft};
margin-top:${props => props.marginTop};
color:${props => props.color};
font-weight:${props => props.fontWeight};
padding-top:${props => props.paddingTop};
text-align:${props => props.textAlign};
display:${props => props.display};
justify-content:${props => props.justifyContent};
margin-right:${props => props.marginRight};
margin-bottom:${props => props.marginBottom};
position:${props => props.position};
top:${props => props.top}


`;

export const BtnAction = Style.div`
flex:1;
margin-left:20px;
`;
export const PageTitle = Style.h1`
flex:1
margin-left:40px;
padding-top:60px;
color:#3c4d6b;

`;

export const Banner = Style.div`
 background-image: url(https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2016/09/original6.jpg?w=1500&h=576&crop=1);
height:450px;
background-repeat:no-repeat;
margin:0px;
`;
export const Img = Style.img`
`;

export const CardContainer = Style.div`
background:#fff;
height:auto;
width:93%;
margin:1px auto;
position:relative;
top:400px

`;

export const cardWrapper = Style.div`


`;
export const Card = Style.div`
background:#e2e7ee;
height:auto;
width:390px;
border:border-top: 1px solid #7e93ae;
margin-top:55px
`;
export const content = Style.div``;
export const contentHeader = Style.h3`
text-align:left;
margin-top:30px;
margin-bottom:30px;
margin-left:32px;
color: #3c4d6b;
cursor:pointer;
&:hover:{
    color:red
}
`;

export const UL = Style.ul``;
export const LI = Style.li`
list-style-type:none;
margin-left:-2px;
    padding-bottom: 10px;
    margin-bottom: 8px;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    color: #778191;
`;
