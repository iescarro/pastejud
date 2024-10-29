class Paste {
  static jud(callback) {
    // $(window).on('paste', function(event) {
    window.addEventListener('paste', function (event) {
      var items = (event.originalEvent || event).clipboardData.items;
      var hasImage = false;

      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          var blob = items[i].getAsFile();
          var reader = new FileReader();
          reader.onload = function (event) {

            var base64String = event.target.result;
            console.log(base64String);

            const file = Paste.base64StringToFile(base64String);

            callback(file);

          };
          reader.readAsDataURL(blob);
          hasImage = true;
          break;
        }
      }

      if (!hasImage) {
        console.log('No image found in clipboard.');
      }
    });
  }

  static base64StringToFile(base64String) {
    const base64Data = base64String.split(",")[1];
    const decodedData = atob(base64Data);
    const uint8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      uint8Array[i] = decodedData.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], {
      type: "image/png"
    }); // Adjust the MIME type as needed
    const file = new File([blob], "file.png", {
      type: "image/png"
    });
    return file;
  }

}