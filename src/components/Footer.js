import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

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
        <FooterLink href="https://www.facebook.com/Cornerstone-Medical-Training-Center-107220402082805">
			<FontAwesomeIcon icon={faFacebook} size="lg"/>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/cornerstonemedicaltraining/">			
            <FontAwesomeIcon icon={faInstagramSquare} size="lg"/>			
			</FooterLink>
		</Row> 
        <Copy>&copy; 2022 Cornerstone Medical Training, LLC. All rights reserved.</Copy>
	</Container>
	</Box>
);
};
export default Footer;
