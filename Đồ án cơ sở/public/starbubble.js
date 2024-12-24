// Tạo ngôi sao dày đặc
function createStars(numStars) {
    const starContainer = document.querySelector('.star-container');
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Đặt vị trí ngẫu nhiên cho ngôi sao
      const top = Math.random() * 100;  // Tỉ lệ top (0-100%)
      const left = Math.random() * 100; // Tỉ lệ left (0-100%)
      const moveX = (Math.random() - 0.5) * 100; // Di chuyển ngẫu nhiên theo X
      const moveY = (Math.random() - 0.5) * 100; // Di chuyển ngẫu nhiên theo Y
      
      // Thêm ngôi sao vào container
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      star.style.setProperty('--move-x', `${moveX}vw`);
      star.style.setProperty('--move-y', `${moveY}vh`);
      
      starContainer.appendChild(star);
    }
  }
  
  // Tạo bong bóng dày đặc
  function createBubbles(numBubbles) {
    const bubbleContainer = document.querySelector('.bubble-container');
    
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Đặt vị trí ngẫu nhiên cho bong bóng
      const top = Math.random() * 100;  // Tỉ lệ top (0-100%)
      const left = Math.random() * 100; // Tỉ lệ left (0-100%)
      const moveX = (Math.random() - 0.5) * 100; // Di chuyển ngẫu nhiên theo X
      const moveY = (Math.random() - 0.5) * 100; // Di chuyển ngẫu nhiên theo Y
      
      // Thêm bong bóng vào container
      bubble.style.top = `${top}%`;
      bubble.style.left = `${left}%`;
      bubble.style.setProperty('--move-x', `${moveX}vw`);
      bubble.style.setProperty('--move-y', `${moveY}vh`);
      
      bubbleContainer.appendChild(bubble);
    }
  }
  
  // Gọi hàm để tạo ngôi sao và bong bóng dày đặc
  createStars(100);  // Tạo 200 ngôi sao
  createBubbles(1); // Tạo 150 bong bóng
  