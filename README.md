## Paste.jud

You can "paste jud" the image from clipboard. This will generate a file object that you can post to your API to save as image.

### Usage

```html
<script src="https://unpkg.com/pastejud@0.0.2/dist/pastejud.js"></script>
<script>
  Paste.jud(function (file) {
    console.log(file);// Create FormData object
    const formData = new FormData();
    formData.append("userfile", file);
    
    // Send data to API
    fetch("https://your-api-endpoint.com/upload", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });
</script>
```
