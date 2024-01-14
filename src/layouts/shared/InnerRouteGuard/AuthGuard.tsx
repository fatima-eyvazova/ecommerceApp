import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../../services/api";
import { RootState } from "../../../redux/types";
import { ROUTES } from "../../../router/routeNames";

interface Props {
  children: JSX.Element;
}

const AuthGuard = ({ children }: Props) => {
  const [authError, setAuthError] = useState("");
  const { token, user } = useSelector((state: RootState) => state.auth);
  const userRole = user?.role;

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      console.log(token);

      let data = {};
      makeRequest("/profile", "get", null, token).then((res) => {
        data = res;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const err = data?.data?.error;
        if (data && err) {
          setAuthError(err);
        } else if (data && !err) {
          if (userRole === "admin" || userRole === "superadmin") {
            navigate(ROUTES.orders);
          } else if (userRole === "client") {
            navigate(ROUTES.home);
          }
        }
      });
    }
  }, [token]);

  return <>{(!token || authError) && children}</>;
};

export default AuthGuard;
