import React from "react";

import NavList from "../NavList/NavList.component";

import { NavContainer } from "./NavMobile.styles.jsx";

const NavMobile = ({ showNavList }) => {
	return (
		<NavContainer className={showNavList ? "show" : "hide"}>
			<NavList />
		</NavContainer>
	);
};

export default NavMobile;
