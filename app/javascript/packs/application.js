// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const toggleNav = function() {
  const nav = document.getElementById('navbar');
  const btn = document.querySelector('.navbar-burger');

  nav.classList.toggle('is-active');
  btn.classList.toggle('is-active');
}

// Hide Flashes after 5 seconds
document.addEventListener('turbolinks:load', function() {
  
  const btn = document.querySelector('.navbar-burger');
  btn.addEventListener('click', toggleNav);

  setInterval(function() {
    const notification = document.querySelector('.notification');
    if (notification) {
      notification.style.display = 'none';
    } else {
      return;
    }
  }, 5000);
})
