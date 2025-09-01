// Array of hobbies
const hobbies = ["Photography", "Cycling", "Reading", "Traveling", "Coding", "Gaming"];

let views = 0; // Closure variable

// Update name functionality
document.getElementById("update-name").addEventListener("click", () => {
  const input = document.getElementById("name-input").value;
  if (input.trim() === "") {
    alert("Please enter a valid name!");
  } else {
    document.getElementById("profile-name").textContent = input;
    document.getElementById("name-input").value = "";
  }
});

// Random hobby functionality
document.getElementById("randomize-hobby").addEventListener("click", () => {
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  document.getElementById("random-hobby").textContent = `Hobby: ${randomHobby}`;
});

// Closure for profile views
document.getElementById("increment-views").addEventListener("click", (() => {
  return () => {
    views++;
    document.getElementById("profile-views").textContent = `Profile Views: ${views}`;
  };
})());
