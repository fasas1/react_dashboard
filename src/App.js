//import { useState } from "react";
import {BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout"
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    
     primary:{
       main:'#757575'
     },
    background: {
      default: "#F3F3F3",
    },
  },
});
function App() {
  //const [theme, colorMode] = useMode();
  //const [isSidebar, setIsSidebar] = useState(true);

  return (
      
   <ThemeProvider  theme={theme}>
        <BrowserRouter>
        <Layout/>
       </BrowserRouter>
       </ThemeProvider>
   
  );
}

export default App;