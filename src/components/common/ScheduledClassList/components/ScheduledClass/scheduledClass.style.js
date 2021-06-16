import { Icon, Paper } from "@material-ui/core";
import styled from "styled-components";

export const ClassContainer = styled(Paper)`
  padding: 0.7rem;
`;
export const ClassItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  transition: transform 200ms;
  ${(props) => props.theme.breakpoints.up("md")} {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const ClassTime = styled.time``;

export const ClassLink = styled(Icon)`
  font-size: 0.9rem;
`;

export const ClassIconContainer = styled.div`
  padding: 0.8rem;
  border-radius: 0.6rem;
  line-height: 0;
  position: relative;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
`;
