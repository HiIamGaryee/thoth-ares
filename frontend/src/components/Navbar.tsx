"use client";

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavigationBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileImage] = useState("https://github.com/shadcn.png");
  const [username] = useState("User");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("21h4uiwbdiui23hri");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    setIsProfileOpen(false);
    navigate("/loginform");
  };

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      setIsWalletConnected(true);
      console.log("Connect wallet clicked");
    }
  };

  const navItems = ["HOME", "NFTs"];

  return (
    <nav className="skillsync-nav-bar">
      <div className="skillsync-nav-left">
        <Link to="/" className="skillsync-brand">
          <span className="skillsync-brand-text">
            MEME<span>FIGHT</span>
          </span>
        </Link>
        <div className="skillsync-nav-buttons">
          {navItems.map((item) => {
            const path = item === "HOME" ? "/" : item === "NFTs" ? "/nfts" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item}
                to={path}
                className={`skillsync-nav-button ${isActive ? "active" : ""}`}
              >
                {item}
              </Link>
            );
          })}
        </div>
        
        <div className="wallet-menu">
          <button 
            className={`connect-wallet-button ${isWalletConnected ? "connected" : ""}`}
            onClick={handleConnectWallet}
          >
            {isWalletConnected ? walletAddress : "CONNECT WALLET"}
          </button>
          
          {isWalletConnected && (
            <div className="wallet-dropdown">
              <div className="wallet-dropdown-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="wallet-dropdown-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Balance: 0.5 ETH
              </div>
              <div className="wallet-dropdown-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="wallet-dropdown-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Deposit
              </div>
              <div className="wallet-dropdown-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="wallet-dropdown-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Withdraw
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="skillsync-profile-menu">
        <button
          className="skillsync-profile-button"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="skillsync-avatar"
          />
          <span className="skillsync-username">{username}</span>
          <span className={`skillsync-chevron-down ${isProfileOpen ? "open" : ""}`} />
        </button>
        {isProfileOpen && (
          <div className="skillsync-profile-dropdown">
            <Link to="/userprofile" className="skillsync-dropdown-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="skillsync-dropdown-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile
            </Link>
            <button
              className="skillsync-dropdown-item"
              onClick={handleLogoutClick}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="skillsync-dropdown-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        )}
      </div>

      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h2>Are you sure you want to log out?</h2>
            <div className="logout-modal-buttons">
              <button className="logout-confirm" onClick={confirmLogout}>
                Logout
              </button>
              <button
                className="logout-cancel"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
