var btn = document.querySelector(".button-feedback");
var modal = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");
var fio = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]");
var message = modal.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
  }

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
    modal.classList.add("modal-show");
    if (storage) {
      fio.value = storage;
      email.focus();
    } else {
      fio.focus();
    }
  });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
  if (!fio.value || !email.value || message.value) {
    evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", fio.value);
      }
    }
  });
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
