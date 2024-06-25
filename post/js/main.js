/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function rainbow(div,text){
  let k = 0;
  let pogi = new Array();
  let neth = new Array("#FF0000", "#FF4000", "#FF8000", "#FFC000", "#FFFF00", "#C0FF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40", "#00FF80", "#00FFC0", "#00FFFF", "#00C0FF", "#0080FF", "#0040FF", "#0000FF", "#4000FF", "#8000FF", "#C000FF", "#FF00FF", "#FF00C0", "#FF0080", "#FF0040");
  const startColor = () => {
    for (var b = 0; b < pogi.length; b++) {
      document.getElementById(b).style.color = neth[b]
    }
    for (var c = 0; c < neth.length; c++) {
      neth[c - 1] = neth[c]
    }
    neth[neth.length - 1] = neth[-1];
    setTimeout(() => startColor(), 50);
  }
  while (neth.length<text.length){neth=neth.concat(neth);}
  while (k<=text.length){pogi[k]=text.charAt(k);k++;}
  for(var d=0;d<pogi.length;d++){div.innerHTML+=`<span id='${d}' class='${d}'>${pogi[d]}</span>`}
  startColor();
}
const footertxt = document.getElementById('pogiako');
rainbow(footertxt, "© 2024 | by Kenneth Aceberos");

    //music
    let sound = new Howl({
    src: ["/post/audio/ws.mp3"],
    autoplay: true,
    loop: true,
    format: ['mp3'],
    volume: 1,
    onend: () => {}
    });
    sound.play();
    

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 600})
sr.reveal(`.profile__profession`, {delay: 700})
sr.reveal(`.profile__social`, {delay: 800})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 900})
sr.reveal(`.profile__buttons`, {delay: 1000})
sr.reveal(`.filters__content`, {delay: 1100})
sr.reveal(`.filters`, {delay: 1200});