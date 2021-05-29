import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { List } from "@material-ui/core";

export const SocialStyle = styled.div`
  margin-top: 1rem;
`;

export const SocialFb = styled(FacebookIcon)`
  color: #1976d2;
`;

export const SocialTW = styled(TwitterIcon)`
  color: rgba(29, 161, 242, 1);
`;

export const SocialIns = styled(InstagramIcon)`
  color: #3671ab;
`;

export const SocialList = styled(List)`
  display: flex;
  justify-content: center;
  & > li {
    width: auto;
  }
`;
