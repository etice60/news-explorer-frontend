import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  handleAltClick,
  handleOverlay,
  isDisabled,
  altButtonText,
  onSubmit,
  buttonText,
  children,
  name,
  onClose,
  ...props
}) => {
  return (
    <div className={`modal modal_type${name}`} onClick={handleOverlay}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
          <h3 className="modal__title">{title}</h3> {children}
          <button
            type="submit"
            disabled={isDisabled}
            className={`modal__button ${
              isDisabled === true ? "modal__button-disabled" : ""
            }`}
          >
            {buttonText}
          </button>
          <div className="modal__alt-container">
            <p>or</p>
            <button
              className="modal__alt-button"
              type="button"
              onClick={handleAltClick}
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
