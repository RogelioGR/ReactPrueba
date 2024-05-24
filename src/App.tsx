import ResponsiveAppBar from "./Componente/Header";
import Footer from "./Componente/Footer";
import Hero  from "./Componente/body";
import FinanceTools from "./Componente/tarjeta";


const App:any = ()=> {
  return(
    
  <div className="App">
    <ResponsiveAppBar/>
    <Hero/>
    <FinanceTools/>
    <Footer/>
    
  

  </div>
  );
  }
  
  
  export default App;