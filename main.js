let userName = null;
console.log(userName);

function getUserName() {
    userName = document.getElementById("user_name").value;
    if (userName == null /* || userName == " " */ || userName == "") {
        console.log("userName is empty");
    }
     else {
        console.log(userName);
        return userName;
    }
};

function testing() {
     console.log(userName);
};

testing();