// popupのボタンによって。
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var min = parseFloat(localStorage.getItem("time"))*1000*60;
    setTimeout(
      function () {
        chrome.tabs.getAllInWindow(null, function(tabs){
          for (var i = 0; i < tabs.length; i++){
            if (tabs[i].url.match(/www.youtube.com/)){
              if(request.value["youtube_checked"]){
                chrome.tabs.remove(tabs[i].id);
              }
            }
            if (tabs[i].url.match(/twitter.com/)){
              if(request.value["twitter_checked"]){
                chrome.tabs.remove(tabs[i].id);
              }        
            }
          }
        if(localStorage.getItem("url")==null||localStorage.getItem("url")==""){
          window.open("http://www.procrasist.com", '_blank');
        }
        else{
          window.open(localStorage.getItem("url"), '_blank');
        }
      localStorage.setItem("timer_on",false)
      alert("ダメダヨ");
      });
    },min);
  });

