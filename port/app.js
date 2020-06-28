var container = document.getElementById("imageContainer");
function change_img(image){
    container.src = image.src;
}



const inputs = document.querySelectorAll('.controls input');
    
function handleUpdate(){
  const suffix = this.dataset.sizing || ''; 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



var scroll = document.getElementById("top");
window.addEventListener("scroll", function(){
  scroll.style.transform = "rotate("+window.pageYOffset+"deg)";
})
