import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import AllHistory from "./AllHistory";
import styled from "styled-components";

export default function Transactions() {
  const { allTransactionHistory } = useGlobalContext();


  return (
    <>
      <TransactionsStyled>
        <AllHistory />
      </TransactionsStyled>
    </>
  );
}

const TransactionsStyled = styled.div`
    padding: 24px;

`