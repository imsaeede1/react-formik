import React from "react";
import styles from "../SignupForm/form.module.css";

const checkInput = ({ chechboxOptions, name, formik }) => {
  return (
    <div className={styles.formControl}>
      {chechboxOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="checkbox"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
            className={styles.inptsty}
          />
          <label htmlFor={item.value} className={styles.textLable}>
            {item.label}
          </label>
          {formik.errors[name] && formik.touched[name] && (
            <div className={styles.err}>{formik.errors[name]}</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default checkInput;
