AFRAME.registerComponent("gesture",{
        init:function() {
          var element = document.querySelector('body');    //declare area for movement listener
          this.marker = this.el        //public varible to for tick handler
          var model = document.querySelector('a-gltf-model');  //TODO: Try to implement get element by ID instead
          
          ////////////////////////////////////////////////////
          //  code seperator
          ///////////////////////////////////////////////////
          var entity = this.el.childNodes.item(1);    //it's hard to access 2 level deep children component
                                                      //  so you have to access 1 level deep
          
          var dynamicHTMLOfObject3D = entity.children; //this will return html collection so you need to select first element
          
          console.log(dynamicHTMLOfObject3D); //more info about htmlcollection at https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
          var selectedModel = dynamicHTMLOfObject3D.item(0);//select the model inside a-marker tag
          
          ////////////////////////////////////////////////////
          //  code seperator
          ///////////////////////////////////////////////////
          this.markerVisible = false      //used for enabling manipulating object
      
          var hammertime = new Hammer(element);
      var pinch = new Hammer.Pinch();
      hammertime.add(pinch); // Add this object to enanble zoom in and zoom out
                            //
          
      // action listener for 1 finger movement
      hammertime.on('pan', (ev) => {
        if (!this.markerVisible) { return;}
        let rotation = selectedModel.getAttribute("rotation")
        switch(ev.direction) {
          case 2:  //  move to the left
            rotation.x = rotation.x + 4
            break;
          case 4:  //  move to the right
            rotation.x = rotation.x - 4
            break;
          case 8:      //Direction up
            rotation.y = rotation.y + 4
            break;
          case 16:    // move down
            rotation.y = rotation.y - 4
            break;
          default:
            break;
        }
        selectedModel.setAttribute("rotation", rotation)
      });
      
      //turn on event listener for zoom in or zoom out
      hammertime.on("pinch", (ev) => {
	return;
        if (!this.markerVisible) { return; }
          let targetScale = ev.scale / 2 ; //since the earth model might be too big 
          let scale = {x:targetScale, y:targetScale, z:targetScale}
          selectedModel.setAttribute("scale", scale);

      });
        },
        
        //IMPORTANT function: this check every second for event listener
        //    Everytime the marker is visible then we will enable finger movement
        tick:function() {
          if (this.marker && this.marker.object3D.visible == true) {
            this.markerVisible = true
          } else {
            this.markerVisible = false
        }
        }
      });