const pay = document.querySelector(".payment-1");
const bank = document.querySelector(".banking-1");
const res = document.querySelector(".resource-1");
const support = document.querySelector(".support-1");
document
  .querySelector(".payment-trigger")
  .addEventListener("mouseover", function () {
    pay.style.display = "block";
  });

document
  .querySelector(".payment-trigger")
  .addEventListener("mouseout", function () {
    pay.style.display = "none";
  });

document.querySelector(".payment-1").addEventListener("mouseover", function () {
  pay.style.display = "block";
});

document
  .querySelector(".main-section")
  .addEventListener("mouseover", function () {
    pay.style.display = "none";
  });

//   ----------------------BANKING--------------------
document
  .querySelector(".banking-trigger")
  .addEventListener("mouseover", function () {
    bank.style.display = "block";
    pay.style.display = "none";
    res.style.display = "none";
    support.style.display = "none";
  });

document
  .querySelector(".banking-trigger")
  .addEventListener("mouseout", function () {
    bank.style.display = "none";
  });

document.querySelector(".banking-1").addEventListener("mouseover", function () {
  bank.style.display = "block";
  pay.style.display = "none";
  res.style.display = "none";
  support.style.display = "none";
});

document
  .querySelector(".main-section")
  .addEventListener("mouseover", function () {
    bank.style.display = "none";
  });

//   ---------------RESOURCE---------------
document
  .querySelector(".resource-trigger")
  .addEventListener("mouseover", function () {
    res.style.display = "block";
    pay.style.display = "none";
    bank.style.display = "none";
    support.style.display = "none";
  });

document
  .querySelector(".resource-trigger")
  .addEventListener("mouseout", function () {
    res.style.display = "none";
  });

document
  .querySelector(".resource-1")
  .addEventListener("mouseover", function () {
    res.style.display = "block";
    pay.style.display = "none";
    bank.style.display = "none";
    support.style.display = "none";
  });

document
  .querySelector(".main-section")
  .addEventListener("mouseover", function () {
    res.style.display = "none";
  });

// -----------SUPPORT-------------
document
  .querySelector(".support-trigger")
  .addEventListener("mouseover", function () {
    support.style.display = "block";
    pay.style.display = "none";
    bank.style.display = "none";
    res.style.display = "none";
  });

document
  .querySelector(".support-trigger")
  .addEventListener("mouseout", function () {
    support.style.display = "none";
  });

document.querySelector(".support-1").addEventListener("mouseover", function () {
  support.style.display = "block";
  pay.style.display = "none";
  bank.style.display = "none";
  res.style.display = "none";
});

document
  .querySelector(".main-section")
  .addEventListener("mouseover", function () {
    support.style.display = "none";
  });
