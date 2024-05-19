import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

const LoginModal = ({
  onSubmit,
  handleLogin,
  isLoading,
  onClose,
  serverError,
  handleCloseModal,
  handleRegisterModal,
  handleAltClick,
}) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      title="Sign In"
      buttonText={isLoading ? "Loading..." : "Sign In"}
      altButtonText="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
      handleAltClick={handleAltClick}
      isDisabled={!isValid}
    >
      <div className="modal__input-container">
        <label>
          Email
          <input
            className="modal__input"
            type="email"
            name="email"
            minLength="4"
            maxLength="50"
            placeholder="Enter email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="modal__error">
            {errors.email} {""}
          </span>
        </label>
        <label>
          Password
          <input
            className="modal__input"
            type="password"
            name="password"
            minLength="8"
            maxLength="30"
            placeholder="Enter password"
            value={values.password || ""}
            onChange={handleChange}
            required
          ></input>
          <span className="modal__error">{errors.password}</span>
        </label>
        {serverError && (
          <span className="modal__error-unavailable">
            Incorrect email or password
          </span>
        )}
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
