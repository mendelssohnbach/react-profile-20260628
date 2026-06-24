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
  profile: Profile;
};

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article className="profile-card">
      <div className="profile-card__avatar">{profile.initial}</div>
      <div>
        <p className="profile-card__category">{profile.category}</p>
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>
    </article>
  );
}

type Profile = {
  id: number;
  name: string;
  category: 'Frontend' | 'Design' | 'Backend';
  bio: string;
  initial: string;
};

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Alice',
    category: 'Frontend',
    bio: 'ReactとCSSが好きなフロントエンド開発者です。',
    initial: 'A',
  },
  {
    id: 2,
    name: 'Bob',
    category: 'Design',
    bio: 'UIデザインとアクセシビリティに興味があります。',
    initial: 'B',
  },
  {
    id: 3,
    name: 'Candy',
    category: 'Backend',
    bio: 'PI設計とデータベース設計を学んでいます。。',
    initial: 'C',
  },
];

function ProfileList() {
  return (
    <section className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      ))}
    </section>
  );
}

function App() {
  return (
    <main className="app">
      <Header />
      <ProfileList />
    </main>
  );
}

export default App;
