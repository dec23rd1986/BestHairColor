document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}

var eyeColor = null;
function selectMenu1(value){
  eyeColor = value;
}

var skinTone = null;
function selectMenu2(value){
  skinTone = value;
}



function validate()  { 
  if (eyeColor && skinTone){
          // alert(`You selected ${eyeColor} eye colour and ${skinTone} skin tone.`);

          if (eyeColor=="brown" && skinTone=="fair"){
            window.location = "brown/brown_fair.html";
          } else if (eyeColor=="brown" && skinTone=="light"){
            window.location = "brown/brown_light.html";
          } else if (eyeColor=="brown" && skinTone=="medium"){
            window.location = "brown/brown_medium.html";
          } else if (eyeColor=="brown" && skinTone=="bronze"){
            window.location = "brown/brown_bronze.html";
          } else if (eyeColor=="brown" && skinTone=="tan"){
            window.location = "brown/brown_tan.html";
          } else if (eyeColor=="brown" && skinTone=="rich"){
            window.location = "brown/brown_rich.html";
          }   

          if (eyeColor=="blue" && skinTone=="fair"){
            window.location = "blue/blue_fair.html";
          } else if (eyeColor =="blue" && skinTone=="light"){
            window.location = "blue/blue_light.html";
          } else if (eyeColor =="blue" && skinTone=="medium"){
            window.location = "blue/blue_medium.html";
          } else if (eyeColor =="blue" && skinTone=="bronze"){
            window.location = "blue/blue_bronze.html";
          } else if (eyeColor=="blue" && skinTone=="tan"){
            window.location = "blue/blue_tan.html";
          } else if (eyeColor=="blue" && skinTone=="rich"){
            window.location = "blue/blue_rich.html";
          }
          
          if (eyeColor=="green" && skinTone=="fair"){
            window.location = "green/green_fair.html";
          } else if (eyeColor == "green" && skinTone=="light"){
            window.location= "green/green_light.html";
          } else if (eyeColor== "green" && skinTone=="medium"){
            window.location="green/green_medium.html";
          } else if (eyeColor=="green" && skinTone=="bronze"){
            window.location="green/green_bronze.html";
          } else if (eyeColor=="green" && skinTone=="tan"){
            window.location="green/green_tan.html";
          } else if (eyeColor=="green" && skinTone=="rich"){
            window.location="green/green_rich.html";
          }


          if (eyeColor=="hazel" && skinTone=="fair"){
            window.location = "hazel/hazel_fair.html";
          } else if (eyeColor=="hazel" && skinTone=="light"){
            window.location="hazel/hazel_light.html";
          } else if (eyeColor=="hazel" && skinTone=="medium"){
            window.location="hazel/hazel_medium.html";
          } else if (eyeColor=="hazel" && skinTone=="bronze"){
            window.location="hazel/hazel_bronze.html";
          } else if (eyeColor=="hazel" && skinTone=="tan"){
            window.location="hazel/hazel_tan.html";
          } else if (eyeColor=="hazel" && skinTone=="rich"){
            window.location="hazel/hazel_rich.html";
          }
        }




//Error message if user does not select an item from the dropdown menus

if (!eyeColor){
  document.getElementById("error").innerHTML = "<span class='error'>Please choose an eye color</span>";
}
else if (!skinTone){
  document.getElementById("error").innerHTML = "<span class='error'>Please choose a skin tone</span>";
}
}

      function initApplication(){
        //setup dropdown menu selection events
        Array.from(document.querySelectorAll(".dropdown-menu")).forEach((menu,idx)=>{
          const menuCallbackName = menu.attributes.onchange.value;
          const fetchedCallback = window[menuCallbackName] || null;

          if (fetchedCallback){
            Array.from(menu.children).forEach((child)=>{
              const callbackValue = child.attributes.data ? child.attributes.data.value : null;
              if (callbackValue) child.onclick = () => fetchedCallback(callbackValue);
            });
          } else console.error(`No callback function named ${menuCallbackName} for menu ${idx}`);

        });
      }

