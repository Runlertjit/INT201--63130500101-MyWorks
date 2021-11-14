const darkModeToggle = document.querySelector('#dark-mode-toggle');
const getBody = document.getElementsByTagName('body')[0];
const getHead = document.querySelector('#Content');
const getLabel = document.querySelector('#labelText')

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  getBody.setAttribute('style',
  'background-color: rgba(0, 0, 0, 0.8); transition : 1200ms ease-in-out');
  getHead.setAttribute('style',
  'text-align: center; color : white;margin-top: -1em; transition : 1200ms ease-in-out');
  getLabel.setAttribute('style','color : white; transition : 1200ms ease-in-out')
  let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('enabled')};expires=${new Date('January 1, 2022')}`
  document.cookie = cookieText;
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  getBody.setAttribute('style',
  'background-color: rgba(255, 255, 255, 0.8);transition : 1200ms ease-in-out')
  getHead.setAttribute('style',
  'text-align: center; color : black;margin-top: -1em; transition : 1200ms ease-in-out');
  getLabel.setAttribute('style','color : black; transition : 1200ms ease-in-out')
  let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('disable')};expires=${new Date('January 1, 2022')}`
  document.cookie = cookieText;
}
 
window.onload = loadTheme;
function loadTheme (){
    let darkMode = getCookie('darkMode'); 
    if (darkMode === 'enabled') {
        enableDarkMode();
      }
}

darkModeToggle.addEventListener('click', () => {
  let darkMode = getCookie('darkMode'); 
  console.log(darkMode)
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
}});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}