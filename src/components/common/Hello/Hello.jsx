import PropTypes from "prop-types";
import React from "react";
import {
  HelloContainer,
  HelloContent,
  HelloImageContainer,
  HelloImage,
  HelloSubtitle,
  HelloTitle,
} from "./hello.style";

const Hello = ({ image, title, description }) => {
  return (
    // <HelloContainer container>
    //   <HelloImageContainer item>
    //     <HelloImage src={image} alt={title} />
    //   </HelloImageContainer>
    //   <HelloContent item>
    //     <HelloTitle variant="h5" color="textPrimary" component="h1">
    //       {title}
    //     </HelloTitle>
    //     <HelloSubtitle variant="subtitle2" color="textSecondary" component="p">
    //       {description}
    //     </HelloSubtitle>
    //   </HelloContent>
    // </HelloContainer>
    <HelloContainer container>
      <HelloImageContainer item md={4}>
        <HelloImage src={image} alt={title} />
      </HelloImageContainer>
      <HelloContent item md={8}>
        <HelloTitle variant="h5" color="textPrimary" component="p">
          {title}
        </HelloTitle>
        <HelloSubtitle variant="subtitle2" color="textSecondary" component="p">
          {description}
        </HelloSubtitle>
      </HelloContent>
    </HelloContainer>
  );
};

Hello.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  url: "",
  title: "Ingrese un title",
  description: "Ingrese una descripción",
};

export default React.memo(Hello);
