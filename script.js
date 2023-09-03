 const form = document.querySelector("form");
 const result = document.getElementById("result")
const submitForm = async (json) => {
   const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body:  json
   });

const data = await response.json();

try {
    if(response.status === 200) {
    result.innerText = data.message;
    }
} catch (error) {

    result.innerText = data.message;
    
}finally{
    setTimeout(()=>{
        form.reset();
        result.style.display = "none";
        window.location.href = "https://web3forms.com/success";
    },2000)
}
 

}
 form.addEventListener("submit",(e)=>{
 e.preventDefault();

 const formData = new FormData(form);

 const object = {};

 formData.forEach((value,key)=>{

    object[key] = value;
 });
  const json = JSON.stringify(object);
  submitForm(json)
 });