//Used for indicating if user zoom in or zoom out 
                                  // if slider value is less then zoom out otherwise zoom in
                                  // this variable only useful if user uses desktop
defaultSScale = document.getElementById('scaleID').value;
defaultSlider = Math.log10(defaultSScale);
//alert(defaultSlider );
const initScaleSliderValue = 20*defaultSlider; 
const defaultScale = {x: defaultSScale, y: defaultSScale, z: defaultSScale};    


//if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) 
{
  let pageContent = document.getElementById('zoom-slider');

///////////////////////////////////////////////////
//    Code seperator
////////////////////////////////////////////////// 
  var slider = document.createElement("input");
  slider.type="range";
  slider.min = -100;
  slider.max = 30;
  slider.value = initScaleSliderValue;
  slider.class = "modelScale";
  slider.id  = "currentScale";
  slider.oninput = updateScale;  //callback function for the other one
  pageContent.appendChild(slider);
}

function updateScale(){
  var allMarker = document.getElementsByClassName("marker");
  
  console.log(allMarker);
  
  /////////////////////////////////////////////////////////////////////////
  // iterate through all marker to check if that marker is visible or not then 
  //                    scale for all visible marker
  //   Performance issue when the website has more than 10 marker
  //       This might be fixed by tick function of each marker
  //        By making array of visible marker. Still a performance issue if
  //             There are more than 10 markers visisble at the same time
  ////////////////////////////////////////////////////////////////////////
  for (var i = 0; i < allMarker.length; i++) {
    if(allMarker[i].object3D.visible){
      let currentModel  = allMarker[i].children[0].children[0]; //chaining method to get to the 3D object
                                                                // since I wrapped gltf tag inside entity tag
      
      let currentScale = currentModel.getAttribute('scale');
      let newScale = currentScale;
      let zoomFactor = Math.pow(10, slider.value/20.0) ; // since every model has to
                                                                           //   scale down 10 to 100 times
                                                                           //    so zoomFactor has to go midway which is 50
      
      newScale ={ x: zoomFactor ,
                      y: zoomFactor ,
                      z: zoomFactor 
                    }                     
      
      
      currentModel.setAttribute("scale",newScale);
    }
}
}
