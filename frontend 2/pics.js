document.addEventListener('DOMContentLoaded', () => {
  const taking = document.querySelector('.taking');
  const uploadWindow = document.querySelector('.uploadWindow');

  // rest of your code here

// Add an event listener to the camera button
taking.addEventListener('click', () => {
  // Open the camera
  // navigator.mediaDevices.getUserMedia({ video: true })
  // open rear cam
  navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } } })
  // navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } } })



    .then(stream => {
      // Create a video element to display the camera stream
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      
      // Replace the pre-uploaded image with the video element
      uploadWindow.innerHTML = '';
      uploadWindow.appendChild(video);
      
      // Add an event listener to the video element to capture a frame
      video.addEventListener('click', () => {
        // Create a canvas element to capture the video frame
        const canvas = document.createElement('canvas');
        canvas.width = uploadWindow.offsetWidth;
        canvas.height = uploadWindow.offsetHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Create an image element to display the captured frame
        const image = new Image();
        image.src = canvas.toDataURL();
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'cover';
        
        // Replace the video element with the image element
        uploadWindow.innerHTML = '';
        uploadWindow.appendChild(image);
        
        // Stop the camera stream
        stream.getTracks().forEach(track => track.stop());
      });
    })
    .catch(error => {
      console.error(error);
    });
});


});

















// // Get the camera button and image block
// const taking = document.querySelector('.taking');
// const uploadWindow = document.querySelector('.uploadWindow');

// // Add an event listener to the camera button
// taking.addEventListener('click', () => {
//   // Open the camera
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//       // Create a video element to display the camera stream
//       const video = document.createElement('video');
//       video.srcObject = stream;
//       video.play();
      
//       // Replace the pre-uploaded image with the video element
//       uploadWindow.innerHTML = '';
//       uploadWindow.appendChild(video);
      
//       // Add an event listener to the video element to capture a frame
//       video.addEventListener('click', () => {
//         // Create a canvas element to capture the video frame
//         const canvas = document.createElement('canvas');
//         canvas.width = uploadWindow.offsetWidth;
//         canvas.height = uploadWindow.offsetHeight;
//         const context = canvas.getContext('2d');
//         context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
//         // Create an image element to display the captured frame
//         const image = new Image();
//         image.src = canvas.toDataURL();
//         image.style.width = '100%';
//         image.style.height = '100%';
//         image.style.objectFit = 'cover';
        
//         // Replace the video element with the image element
//         uploadWindow.innerHTML = '';
//         uploadWindow.appendChild(image);
        
//         // Stop the camera stream
//         stream.getTracks().forEach(track => track.stop());
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });








document.addEventListener('DOMContentLoaded', () => {
  const selectImage = document.querySelector('.selectImage');
  const uploadWindow = document.querySelector('.uploadWindow');

  // rest of your code here

  // Add an event listener to the select image button
selectImage.addEventListener('click', () => {
  // Create an input element to select the image file
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  
  // Add an event listener to the input element to handle file selection
  input.addEventListener('change', () => {
    // Get the selected file
    const file = input.files[0];
    
    // Create a FileReader object to read the selected file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    // Add an event listener to the FileReader object to handle file reading
    reader.addEventListener('load', () => {
      // Create an image element to display the selected image
      const image = new Image();
      image.src = reader.result;
      image.style.width = '100%';
      image.style.height = '100%';
      image.style.objectFit = 'cover';
      
      // Replace the pre-uploaded image with the selected image
      uploadWindow.innerHTML = '';
      uploadWindow.appendChild(image);
    });
  });
  
  // Click the input element to trigger file selection
  input.click();
});


});



















// // Get the select image button and the upload window
// const selectImage = document.querySelector('.selectImage');
// const uploadWindow = document.querySelector('.uploadWindow');

// // Add an event listener to the select image button
// selectImage.addEventListener('click', () => {
//   // Create an input element to select the image file
//   const input = document.createElement('input');
//   input.type = 'file';
//   input.accept = 'image/*';
  
//   // Add an event listener to the input element to handle file selection
//   input.addEventListener('change', () => {
//     // Get the selected file
//     const file = input.files[0];
    
//     // Create a FileReader object to read the selected file
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
    
//     // Add an event listener to the FileReader object to handle file reading
//     reader.addEventListener('load', () => {
//       // Create an image element to display the selected image
//       const image = new Image();
//       image.src = reader.result;
//       image.style.width = '100%';
//       image.style.height = '100%';
//       image.style.objectFit = 'cover';
      
//       // Replace the pre-uploaded image with the selected image
//       uploadWindow.innerHTML = '';
//       uploadWindow.appendChild(image);
//     });
//   });
  
//   // Click the input element to trigger file selection
//   input.click();
// });
