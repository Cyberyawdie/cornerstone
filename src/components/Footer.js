import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Copy,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		 <Row>{/*
		<Column>
			<Heading>About Us</Heading>			
			<FooterLink href="#">Mission</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Coming soon</FooterLink>
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Email</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>*/}
		</Row> 
        <Copy><p>&copy; 2022 Cornerstone Medical Training, LLC. All rights reserved.</p></Copy>
	</Container>
	</Box>
);
};
export default Footer;
