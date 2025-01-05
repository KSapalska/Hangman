import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import { languages } from "./languages";
console.log(languages);
function App() {
  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span className="chip" key={language.name} style={styles}>
        {language.name}
      </span>
    );
  });

  return (
    <>
      <Header />
      <Status />
      <main>
        <section className="language-chips">
          {languageElements}
        </section>
      </main>
    </>
  );
}

export default App;
