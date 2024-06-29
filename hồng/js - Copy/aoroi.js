
document.addEventListener('DOMContentLoaded', function() {
    const imgElements = document.querySelectorAll('.imgsanpham');
  
    imgElements.forEach(imgElement => {
      const originalSrc = imgElement.getAttribute('src');
      const altSrc = imgElement.dataset.altSrc; 
  
      imgElement.addEventListener('mouseover', function() {
        imgElement.setAttribute('src', altSrc);
      });
  
      imgElement.addEventListener('mouseout', function() {
        imgElement.setAttribute('src', originalSrc);
      });
    });
  });
  