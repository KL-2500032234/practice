function downloadImage(){
    console.log("Download started");
    setTimeout(function(){
        console.log("Download completed");
        callback();
    },5000);

    function displayImage(){
        console.log("Displaying JPG");
    }
    downloadImage(displayImage);
    console.log("Do other woek...");

}

downloadImage()
    .then(function(image){
        console.log("Display:", image);
    },)
    .catch(function(error){
        console.log(error);
    });

