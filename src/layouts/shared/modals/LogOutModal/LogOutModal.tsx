import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../../../redux/slices/shared/authSlice";
import { ROUTES } from "../../../../router/routeNames";
import "../Modal.scss";

interface Props {
  setOpenModal: (bool: boolean) => void;
}

const LogOutModal = ({ setOpenModal }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutUser());
    navigate(ROUTES.login);
  };

  return (
    <div className="confirm-modal">
      <div className="confirm-modal-container">
        <div
          className="close-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </div>
        <p>Are you sure you want to log out?</p>
        <div className="confrim-buttons">
          <button className="btn-y" onClick={logOut}>
            OK
          </button>
          <button
            className="btn-close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
