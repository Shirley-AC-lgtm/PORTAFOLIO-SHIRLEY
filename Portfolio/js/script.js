// ===============================
// BACKGROUND GLOW
// ===============================

const glow = document.querySelector(".background-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.animate({

            left: (e.clientX - 350) + "px",
            top: (e.clientY - 350) + "px"

        }, {

            duration: 700,
            fill: "forwards"

        });

    });

}


// ===============================
// LOADER
// ===============================

const loader =
    document.getElementById("loader");

const progress =
    document.querySelector(".loading-progress");

let porcentaje = 0;

if (loader && progress) {

    const intervalo = setInterval(() => {

        porcentaje++;

        progress.style.width =
            porcentaje + "%";


        if (porcentaje >= 100) {

            clearInterval(intervalo);

            loader.style.opacity = "0";
            loader.style.transition = "1s";


            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }

    }, 20);

}


// ===============================
// NAVBAR
// ===============================

const navbar =
    document.getElementById("navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("nav-scroll");

        }

        else {

            navbar.classList.remove("nav-scroll");

        }

    });

}


// =====================================================
// 3D MODEL MODAL
// =====================================================

const modelModal =
    document.getElementById("modelModal");

const exploreButton =
    document.querySelector(".explore-btn");

const closeModal =
    document.querySelector(".close-modal");


// OPEN MODEL MODAL

if (
    modelModal &&
    exploreButton
) {

    exploreButton.addEventListener("click", () => {

        modelModal.style.display = "flex";

        requestAnimationFrame(() => {

            modelModal.classList.add("active");

        });

    });

}


// CLOSE MODEL MODAL

if (
    modelModal &&
    closeModal
) {

    closeModal.addEventListener("click", () => {

        modelModal.classList.remove("active");

        setTimeout(() => {

            modelModal.style.display = "none";

        }, 350);

    });

}


// CLOSE WHEN CLICKING OUTSIDE

if (modelModal) {

    modelModal.addEventListener(
        "click",
        (event) => {

            if (event.target === modelModal) {

                modelModal.classList.remove(
                    "active"
                );

                setTimeout(() => {

                    modelModal.style.display =
                        "none";

                }, 350);

            }

        }
    );

}


// =====================================================
// MODEL TABS
// =====================================================

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContent =
    document.getElementById("tabContent");


if (tabContent) {

    tabButtons.forEach(button => {

        button.addEventListener("click", () => {


            tabButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const tab =
                button.dataset.tab;


            if (tab === "overview") {

                tabContent.innerHTML = `

                    <h3>About this model</h3>

                    <p>
                        A detailed leather backpack created as
                        a game-ready 3D asset.
                    </p>

                `;

            }


            if (tab === "gallery") {

                tabContent.innerHTML = `

                    <h3>Gallery</h3>

                    <p>
                        Additional renders and views of the model
                        will be displayed here.
                    </p>

                `;

            }


            if (tab === "breakdown") {

                tabContent.innerHTML = `

                    <h3>Production Breakdown</h3>

                    <p>
                        Modeling — 3ds Max
                    </p>

                    <p>
                        Sculpting — Mudbox
                    </p>

                    <p>
                        Texturing — Substance 3D Painter
                    </p>

                `;

            }


            if (tab === "viewer") {

                tabContent.innerHTML = `

                    <h3>3D Viewer</h3>

                    <p>
                        Interactive 3D viewer coming soon.
                    </p>

                `;

            }

        });

    });

}


// =====================================================
// MODEL IMAGE GALLERY
// =====================================================

const mainModelImage =
    document.getElementById("mainModelImage");

const thumbnails =
    document.querySelectorAll(".thumbnail");


if (mainModelImage) {

    thumbnails.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            const image =
                thumbnail.querySelector("img");

            if (!image) return;


            const newImage =
                image.src;


            if (
                mainModelImage.src === newImage
            ) {

                return;

            }


            mainModelImage.classList.add(
                "changing"
            );


            setTimeout(() => {

                mainModelImage.src =
                    newImage;

                mainModelImage.classList.remove(
                    "changing"
                );

            }, 180);


            thumbnails.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            thumbnail.classList.add(
                "active"
            );

        });

    });

}


// =====================================================
// PROJECT SHOWCASE DATA
// =====================================================

const projectsData = {

    "locked-in": {

        title: "LOCKED IN",

        status: "● PUBLISHED",

        link:
            "https://locked-in-t8lo.onrender.com/",

        tech: [

            "HTML",
            "CSS",
            "JavaScript",
            "AI",
            "Plasma AI"

        ],

        screens: [

            {

                image:
                    "assets/images/locked-in/01_Locked_In_Main_Screen.png",

                title:
                    "Main Screen",

                description:
                    "The main interface of LOCKED IN, where the user can access the different study and concentration tools."

            },

            {

                image:
                    "assets/images/locked-in/02_Focus_Mode.png",

                title:
                    "Focus Mode",

                description:
                    "A dedicated concentration environment designed to help the user stay focused while studying."

            },

            {

                image:
                    "assets/images/locked-in/03_AI_Summary.png",

                title:
                    "AI Summary",

                description:
                    "The AI analyzes the uploaded study material and generates a concise summary to make reviewing information easier."

            },

            {

                image:
                    "assets/images/locked-in/04_Flashcards.png",

                title:
                    "Flashcards",

                description:
                    "Interactive flashcards generated to help the user review important information from their study material."

            },

            {

                image:
                    "assets/images/locked-in/05_Flashcards_Completed.png",

                title:
                    "Flashcards Completed",

                description:
                    "The completed flashcard session provides feedback and tracks the user's progress."

            },

            {

                image:
                    "assets/images/locked-in/06_Exam_Quiz.png",

                title:
                    "Exam Quiz",

                description:
                    "An automatically generated quiz allows the user to test their understanding of the studied material."

            },

            {

                image:
                    "assets/images/locked-in/07_Quiz_Completed.png",

                title:
                    "Quiz Completed",

                description:
                    "The completed quiz provides the final result and gives the user feedback about their performance."

            }

        ]

    },


    // =================================================
    // SKILLBRIDGE AI
    // =================================================

    "skillbridge": {

        title: "SkillBridge AI",

        status: "● PUBLISHED",

        link:
            "https://skillbridge-ai-218965579501.us-central1.run.app/",

        tech: [

            "Web",
            "JavaScript",
            "Node.js",
            "Gemini AI"

        ],

        screens: [

            {

                image:
                    "assets/images/skillbridge/01_Login.png",

                title:
                    "Login",

                description:
                    "The entry point where users access their SkillBridge profile."

            },

            {

                image:
                    "assets/images/skillbridge/02_Skills_Assessment.png",

                title:
                    "Skills Assessment",

                description:
                    "Users provide information about their abilities and experience so the platform can understand their skill profile."

            },

            {

                image:
                    "assets/images/skillbridge/03_AI_Skills_Analysis.png",

                title:
                    "AI Skills Analysis",

                description:
                    "The AI analyzes the information provided by the user to identify relevant skills and strengths."

            },

            {

                image:
                    "assets/images/skillbridge/04_Skills_Analysis_Result.png",

                title:
                    "Skills Analysis Result",

                description:
                    "The user receives an organized analysis of their demonstrated skills."

            },

            {

                image:
                    "assets/images/skillbridge/05_Portfolio.png",

                title:
                    "Portfolio",

                description:
                    "A personalized portfolio allows users to present their skills and experience."

            },

            {

                image:
                    "assets/images/skillbridge/06_Post_Project.png",

                title:
                    "Post Project",

                description:
                    "Users can showcase projects and evidence of their abilities."

            },

            {

                image:
                    "assets/images/skillbridge/07_Opportunities.png",

                title:
                    "Opportunities",

                description:
                    "The platform presents opportunities that can match the user's demonstrated abilities."

            },

            {

                image:
                    "assets/images/skillbridge/08_Application.png",

                title:
                    "Application",

                description:
                    "Users can begin the application process for an opportunity."

            },

            {

                image:
                    "assets/images/skillbridge/09_AI_Application_Generation.png",

                title:
                    "AI Application Generation",

                description:
                    "AI assists the user in generating application material based on their skills and the selected opportunity."

            },

            {

                image:
                    "assets/images/skillbridge/10_Project_Chat.png",

                title:
                    "Project Chat",

                description:
                    "A dedicated conversation space allows users to interact with project-related information."

            },

            {

                image:
                    "assets/images/skillbridge/11_Dashboard.png",

                title:
                    "Dashboard",

                description:
                    "The dashboard brings together the user's profile, projects, opportunities and activity in one place."

            }

        ]

    }

};


// =====================================================
// PROJECT MODAL ELEMENTS
// =====================================================

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalTitle =
    document.getElementById("projectModalTitle");

const projectModalStatus =
    document.getElementById("projectModalStatus");

const projectModalDescription =
    document.getElementById(
        "projectModalDescription"
    );

const projectModalTech =
    document.getElementById(
        "projectModalTech"
    );

const projectModalImage =
    document.getElementById(
        "projectModalImage"
    );

const projectModalLink =
    document.getElementById(
        "projectModalLink"
    );

const projectThumbnails =
    document.getElementById(
        "projectThumbnails"
    );

const projectScreenCounter =
    document.getElementById(
        "projectScreenCounter"
    );

const projectScreenTitle =
    document.getElementById(
        "projectScreenTitle"
    );


// =====================================================
// CURRENT PROJECT
// =====================================================

let currentProject = null;

let currentScreen = 0;


// =====================================================
// SHOW PROJECT SCREEN
// =====================================================

function showProjectScreen(index) {

    if (!currentProject) return;

    const project =
        projectsData[currentProject];

    if (!project) return;

    const screen =
        project.screens[index];

    if (!screen) return;


    currentScreen = index;


    // IMAGE

    if (projectModalImage) {

        projectModalImage.classList.add(
            "changing"
        );


        setTimeout(() => {

            projectModalImage.src =
                screen.image;

            projectModalImage.alt =
                screen.title;

            projectModalImage.classList.remove(
                "changing"
            );

        }, 180);

    }


    // COUNTER

    if (projectScreenCounter) {

        projectScreenCounter.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(project.screens.length).padStart(2, "0")}`;

    }


    // TITLE

    if (projectScreenTitle) {

        projectScreenTitle.textContent =
            screen.title;

    }


    // DESCRIPTION

    if (projectModalDescription) {

        projectModalDescription.textContent =
            screen.description;

    }


    // ACTIVE THUMBNAIL

    document
        .querySelectorAll(".project-thumbnail")
        .forEach(
            (thumbnail, thumbnailIndex) => {

                thumbnail.classList.toggle(

                    "active",

                    thumbnailIndex === index

                );

            }
        );

}


// =====================================================
// OPEN PROJECT
// =====================================================

document
    .querySelectorAll(".project-details-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.project;

                const project =
                    projectsData[projectId];

                if (!project) return;


                currentProject =
                    projectId;


                // TITLE

                if (projectModalTitle) {

                    projectModalTitle.textContent =
                        project.title;

                }


                // STATUS

                if (projectModalStatus) {

                    projectModalStatus.textContent =
                        project.status;

                }


                // TECHNOLOGIES

                if (projectModalTech) {

                    projectModalTech.innerHTML =
                        project.tech
                            .map(
                                tech => `
                                    <span>
                                        ${tech}
                                    </span>
                                `
                            )
                            .join("");

                }


                // WEBSITE

                if (projectModalLink) {

                    projectModalLink.href =
                        project.link;

                }


                // THUMBNAILS

                if (projectThumbnails) {

                    projectThumbnails.innerHTML =
                        project.screens
                            .map(
                                (screen, index) => `

                                    <button
                                        class="project-thumbnail ${index === 0 ? "active" : ""}"
                                        data-screen="${index}">

                                        <img
                                            src="${screen.image}"
                                            alt="${screen.title}">

                                    </button>

                                `
                            )
                            .join("");


                    // THUMBNAIL EVENTS

                    projectThumbnails
                        .querySelectorAll(
                            ".project-thumbnail"
                        )
                        .forEach(
                            thumbnail => {

                                thumbnail.addEventListener(
                                    "click",
                                    () => {

                                        const index =
                                            Number(
                                                thumbnail.dataset.screen
                                            );

                                        showProjectScreen(
                                            index
                                        );

                                    }
                                );

                            }
                        );

                }


                // FIRST SCREEN

                showProjectScreen(0);


                // SHOW MODAL

                if (projectModal) {

                    projectModal.style.display =
                        "flex";


                    requestAnimationFrame(() => {

                        projectModal.classList.add(
                            "active"
                        );

                    });

                }


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


// =====================================================
// CLOSE PROJECT MODAL
// =====================================================

function closeProjectModal() {

    if (!projectModal) return;


    projectModal.classList.remove(
        "active"
    );


    setTimeout(() => {

        projectModal.style.display =
            "none";

        document.body.style.overflow =
            "";

    }, 350);

}


// CLOSE BUTTON

if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


// CLICK OUTSIDE

if (projectModal) {

    projectModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectModal();

            }

        }
    );

}


// ESC KEY

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();

        }

    }
);