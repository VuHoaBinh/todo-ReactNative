import { DUMMY_EXPRESS } from "@/tab/ExpenseOutput";
import { createContext, ReactNode, useReducer, useState } from "react";

type ExpenseContextType = {
  id: any[];
  addExpense: (decription: any, amount: any, date: any) => void;
  removeExpense: (id: any) => void;
  editExpense: (id: any, { decription, amount, date }: any) => void;
};

export const ExpenseContext = createContext<ExpenseContextType>({
  id: [],
  addExpense: (decription: any, amount: any, date: any) => {},
  removeExpense: (id: any) => {},
  editExpense: (id: any, { decription, amount, date }: any) => {},
});

type ExpenseContextProviderProps = {
  children: ReactNode;
};

function expenseReduxer(state: any, action: any) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { id: id, ...action.payload }];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const findItemID = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const findItemData = state[findItemID];
      //   const updateData = [...state, { id: findItemID, data: findItemData }];
      const updatableExpense = state[findItemID]; // find state by id
      const updatedItem = { ...updatableExpense, ...action.payload.data }; // get data from id with new data
      const updatedExpenses = [...state]; // get list state
      updatedExpenses[findItemID] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {
  // const [ExpenseScreen, setExpenseScreen] = useState<any[]>([]);
  const [expenseState, dispatch] = useReducer(expenseReduxer, DUMMY_EXPRESS);

  function addExpense(data: any) {
    dispatch({ type: "ADD", payload: data });
  }

  function removeExpense(id: any) {
    dispatch({ type: "DELETE", payload: id });
  }

  function editExpense(id: any, expenseData: any) {
    dispatch({
      type: "UPDATE",
      payload: { id: id, data: expenseData },
    });
  }
  const values = {
    ids: expenseState,
    addExpense: addExpense,
    removeExpense: removeExpense,
    editExpense: editExpense,
  };

  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
