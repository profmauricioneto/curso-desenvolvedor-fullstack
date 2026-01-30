import ProdutoList from "./components/ProdutoList";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>🛒 Sistema de Gestão de Produtos</h1>
                <p>Controle de Estoque e Preços</p>
            </header>

            <main className="app-content">
                <ProdutoList />
            </main>

            <footer className="app-footer">
                <p>
                    Sistema de Gerenciamento de Produtos desenvolvido carinhosamente por
                    @profmauricioneto
                </p>
            </footer>
        </div>
    );
}

export default App;
