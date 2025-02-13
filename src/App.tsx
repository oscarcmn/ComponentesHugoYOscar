import { useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {


  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"normal" | "hover" | "valid" | "error">("normal");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (value.length > 0) {
      if (value.includes("@")) {
        setStatus("valid");
        setErrorMessage("");
      } else {
        setStatus("error");
        setErrorMessage("Por favor, ingrese un correo electrónico válido.");
      }
    } else {
      setStatus("normal");
      setErrorMessage("");
    }
  };

  return (
    <>
      <div>
        <Header />
        <Card />

        <Input
          label="Correo Electrónico"
          placeholder="Escribe tu correo"
          type="email"
          initialValue={inputValue}
          onChange={handleInputChange}
          status={status}
          errorMessage={errorMessage}
        />

        <Button label="Click me" />
        <Footer />
      </div>
    </>
  );
}

export default App;
