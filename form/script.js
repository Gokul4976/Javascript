
document.getElementById("permanentcheckbox").addEventListener("change", function () {
    let Currentaddress1 = document.getElementById("Currentaddress1");
    let Currentaddress2 = document.getElementById("Currentaddress2");
    let Currentcity = document.getElementById("Currentcity");
    let Currentzipcode = document.getElementById("Currentzipcode");
    let currentstate = document.getElementById("currentstate");

    let permanentaddress1 = document.getElementById("permanentaddress1");
    let permanentaddress2 = document.getElementById("permanentaddress2");
    let permanentcity = document.getElementById("permanentcity");
    let permanentzipcode = document.getElementById("permanentzipcode");
    let permanentstate = document.getElementById("permanentstate");

    if (this.checked)
    {
        permanentaddress1.value=Currentaddress1.value;
        permanentaddress2.value=Currentaddress2.value;
        permanentcity.value=Currentcity.value;
        permanentzipcode.value=Currentzipcode.value;
        permanentstate.value=currentstate.value;
        permanentaddress1.disabled=true;
        permanentaddress2.disabled=true;
        permanentcity.disabled=true;
        permanentzipcode.disabled=true;
        permanentstate.disabled=true;
    }
    else{
        permanentaddress1.value="";
        permanentaddress2.value="";
        permanentcity.value="";
        permanentzipcode.value="";
        permanentstate.value="";
        permanentaddress1.disabled=false;
        permanentaddress2.disabled=false;
        permanentcity.disabled=false;
        permanentzipcode.disabled=false;
        permanentstate.disabled=false;
    }
})
document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let fathername = document.getElementById("fathername").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value.trim();
    let Currentaddress1 = document.getElementById("Currentaddress1").value.trim();
    let Currentaddress2 = document.getElementById("Currentaddress2").value.trim();
    let Currentcity = document.getElementById("Currentcity").value.trim();
    let Currentzipcode = document.getElementById("Currentzipcode").value.trim();
    let currentstate = document.getElementById("currentstate").value.trim();
    let permanentaddress1 = document.getElementById("permanentaddress1").value.trim();
    let permanentaddress2 = document.getElementById("permanentaddress2").value.trim();
    let permanentcity = document.getElementById("permanentcity").value.trim();
    let permanentzipcode = document.getElementById("permanentzipcode").value.trim();
    let permanentstate = document.getElementById("permanentstate").value.trim();
    let photo = document.getElementById("photo").files[0];
    let permanentcheckbox = document.getElementById("permanentcheckbox");

    
    console.log(photo);

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter name";
        document.getElementById("name").style.border="2px solid red";
        isValid = false;
    }
    else if (name != "" && !(/^[A-Za-z ]{1,}$/.test(name))) {
        document.getElementById("nameError").innerHTML = "Enter valid name(alphabets only) ";
        document.getElementById("name").style.border="2px solid red";
        
        isValid = false;
        
    }
    else {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("name").style.border="";

    }

    if (fathername == "") {
        document.getElementById("fathernameError").innerHTML = "Enter father name";
        document.getElementById("fathername").style.border="2px solid red";
        isValid = false;
    }
    else if (name != "" && !(/^[A-Za-z ]{2,}$/.test(name))) {
        document.getElementById("fathernameError").innerHTML = "Enter valid father name(alphabets only) ";
        document.getElementById("fathername").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("fathernameError").innerHTML = "";
        document.getElementById("fathername").style.border="";

    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Enter email";
        document.getElementById("email").style.border="2px solid red";
        isValid = false;
    }
    else if (email != "" && !(/^\S+@\S+\.\S+$/.test(email))) {
        document.getElementById("emailError").innerHTML = "Enter valid email ";
        document.getElementById("email").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("email").style.border="";

    }

    let birthdate = new Date(dob);
    let today = new Date();


    if (dob == "") {
        document.getElementById("dobError").innerHTML = "Enter Date of birth";
        document.getElementById("dob").style.border="2px solid red";
        isValid = false;
    }
    else if (birthdate > today) {
        document.getElementById("dobError").innerHTML = "Enter valid date of birth ";
        document.getElementById("dob").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("dobError").innerHTML = "";
        document.getElementById("dob").style.border="";

    }

    if (mobile == "") {
        document.getElementById("mobileError").innerHTML = "Enter phone number";
        document.getElementById("mobile").style.border="2px solid red";
        isValid = false;
    }
    else if (mobile != "" && !(/^\d{10}$/.test(mobile))) {
        document.getElementById("mobileError").innerHTML = "Enter valid phone number ";
        document.getElementById("mobile").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("mobileError").innerHTML = "";
        document.getElementById("mobile").style.border="";

    }

    if (Currentaddress1 == "") {
        document.getElementById("currentaddress1Error").innerHTML = "Enter Address line1";
        document.getElementById("Currentaddress1").style.border="2px solid red";
        isValid = false;
    }
    // else if (Currentaddress1 != "" && !(/^[A-Za-z ]{2,}$/.test(Currentaddress1))) {
        //     document.getElementById("currentaddress1Error").innerHTML = "Enter valid name(alphabets only) ";
        //     isValid = false;
        
        // }
        else {
            document.getElementById("currentaddress1Error").innerHTML = "";
            document.getElementById("Currentaddress1").style.border="";

    }


    if (Currentaddress2 == "") {
        document.getElementById("currentaddress2Error").innerHTML = "Enter Address line2";
        document.getElementById("Currentaddress2").style.border="2px solid red";
        isValid = false;
    }
    // else if (Currentaddress2 != "" && !(/^[A-Za-z ]{2,}$/.test(Currentaddress2))) {
        //     document.getElementById("currentaddress2Error").innerHTML = "Enter valid name(alphabets only) ";
        //     isValid = false;
        
        // }
        else {
            document.getElementById("currentaddress2Error").innerHTML = "";
            document.getElementById("Currentaddress2").style.border="";

    }

    if (Currentcity == "") {
        document.getElementById("currentcityError").innerHTML = "Enter city";
        document.getElementById("Currentcity").style.border="2px solid red";
        isValid = false;
    }
    else if (Currentcity != "" && !(/^[A-Za-z ]{2,}$/.test(Currentcity))) {
        document.getElementById("currentcityError").innerHTML = "Enter valid city ";
        document.getElementById("Currentcity").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("currentcityError").innerHTML = "";
        document.getElementById("Currentcity").style.border="";

    }


    if (currentstate == "") {
        document.getElementById("currentstateError").innerHTML = "Enter state";
        document.getElementById("currentstate").style.border="2px solid red";
        isValid = false;
    }
    else if (currentstate != "" && !(/^[A-Za-z ]{2,}$/.test(currentstate))) {
        document.getElementById("currentstateError").innerHTML = "Enter valid state ";
        document.getElementById("currentstate").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("currentstateError").innerHTML = "";
        document.getElementById("currentstate").style.border="";

    }


    if (Currentzipcode == "") {
        document.getElementById("currentzipError").innerHTML = "Enter current zip code";
        document.getElementById("Currentzipcode").style.border="2px solid red";
        isValid = false;
    }
    else if (Currentzipcode != "" && !(/^\d{4,}$/.test(Currentzipcode))) {
        document.getElementById("currentzipError").innerHTML = "Enter valid zipcode ";
        document.getElementById("Currentzipcode").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("currentzipError").innerHTML = "";
        document.getElementById("Currentzipcode").style.border="";

    }

    if (permanentaddress1 == "") {
        document.getElementById("permanentaddress1Error").innerHTML = "Enter permanent address line 1";
        document.getElementById("permanentaddress1").style.border="2px solid red";
        isValid = false;
    }
    // else if (permanentaddress1 != "" && !(/^[A-Za-z ]{2,}$/.test(permanentaddress1))) {
        //     document.getElementById("permanentaddress1Error").innerHTML = "Enter valid name(alphabets only) ";
        //     isValid = false;
        
        // }
        else {
            document.getElementById("permanentaddress1Error").innerHTML = "";
            document.getElementById("permanentaddress1").style.border="";

    }


    if (permanentaddress2 == "") {
        document.getElementById("permanentaddress2Error").innerHTML = "Enter permanent address line 2";
        document.getElementById("permanentaddress2").style.border="2px solid red";
        isValid = false;
    }
    // else if (permanentaddress2 != "" && !(/^[A-Za-z ]{2,}$/.test(permanentaddress2))) {
        //     document.getElementById("permanentaddress2Error").innerHTML = "Enter valid name(alphabets only) ";
        //     isValid = false;
        
        // }
        else {
            document.getElementById("permanentaddress2Error").innerHTML = "";
            document.getElementById("permanentaddress2").style.border="";

    }


    if (permanentcity == "") {
        document.getElementById("permanentcityError").innerHTML = "Enter permanent city";
        document.getElementById("permanentcity").style.border="2px solid red";
        isValid = false;
    }
    else if (permanentcity != "" && !(/^[A-Za-z ]{2,}$/.test(permanentcity))) {
        document.getElementById("permanentcityError").innerHTML = "Enter valid permanent city ";
        document.getElementById("permanentcity").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("permanentcityError").innerHTML = "";
        document.getElementById("permanentcity").style.border="";

    }


    if (permanentstate == "") {
        document.getElementById("permanentstateError").innerHTML = "Enter state";
        document.getElementById("permanentstate").style.border="2px solid red";
        isValid = false;
    }
    else if (permanentstate != "" && !(/^[A-Za-z ]{2,}$/.test(permanentstate))) {
        document.getElementById("permanentstateError").innerHTML = "Enter valid state ";
        document.getElementById("permanentstate").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("permanentstateError").innerHTML = "";
        document.getElementById("permanentstate").style.border="";

    }


    if (permanentzipcode == "") {
        document.getElementById("permanentZipError").innerHTML = "Enter permanent zip code";
        document.getElementById("permanentzipcode").style.border="2px solid red";
        isValid = false;
    }
    else if (permanentzipcode != "" && !(/^\d{4,}$/.test(permanentzipcode))) {
        document.getElementById("permanentZipError").innerHTML = "Enter valid zip code ";
        document.getElementById("permanentzipcode").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("permanentZipError").innerHTML = "";
        document.getElementById("permanentzipcode").style.border="";

    }

    if (photo) {
        let validextension = ["image/jpeg", "image/png", "image/gif"];
        if (!validextension.includes(photo.type)) {

            document.getElementById("photo").style.border="2px solid red";
            document.getElementById("uploadError").innerHTML = "Only JPG,PNG,or GIF allowed";
            isValid = false;
        }
        else {
            
            document.getElementById("uploadError").innerHTML = "";
            document.getElementById("photo").style.border="";
        }
        
    }
    
    else {
        document.getElementById("uploadError").innerHTML = "Please upload your photo";
        document.getElementById("photo").style.border="2px solid red";
        isValid = false;

    }
    if (isValid) {
        alert("Form submitted");
        this.submit();
    }

})

