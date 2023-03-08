//  creating costom elements

class myHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
        <nav>
            <ul>
                <li><a href="../pages/index.html">Home</a></li>
                <li><a href="../pages/about.html">About</a></li>
                <li><a href="../pages/projects.html">Projects</a></li>
                <li><a href="../pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}
customElements.define("my-header", myHeader);
