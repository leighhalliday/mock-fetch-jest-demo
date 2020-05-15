import React from "react";
import useSWR from "swr";
import { convert } from "./utils/currency";

export default function App() {
  const [base, dest] = ["USD", "CAD"];
  const { data: rate, error } = useSWR([base, dest], convert);

  if (error) return "Error!";
  if (!rate) return "Loading!";

  return (
    <div>
      {base} to {dest} = {rate}
    </div>
  );
}
