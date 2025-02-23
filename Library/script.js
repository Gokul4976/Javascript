document.getElementById("myform").addEventListener("submit",function(event){
    event.preventDefault();
    let isValid = true;

    let category = document.getElementById("category").value.trim();
    let bookname = document.getElementById("bookname").value.trim();
    let authorname = document.getElementById("authorname").value.trim();
    let authoremail = document.getElementById("authoremail").value.trim();
    let publishyear = document.getElementById("publishyear").value.trim();
    let price = document.getElementById("price").value.trim();
    if (category == "") {
        document.getElementById("categoryError").innerHTML = "Enter category";
        document.getElementById("category").style.border="2px solid red";
        isValid = false;
    }
   
    else {
        document.getElementById("categoryError").innerHTML = "";
        document.getElementById("category").style.border="";


    }
    if (bookname == "") {
        document.getElementById("booknameError").innerHTML = "Enter book name";
        document.getElementById("bookname").style.border="2px solid red";
        isValid = false;
    }
    else if (bookname.length>50){

        document.getElementById("booknameError").innerHTML = "Book name length should not exceed 50 ";
        document.getElementById("bookname").style.border="2px solid red";
        isValid = false;
    }
    else if (bookname != "" && !(/^[A-Za-z ]{1,}$/.test(bookname))) {
        document.getElementById("booknameError").innerHTML = "Enter valid book name(alphabets only) ";
        document.getElementById("bookname").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("booknameError").innerHTML = "";
        document.getElementById("bookname").style.border="";

    }

    if (authorname == "") {
        document.getElementById("authornameError").innerHTML = "Enter author name";
        document.getElementById("authorname").style.border="2px solid red";
        isValid = false;
    }
    else if (authorname.length>50){

        document.getElementById("authornameError").innerHTML = "Author name length should not exceed 50 ";
        document.getElementById("authorname").style.border="2px solid red";
        isValid = false;
    }
    else if (authorname != "" && !(/^[A-Za-z ]{1,}$/.test(authorname))) {
        document.getElementById("authornameError").innerHTML = "Enter valid author name(alphabets only) ";
        document.getElementById("authorname").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("authornameError").innerHTML = "";
        document.getElementById("authorname").style.border="";

    }

    if (authoremail == "") {
        document.getElementById("authoremailError").innerHTML = "Enter author email";
        document.getElementById("authoremail").style.border="2px solid red";
        isValid = false;
    }
    else if (authoremail != "" && !(/^\S+@\S+\.\S+$/.test(authoremail))) {
        document.getElementById("authoremailError").innerHTML = "Enter valid author email ";
        document.getElementById("authoremail").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("authoremailError").innerHTML = "";
        document.getElementById("authoremail").style.border="";

    }
    let currentyear=new Date().getFullYear();
    if (publishyear == "") {
        document.getElementById("publishyearError").innerHTML = "Enter publish year";
        document.getElementById("publishyear").style.border="2px solid red";
        isValid = false;
    }
    else if (publishyear != "" && !(/^\d{4}$/.test(publishyear))) {
        document.getElementById("publishyearError").innerHTML = "Enter valid publish year ";
        document.getElementById("publishyear").style.border="2px solid red";
        isValid = false;
        
    }
    else if (publishyear != "" && publishyear>currentyear) {
        document.getElementById("publishyearError").innerHTML = "Enter valid publish year ";
        document.getElementById("publishyear").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("publishyearError").innerHTML = "";
        document.getElementById("publishyear").style.border="";

    }

    if (price == "") {
        document.getElementById("priceError").innerHTML = "Enter price";
        document.getElementById("price").style.border="2px solid red";
        isValid = false;
    }
    else if (price != "" && !(/^\d+$/.test(price))) {
        document.getElementById("priceError").innerHTML = "Enter valid price(Alphabets values not allowed) ";
        document.getElementById("price").style.border="2px solid red";
        isValid = false;
        
    }
    else {
        document.getElementById("priceError").innerHTML = "";
        document.getElementById("price").style.border="";

    }
   
    // let photo = document.getElementById("photo").files[0];
    // console.log(photo.name);
    
    // if (photo) {
    //     let validextension = ["image/jpeg", "image/png", "image/gif"];
    //     if (!validextension.includes(photo.type)) {

    //         document.getElementById("photo").style.border="2px solid red";
    //         document.getElementById("uploadError").innerHTML = "Only JPG,PNG,or GIF allowed";
    //         isValid = false;
    //     }
    //     else {
            
    //         document.getElementById("uploadError").innerHTML = "";
    //         document.getElementById("photo").style.border="";
    //     }
        
    // }
    
    // else {
    //     document.getElementById("uploadError").innerHTML = "Please upload your photo";
    //     document.getElementById("photo").style.border="2px solid red";
    //     isValid = false;

    // }

    if (isValid) {
        alert("Form submitted");
        this.submit();
        console.log(category);
        localStorage.setItem("category",category)
        localStorage.setItem("bookname",bookname)
        localStorage.setItem("authorname",authorname)
        localStorage.setItem("authoremail",authoremail)
        localStorage.setItem("publishyear",publishyear)
        localStorage.setItem("price",price)
        // localStorage.setItem("photo",photo.name)
        
        window.location.href="display.html";
    }
})