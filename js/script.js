
var container = document.querySelector("#container");
var activeItem = null;

let active = false;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {

    if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
            if (!activeItem.xOffset) {
                activeItem.xOffset = 0;
            }

            if (!activeItem.yOffset) {
                activeItem.yOffset = 0;
            }

            if (e.type === "touchstart") {
                activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
                activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
            } else {
                console.log("doing something!");
                activeItem.initialX = e.clientX - activeItem.xOffset;
                activeItem.initialY = e.clientY - activeItem.yOffset;
            }
        }
    }
}

function dragEnd(e) {
    if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
    }

    active = false;
    activeItem = null;
}

function drag(e) {
    if (active) {
        if (e.type === "touchmove") {
            e.preventDefault();

            activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
            activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
            activeItem.currentX = e.clientX - activeItem.initialX;
            activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

///     Modal Javascript    ///

// Get the modal
var aboutMeModal = document.getElementById("aboutMe-modal");
var blogModal = document.getElementById("blog-modal");
var contactMeModal = document.getElementById("contactMe-modal");
var filmModal = document.getElementById("film-modal");
var resumeModal = document.getElementById("resume-modal");
var projectsModal = document.getElementById("projects-modal");
var photosModal = document.getElementById("photos-modal");
var referencesModal = document.getElementById("references-modal");
var linksModal = document.getElementById("links-modal");

// Get the button that opens the modal
var aboutMebtn = document.getElementById("aboutMe-button");
var blogbtn = document.getElementById("blog-button");
var contactMebtn = document.getElementById("contactMe-button");
var filmbtn = document.getElementById("film-button");
var resumebtn = document.getElementById("resume-button");
var projectsbtn = document.getElementById("projects-button");
var photosbtn = document.getElementById("photos-button");
var referencesbtn = document.getElementById("references-button");
var linksbtn = document.getElementById("links-button");

// Get the <span> element that closes the modal
var aboutMeSpan = document.getElementsByClassName("aboutMeClose")[0];
var blogSpan = document.getElementsByClassName("blogClose")[0];
var contactMeSpan = document.getElementsByClassName("contactMeClose")[0];
var filmSpan = document.getElementsByClassName("filmClose")[0];
var resumeSpan = document.getElementsByClassName("resumeClose")[0];
var projectsSpan = document.getElementsByClassName("projectsClose")[0];
var photosSpan = document.getElementsByClassName("photosClose")[0];
var referencesSpan = document.getElementsByClassName("referencesClose")[0];
var linksSpan = document.getElementsByClassName("linksClose")[0];

// When the user clicks on the button, open the modal
aboutMebtn.ondblclick = function () {
    aboutMeModal.style.display = "block";
}
blogbtn.ondblclick = function () {
    blogModal.style.display = "block";
}
contactMebtn.ondblclick = function () {
    contactMeModal.style.display = "block";
}
filmbtn.ondblclick = function () {
    filmModal.style.display = "block";
}
resumebtn.ondblclick = function () {
    resumeModal.style.display = "block";
}
projectsbtn.ondblclick = function () {
    projectsModal.style.display = "block";
}
photosbtn.ondblclick = function () {
    photosModal.style.display = "block";
}
referencesbtn.ondblclick = function () {
    referencesModal.style.display = "block";
}
linksbtn.ondblclick = function () {
    linksModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aboutMeSpan.onclick = function () {
    aboutMeModal.style.display = "none";
}
blogSpan.onclick = function () {
    blogModal.style.display = "none";
}
contactMeSpan.onclick = function () {
    contactMeModal.style.display = "none";
}
filmSpan.onclick = function () {
    filmModal.style.display = "none";
}
resumeSpan.onclick = function () {
    resumeModal.style.display = "none";
}
projectsSpan.onclick = function () {
    projectsModal.style.display = "none";
}
photosSpan.onclick = function () {
    photosModal.style.display = "none";
}
referencesSpan.onclick = function () {
    referencesModal.style.display = "none";
}
linksSpan.onclick = function () {
    linksModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }