import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName,
    defaultValue,
    error,
    registerField,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

 return (
    <Container>
      <section>
        <b>{label}</b>
        {error && <Error>{error}</Error>}
      </section>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        onChange={() => clearError()}
      />
    </Container>
  );

  
};

export default Input;