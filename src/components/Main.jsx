import { useState } from "react";
import { CoreConcept } from "./CoreConcepts.jsx";
import { CORE_CONCEPTS } from "../data.js";
import TabButton from "./TabButton.jsx";
import "./Main.css";
import { EXAMPLES } from "../data.js";

export function Main() {
  const [example, setExample] = useState(null);

  let tabContent = <p>Please choose a topic!</p>;

  if (example) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[example].title}</h3>
        <p>{EXAMPLES[example].description}</p>
        <pre>
          <code>{EXAMPLES[example].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core concepts!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={example === "components"}
            onClick={() => setExample("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={example === "jsx"}
            onClick={() => setExample("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={example === "props"}
            onClick={() => setExample("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={example === "state"}
            onClick={() => setExample("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  );
}
