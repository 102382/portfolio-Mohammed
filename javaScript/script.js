function hideTechnieken() {
    const technieken = document.querySelectorAll('.techniek1');
    technieken.forEach(el => el.style.display = 'none');
}

function showTechnieken() {
    const technieken = document.querySelectorAll('.techniek1');
    technieken.forEach(el => el.style.display = 'flex');
}

function toggleTechniek(techName) {
    let width = window.innerWidth;

    const tech = document.getElementById(techName);
    const info = document.getElementById(`${techName.toLowerCase()}info`);

    if (width > 540) {
        if (info.style.display !== 'block') {
            hideTechnieken();
            tech.style.display = 'flex';
            tech.style.animation = "techniek 0.6s ease-in-out forwards";
            tech.style.transform = "translateY(0)"
            info.style.display = 'block';
        
            setTimeout(() => {
                info.style.animation = "fadein 0.3s forwards";
            }, 600);
        } 
        else {
            info.style.animation = 'reversfadein 0.3s forwards';
            info.style.display = 'none';
            tech.style.animation = 'techniekterug 0.6s ease-in-out forwards';
            showTechnieken();
        }
    }
};

function startDownload() {
    const downloadLink = document.getElementById('link');
    downloadLink.click();
}
function contact(){
    const ContactSection = document.getElementById('ContactSection'); 
    ContactSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
}


function menubar(){
    const navbar = document.querySelector(".nav");
    const hamburger = document.getElementById("hamburger");
    const main = document.getElementById("main");

    if(navbar.style.top != "0px"){
        navbar.style.top = "0px";
        hamburger.innerHTML = `<i class="fa-solid fa-x"></i>`;
        main.style.filter = "blur(5px)";
    }
    else if(navbar.style.top != "-250px"){
        navbar.style.top = "-250px";
        hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        main.style.filter = "blur(0px)";
    }
}

const el = document.getElementById("typewriter");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text, speed = 100) {
  for (let i = 0; i < text.length; i++) {
    el.innerHTML += text[i];
    await sleep(speed);
  }
}

async function deleteText(speed = 50) {
  while (el.innerHTML.length > 0) {
    el.innerHTML = el.innerHTML.slice(0, -1);
    await sleep(speed);
  }
}

async function startLoop() {
  while (true) {
    await typeText("Mohammed");
    await sleep(2000);

    await deleteText();

    await typeText("20 years old");
    await sleep(2000);

    await deleteText();

    await typeText("Software Developer");
    await sleep(2000);

    await deleteText();
  }
}

setTimeout(startLoop, 700);
  