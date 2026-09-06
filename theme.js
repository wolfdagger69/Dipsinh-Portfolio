/* ==========================================================
   THEMES — named palettes, same token names as style.css
   ==========================================================
   Add a new theme by adding a new key below with all nine
   color tokens filled in. Order here = order the toggle
   button cycles through. The first entry is the default that
   loads on first visit.
   ========================================================== */

const themes = {
  paper: {
    "--paper":     "#EFEDE1",
    "--paper-2":   "#E6E2D2",
    "--ink":       "#1E2A22",
    "--ink-soft":  "#4B5A4E",
    "--muted":     "#7C7A65",
    "--line":      "#D6D0B9",
    "--gold":      "#D9A441",
    "--gold-soft": "#F0D9A6",
    "--teal":      "#1F6F63",
    "--teal-soft": "#BFE0D6",
    "--coral":     "#D9603B",
  },
  slate: {
    "--paper":     "#EEF1F1",
    "--paper-2":   "#E2E7E7",
    "--ink":       "#1B2426",
    "--ink-soft":  "#47585B",
    "--muted":     "#76898C",
    "--line":      "#CBD6D7",
    "--gold":      "#3D7A8A",
    "--gold-soft": "#BFDCE3",
    "--teal":      "#8A5A3D",
    "--teal-soft": "#E3CEBF",
    "--coral":     "#C24E3A",
  },
  ink: {
    "--paper":     "#1B1A17",
    "--paper-2":   "#242220",
    "--ink":       "#F3EFE6",
    "--ink-soft":  "#C9C3B4",
    "--muted":     "#8E897B",
    "--line":      "#3A3733",
    "--gold":      "#E3B15E",
    "--gold-soft": "#4A3F2A",
    "--teal":      "#5FBFAB",
    "--teal-soft": "#22403A",
    "--coral":     "#E37E5C",
  },
};

const themeOrder = Object.keys(themes);

function applyTheme(name) {
  const theme = themes[name] || themes[themeOrder[0]];
  const root = document.documentElement;
  Object.entries(theme).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
  root.setAttribute("data-theme", name);
}

// Apply the saved theme (or default) immediately, before paint, to avoid a flash
let savedTheme = themeOrder[0];
try {
  savedTheme = localStorage.getItem("theme") || themeOrder[0];
} catch (e) {
  /* localStorage unavailable (private browsing etc.) — fall back to default */
}
applyTheme(themeOrder.includes(savedTheme) ? savedTheme : themeOrder[0]);
