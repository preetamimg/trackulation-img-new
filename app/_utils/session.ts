export const roleAccessMap = {
  USER: [
    "/",
    "/dashboard",
  ],
  ADMIN: [
    "/",
    "/admin",
    "/admin/plans",
  ],
};

export type Role = "USER" | "ADMIN"

export function doesRoleHaveAccessToURL(role : Role, url : string | '') : boolean {

  const accessibleRoutes = roleAccessMap[role] || [];
  return accessibleRoutes.some((route) => {
    // Create a regex from the route by replacing dynamic segments
    const regexPattern = route.replace(/\[.*?\]/g, "[^/]+").replace("/", "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}