
let myImgs = [
    "IMG_1546.jpg", "IMG_1554.jpg", "IMG_1558.jpg", "IMG_1560.jpg", "IMG_1573.jpg",
    "IMG_1589.jpg", "IMG_1642.jpg", "IMG_1770.jpg", "IMG_1829.jpg", "IMG_1837.jpg",
    "IMG_1843.jpg", "IMG_1869.jpg", "IMG_1874.jpg", "IMG_1897.jpg", "IMG_1966.jpg",
    "IMG_2163.jpg", "IMG_8417.jpg", "IMG_8424.jpg", "IMG_8467.jpg", "IMG_8493.jpg",
    "IMG_8512.jpg", "IMG_8534.jpg", "IMG_8623.jpg", "IMG_8624.jpg", "IMG_8646.jpg",
    "IMG_8689.jpg", "IMG_8710.jpg", "IMG_8809.jpg", "IMG_8813.jpg", "IMG_8820.jpg"
];

let currentIndex = 0;

// Initialisiert die Bildergalerie
function init() {
    addImg();
}

// Fügt die Bilder ins HTML ein
function addImg() {
    let contentRef = document.getElementById('content');
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += `<img onclick="openDialog(${index})" class="main_img" src="image/img/${myImgs[index]}" alt="Bild ${index + 1}">`;
    }
}

// Öffnet das Dialogfenster mit dem angeklickten Bild
function openDialog(index) {
    currentIndex = index;
    updateDialog();
    document.getElementById('overlay').style.display = 'flex';
}

// Aktualisiert das Dialogfenster mit dem aktuellen Bild und Index
function updateDialog() {
    let imageSrc = `image/img/${myImgs[currentIndex]}`;
    document.getElementById('dialogImage').src = imageSrc;
    document.getElementById('imageIndex').textContent = `${currentIndex + 1} / ${myImgs.length}`;
}

// Wechselt zum vorherigen Bild
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : myImgs.length - 1;
    updateDialog();
}

// Wechselt zum nächsten Bild
function nextImage() {
    currentIndex = (currentIndex < myImgs.length - 1) ? currentIndex + 1 : 0;
    updateDialog();
}

// Schließt das Dialogfenster
function closeDialog() {
    document.getElementById('overlay').style.display = 'none';
}

// Event-Listener für das Klicken außerhalb des Dialogs
function setupOverlayListener() {
    let overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeDialog();
        }
    });
}

window.onload = function () {
    init();
    setupOverlayListener();
};


