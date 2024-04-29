
import React from "react";
import TransactionTable from "./List";

function TableList({transactions}) {

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        </thead>
        <tbody>
        {/* render a list of <Transaction> components here */}

        <TransactionTable transaction={transactions}/>;
        
      </tbody>
    </table>
  );
}

export default TableList;
