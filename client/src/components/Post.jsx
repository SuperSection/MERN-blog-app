export default function Post() {
  return (
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
          <div className="postedBy">LAWRENCE BERKELEY NATIONAL LABORATORY</div>
          <time>Decemeber 23, 2023</time>
        </p>
        <p className="summary">
          A breakthrough in hybrid supercapacitors has been achieved by
          increasing the active material in electrodes through a novel method
          involving β-Ni(OH)2 and NH4F. This innovation leads to more efficient
          energy storage, opening new possibilities for advanced energy systems.
          Credit: SciTechDaily.com
        </p>
      </div>
    </div>
  );
}
