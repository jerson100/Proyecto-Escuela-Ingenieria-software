import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const RowContainerStyle = styled.section`
  ${({ isMargin }) => isMargin && `margin-bottom: 2rem;`}
`;
export const RowTitleStyle = styled(Typography)`
  margin-bottom: 1rem;
`;
export const RowContentStyle = styled.div`
  /* padding-top: 1.5rem; */
  /* margin-bottom: 1.5rem; */
`;

export const RowPaperStyle = styled(Paper)`
  padding: 1rem;
  height: 100%;
`;
