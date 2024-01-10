import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import { ROUTES } from "../../../../../router/routeNames";

interface Props {
  children: JSX.Element;
}

const InnerRouteGuard = ({ children }: Props) => {
  const [authError, setAuthError] = useState("");
  const client = useSelector((state: RootState) => state.userProfile.client);
  const navigate = useNavigate();
  const redirectToHome = () => {
    if (authError.toLowerCase().includes("Incorrect token")) {
      navigate(ROUTES.login);
    } else {
      navigate(ROUTES.home);
    }
  };

  const renderRedirectBtn = authError || (!authError && !client?.token);

  useEffect(() => {
    if (client?.token) {
      let data = {};
      makeRequest("/profile", "get", null, client?.token).then((res) => {
        data = res;
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const err = data?.error;
      if (data && err) {
        setAuthError(err);
      }
    }
  }, [client?.token]);

  return (
    <>
      {renderRedirectBtn ? (
        <div>
          <button onClick={redirectToHome}>Return</button>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default InnerRouteGuard;
