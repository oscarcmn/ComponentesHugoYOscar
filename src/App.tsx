import { useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"normal" | "hover" | "valid" | "error">(
    "normal"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (value: string, type: "text" | "email" | "password") => {
    setInputValue(value);

    if (value.length > 0) {
      if (type === "email") {
        if (value.includes("@")) {
          setStatus("valid");
          setErrorMessage("");
        } else {
          setStatus("error");
          setErrorMessage("Por favor, ingrese un correo electrónico válido.");
        }
      } else if (type === "password") {
        if (value.length >= 4) {
          setStatus("valid");
          setErrorMessage("");
        } else {
          setStatus("error");
          setErrorMessage("La contraseña debe tener al menos 4 caracteres.");
        }
      } else {
        setStatus("valid");
        setErrorMessage("");
      }
    } else {
      setStatus("normal");
      setErrorMessage("");
    }
  };

  return (
    <>
      <div className="mb-4">
        <Header />
      </div>
      <div>
        <div className="flex flex-row justify-between space-x-1">
          <Card
            title="Título 1"
            subtitle="Subtítulo 1"
            description="Descripción corta aquí."
            imagen="imagen"
          />
          <Card
            title="Título 1"
            subtitle="Subtítulo 1"
            description="Descripción corta aquí."
            imagen="imagen"
          />
          <Card
            title="Título 1"
            subtitle="Subtítulo 1"
            description="Descripción corta aquí."
            imagen="imagen"
          />
        </div>

        <div className="flex flex-col items-center space-y-4 mt-4">
          <Input
            label="Contraseña"
            placeholder="Escribe tu contraseña"
            type="password"
            initialValue={inputValue}
            onChange={(value) => handleInputChange(value, "password")}
            status={status}
            errorMessage={errorMessage}
          />
          <Button label="Click me" />
          <Button label="Click me" variant="secondary" />
        </div>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </>
  );
}

export default App;
