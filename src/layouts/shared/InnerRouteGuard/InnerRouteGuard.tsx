import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../../services/api";
import { RootState } from "../../../redux/types";
import { ROUTES } from "../../../router/routeNames";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

interface Props {
  isClient: boolean;
  children: JSX.Element;
}

const InnerRouteGuard = ({ isClient, children }: Props) => {
  const [authError, setAuthError] = useState("");
  const { token, user } = useSelector((state: RootState) => state.auth);
  const userRole = user?.role;

  const isAvailablePage =
    (isClient && userRole === "client") ||
    (!isClient && (userRole === "admin" || userRole === "superadmin"));

  const navigate = useNavigate();

  const redirectToHome = () => {
    if (authError.toLowerCase().includes("Incorrect token")) {
      navigate(ROUTES.login);
      return;
    }

    if (authError || (!authError && !token)) {
      navigate(ROUTES.login);
      return;
    }

    navigate(-1);
  };

  const renderRedirectBtn =
    authError || (!authError && !token) || !isAvailablePage;

  useEffect(() => {
    if (token) {
      let data = {};
      makeRequest("/profile", "get", null, token).then((res) => {
        data = res;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const err = data?.data?.error;
        if (data && err) {
          setAuthError(err);
        }
      });
    }
  }, [token]);

  return (
    <>
      {renderRedirectBtn ? (
        <NotFoundPage>
          <button onClick={redirectToHome}>Return</button>
        </NotFoundPage>
      ) : (
        children
      )}
    </>
  );
};

export default InnerRouteGuard;
