import React from "react";
import Row from "../../../../../../components/common/Row/Row";

import ScheduledClassList from "../../../../../../components/common/ScheduledClassList/ScheduledClassList.jsx";

const classList = [
  {
    idScheduledClass: 1,
    user: {
      name: "Juan Pedro",
      urlImage:
        "https://toppng.com/uploads/preview/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png",
      link: "",
    },
    title: "Historia de los incas",
    date: "156295962",
    icon: "fa fa-plus-circle",
    bg: "#04ff9730",
    color: "#04ff97",
    isLink: true,
  },
  {
    idScheduledClass: 2,
    user: {
      name: "Juan Pedro",
      urlImage:
        "https://toppng.com/uploads/preview/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png",
      link: "",
    },
    title: "Càculo diferencial e integral II",
    date: "156295962",
    icon: "fa fa-plus-circle",
    color: "#00ffee",
    isLink: true,
  },
  {
    idScheduledClass: 3,
    user: {
      name: "Juan Pedro",
      urlImage:
        "https://toppng.com/uploads/preview/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png",
      link: "",
    },
    title: "Historia de los incas",
    date: "156295962",
    icon: "fa fa-phone",
    color: "#04ff97",
    isLink: true,
  },
  {
    idScheduledClass: 4,
    user: {
      name: "Juan Pedro",
      urlImage:
        "https://toppng.com/uploads/preview/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png",
      link: "",
    },
    title: "Historia de los incas",
    date: "156295962",
    icon: "fa fa-book",
    color: "#ff00d4",
    isLink: true,
  },
];

const ScheduledClass = () => {
  return (
    <Row>
      <Row.Title variant="h5">Clases programadas</Row.Title>
      <Row.Content>
        <ScheduledClassList classList={classList} loading={false} />
      </Row.Content>
    </Row>
  );
};

export default ScheduledClass;
