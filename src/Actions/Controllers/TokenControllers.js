export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    if (checkTokens()) {
      return `${localStorage.getItem("_at")}.${localStorage.getItem("_bt")}.${localStorage.getItem("_ct")}`;
    }
    logout();
  }
};

export const checkTokens = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("_at") != null &&
      localStorage.getItem("_bt") != null &&
      localStorage.getItem("_ct") != null
      ? true
      : false;
  }
};

export const setAuthToken = (token) => {
  if (typeof window !== "undefined") {
    if (token) {
      const [at, bt, ct] = token.split(".");
      localStorage.setItem("_at", at);
      localStorage.setItem("_bt", bt);
      localStorage.setItem("_ct", ct);
    }
  }
};

export const validateToken = (router) => {
  if (typeof window !== "undefined") {
    if (checkTokens()) {
      return true;
    }
    logout(router);
  }
};
export const logout = (router) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("_at");
    localStorage.removeItem("_bt");
    localStorage.removeItem("_ct");
  }
  if (router) {
    router.push("/Auth/Login");
  }
};
