import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Nexus Fit | Sua Academia em Franca",
  description: "A melhor estrutura para o seu treino.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}