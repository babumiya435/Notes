// function submit(){
    document.getElementById("userForm")
    .addEventListener("submit", function(event){
        console.log(event);
        event.preventDefault();
        const formData = new FormData(this);
        console.log(formData);
        formData.forEach((value, key)=>{
            console.log(`${key}: ${value}`);
        })
    })