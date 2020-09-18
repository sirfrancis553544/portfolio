window.onload = function() {
    btndesktop.onclick = function() {
      TweenLite.to("#wrapper", 1, {
        width: 1200,
        height: 800
      });
    }
    btntablet.onclick = function() {
      TweenLite.to("#wrapper", 1, {
        width: 900,
        height: 600
      });
    }
    btnphone.onclick = function() {
      TweenLite.to("#wrapper", 1, {
        width: 320,
        height: 550
      });
    }
}
  
