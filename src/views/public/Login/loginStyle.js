import { Container } from "@material-ui/core";
import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: ${(props) =>
    props.theme.palette.bgPrimary[props.theme.palette.type || "light"]};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const LoginContent = styled(Container)`
  z-index: 2;
`;

export const LoginRight = styled.div`
  background-color: ${(props) =>
    props.theme.palette.bgThrid[props.theme.palette.type || "light"]};
  padding: 5rem 1.5rem;
  height: 100%;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const LoginCircle = styled.div`
  background-color: #0000001a;
  position: absolute;
  left: ${(props) => props.location.x};
  top: ${(props) => props.location.y};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  z-index: 1;
`;

LoginCircle.defaultProps = {
  size: {
    width: "40vw",
    height: "40vw",
  },
  location: {
    x: "0",
    y: "0",
  },
};
