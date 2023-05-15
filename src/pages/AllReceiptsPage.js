import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";

function AllReceipts() {
  const authCtx = useContext(AuthContext);

  return <div>All Receipts</div>;
}

export default AllReceipts;
