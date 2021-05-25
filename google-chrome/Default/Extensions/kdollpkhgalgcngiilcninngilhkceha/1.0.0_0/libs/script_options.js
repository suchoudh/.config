var apikey = "d5cARgf9df535TV12cp22b5j66T5e4c1";

if (localStorage['username'] !== undefined) {
	$("input#username").val(localStorage['username']);
}

if (localStorage['password'] !== undefined) {
	$("input#oassword").val(localStorage['password']);
}

function onRegister() {
	// validate and process form here  
	$('.error').hide();  
	var username = $("input#username").val();  
	if (username == "") {  
		$("label#username_error").show();  
		$("input#username").focus();  
		return false;  
	}
	var password = $("input#password").val();  
	if (password == "") {  
		$("label#password_error").show();  
		$("input#password").focus();  
		return false;  
	}
	$('#processing').show();
	$('#status_image').hide();
	$('#notification').hide();
	//username=name&password=123&apikey=yourapikey
	var params = 'username='+ username + '&password=' + password + '&apikey=' + localStorage['apikey'];

	$.ajax({
		type: "GET",
		url: "https://readitlaterlist.com/v2/signup",
		data: params,
		success: function(data, status, XMLHttpRequest) {
			localStorage['username'] = username;
			localStorage['password'] = password;
			localStorage['authDone'] = true;
			$('#processing').hide();
			$('#notification').html("<h3>Registration Successful!</h3>")
			.append("<p>You can now use your reading list.</p>")
			.hide()
			.fadeIn(500, function() {
				$('#status_image').show();
				$('#status_image').html("<img id='icon' src='icons/checkIcon48x48.png' />");
			});
		},
		error: function(xhr, errorStatus, errorThrown) {
			localStorage['username'] = "";
			localStorage['password'] = "";
			localStorage['authDone'] = false;
			$("input#username").val("");
			$("input#password").val("");
			$('#processing').hide();
			if (xhr.status == "401") {
				$('#notification').html("<h3>Username already taken!</h3>")
				.append("<p>Please try a different username.</p>")
				.hide()
				.fadeIn(500, function() {
					$('#status_image').show();
					$('#status_image').html("<img id='icon' src='icons/errorIcon48x48.png' />");
				});
			}
		}
	});
	return false;
}

$(document).ready(function() {
	if (localStorage['username'])
		$("input#username").val(localStorage['username']);
	if (localStorage['password'])
		$("input#password").val(localStorage['password']);
	$('.error').hide();
	$('#processing').hide();
	$("#save_btn").click(onSave);
	$("#register_btn").click(onRegister);
});

function onSave() {
	// validate and process form here  
	$('.error').hide();  
	var username = $("input#username").val();  
	if (username == "") {  
		$("label#username_error").show();  
		$("input#username").focus();  
		return false;  
	}
	var password = $("input#password").val();  
	if (password == "") {  
		$("label#password_error").show();  
		$("input#password").focus();  
		return false;  
	}
	$('#processing').show();
	$('#status_image').hide();
	$('#notification').hide();
	//username=name&password=123&apikey=yourapikey
	var params = 'username='+ username + '&password=' + password + '&apikey=' + localStorage['apikey'];
	$.ajax({
		type: "GET",
		url: "https://readitlaterlist.com/v2/auth",
		data: params,
		success: function(data, status, XMLHttpRequest) {
			localStorage['username'] = username;
			localStorage['password'] = password;
			localStorage['authDone'] = true;
			$('#processing').hide();
			$('#notification').html("<h3>Login Successful!</h3>")
			.append("<p>You can now use your reading list.</p>")
			.hide()
			.fadeIn(500, function() {
				$('#status_image').show();
				$('#status_image').html("<img id='icon' src='icons/checkIcon48x48.png' />");
			});
		},
		error: function(xhr, errorStatus, errorThrown) {
			localStorage['username'] = "";
			localStorage['password'] = "";
			localStorage['authDone'] = false;
			$('#processing').hide();
			if (xhr.status == "401") {
				$('#notification').html("<h3>Username and/or password incorrect!</h3>")
				.append("<p>If you are a new user, please register first.</p>")
				.hide()
				.fadeIn(500, function() {
					$('#status_image').show();
					$('#status_image').html("<img id='icon' src='icons/errorIcon48x48.png' />");
				});
			}
		}
	});
	return false;
}
