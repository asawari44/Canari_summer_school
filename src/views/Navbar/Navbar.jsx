import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav, Col } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import Image from "components/Image";
import NavItem from "components/NavItem";

import "./Navbar.scss";

const MyNavbar = ({ anchors, frontmatter, extraItems }) => {
  const { brand, imageFileName, menuText } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand='lg'
      fixed='top'
      expanded={expanded}
    >
      <Container>
        <Col lg={4} md={3} sm={6} xs={6} className='my-3'>
          <Image
            className='img-fluid d-block'
            fileName={imageFileName}
            alt={brand}
            onClick={handleBrandClick}
            size
          />
        </Col>
        <Navbar.Toggle onClick={toggleMenu} aria-label='Toggle navigation'>
          {menuText}
          <Icon iconName='BarsIcon' />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className='text-uppercase ml-auto'>
            {anchors.map(anchor => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object,
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  frontmatter: {},
  extraItems: null,
};

export default MyNavbar;
