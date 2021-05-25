let buttons = document.getElementsByClassName('speed');

chrome.storage.sync.get('speed', function(data) {
  if (buttons[data.speed].classList) {
    buttons[data.speed].classList.add('active')
  }
});


for (let i in buttons) {
  buttons[i].onclick = function(element) {
    for (x in buttons) {
      if (buttons[x].classList) {
        buttons[x].classList.remove('active');
      }
    }
    element.target.classList.add('active')
    let speed = element.target.value;
    chrome.storage.sync.set({speed: i}, function() { console.log('test'); });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector(\'video\').playbackRate = ' + speed + ';'});
    });
  };
}


document.getElementById('pause').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.querySelector(\'video\').pause();'});
  });
};

document.getElementById('play').onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.querySelector(\'video\').play();'});
  });
};