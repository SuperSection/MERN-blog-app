import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="" className="login">
            Login
          </a>
          <a href="" className="register">
            Register
          </a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://scitechdaily.com/images/Solid-State-Thermal-Transistor-Using-an-Electric-Field-To-Control-Heat-Movement-777x437.jpg"
            alt="Transistor for Heat"
          />
        </div>
        <div className="texts">
          <h2>
            A New Era in Heat Management: UCLA Unveils Revolutionary Solid-State
            Thermal Transistor
          </h2>
          <p className="info">
            <div className="postedBy">
              UNIVERSITY OF CALIFORNIA, LOS ANGELES
            </div>
            <time>Decemeber 25, 2023</time>
          </p>
          <p className="summary">
            UCLA researchers have unveiled a novel solid-state thermal
            transistor that effectively controls semiconductor heat movement
            using an electric field, marking a significant advancement in
            computer chip heat management and potential applications in
            understanding human body heat regulation. Illustration of a
            UCLA-developed solid-state thermal transistor using an electric
            field to control heat movement. Credit: H-Lab/UCLA
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://scitechdaily.com/images/Supercapacitor-Art-Illustration-777x518.jpg"
            alt="Super Capacitor"
          />
        </div>
        <div className="texts">
          <h2>
            Increasing the Energy Density of Hybrid Supercapacitor Electrodes
          </h2>
          <p className="info">
            <div className="postedBy">
              LAWRENCE BERKELEY NATIONAL LABORATORY
            </div>
            <time>Decemeber 23, 2023</time>
          </p>
          <p className="summary">
            A breakthrough in hybrid supercapacitors has been achieved by
            increasing the active material in electrodes through a novel method
            involving β-Ni(OH)2 and NH4F. This innovation leads to more
            efficient energy storage, opening new possibilities for advanced
            energy systems. Credit: SciTechDaily.com
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://scitechdaily.com/images/Neuroscience-Brain-AI-Neural-Network-Concept.jpg"
            alt="Neuroscience Brain"
          />
        </div>
        <div className="texts">
          <h2>In a Striking Discovery, AI Shows Human-Like Memory Formation</h2>
          <p className="info">
            <div className="postedBy">INSTITUTE FOR BASIC SCIENCE</div>
            <time>Decemeber 20, 2023</time>
          </p>
          <p className="summary">
            An interdisciplinary team has found that AI models, particularly the
            Transformer, process memory in a manner similar to the human brain's
            hippocampus. This breakthrough suggests that applying neuroscience
            principles, like those of the NMDA receptor, to AI can improve
            memory functions, advancing the field of AI and offering insights
            into human brain function. Credit: SciTechDaily.com
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://scitechdaily.com/images/AI-Scientist-Assistant-Art-Concept-777x518.jpg"
            alt="AI-Scientist"
          />
        </div>
        <div className="texts">
          <h2>
            Automating Scientific Discovery: Carnegie Mellon's AI Coscientist
            Transforms Lab Work
          </h2>
          <p className="info">
            <div className="postedBy">CARNEGIE MELLON UNIVERSITY</div>
            <time>Decemeber 20, 2023</time>
          </p>
          <p className="summary">
            Carnegie Mellon's AI system, Coscientist, autonomously conducts
            chemistry experiments, significantly advancing scientific research.
            By using large language models and automating the experimental
            process, it offers a new level of efficiency and accessibility in
            scientific research, with an emphasis on safety and ethical use.
            Credit: SciTechDaily.com
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
