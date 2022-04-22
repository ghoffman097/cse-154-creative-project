"use strict";
(function() {

  window.addEventListener("load", init);

  /** This code is run when the page is loaded */
  function init() {
    id("movies-fold").addEventListener("dblclick", openMovie);
    id("txt").addEventListener("dblclick", openTxt);
    id("my-computer").addEventListener("dblclick", openCom);
    id('recycle-bin').addEventListener("dblclick", openBin);
    id('start').addEventListener("click", openStart);
    id('int').addEventListener('dblclick', openHtml);
    let cdplayer = qsa('.album');
    for (let i = 0; i < cdplayer.length; i++) {
      cdplayer[i].addEventListener('dblclick', openCd);
    }
  }

  /** Toggles visibility of movie file directory */
  function openMovie() {
    id("movies").classList.toggle("hidden");
    tab("mov_f", "folder.png");
  }

  /** Toggles visibility of notepad */
  function openTxt() {
    id("read").classList.toggle("hidden");
    tab("readme", "txt.png");
  }

  /** Toggles visibility of My Computer */
  function openCom() {
    id("computer").classList.toggle("hidden");
    tab("com", "mycomputer.png");
  }

  /** Toggles visibility of Recycle Bin */
  function openBin() {
    id("bin").classList.toggle("hidden");
    tab("rbin", "recycle.png");
  }

  /** Toggles visibility of Start Menu */
  function openStart() {
    id("menu").classList.toggle("hidden");
  }

  /** Opens my CP1 in a new tab */
  function openHtml() {
    window.open('cp1/about.html');
  }

  /**
   * Toggles visibility of CD player
   * @param {figure} event - Album to display in CD Player window
   */
  function openCd(event) {
    id("player").classList.toggle("hidden");
    tab("cdp", "music.png");
    let album = event.currentTarget.id;
    if (album === 'yl') {
      set("NxWorries", "Link Up", "17");
    } else if (album === 'f') {
      set("Slum Village", "Thelonius (ft. Common)", "20");
    } else if (album === 'd') {
      set("The Cure", "Pictures of You", "02");
    } else if (album === 'tpab') {
      set("Kendrick Lamar", "Mortal Man", "16");
    } else if (album === 'sf') {
      set("Goodie Mob", "Dirty South (ft. Big Boi & Cool Breeze)", "04");
    }
  }

  /**
   * Sets text in CD Player to a song from the album selected
   * @param {String} artist - name of the artist
   * @param {String} title - name of the song
   * @param {String} track - song's number in the tracklist
   */
  function set(artist, title, track) {
    document.getElementById('artist').textContent = artist;
    document.getElementById('title').textContent = title;
    document.querySelector('#title + p').textContent = track;
  }

  /**
   * Toggles visibility of tab of program on toolbar
   * @param {String} id - id of icon to be toggled
   * @param {String} image - file path of the icon
   */
  function tab(id, image) {
    let tabs = document.getElementById("tabs");
    if (tabs.querySelector("#" + id) === null) {
      let newTab = document.createElement("img");
      newTab.setAttribute('id', id);
      newTab.src = "img/" + image;
      tabs.appendChild(newTab);
    } else {
      tabs.removeChild(qs("#" + id));
    }
  }

  /**
   * Helper function for getElementById
   * @param {String} id - id of element to get
   * @return {Element} HTMLelement with the id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Helper function for querySelector
   * @param {String} selector - selector of element to get
   * @return {Element} first HTMLelement matching selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helper function for querySelectorAll
   * @param {String} selector - selector of elements to get
   * @return {NodeListOf<Element>} list of all HTMLelements matching selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

})();
