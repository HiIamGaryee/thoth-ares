import React from 'react';

/* ─────────── DATA ─────────── */
const tiers = [
  ['01', '$10', '5 %'],
  ['02', '$20', '8 %'],
  ['03', '$40', '12 %'],
  ['04', '$80', '18 %'],
  ['05', '$160', '25 %'],
  ['06', '$320', '35 %'],
  ['07', '$640', '50 %'],
  ['08', '$1 280', '70 %'],
] as const;

const referrals = [
  { level: 'Level 1', percent: 5 },
  { level: 'Level 2', percent: 3 },
  { level: 'Level 3', percent: 2 },
] as const;

const HomePage: React.FC = () => (
  <main className="min-h-screen bg-retro-grid text-neon grid gap-8 p-8 lg:grid-cols-2">
    <section className="frame flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl md:text-6xl leading-snug font-pixel uppercase">
        MEME FIGHT ON THE THRONE
      </h1>
      <p className="text-lg">Play • Bet • Meme-fight • Earn</p>
      <button className="px-10 py-2 bg-neon text-background font-pixel hover:bg-neon-dim transition-colors">
        PLAY NOW
      </button>
    </section>

    <section className="frame">
      <h2 className="text-2xl mb-4">HOW IT WORKS</h2>
      <ul className="space-y-2">
        {[
          'Pick your meme warrior',
          'Eight crazy tiers of action',
          'Bet tokens on every duel',
          'Win, level-up, cash-out',
        ].map((t) => (
          <li key={t} className="before:content-['▸'] before:mr-2">
            {t}
          </li>
        ))}
      </ul>
    </section>

    <section className="frame">
      <h2 className="text-2xl mb-4">BATTLES</h2>
      <p className="mb-4">
        Buy multiple duels, climb the leaderboard, stack rewards.
      </p>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square ${
              i % 7 === 0 ? 'bg-neon' : 'bg-transparent border border-neon/20'
            }`}
          />
        ))}
      </div>
    </section>

    <section className="frame">
      <h2 className="text-2xl mb-4">COST & REWARDS</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-neon">
            <th>Tier</th>
            <th className="pl-4">Cost</th>
            <th className="pl-4">Win Share</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className="py-1 pl-4 first:pl-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section className="frame">
      <h2 className="text-2xl mb-4">REFERRAL PROGRAM</h2>
      <div className="space-y-3">
        {referrals.map(({ level, percent }) => (
          <div key={level} className="flex items-center gap-4">
            <span className="w-24">{level}</span>
            <div className="flex-1 h-3 bg-neon/10">
              <div
                className="h-full bg-neon"
                style={{ width: `${percent * 4}%` }}
              />
            </div>
            <span className="w-12 text-right">{percent}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-1">
        <p>Accepted Tokens:</p>
        <p>TRX • USDT • TRC20 • BNB</p>
      </div>
    </section>
  </main>
);

export default HomePage;
