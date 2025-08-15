const buttons = document.querySelectorAll(".see-more");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const alreadyOpen = btn.classList.contains("rotated");

    buttons.forEach(b => {
      b.classList.remove("rotated");
      b.parentElement.nextElementSibling.style.display = "none";
    });

    if (!alreadyOpen) {
      btn.classList.add("rotated");
      btn.parentElement.nextElementSibling.style.display = "block";
    }
  });
});


document.getElementById("phoneNumber").addEventListener("input", function () {
  let value = this.value.replace(/[^0-9+ ]/g, "");

  if (value.includes("+")) {
    value = "+" + value.replace(/\+/g, "").replace(/^\+/, "");
  }

  let numbers = value.replace(/\D/g, "");
  
  let formatted = value.startsWith("+") ? "+" : "";
  if (numbers.length > 0) formatted += numbers.substring(0, 3);       // 998
  if (numbers.length > 3) formatted += " " + numbers.substring(3, 5); // 12
  if (numbers.length > 5) formatted += " " + numbers.substring(5, 8); // 345
  if (numbers.length > 8) formatted += " " + numbers.substring(8, 10);// 67
  if (numbers.length > 10) formatted += " " + numbers.substring(10, 12); // 89

  this.value = formatted.trim();
});














// const api = "https://voice-connect.atabek.space/";
// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const full_name = document.getElementById("fullName").value.trim();
//   const phone = document.getElementById("phoneNumber").value.trim();
//   const comment = document.getElementById("comment").value.trim();

//   fetch( api , {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       full_name,
//       phone,
//       comment
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log("Server result:", data);
//       alert("Sucsess!");
//       form.reset();
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       alert("Error");
//     });
// })

