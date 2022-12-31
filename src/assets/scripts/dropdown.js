function dropdownClick() {
  const button = document.querySelectorAll('.dropdown .title');
  button.forEach(item => {
    let state = item.getAttribute('aria-expanded');
    if (state == "true") {
      state = "false"
      item.blur();
    } else {
      state = "true";
      item.focus();
    }
    item.setAttribute('aria-expanded', state);
  })
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown .title')) {
    var dropdown = document.querySelectorAll('.dropdown .title');
    for (let i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.getAttribute('aria-expanded') == "true") {
        openDropdown.setAttribute('aria-expanded', "false");
      }
    }
  }
}