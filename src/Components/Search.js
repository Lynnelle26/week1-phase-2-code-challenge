import React, { useState} from "react";

// function Search({handleSearch}) {
  function Search({ transactions, setFilteredTransactions }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter transactions based on search query
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query)
    );
    setFilteredTransactions(filtered);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
  }

export default Search;