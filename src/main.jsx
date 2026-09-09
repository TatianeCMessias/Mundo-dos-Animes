import Main from './Main/Main.jsx'
import Header from'./Header/Header.jsx'
import Footer from'./Footer/Footer.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Main />
    <Header />
    <Footer />
  </StrictMode>,
)
