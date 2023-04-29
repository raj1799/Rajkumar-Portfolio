import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { Collapse, Navbar, NavbarBrand, Nav, NavLink, NavItem, Row, Col, Container } from "reactstrap"
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import Logo from "../../Assest/image/img/logo.jpg"
const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)

    return (
        <>
            <Navbar className="py-2 bg-nav " expand="lg">
                <Container className="d-flex justify-content-between">
                    <div className="navbar-collapse d-flex flex-row justify-content-between ">
                        <NavbarBrand>
                            <div>
                                <img src={Logo} alt="logo" width={100} height={100} />
                            </div>
                        </NavbarBrand>
                        <button
                            aria-expanded={collapsed}
                            className="navbar-toggler navbar-toggler"
                            onClick={toggleNavbar}
                        >
                            <FiMenu color="white" size="24" />
                        </button>
                    </div>
                    <Collapse isOpen={!collapsed} navbar className="position-nav justify-content-end">
                        <div className="d-flex flex-column flex-lg-row justifty-content-start justifty-content-lg-between bg-service p-4 align-items-start align-items-lg-center">
                            <Nav className="nav-link-space d-flex flex-column flex-lg-row justify-content-around">
                                <NavItem className=" mx-3 mt-2 mt-lg-0">
                                    <a href="#" className="text-color nav-text">Home</a>
                                </NavItem >
                                <NavItem className="mx-3 mt-2 mt-lg-0">
                                    <a href="#about" className="text-color nav-text">About</a>
                                </NavItem>
                                <NavItem className="mx-3 mt-2 mt-lg-0">
                                    <a href="#skills" className="text-color nav-text">Skills</a>
                                </NavItem>
                                <NavItem className="mx-3 mt-2 mt-lg-0">
                                    <a href="#work" className="text-color nav-text">Experience</a>
                                </NavItem>
                                <NavItem className="mx-3 mt-2 mt-lg-0">
                                    <a href="#projects" className="text-color nav-text">Projects</a>
                                </NavItem>
                                <NavItem className="mx-3 mt-2 mt-lg-0">
                                    <a href="#contact" className="text-color nav-text">Contact</a>
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default Header;