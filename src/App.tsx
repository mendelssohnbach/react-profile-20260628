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

function ProfileCard() {
  return (
    <article className="profile-card">
      <div className="profile-card__avatar">Y</div>
      <div>
        <p className="profile-card__category">Frontend</p>
        <h2>Jack</h2>
        <p>ReactとCSSが好きなフロントエンド開発者です。</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="app">
      <Header />
      <ProfileCard />
    </main>
  );
}

export default App;
