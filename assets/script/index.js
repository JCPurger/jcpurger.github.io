particlesJS.load('particles', 'particlesjs-config.json')

let darkTheme = true;
const particles = document.querySelector('#hero');
const toggleThemeElement = document.querySelector('#toggleTheme');

toggleTheme();

toggleThemeElement.addEventListener('click', () => {
  toggleTheme()
})

function toggleTheme() {
  if(darkTheme) setDark()
  else setLight()
  
  darkTheme = !darkTheme
}

function setDark() {
  particles.style.backgroundColor = "#000";
  particles.style.backgroundImage = "url('assets/images/moon.webp')";
}

function setLight() {
  particles.style.backgroundColor = "#29b8cd";
  particles.style.backgroundImage = "url('assets/images/sun.gif')";
}