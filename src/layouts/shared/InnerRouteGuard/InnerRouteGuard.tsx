import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../../services/api";
import { RootState } from "../../../redux/types";
import { ROUTES } from "../../../router/routeNames";

interface Props {
  isClient: boolean;
  children: JSX.Element;
}

const InnerRouteGuard = ({ isClient, children }: Props) => {
  const [authError, setAuthError] = useState("");
  const profile = useSelector((state: RootState) => state.userProfile);
  const client = isClient ? profile?.client : profile?.admin;
  const navigate = useNavigate();
  const redirectToHome = () => {
    if (authError.toLowerCase().includes("Incorrect token")) {
      if (isClient) navigate(ROUTES.login);
    } else {
      if (isClient) navigate(ROUTES.home);
    }

    if (!isClient && (authError || (!authError && !client?.token))) {
      navigate(ROUTES.dashboardLogin);
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
