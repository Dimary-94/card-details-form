import { useContext } from "react";
import { BackgroundCards } from "../components/Background";
import { CardForm } from "../components/CardForm";
import { Container } from "../components/CardForm/styled";
import { Complete } from "../components/Complete";
import { ContextLogin } from "../components/ContextsLogin";

const FormPage = () => {
  const { message } = useContext(ContextLogin);

  console.log('test', message);

  return (
    <Container>
      <BackgroundCards />
      {message.card.user === '' ? <CardForm /> : <Complete />}
    </Container>
  );
};

export default FormPage;