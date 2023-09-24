import { connect } from "react-redux";
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // newer codebase to use redux's state
  // const { balance } = useSelector((store) => store.account);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// older code-base to use redux's state, without hooks
function mapStateToProp(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProp)(BalanceDisplay);
