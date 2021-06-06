import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

export const HelloContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  font-size: 26px;
  border-radius: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 3rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row-reverse;
    font-size: 30px;
    text-align: left;
  }
`;

export const HelloImageContainer = styled(Grid)`
  line-height: 0;
  ${({ theme }) => theme.breakpoints.up("md")} {
    position: relative;
  }
`;

export const HelloContent = styled(Grid)`
  padding: 1rem 2rem 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3rem 2rem;
  }
`;

export const HelloImage = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 100%;
  margin-top: -10%;
  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const HelloTitle = styled(Typography)`
  font-size: 1em;
  margin-bottom: 0.5rem;
`;

export const HelloSubtitle = styled(Typography)``;
