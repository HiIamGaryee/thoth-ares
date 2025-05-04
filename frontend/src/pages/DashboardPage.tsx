import React, { useState, ReactElement } from 'react';
import './DashboardPage.scss';

interface Opponent {
  name: string;
  alliance: number;
  level: number;
  atk: number;
  def: number;
  spd: number;
  winRate: number;
  entryFee: number;
  reward: number;
  betPool: number;
}

interface TournamentStanding {
  rank: number;
  fighter: string;
  wins: number;
  loss: number;
  earnings: number;
}

interface BattleHistory {
  id: number;
  opponent: string;
  date: string;
  isWin: boolean;
  amount: number;
}

interface NFTBooster {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  price: number;
  boost: { type: 'ATK' | 'DEF' | 'SPD' | 'HP' | 'ALL'; value: number };
  image: string;
  description: string;
}

interface OwnedNFT extends NFTBooster {
  purchaseDate: Date;
}

const opponents: Opponent[] = [
  {
    name: 'ELON REKT',
    alliance: 19,
    level: 38,
    atk: 125,
    def: 78,
    spd: 50,
    winRate: 62,
    entryFee: 126,
    reward: 290,
    betPool: 1000
  },
  {
    name: 'WARREN BUFFER',
    alliance: 21,
    level: 102,
    atk: 156,
    def: 26,
    spd: 134,
    winRate: 76,
    entryFee: 254,
    reward: 610,
    betPool: 1500
  },
  {
    name: 'DONALD PUMP',
    alliance: 32,
    level: 60,
    atk: 32,
    def: 180,
    spd: 12,
    winRate: 45,
    entryFee: 98,
    reward: 185,
    betPool: 750
  },
  {
    name: 'MIKE JAMES',
    alliance: 52,
    level: 88,
    atk: 56,
    def: 127,
    spd: 95,
    winRate: 58,
    entryFee: 175,
    reward: 420,
    betPool: 1200
  },
  {
    name: 'LEO SAREL',
    alliance: 24,
    level: 14,
    atk: 15,
    def: 46,
    spd: 12,
    winRate: 32,
    entryFee: 54,
    reward: 105,
    betPool: 400
  },
  {
    name: 'DAVID LEVIN',
    alliance: 35,
    level: 42,
    atk: 54,
    def: 126,
    spd: 87,
    winRate: 51,
    entryFee: 145,
    reward: 280,
    betPool: 850
  },
];

const tournamentStandings: TournamentStanding[] = [
  {
    rank: 1,
    fighter: 'WARREN BUFFER',
    wins: 76,
    loss: 24,
    earnings: 9120
  },
  {
    rank: 2,
    fighter: 'PLAYER ONE',
    wins: 74,
    loss: 35,
    earnings: 8160
  },
  {
    rank: 3,
    fighter: 'ELON REKT',
    wins: 74,
    loss: 45,
    earnings: 7440
  }
];

const battleHistory: BattleHistory[] = [
  {
    id: 1,
    opponent: 'WARREN BUFFER',
    date: '03/05/2025',
    isWin: false,
    amount: 150
  },
  {
    id: 2,
    opponent: 'DONALD PUMP',
    date: '02/05/2025',
    isWin: true,
    amount: 300
  },
  {
    id: 3,
    opponent: 'MIKE JAMES',
    date: '01/05/2025',
    isWin: false,
    amount: 450
  },
  {
    id: 4,
    opponent: 'LEO SAREL',
    date: '30/04/2025',
    isWin: true,
    amount: 600
  },
  {
    id: 5,
    opponent: 'DAVID LEVIN',
    date: '29/04/2025',
    isWin: false,
    amount: 750
  }
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('battles');
  const playerStats = {
    level: 25,
    atk: 100, 
    def: 85,
    winRate: 68
  };
  
  // NFT Marketplace states
  const [credits, setCredits] = useState(10000);
  const [ownedNFTs, setOwnedNFTs] = useState<OwnedNFT[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastPurchased, setLastPurchased] = useState<NFTBooster | null>(null);

  // NFT Boosters Data
  const nftBoosters: NFTBooster[] = [
    {
      id: 'nft-001',
      name: 'Crypto Steel',
      rarity: 'Common',
      price: 150,
      boost: { type: 'DEF', value: 15 },
      image: 'shield',
      description: 'Increases your DEF by 15 points in battle.'
    },
    {
      id: 'nft-002',
      name: 'Rage Token',
      rarity: 'Uncommon',
      price: 300,
      boost: { type: 'ATK', value: 25 },
      image: 'sword',
      description: 'Boosts your ATK by 25 points for 5 battles.'
    },
    {
      id: 'nft-003',
      name: 'Hash Accelerator',
      rarity: 'Rare',
      price: 450,
      boost: { type: 'SPD', value: 30 },
      image: 'boots',
      description: 'Enhances your SPD by 30 points. Lasts for 3 battles.'
    },
    {
      id: 'nft-004',
      name: 'Genesis Block',
      rarity: 'Epic',
      price: 800,
      boost: { type: 'HP', value: 50 },
      image: 'heart',
      description: 'Increases your max HP by 50 permanently.'
    },
    {
      id: 'nft-005',
      name: 'Satoshi\'s Fortune',
      rarity: 'Legendary',
      price: 1500,
      boost: { type: 'ALL', value: 20 },
      image: 'crown',
      description: 'Increases all stats by 20 points. Limited edition!'
    },
    {
      id: 'nft-006',
      name: 'Blockchain Key',
      rarity: 'Rare',
      price: 480,
      boost: { type: 'ATK', value: 18 },
      image: 'key',
      description: 'Unlocks hidden damage potential. +18 ATK for 7 battles.'
    },
    {
      id: 'nft-007',
      name: 'Mining Rig',
      rarity: 'Epic',
      price: 850,
      boost: { type: 'SPD', value: 40 },
      image: 'rig',
      description: 'Supercharges your speed. +40 SPD for 5 battles.'
    },
    {
      id: 'nft-008',
      name: 'Smart Contract',
      rarity: 'Uncommon',
      price: 320,
      boost: { type: 'DEF', value: 22 },
      image: 'contract',
      description: 'Auto-activates defense mechanisms. +22 DEF for 5 battles.'
    },
  ];

  // Function to handle NFT purchase
  const handleBuyNFT = (nft: NFTBooster) => {
    if (credits >= nft.price) {
      setCredits(credits - nft.price);
      setOwnedNFTs([...ownedNFTs, { ...nft, purchaseDate: new Date() }]);
      setLastPurchased(nft);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  // Generate NFT images
  const generateNFTImage = (nft: NFTBooster) => {
    // Colors based on rarity
    const colors: Record<string, string> = {
      Common: '#3A9D23',
      Uncommon: '#4CA3E0',
      Rare: '#A44CE0',
      Epic: '#E0944C',
      Legendary: '#E0E04C'
    };
    
    // Different patterns based on boost type
    const patterns: Record<string, { element: ReactElement }> = {
      ATK: {
        element: (
          <polygon 
            points="50,20 80,80 20,80" 
            fill={colors[nft.rarity]} 
            stroke="#00FF41" 
            strokeWidth="2" 
          />
        )
      },
      DEF: {
        element: (
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            fill={colors[nft.rarity]} 
            stroke="#00FF41" 
            strokeWidth="2" 
          />
        )
      },
      SPD: {
        element: (
          <rect 
            x="20" 
            y="35" 
            width="60" 
            height="30" 
            fill={colors[nft.rarity]} 
            stroke="#00FF41" 
            strokeWidth="2" 
          />
        )
      },
      HP: {
        element: (
          <path 
            d="M50,80 L25,55 Q10,40 25,25 Q40,10 50,25 Q60,10 75,25 Q90,40 75,55 Z" 
            fill={colors[nft.rarity]} 
            stroke="#00FF41" 
            strokeWidth="2" 
          />
        )
      },
      ALL: {
        element: (
          <polygon 
            points="50,15 61,40 90,40 65,55 75,80 50,65 25,80 35,55 10,40 39,40"
            fill={colors[nft.rarity]} 
            stroke="#00FF41" 
            strokeWidth="2" 
          />
        )
      }
    };

    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="dashboard__nft-image">
        <rect width="100" height="100" fill="rgba(0,30,0,0.3)" />
        {patterns[nft.boost.type].element}
        <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="9">{nft.boost.value}+</text>
        <text x="50" y="95" textAnchor="middle" fill="#00FF41" fontFamily="monospace" fontSize="7">{nft.rarity}</text>
      </svg>
    );
  };

  // Get color class based on rarity
  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'Common': return 'dashboard__rarity--common';
      case 'Uncommon': return 'dashboard__rarity--uncommon';
      case 'Rare': return 'dashboard__rarity--rare';
      case 'Epic': return 'dashboard__rarity--epic';
      case 'Legendary': return 'dashboard__rarity--legendary';
      default: return 'dashboard__rarity--common';
    }
  };

  // Filter NFTs based on search and filter
  const filteredNFTs = nftBoosters.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         nft.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || nft.rarity === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Function to render a battle card
  const renderBattleCard = (opponent: Opponent) => {
    return (
      <div className="dashboard__battle-card" key={`${opponent.name}-${Math.random()}`}>
        <div className="dashboard__battle-players">
          <div className="dashboard__player-container">
            <div className="dashboard__player-avatar">
              <div className="dashboard__avatar-icon">👤</div>
            </div>
            <div className="dashboard__player-info">
              <div className="dashboard__player-name">PLAYER ONE</div>
              <div className="dashboard__player-level">Level {playerStats.level}</div>
              <div className="dashboard__player-stats">
                ATK {playerStats.atk} DEF {playerStats.def}
              </div>
              <div className="dashboard__player-winrate">Win: {playerStats.winRate}%</div>
            </div>
          </div>
          
          <div className="dashboard__vs">VS</div>
          
          <div className="dashboard__opponent-container">
            <div className="dashboard__opponent-avatar">
              <div className="dashboard__avatar-icon">👾</div>
            </div>
            <div className="dashboard__opponent-info">
              <div className="dashboard__opponent-name">{opponent.name}</div>
              <div className="dashboard__opponent-alliance">◆ A{opponent.alliance}</div>
              <div className="dashboard__opponent-stats">
                ATK {opponent.atk} DEF {opponent.def}
              </div>
              <div className="dashboard__opponent-winrate">Win: {opponent.winRate}%</div>
            </div>
          </div>
        </div>
        
        <div className="dashboard__battle-details">
          <div className="dashboard__battle-detail">
            <div className="dashboard__battle-detail-label">ENTRY FEE</div>
            <div className="dashboard__battle-detail-value">$ {opponent.entryFee}</div>
          </div>
          <div className="dashboard__battle-detail">
            <div className="dashboard__battle-detail-label">REWARD</div>
            <div className="dashboard__battle-detail-value">$ {opponent.reward}</div>
          </div>
          <div className="dashboard__battle-detail">
            <div className="dashboard__battle-detail-label">BET POOL</div>
            <div className="dashboard__battle-detail-value">$ {opponent.betPool}</div>
          </div>
        </div>
        
        <div className="dashboard__battle-actions">
          <div className="dashboard__player-actions">
            <button className="dashboard__btn dashboard__btn--battle">BATTLE</button>
            <button className="dashboard__btn dashboard__btn--profile">PROFILE</button>
          </div>
          <div className="dashboard__bet-actions">
            <button className="dashboard__btn dashboard__btn--bet">BET YOU</button>
            <button className="dashboard__btn dashboard__btn--bet">BET ENEMY</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <span className="dashboard__logo">▲ CRYPTOCLYSM</span>
        <ul className="dashboard__nav-links">
          <li>🏠 HOME</li>
          <li>📋 MISSIONS</li>
          <li>⚔️ BATTLE</li>
          <li>🛡️ ARMORY</li>
          <li>🏢 REAL ESTATE</li>
          <li>🔬 TECH LAB</li>
          <li>👥 ALLIES</li>
        </ul>
      </nav>
      <div className="dashboard__level-bar">
        <span>LEVEL 25</span>
        <div className="dashboard__progress-bar">
          <div className="dashboard__progress-bar-fill" style={{ width: '54%' }}></div>
        </div>
        <span>54%</span>
      </div>
      <div className="dashboard__stats">
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">86</span>
          <span className="dashboard__stat-sub">200</span>
          <span className="dashboard__stat-label">HP</span>
        </div>
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">30</span>
          <span className="dashboard__stat-sub">75</span>
          <span className="dashboard__stat-label">ENERGY</span>
        </div>
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">4</span>
          <span className="dashboard__stat-sub">4</span>
          <span className="dashboard__stat-label">STAMINA</span>
        </div>
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">300</span>
          <span className="dashboard__stat-label">TOKENS</span>
        </div>
        <div className="dashboard__stat dashboard__stat--credits">
          <span className="dashboard__stat-value">$ 10,000</span>
          <span className="dashboard__stat-label">GO TO BANK<br />CREDITS</span>
        </div>
      </div>

      <div className="dashboard__storyline">
        <span className="dashboard__storyline-label">STORYLINE:</span>
        <span className="dashboard__storyline-text">A new mysterious token appears. Fighters rush to claim its power before their rivals.</span>
        <button className="dashboard__storyline-button">NEXT</button>
      </div>

      <div className="dashboard__tabs">
        <button 
          className={`dashboard__tab ${activeTab === 'battles' ? 'dashboard__tab--active' : ''}`}
          onClick={() => setActiveTab('battles')}
        >
          BATTLES
        </button>
        <button 
          className={`dashboard__tab ${activeTab === 'nft' ? 'dashboard__tab--active' : ''}`}
          onClick={() => setActiveTab('nft')}
        >
          NFT MARKETPLACE
        </button>
        <button 
          className={`dashboard__tab ${activeTab === 'history' ? 'dashboard__tab--active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          GAME HISTORY
        </button>
      </div>

      {activeTab === 'battles' && (
        <div className="dashboard__battle-arena">
          {/* First pair of identical battle cards */}
          {renderBattleCard(opponents[0])}
          {renderBattleCard(opponents[0])}
          
          {/* Second pair of identical battle cards */}
          {renderBattleCard(opponents[1])}
          {renderBattleCard(opponents[1])}
        </div>
      )}

      {activeTab === 'nft' && (
        <div className="dashboard__nft">
          <div className="dashboard__nft-header">
            <div className="dashboard__nft-balance">
              Your balance: <span className="dashboard__nft-credits">$ {credits.toLocaleString()}</span>
            </div>
            <div className="dashboard__nft-owned">
              Owned NFTs: <span className="dashboard__nft-count">{ownedNFTs.length}</span>
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && lastPurchased && (
            <div className="dashboard__nft-success">
              <div className="dashboard__nft-success-image">
                {generateNFTImage(lastPurchased)}
              </div>
              <div className="dashboard__nft-success-message">
                <div className="dashboard__nft-success-title">Purchase successful!</div>
                <div className="dashboard__nft-success-desc">You now own {lastPurchased.name}. This NFT has been added to your collection.</div>
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="dashboard__nft-controls">
            <div className="dashboard__nft-search">
              <input
                type="text"
                placeholder="Search NFTs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dashboard__nft-search-input"
              />
              <div className="dashboard__nft-search-icon">🔍</div>
            </div>
            <div className="dashboard__nft-filter">
              <span className="dashboard__nft-filter-label">Filter:</span>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="dashboard__nft-filter-select"
              >
                <option value="All">All Rarities</option>
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value="Legendary">Legendary</option>
              </select>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="dashboard__nft-grid">
            {filteredNFTs.map((nft) => (
              <div key={nft.id} className="dashboard__nft-card">
                {/* NFT Image */}
                <div className="dashboard__nft-card-image">
                  {generateNFTImage(nft)}
                </div>
                
                {/* NFT Info */}
                <div className="dashboard__nft-card-info">
                  <div className="dashboard__nft-card-header">
                    <div className="dashboard__nft-card-name">{nft.name}</div>
                    <div className={`dashboard__nft-card-rarity ${getRarityColor(nft.rarity)}`}>{nft.rarity}</div>
                  </div>
                  
                  <div className="dashboard__nft-card-desc">{nft.description}</div>
                  
                  <div className="dashboard__nft-card-tags">
                    <div className="dashboard__nft-card-boost">
                      +{nft.boost.value} {nft.boost.type}
                    </div>
                    <div className="dashboard__nft-card-id">
                      ID: #{nft.id.split('-')[1]}
                    </div>
                  </div>
                  
                  <div className="dashboard__nft-card-purchase">
                    <div className="dashboard__nft-card-price">$ {nft.price}</div>
                    <button 
                      className={`dashboard__nft-buy-btn ${
                        credits >= nft.price 
                          ? 'dashboard__nft-buy-btn--available' 
                          : 'dashboard__nft-buy-btn--unavailable'
                      }`}
                      onClick={() => credits >= nft.price && handleBuyNFT(nft)}
                      disabled={credits < nft.price}
                    >
                      {credits >= nft.price ? 'BUY NFT' : 'INSUFFICIENT'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Owned NFTs Section */}
          {ownedNFTs.length > 0 && (
            <div className="dashboard__owned-nfts">
              <h2 className="dashboard__owned-nfts-title">YOUR NFT COLLECTION</h2>
              
              <div className="dashboard__owned-nfts-grid">
                {ownedNFTs.map((nft, index) => (
                  <div key={`owned-${index}`} className="dashboard__owned-nft-card">
                    {/* NFT Image */}
                    <div className="dashboard__owned-nft-image">
                      {generateNFTImage(nft)}
                    </div>
                    
                    {/* NFT Info */}
                    <div className="dashboard__owned-nft-info">
                      <div className="dashboard__owned-nft-header">
                        <div className="dashboard__owned-nft-name">{nft.name}</div>
                        <div className={`dashboard__owned-nft-rarity ${getRarityColor(nft.rarity)}`}>{nft.rarity}</div>
                      </div>
                      
                      <div className="dashboard__owned-nft-boost">
                        +{nft.boost.value} {nft.boost.type}
                      </div>
                      
                      <div className="dashboard__owned-nft-date">
                        Acquired: {nft.purchaseDate.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Create Custom NFT */}
          <div className="dashboard__create-nft">
            <h3 className="dashboard__create-nft-title">CREATE YOUR OWN NFT</h3>
            <p className="dashboard__create-nft-desc">Want to mint your own custom NFT booster? Launch our NFT creation tool and build something unique!</p>
            <button className="dashboard__create-nft-btn">
              LAUNCH NFT CREATOR
            </button>
          </div>
          
          {/* Game Token Info */}
          <div className="dashboard__token-info">
            <h3 className="dashboard__token-info-title">CRYPTOCLYSM TOKEN (CCT)</h3>
            <div className="dashboard__token-info-content">
              <div className="dashboard__token-icon">
                CCT
              </div>
              <div className="dashboard__token-details">
                <p className="dashboard__token-desc">The official in-game currency of Cryptoclysm. Use CCT tokens to participate in battles, purchase exclusive NFTs, and trade with other players.</p>
                <div className="dashboard__token-stats">
                  Current value: <span className="dashboard__token-value">$0.0325 USD</span> | 
                  24h change: <span className="dashboard__token-change">+5.2%</span>
                </div>
              </div>
            </div>
            <div className="dashboard__token-actions">
              <button className="dashboard__token-btn">
                BUY CCT
              </button>
              <button className="dashboard__token-btn">
                VIEW TOKENOMICS
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="dashboard__history">
          <div className="dashboard__battle-history">
            <div className="dashboard__recent-battles">
              <h3 className="dashboard__history-title">RECENT BATTLES</h3>
              <span className="dashboard__win-rate">Win Rate: {playerStats.winRate}%</span>
            </div>
            
            {battleHistory.map((battle) => (
              <div key={battle.id} className="dashboard__battle-history-row">
                <div className="dashboard__battle-history-info">
                  <div className={`dashboard__battle-status dashboard__battle-status--${battle.isWin ? 'win' : 'lose'}`}></div>
                  <div className="dashboard__battle-vs">
                    <span>PLAYER ONE vs {battle.opponent}</span>
                    <span className="dashboard__battle-date">{battle.date}</span>
                  </div>
                </div>
                <div className={`dashboard__battle-result dashboard__battle-result--${battle.isWin ? 'win' : 'lose'}`}>
                  {battle.isWin ? 'Victory' : 'Defeat'} • ${battle.amount} {battle.isWin ? 'earned' : 'lost'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="dashboard__tournament-standings">
            <h2 className="dashboard__tournament-title">GLOBAL TOURNAMENT STANDINGS</h2>
            <table className="dashboard__tournament-table">
              <thead>
                <tr>
                  <th className="dashboard__tournament-header">RANK</th>
                  <th className="dashboard__tournament-header">FIGHTER</th>
                  <th className="dashboard__tournament-header">WINS</th>
                  <th className="dashboard__tournament-header">LOSS</th>
                  <th className="dashboard__tournament-header">EARNINGS</th>
                </tr>
              </thead>
              <tbody>
                {tournamentStandings.map((standing) => (
                  <tr key={standing.rank} className="dashboard__tournament-row">
                    <td className="dashboard__tournament-cell">{standing.rank}</td>
                    <td className="dashboard__tournament-cell">{standing.fighter}</td>
                    <td className="dashboard__tournament-cell">{standing.wins}</td>
                    <td className="dashboard__tournament-cell">{standing.loss}</td>
                    <td className="dashboard__tournament-cell">${standing.earnings.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;