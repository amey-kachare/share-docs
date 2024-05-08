import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}

export default App;
