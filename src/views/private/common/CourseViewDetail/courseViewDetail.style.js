import { Dialog } from "@material-ui/core";
import styled from "styled-components";

export const CourseViewDetailStyle = styled(Dialog)`
  & .MuiPaper-root.MuiDialog-paper {
    background-color: ${(props) => {
      return props.theme.palette.bgBody[props.theme.palette.type];
    }};
  }
`;

export const ContentDetailStyle = styled.div`
  padding-top: 1rem;
`;
