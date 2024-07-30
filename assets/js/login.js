var userLogin=false;

document.getElementById("login").onclick = function() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if(!user==""||!pass==""){		
		if(user=='user@gmail'&&pass=='password'){
			alert("login successful");
			userLogin=true;
		}
		else {
			alert("Please try again");
		}
	}
	
}

