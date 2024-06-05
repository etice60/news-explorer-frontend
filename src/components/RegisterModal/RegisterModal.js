import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

const RegisterModal = ({
  handleRegistration,
  handleAltClick,
  serverError,
  isLoading,
  onClose,
}) => {
  const { errors, isValid, handleChange, values } = useFormWithValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={isLoading ? "Loading..." : "Sign Up"}
      altButtonText="Sign In"
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
            placeholder="Enter Email"
            value={values.email || ""}
            onChange={handleChange}
            required
          ></input>
          <span className="modal__error">
            {errors.email} {""}
          </span>
        </label>
        <label>
          Password
          <input
            className="modal__input"
            minLength="8"
            maxLength="30"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={values.password || ""}
            onChange={handleChange}
            required
          ></input>
          <span className="modal__error">{errors.password}</span>
        </label>
        <label>
          Username
          <input
            className="modal__input"
            type="name"
            name="name"
            minLength="2"
            maxLength="30"
            placeholder="Enter your username"
            value={values.name || ""}
            onChange={handleChange}
            required
          ></input>
          <span className="modal__error">{errors.name}</span>
        </label>
        {serverError && (
          <span className="modal__error-unavailble">Email is unavailable</span>
        )}
      </div>
    </ModalWithForm>
  );
};
export default RegisterModal;
