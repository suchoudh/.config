
var since = null;

$(document).ready( function() {

	if (localStorage['username'] == "") {
		showLoginPage();
		return;
	}
	$("#processing16").hide();
	$("#refreshing").hide();
	$("#addButton").click(addToList);
	$("#iframelist").load( function() {
		$("#addButton").show();
		$("#processing16").hide();
		$("#iframecontainer").show();
		$("#refreshing").hide();
	});
});

function showLoginPage() {
	
}

function addToList() {
	$("#addButton").hide();
	$("#iframecontainer").hide();
	$("#processing16").show();
	$("#refreshing").show();
	
	chrome.tabs.getSelected(null, addPage)
}

function addPage(tab) {
	if (localStorage['username'] === undefined || localStorage['password'] === undefined) {
		chrome.tabs.create({
        	url: chrome.extension.getURL("options.html")
		});
	}
	
	var params = 'username='+localStorage['username']+'&password='+localStorage['password']+'&apikey='+localStorage['apikey']+'&url='+tab.url+'&title='+tab.title;
	$.ajax({
		type: "GET",
		url: "https://readitlaterlist.com/v2/add",
		data: params,
		success: function(data, status, XMLHttpRequest) {
			var f = document.getElementById('iframelist');
			f.src = f.src;

		},
		error: function(xhr, errorStatus, errorThrown) {
			alert('Failed to add page');
		}
	});

}

