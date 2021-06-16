import React from "react";
import PropTypes from "prop-types";
import ScheduledClass from "./components/ScheduledClass/ScheduledClass";
import { ClassListStyle } from "./scheduledClassList.style.js";

const ScheduledClassList = ({ classList, loading }) => {
  return (
    <ClassListStyle>
      {classList.map((c) => (
        <ScheduledClass {...c} key={c.idScheduledClass} />
      ))}
    </ClassListStyle>
  );
};

ScheduledClassList.propTypes = {
  classList: PropTypes.array,
  loading: PropTypes.bool,
};

ScheduledClassList.default = {
  classList: [],
  loading: false,
};

export default ScheduledClassList;
