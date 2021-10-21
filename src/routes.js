import AddContact from "./pages/AddContact/AddContact";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/addcontact", component: AddContact },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
// ([0-9]+)?
