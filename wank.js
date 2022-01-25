function wank() {
  var wankStatus = document.getElementById('wank-status');
  wankStatus.innerHTML = 'Wanking...';
  setTimeout(function() {
    wankStatus.innerHTML = 'Wanked!';
  }, 1000);
}
