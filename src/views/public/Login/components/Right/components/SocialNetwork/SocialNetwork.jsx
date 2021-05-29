import { ListItem } from "@material-ui/core";
import React from "react";
import { SocialStyle } from "../socialStyle";
import { SocialFb, SocialTW, SocialIns, SocialList } from "../socialStyle.js";
import schoolConst from "../../../../../../../const/school";

const SocialNetwork = () => {
  return (
    <SocialStyle>
      <SocialList>
        <ListItem>
          <a href={schoolConst.socialBar.fb}>
            <SocialFb />
          </a>
        </ListItem>
        <ListItem>
          <a href={schoolConst.socialBar.tw}>
            <SocialTW />
          </a>
        </ListItem>
        <ListItem>
          <a href={schoolConst.socialBar.ins}>
            <SocialIns />
          </a>
        </ListItem>
      </SocialList>
    </SocialStyle>
  );
};

export default SocialNetwork;
