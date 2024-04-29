import Table from './Components/Table';
import './App.css';
import SearchTransaction from './Components/Search';
import { useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {
  const newTransaction=[
    {
   
      date:"2020/12/01",
      description:"Paycheck",
      category:"Income",
      amount:"10000",
       },
       
     {
     
     date:"2020/09/20",
     description:"Clothes,Shopping",
     category:"Fashion",
     amount:"250",
     },
     {
    
     date:"2020/10/26",
     description:"Dinner,Meko Resturant",
     category:"Food",
     amount:"100",
     },
     {
     
     date:"2020/07/09",
     description:"Games",
     category:"Entertainment",
     amount:"150",
     },
     
     ]

  
 
   

const [transactions,setTransactions]=useState(newTransaction)

    
  return (
  <div className='container'>
   <Header/>
  <SearchTransaction transactions={transactions} setTransactions={setTransactions} newTransaction={newTransaction}/>
  <Form transactions={transactions} setTransactions={setTransactions}/>
  <Table transactions={transactions} setTransactions={setTransactions}/>
  </div>
  );

}
export default App;


