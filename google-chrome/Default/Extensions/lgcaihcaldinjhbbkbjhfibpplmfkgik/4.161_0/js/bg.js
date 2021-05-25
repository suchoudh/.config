
var newsObj;
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        var headers = details.requestHeaders;
        var newHeaders = [];
        for (var i = 0, l = headers.length; i < l; ++i) {
            if (headers[i].name.toLowerCase() == 'referer') {
                headers[i].value = "http://www.indianrail.gov.in/valid.php";
            }
            newHeaders.push({
                name: headers[i].name,
                value: headers[i].value
            });
        }

        return {requestHeaders: newHeaders};
    },
    {urls: ["http://www.indianrail.gov.in/cgi_bin/inet_pnstat_cgi_10521.cgi"]}, ["requestHeaders","blocking"]);

chrome.webRequest.onSendHeaders.addListener(
    function(details) {
    },
    {urls: ["http://www.indianrail.gov.in/cgi_bin/inet_pnstat_cgi_10521.cgi"]}, ["requestHeaders"]);

document.addEventListener('DOMContentLoaded', function () {
    // setInterval(checkNotifications, 120000);
    chrome.extension.onRequest.addListener(onRequest);
    chrome.contextMenus.create({"title": "India Rail Info - Add News Article",
        "contexts": ["page", "selection"], "onclick": getNewsAddEditForm});
    chrome.contextMenus.create({"title": "India Rail Info - Post Pics",
        "contexts": ["page", "selection"], "onclick": getPostPicForm});
});

function checkNotifications() {
    $.getJSON('http://indiarailinfo.com/nf?t=' + new Date()*1 + '&kkk=' + 1*new Date(),
        function(json) {
            $.each(json.items, function(i, item) {
                var not = window.webkitNotifications.createNotification('http://indiarailinfo.com/images/' + item.pic, item.title, item.body);
                not.onclick = function() {
                    window.open('http://indiarailinfo.com' + item.link, '_blank');
                    this.cancel();
                };
                not.ondisplay = function() {
                    var audio = new Audio(chrome.extension.getURL('/sounds/chimes.mp3'));
                    audio.play();
                    setTimeout(function() { not.cancel() }, 30000);
                };
                not.show();
            });
        }
    );
};

function onRequest(request, sender, callback) {
    if (request.action == 'getobj') {
        chrome.tabs.sendRequest(sender.tab.id, {'action' : 'getobj', 'objID': request.objID}, function(obj) {
            obj.tab = sender.tab;
            callback(obj);
        });
    }
    else if (request.action == 'tabresults') {
        chrome.tabs.sendRequest(sender.tab.id, {'action' : 'tabresults', 'objID': request.objID, 'content': request.data}, function() {
        });
    }
    else if (request.action == 'getimg') {
        chrome.tabs.captureVisibleTab(function(dataUri) {
            newsObj.i = dataUri;
            chrome.tabs.sendRequest(sender.tab.id, {'action' : 'setimg', 'dataUri': newsObj.i}, function(obj) {
                var x = 0, y = 0, w = 0, h = 0;
                if (obj) {
                    x = obj.x;
                    y = obj.y;
                    w = obj.w;
                    h = obj.h;
                };
                $.post('http://srv5.indiarailinfo.com/news/form', {u: newsObj.u, t: newsObj.t, c: newsObj.c, i: newsObj.i, x: x, y: y, w: w, h: h}, function(data) {
                    var jsonData = JSON.parse(data);
                    if (jsonData.error == 0) {
                        chrome.tabs.update(newsObj.tab.id, {url: 'http://srv5.indiarailinfo.com/news/form?n=' + jsonData.newsID});
                    }
                    else {
                        alert(jsonData.message);
                    };
                });
            });
        });
    }
    else if (request.action == 'fetch') {
        var obj = request.obj;
        if (obj.type == 'pnr') {
            fetchPNR(obj, obj.tab);
        }
        else if (obj.type == 'pnr2') {
            fetchPNR2(obj, obj.tab);
        }
        else if (obj.type == 'acc') {
            fetchAcc(obj, obj.tab);
        }
        else if (obj.type == 'fare') {
            fetchFare(obj, obj.tab);
        }
        else if (obj.type == 'timetable') {
            fetchTimeTable(obj, obj.tab);
        };
    };
};

function getNewsAddEditForm(info, tab) {
    chrome.tabs.update(tab.id, {url: 'https://indiarailinfo.com/news/form?u=' + info.pageUrl});
};

function getPostPicForm(info, tab) {
    chrome.tabs.update(tab.id, {url: 'https://indiarailinfo.com/pp?u=' + info.pageUrl});
};

