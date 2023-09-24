import CreateCustomer from "./features/Customers/CreateCustomer";
import Customer from "./features/Customers/Customer";
import AccountOperations from "./features/Accounts/AccountOperations";
import BalanceDisplay from "./features/Accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
