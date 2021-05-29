export default class Route {
  constructor(path, children, component, permission, title, exact, icon) {
    this.path = path || "";
    this.children = children || [];
    if (!component) {
      throw new Error("Param Component is required");
    }
    this.component = component;
    this.exact = exact || false;
    this.title = title || "Title";
    this.Icon = icon || null;
    this.permission = permission || [];
  }
}
