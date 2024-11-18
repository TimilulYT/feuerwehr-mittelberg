// Zugriff auf das Modal und seine Elemente
const modal = document.getElementById("einsatz-modal");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDetails = document.getElementById("modal-details");
const closeButton = document.querySelector(".close-button");

// Einsätze anklickbar machen
document.querySelectorAll(".einsatz").forEach(einsatz => {
    einsatz.addEventListener("click", () => {
        // Informationen aus dem angeklickten Einsatz abrufen
        const title = einsatz.getAttribute("data-title");
        const date = einsatz.getAttribute("data-date");
        const details = einsatz.getAttribute("data-details");

        // Modal mit den Einsatzdaten füllen
        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalDetails.textContent = details;

        // Modal anzeigen
        modal.style.display = "block";
    });
});
