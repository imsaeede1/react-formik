import SignUpForm from "./components/SignupForm/SignUpForm";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
};

export default App;
