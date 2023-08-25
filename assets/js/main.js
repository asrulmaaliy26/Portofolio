const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const icontheme = 'uil-moon'; // Ganti dengan kelas ikon yang sesuai

const getCurrentIcon = () => darkModeToggle.classList.contains(icontheme) ? 'uil-moon' : 'uil-sun';

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.classList.contains(icontheme)) {
    darkModeToggle.classList.remove(icontheme);
    darkModeToggle.classList.add('uil-sun');
    body.setAttribute("data-theme", "light");
  } else {
    darkModeToggle.classList.remove('uil-sun');
    darkModeToggle.classList.add(icontheme);
    body.setAttribute("data-theme", "dark");
  }
  updateBackground();
  updateLabel();
});

// Periksa preferensi pengguna saat halaman dimuat
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkModeToggle.classList.add(icontheme);
  body.setAttribute("data-theme", "dark");
  updateBackground();
  updateLabel();
}

function updateBackground() {
  const bgTheme = document.querySelector('.bg-theme');
  bgTheme.classList.toggle('bg-dark', body.getAttribute("data-theme") === "dark");
}

function updateLabel() {
  const modeLabel = document.querySelector(".form-check-label[for='darkModeToggle']");
  modeLabel.textContent = body.getAttribute("data-theme") === "dark" ? "Dark Mode" : "Light Mode";
}

// Scroll Animation Box

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

//  Notification

const button = document.getElementById('button__toast')
const toasts = document.getElementById('toasts')


function createNotification(message) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = message

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}