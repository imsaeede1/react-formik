import React from "react";
import styles from "../SignupForm/form.module.css";

const Selectt = ({ selectOptions, name, formik }) => {
  return (
    <div className={styles.formControl}>
      {/* <label htmlFor={name} className={styles.textLable}>
        Nationality
      </label> */}
      <select
        {...formik.getFieldProps(name)}
        className={styles.selectstyle}
        name={name}
      >
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className={styles.err}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Selectt;
