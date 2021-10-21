import styles from "./form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "../common/Input";
import RadioInput from "../common/RadioInput";
import SelectCommponent from "../common/SelectCommponent";
import CheckboxInput from "../common/CheckboxInput";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  gender: "",
  nationality: "",
  intrest: [],
};

const radioOptions = [
  { label: "male", value: "0" },
  { label: "female", value: "1" },
];

const chechboxOptions = [
  { label: "React.js", value: "React.js" },
  { label: "Vue.js", value: "Vue.js" },
];

const selectOptions = [
  { label: "select nationality", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "USA", value: "US" },
];

const onSubmit = (values) => {
  axios
    .post("http://localhost:3000/users", values)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Must be exactly 5 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string().min(8).required("A phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  intrest: Yup.array().min(1).required("Checkbox is required"),
});

const SignUpForm = () => {
  // const [formValues, setFormValues] = useState(null);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  console.log(formik);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users/1")
  //     .then((res) => setFormValues(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className={styles.containerMain}>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" type="email" formik={formik} />
        <Input label="Phone Number" name="phoneNumber" formik={formik} />
        <Input
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
        <Input
          label="Password Confirmation "
          name="passwordConfirmation"
          type="password"
          formik={formik}
        />

        <RadioInput formik={formik} radioOption={radioOptions} name="gender" />

        <SelectCommponent
          selectOptions={selectOptions}
          name="nationality"
          formik={formik}
        />

        <CheckboxInput
          chechboxOptions={chechboxOptions}
          name="intrest"
          formik={formik}
        />

        <button className={styles.btn} type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
