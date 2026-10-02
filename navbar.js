document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top py-2">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          <img src="simpro-svg.svg" alt="Fintech SimPro Logo" style="height: 42px; width: auto;" onerror="this.style.display='none'; document.getElementById('alt-logo-text').style.display='inline';">
          <span id="alt-logo-text" class="fw-bold text-primary fs-4" style="display:none;">SimPro</span>
        </a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold align-items-lg-center">
            <li class="nav-item">
              <a class="nav-link ${page === 'index.html' || page === '' ? 'active text-primary fw-bold' : ''}" href="index.html">
                <i class="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page === 'pac.html' ? 'active text-primary fw-bold' : ''}" href="pac.html">
                <i class="bi bi-graph-up-arrow me-1"></i> PAC & Accumulo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page === 'previdenza.html' ? 'active text-primary fw-bold' : ''}" href="previdenza.html">
                <i class="bi bi-shield-check me-1"></i> Fondo Pensione
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page === 'finanze.html' ? 'active text-primary fw-bold' : ''}" href="finanze.html">
                <i class="bi bi-wallet2 me-1"></i> Budget Planner
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${page === 'immobili.html' ? 'active text-primary fw-bold' : ''}" href="immobili.html">
                <i class="bi bi-building me-1"></i> Real Estate Pro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
});
