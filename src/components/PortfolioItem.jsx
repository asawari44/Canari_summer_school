import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";

import "./PortfolioItem.scss";

const PortfolioItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  url,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  return (
    <>
      <Col md={6} sm={6} className='portfolio-item'>
        <a href={url} className='portfolio-link'>
          <Image
            className='img-fluid'
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className='portfolio-hover' />
        </a>
        <div className='portfolio-caption'>
          <h4>{header}</h4>
          {subheader ? <p className='text-muted'>{subheader}</p> : null}
        </div>
      </Col>
    </>
  );
};

PortfolioItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  url: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  url: "",
  extraInfo: null,
};

export default PortfolioItem;
