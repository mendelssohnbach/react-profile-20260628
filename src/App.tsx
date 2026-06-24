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

type ProfileCardProps = {
  name: string;
  category: string;
  bio: string;
  initial: string;
};

function ProfileCard({ name, category, bio, initial }: ProfileCardProps) {
  return (
    <article className="profile-card">
      <div className="profile-card__avatar">{initial}</div>
      <div>
        <p className="profile-card__category">{category}</p>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="app">
      <Header />
      <ProfileCard
        name="Jack"
        category="Frontend"
        bio="ReactとCSSが好きなフロントエンド開発者です。"
        initial="A"
      />
    </main>
  );
}

export default App;
