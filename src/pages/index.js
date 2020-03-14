import React from "react"

import Head from "../components/Head"
import CountrySelector from "../components/CountrySelector"

const Index = () => (
  <div className="app">
    <header className="header">
      <Head />
      <h1>COVID-19 Watcher</h1>
    </header>
    <main>
      <CountrySelector />
    </main>
    <footer className="footer">
      <p className="footer__text">
        Made by{" "}
        <a href="https://dkvist.com/" className="link">
          Danielkvist
        </a>
        . With{" "}
        <a href="https://www.gatsbyjs.org/" className="link">
          Gatsby
        </a>{" "}
        and{" "}
        <a href="https://www.netlify.com/" className="link">
          Netlify
        </a>
        .
      </p>
    </footer>
  </div>
)

export default Index
