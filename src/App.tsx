import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CompletePage from "./pages/CompletePage";
import FormPage from "./pages/FormPage";
import { ContextLogin } from "./components/ContextsLogin";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");


  useEffect(() => {
    if (cardNumber.length === 4)
      setCardNumber(cardNumber + " ")
    else if (cardNumber.length === 9) {
      setCardNumber(cardNumber + " ")
    } else if (cardNumber.length === 14) {
      setCardNumber(cardNumber + " ")
    }
  }, [cardNumber]);

  return (
    <div className="App">
      <ContextLogin.Provider value={{ userName, setUserName, cardNumber, setCardNumber }}>
        <Router>
          <Routes>
            <Route path='/' element={<FormPage />} />
            <Route path='/complete' element={<CompletePage />} />
          </Routes>
        </Router>
      </ContextLogin.Provider>
    </div>
  );
}

export default App;
