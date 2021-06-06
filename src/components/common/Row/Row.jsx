import React from "react";
import { RowContainerStyle, RowTitleStyle, RowContentStyle } from "./row.style";

const Row = ({ children }) => {
  return <RowContainerStyle>{children}</RowContainerStyle>;
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

RowTitle.defaultProps = {
  variant: "h4",
  component: "h1",
};

Row.Title = RowTitle;
Row.Content = RowContent;

export default Row;
