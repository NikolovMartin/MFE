import AuthSwitch from "./AuthSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { AppContainer, Header, Container } from "./Shell";

const Auth = () => {
  return (
    <>
      <AppContainer>
        <Header>
          <img src="yara-logo.svg" alt="Yara" />

          <h1>Microfrontend Platform PoC</h1>

          <AuthSwitch />

          <LanguageSwitch />
        </Header>

        <Container>
          <h3>Hello, please first Login</h3>
        </Container>
      </AppContainer>
    </>
  );
};

export default Auth;
