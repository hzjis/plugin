
chrome.tabs.getSelected(null,function(tab){
    var tit = tab.title;
    var url = tab.url;
    var imgSrc = 'https://www.kuaizhan.com/common/encode-png?large=true&data=' + url;
    document.getElementById("tit").innerHTML = tit;
    document.getElementById("code").src = imgSrc;
});

