import { useSelector } from "react-redux";

import "../Modal.scss";
import { RootState } from "../../../../redux/types";
import { makeRequest } from "../../../../services/api";

interface Props {
  setOpenModal: (bool: boolean) => void;
  itemId: string;
  resource: string;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({
  setOpenModal,
  setUpdateList,
  itemId,
  resource,
}: Props) => {
  const { token } = useSelector((state: RootState) => state.auth);

  const deleteItem = async () => {
    const res = await makeRequest(
      `/dashboard/${resource}/${itemId}`,
      "delete",
      null,
      token
    );
    const data = res?.data as { data: unknown; success: boolean };
    const isSuccess = data && data?.success;
    if (isSuccess) {
      setOpenModal(false);
      setUpdateList((prev) => !prev);
    }
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
        <p>Are you sure you want to delete this element ?</p>
        <div className="confrim-buttons">
          <button className="btn-y" onClick={deleteItem}>
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

export default DeleteModal;
