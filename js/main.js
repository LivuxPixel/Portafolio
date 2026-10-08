document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImgContainer = document.getElementById('modal-img-container');
    const projectRows = document.querySelectorAll('.project-row');

    const projectData = {
        norcul: {
            title: "NORCUL - Productos y servicios para sistemas de refrigeración y climatización",
            desc: "Rediseño integral de identidad visual, catálogo digital y desarrollo web corporativo. Optimización de la experiencia de usuario y arquitectura front-end con HTML, CSS y JavaScript.",
            img: "assets/img/norcul.png"
        },
        hada: {
            title: "HADA MADRINA - Taller de bordados",
            desc: "Diseño y desarrollo web de interfaces adaptables. Maquetación con HTML, CSS y JS, además de estandarización técnica de archivos para producción textil.",
            img: "assets/img/hada_madrina.png"
        },
        dali: {
            title: "DALÍ Design - Agencia de Diseño",
            desc: "Conceptualización visual, diseño de interfaces digitales, maquetación web y dirección de proyectos de identidad corporativa y exposiciones.",
            img: "assets/img/dali.png"
        }
    };

    projectRows.forEach(row => {
        row.addEventListener('click', () => {
            const projectId = row.getAttribute('data-project');
            const data = projectData[projectId];
            if (data) {
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                modalImgContainer.innerHTML = `<img src="${data.img}" alt="${data.title}">`;
                modal.classList.add('active');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});