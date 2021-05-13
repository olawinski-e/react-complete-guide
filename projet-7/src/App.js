import UserFinder from "./components/UserFinder";
import { UsersContext } from "./store/users-context";
const DUMMY_USERS = [
  { id: "u1", name: "Modjo" },
  { id: "u2", name: "Yong" },
  { id: "u3", name: "Ski" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
