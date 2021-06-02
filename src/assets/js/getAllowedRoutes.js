import { intersection } from "lodash";

export const isArrayWithLength = (arr) => {
  return Array.isArray(arr) && arr.length;
};

export const getAllowedRoutes = (routes) => {
  console.log(routes);
  const roles = JSON.parse(localStorage.getItem("roles"));
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
};
