import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const CourseNumber = styled(Typography)`
  font-size: 30px;
`;

export const CourseDescription = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;
