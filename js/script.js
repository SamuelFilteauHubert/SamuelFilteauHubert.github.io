const themeSelect = document.getElementById("theme-select");
const languageSelect = document.getElementById("language-select");

const savedTheme = localStorage.getItem("theme") || "basic";
const savedLanguage = localStorage.getItem("language") || "en";

document.body.className = `theme-${savedTheme}`;

if (themeSelect) {
  themeSelect.value = savedTheme;

  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;

    document.body.className = `theme-${selectedTheme}`;
    localStorage.setItem("theme", selectedTheme);
  });
}

if (languageSelect) {
  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;

    localStorage.setItem("language", selectedLanguage);
    console.log(`Language changed to: ${selectedLanguage}`);
  });
}