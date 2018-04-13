import styled from 'styled-components';

export const MenuUl = styled.ul`
list-style:none;
float:left;
margin:0;
padding:0
`;

export const MenuLi = styled.li`
float:left;
font-size:20px;
padding:5px 20px;
`;
export const MenuSubUl = styled.ul`
display: ${props => props.open ? 'block' : 'none'};
position:absolute;
margin:0;
padding:0;
background:#fff;
padding:10px 5px;
border:1px solid #ddd;
margin-top:5px;
`;
export const MenuSubLi = styled.li`
font-size:20px;
padding:5px 20px;
list-style:none;
`;

