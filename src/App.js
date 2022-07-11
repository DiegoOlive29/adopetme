import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
    // <AnimalsListProvider>
    //   <SearchProvider>
    //     <Header>
    //       <NavMenu>
    //         <StyledButton>Início</StyledButton>
    //         <StyledButton>Adotar</StyledButton>
    //         <StyledButton>Qadfads</StyledButton>
    //         <StyledButton>Logsadfin</StyledButton>
    //       </NavMenu>
    //     </Header>
    //   </SearchProvider>
    // </AnimalsListProvider>
  );
}

export default App;
