import FormPage from "./pages/FormPage";
import { ContextLogin } from "./components/ContextsLogin";
import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [message, setMessage] = useState({
    card: {
      user: userName, number: cardNumber, cvv: cvvNumber
    }
  });

  return (
    <div className="App">
      <ContextLogin.Provider
        value={{
          userName,
          setUserName,
          cardNumber,
          setCardNumber,
          cvvNumber,
          setCvvNumber,
          message,
          setMessage
        }}>
        <FormPage />
      </ContextLogin.Provider>
    </div>
  );
}

export default App;
