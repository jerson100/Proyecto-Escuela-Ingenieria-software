import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const ItemLink = ({
  title,
  font,
  color,
  description,
  divider,
  handleClick,
  component,
}) => {
  return (
    <>
      <ListItem
        button
        divider={divider}
        onClick={(e) => handleClick && handleClick(e)}
        component={component}
      >
        <ListItemIcon>
          <Icon className={font} style={{ color }} />
        </ListItemIcon>
        <ListItemText primary={title} secondary={description && description} />
      </ListItem>
    </>
  );
};

ItemLink.propTypes = {
  title: PropTypes.string.isRequired,
  font: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  divider: PropTypes.bool,
  handleClick: PropTypes.func,
  component: PropTypes.string,
};

ItemLink.defaultProps = {
  title: "Default Text",
  font: "",
  color: "black",
  description: "",
  divider: true,
  handleClick: null,
  component: "li",
};

export default ItemLink;
