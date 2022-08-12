import styled from 'styled-components';

export const Box = styled.div`
padding: 30px 20px;
background: black;
position: relative;
bottom: 0;
display: flex;



@media (max-width: 1000px) {
	padding: 10px 20px;
   
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
    align-items: relative;
	justify-content: center;
	max-width: auto;
	margin: 0 auto;
    
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;
text-align: center;
padding-right: 20px;
`;

export const Row = styled.div`
display: flex;
justify-content:center;
grid-template-columns: repeat(auto-fill,
						minmax(10px, 1fr));
grid-gap: 10px;


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(10px, 1fr));
                        grid-gap: 10px;
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 1px;
text-decoration: none;
width: 20px;
height: 20px;
position: center;
display: flex;
align-items: center;
&:hover {
	color: #F4F9FF;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
position: relative;
`;
export const Copy = styled.p`
display: flex;
textAlign: "center", 
flex-direction: "column",
font-size: 14px;
color: #fff;
position: relative;
padding-bottom: 20px;
@media (max-width: 1000px) {
padding-bottom: 50px;
margin-top: 5px;
}
`;
