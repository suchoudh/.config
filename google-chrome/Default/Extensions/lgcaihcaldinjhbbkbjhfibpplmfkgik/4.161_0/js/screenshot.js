
var iriExecute = function () {
    setTimeout(function() {chrome.extension.sendRequest({'action' : 'getimg'})}, 100);
};

function onSetImg(request, sender, sendResponse) {
    var screenshotSelection;
    if (request.action == 'setimg') {
        var div = document.createElement('div');
        $(div).html('<div style="text-align:center;padding:5px;background-color:gray;color:white;"><h2 style="text-align:center;font-family:verdana,tahoma,arial,helvetica,sans-serif;font-size:14px;background-color:gray;color:white;">You are seeing a screenshot image. Please select and crop the section to be posted. After that click the Post button.</h2><button style="font-weight:bold;padding:2px;" id=IRIPostScreenshot>Post Screenshot</button></div>');
        $(div).css('position', 'fixed');
        $(div).css('left', '0px');
        $(div).css('top', '0px');

        var img = document.createElement('img');
        img.src = request.dataUri;
        $(img).css('opacity', '0.5');
        div.appendChild(img);
        document.body.appendChild(div);

        jQuery(function($) {
            $(img).Jcrop({
                onSelect: function(c) {
                    screenshotSelection = c;
                }
            });

            $('#IRIPostScreenshot').click(function() {
                $(this).replaceWith('<img src="' + chrome.extension.getURL('/images/ajax-loader.gif') + '" />');
                sendResponse(screenshotSelection);
            });
        });
    };
};

iriExecute();
