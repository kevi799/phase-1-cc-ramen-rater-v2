// index.js
const createRamenImage = (ramen) => {
  const ramenMenu = document.getElementById("ramen-menu");
   
  //creating the divfor the images
  const ramenDiv = document.createElement("div");
  const img =document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.noodles;
  ramenDiv.appendChild(img);
//creating the delete button
  const deleteButton =document.createElement("button");
  deleteButton.classList.add("button"); 
// Creating the bin SVG structure inside the button
  deleteButton.innerHTML = `
    <svg class="svgIcon" viewBox="0 0 24 24">
      <path d="M3 6l3 0 0 13c0 1.1.9 2 2 2l8 0c1.1 0 2-.9 2-2l0-13 3 0c0.55 0 1-0.45 1-1s-0.45-1-1-1l-5 0-1-1c-0.37-0.37-0.88-0.59-1.41-0.59l-4.18 0c-0.53 0-1.04 0.22-1.41 0.59l-1 1-5 0c-0.55 0-1 0.45-1 1s0.45 1 1 1zm3 0 3-3 0 0 0 3zm9 0 3-3 0 0 0 3zm-6 0 0 11c0 0.55 0.45 1 1 1s1-0.45 1-1l0-11zm4 0 0 11c0 0.55 0.45 1 1 1s1-0.45 1-1l0-11z"/>
    </svg>
  `;
  ramenDiv.appendChild(deleteButton);
  // adding the event listener
  deleteButton.addEventListener('click', () =>{
    ramenDiv.remove();
    console.log(`${ramen.name} its deleted.`);
  })
  
  
}

const displayRamens = () => {
  // Add code
  fetch ("http://localhost:3000/ramens",
  .then(response => response.json())
  .then(ramenData =>{
    ramenData.forEach(ramen =>{
      createRamenImage(ramen)
    })
  )
  })
};
// Callbacks
const handleClick = (ramen) => {
}


const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');
  form.addEventListener("submit",(event)=>{
    event.preventDefault;

      //creating an object for the newramenor noodles
      const newRamen = {
        name: document.getElementById('new-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        image: document.getElementById("new-image").value,
        rating: document.getElementById("new-rating").value,
        comment: document.getElementById('new-comment').value,
      };
      createRamenImage(newRamen);
      //to refresh the the form after submission
      form.reset();
  })



 
}


const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
