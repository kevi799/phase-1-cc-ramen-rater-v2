// index.js

const createRamenImage = (ramen) => {
  const ramenMenu = document.getElementById("ramen-menu");
   
  // Creating the div for the images
  const ramenDiv = document.createElement("div");
  
  // Creating the image element
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;
  
  // Append the image to the ramenDiv
  ramenDiv.appendChild(img);
  
  // Creating the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  
  // Append the delete button to the ramenDiv
  ramenDiv.appendChild(deleteButton);
  
  // Adding the event listener to delete the ramenDiv when clicked
  deleteButton.addEventListener('click', () => {
    ramenDiv.remove();
    console.log(`${ramen.name} is deleted.`);
  });

  // Adding a click event listener to the image to display ramen details
  img.addEventListener('click', () => handleClick(ramen));
  
  // Append the ramenDiv to the ramen-menu
  ramenMenu.appendChild(ramenDiv);
};

// Callbacks
const handleClick = (ramen) => {
  // Getting detail elements
  const detailImg = document.querySelector('.detail-image');
  const detailName = document.querySelector('.name');
  const detailRestaurant = document.querySelector('.restaurant');
  const detailRating = document.getElementById('rating-display'); // Corrected ID
  const detailComment = document.getElementById('comment-display');

  // Updating the detail elements with ramen data
  detailImg.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();  // Fixing the event.preventDefault() issue

    // Creating an object for the new ramen
    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
    };
    
    // Creating the new ramen image and adding it to the DOM
    createRamenImage(newRamen);
    
    // Resetting the form after submission
    form.reset();
  });
};

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => {
      ramenData.forEach(ramen => {
        createRamenImage(ramen);
      });
    })
    .catch(error => {
      console.error("Error fetching ramen data:", error);
    });
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener(); 
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
