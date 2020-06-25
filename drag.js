function dropHandler(ev) {//handle drop event
    console.log('File(s) dropped');
    ev.stopPropagation();
    ev.preventDefault();
    
    var data = ev.dataTransfer;
    var files = data.files;
    processFiles(files);

}

function dragOverHandler(ev){//handle drag over envent
    console.log("dragover");
    ev.stopPropagation();
    ev.preventDefault();

}
function dragEndHandler(ev){//handle drag finish event
 console.log("dragend");
 ev.stopPropagation();
 ev.preventDefault();
}
function processFiles(files){
    var file = files[0];
    var reader = new FileReader();//create file reader 
    reader.onload = function(event){
     
      main(event.target.result);//pass data to main function in maps.js
    }
       reader.readAsText(file);
      console.log(file);


    }
    
    function loadFileAsText(){
      var fileToLoad = document.getElementById("fileToLoad").files[0];
    
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent){
          var textFromFileLoaded = fileLoadedEvent.target.result;
         // document.getElementById("inputTextToSave").value = textFromFileLoaded;
          console.log(textFromFileLoaded);
          main(event.target.result);
      };
    
      fileReader.readAsText(fileToLoad, "UTF-8");
      
    }
