import "./SuccessModal.css";
import "../ModalWithForm/ModalWithForm.css";

const SuccessModal = ({
  onClose,
  onSubmit,
  handleLoginModal,
  handleOverlay,
}) => {
  return (
    <div className="success__modal" onClick={handleOverlay}>
      <div className="success__modal-container">
        <button
          className="success__modal-close-button"
          onClick={onClose}
          type="button"
        ></button>
        <form className="success__modal-form" onSubmit={handleLoginModal}>
          <h3 className="success__modal-title">
            {" "}
            Registration successfully completed!
          </h3>
          <button
            className="success__modal-alt-button"
            type="button"
            onClick={onSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuccessModal;
