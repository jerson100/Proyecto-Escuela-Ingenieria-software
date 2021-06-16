import React from "react";
import PropTypes from "prop-types";
import {
  RowContainerStyle,
  RowTitleStyle,
  RowContentStyle,
  RowPaperStyle,
} from "./row.style";

const Row = ({ children, isMargin, isPaper }) => {
  if (isPaper)
    return (
      <RowPaperStyle variant="outlined">
        <RowContainerStyle isMargin={isMargin}>{children}</RowContainerStyle>
      </RowPaperStyle>
    );
  return <RowContainerStyle isMargin={isMargin}>{children}</RowContainerStyle>;
};

const RowTitle = ({ children, component, variant }) => {
  return (
    <RowTitleStyle color="textPrimary" component={component} variant={variant}>
      {children}
    </RowTitleStyle>
  );
};

const RowContent = ({ children }) => {
  return <RowContentStyle>{children}</RowContentStyle>;
};

Row.propTypes = {
  isMargin: PropTypes.bool,
  isPaper: PropTypes.bool,
};

Row.defaultProps = {
  isMargin: true,
  isPaper: false,
};

RowTitle.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "subtitle1",
    "subtitle2",
  ]),
  component: PropTypes.string,
};

RowTitle.defaultProps = {
  variant: "h5",
  component: "h1",
};

Row.Title = RowTitle;
Row.Content = RowContent;

export default Row;
