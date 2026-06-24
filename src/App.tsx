import './index.css';

function Header() {
  return (
    <header className="header">
      <p className="eyebrow">React Tutorial</p>
      <h1>Profile Cards</h1>
      <p className="lead">React + Viteで、検索と絞り込みができるカード一覧アプリを作ります。</p>
    </header>
  );
}

function App() {
  return (
    <main className="app">
      <Header />
    </main>
  );
}

export default App;
