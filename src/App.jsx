import "./App.css";

import { Header, MainContent, ProductSection, Footer, FAQ } from "./components/WebSections";

  
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </ChakraProvider>    
  );
}

export default App;
