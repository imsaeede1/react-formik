import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>React-App !!!</h1>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
