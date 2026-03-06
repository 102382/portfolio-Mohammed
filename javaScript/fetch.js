const techniekenSection = document.getElementById("technieken-grid");
const projectenGrid = document.querySelector(".projecten-grid")

fetch('../javaScript/skills.json')
    .then(res => res.json())
    .then(skills => {

        skills.skills.forEach(skill => {            
            let isTranslated = false;
            const techniekDiv = document.createElement('div');
            techniekDiv.classList.add('techniek1');
            techniekDiv.id = skill.id;
            techniekDiv.innerHTML = `
        <div class="htmlinfo info" id="${skill.id.toLowerCase()}info">
            <h3>${skill.name}</h3>
            <div class="meerinfo">
                <p>${skill.description}</p>
            </div>
        </div>
        <img src="${skill.image}" alt="${skill.name}">
    `;
            techniekDiv.addEventListener('click', () => {
                toggleTechniek(skill.id);
            });

            if (!isTranslated) {
                const randomTranslate = Math.random(20, 100) * 300;
                techniekenSection.appendChild(techniekDiv);
                techniekDiv.style.transform = `translateY(${randomTranslate}px)`;
                isTranslated = true
            }
        });
});


// prjects fetch

fetch('../javaScript/projects.json')
    .then(res => res.json())
    .then(projects => {
        projects.projects.forEach(project =>{
            const skilldiv = document.createElement("div");
            skilldiv.classList.add('project1');
            skilldiv.id = project.name;

            skilldiv.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button onclick="window.location.href='${project.link}'">Bekijk Project</button>
        `;
        
            projectenGrid.appendChild(skilldiv);
        })
});


// coming soon prjects fetch

fetch('../javaScript/comingSoonProjects.json')
    .then(res => res.json())
    .then(comingsoonProjects => {

        const comingdiv = document.getElementById("coming");

        if(comingsoonProjects.comingsoonProjects.length > 0){

            comingsoonProjects.comingsoonProjects.forEach(project =>{
                let isTranslated = false;
                const skilldiv = document.createElement("div");
                skilldiv.classList.add('project1');
                skilldiv.id = project.name;
    
                skilldiv.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;
                    comingdiv.appendChild(skilldiv);
            });
        }
        else{
            const h3 = document.createElement("h3");
            h3.innerHTML = "There are no projects coming up at the moment";
            comingdiv.appendChild(h3);
        }
});