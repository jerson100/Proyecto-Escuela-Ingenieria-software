import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const LoginLeft = styled.div`
  background-color: ${(props) =>
    props.theme.palette.bgSecondary[props.theme.palette.type || "light"]};
  padding: 1.5rem 1.5rem 3rem;
`;

export const LoginLogo = styled.img`
  height: 3rem;
  width: auto;
  object-fit: cover;
`;

export const LoginSvg = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginDescription = styled.div`
  text-align: center;
`;

export const LoginTitle = styled(Typography)`
  margin-bottom: 0.5rem !important;
  font-size: 20px !important;
`;

export const LoginSubtitle = styled(Typography)``;
