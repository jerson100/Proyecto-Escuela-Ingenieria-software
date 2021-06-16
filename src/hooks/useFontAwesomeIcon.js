import { useMemo } from "react";
import { getFontAwesomeIcon } from "../const/fileTypes";

const useFontAwesomeIcon = (array, attr, newNameAttr) => {
  return useMemo(
    () =>
      array.map((d) => {
        return { ...d, [newNameAttr]: getFontAwesomeIcon(d[attr]) };
      }),
    [array, attr, newNameAttr]
  );
};

export default useFontAwesomeIcon;
