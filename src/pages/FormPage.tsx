import { BackgroundCards } from "../components/Background";
import { CardForm } from "../components/CardForm";
import { Container } from "../components/CardForm/styled";

const FormPage = () => {
  return (
    <Container>
      <BackgroundCards />
      <CardForm />
    </Container>
  );
};

export default FormPage;