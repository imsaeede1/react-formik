import styles from "../SignupForm/form.module.css";
const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.textLable}>
        {label}
      </label>
      <input
        className={styles.inputstyle}
        type={type}
        name={name}
        id={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className={styles.err}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
