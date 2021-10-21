import React from "react";
import styles from "../SignupForm/form.module.css";

const RadioInput = ({ radioOption, name, label, formik }) => {
  return (
    <div className={styles.formControl}>
      {radioOption.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name] === item.value}
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

export default RadioInput;
