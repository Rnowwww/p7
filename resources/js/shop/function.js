
//Store 

function buyFacebook() {

  if('wingsPC' in localStorage) {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }

  facebookInv.classList.remove("facebookInvNone");
  facebookInv.classList.add("facebookInv");
}

function buyTwitter() {

  if('wingsPS' in localStorage) {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  } else {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  }
  twitterInv.classList.remove("facebookInvNone");
  twitterInv.classList.add("facebookInv");
}


function buyUberEats() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }  
  
  uberEatsInv.classList.remove("uberEatsInvNone");
  uberEatsInv.classList.add("uberEatsInv");
}

function buyQuizz() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }  
  
  quizzInv.classList.remove("quizzInvNone");
  quizzInv.classList.add("quizzInv");
}


// Unlocking stuff to buy

function showingStuffToBuy() {
  showingFbInStr();
  showingTwInStr();
  showingUbInStr();
  showingQzInStr();
}

function showingFbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 10) {
      facebookStr.addEventListener("click", buyFacebook);
      facebookStr.removeAttribute("name");
      facebookStr.setAttribute("name", "shopRowV");
    }
  }
}

function showingTwInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 100) {
      twitterStr.addEventListener("click", buyTwitter);
      twitterStr.removeAttribute('name');
      twitterStr.setAttribute('name', 'shopRowV');
    }
  }
}

function showingUbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 500) {
      uberEatsStr.addEventListener("click", buyUberEats);
      uberEatsStr.removeAttribute('name');
      uberEatsStr.setAttribute('name', 'shopRowV');
    }
  }
}

function showingQzInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 1000) {
      quizzStr.addEventListener("click", buyQuizz);
      quizzStr.removeAttribute('name');
      quizzStr.setAttribute('name', 'shopRowV');
    }
  }
}


showingStuffToBuy();





