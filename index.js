// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 3000, // Change slide every 3 seconds
//     pause: 'hover' // Pause on hover
//   });
// });
//  to open link dynamic 
function openLink(url) {
  window.open(url, '_blank');
}
//  to view password 
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('SellerInputPassword1');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.querySelector('i').classList.toggle('fa-eye-slash');
});
document.getElementById('togglePassword1').addEventListener('click', function () {
  const passwordInput = document.getElementById('CAInputPassword1');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});
//  form validation 
const mail = document.getElementById('SellerInputEmail1');
const pwd = document.getElementById('SellerInputPassword1');
const validate = () => {
  const defaultEmail = 'default@example.com';
  const defaultPassword = 'defaultPassword';
  if (mail.value === defaultEmail && pwd.value === defaultPassword) {
    // Open the link  
    window.open('sellerpanel.html', '_blank');
  } else {
    // Display a popup 
    alert('Invalid email or password');
  }
};
document.getElementById('sellerbtn').addEventListener('click', function () {
  validate()
}) 
const radioButton = document.querySelectorAll('input[name="gender"]');
let selectedGender = '';  
// Loop through each radio button
radioButton.forEach(function (radioButtonvalue) {
  radioButtonvalue.addEventListener('change', function () {
    if (this.checked) {
      // Get the value of the checked radio button
      selectedGender = this.value;
      // Log the selected gender to the console (you can do whatever you want with this value)
      console.log("Selected Gender:", selectedGender);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Disable the button 'CAbtn'  
  document.getElementById('CAbtn').disabled = true;
});
// Function to check if all input fields are filled
function checkInputs() {
  const UserName = document.getElementById('CAInputName').value;
  const UserMailid = document.getElementById('CAInputEmail1').value;
  const UserPassword = document.getElementById('CAInputPassword1').value;
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  // Check if all fields are filled and a gender is selected
  if (UserName && UserMailid && UserPassword && selectedGender) {
    document.getElementById('CAbtn').style.backgroundColor = 'skyblue';
    document.getElementById('CAbtn').disabled = false;
  } else {
    document.getElementById('CAbtn').style.backgroundColor = ''; // Reset background color
    document.getElementById('CAbtn').disabled = true;
  }
}
// Add event listeners to input fields
document.getElementById('CAInputName').addEventListener('input', checkInputs);
document.getElementById('CAInputEmail1').addEventListener('input', checkInputs);
document.getElementById('CAInputPassword1').addEventListener('input', checkInputs);
// Add event listener to radio buttons
const radioButtons = document.querySelectorAll('input[name="gender"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener('change', checkInputs);
});
$(".formPreventDefault").submit(function (e) {
  e.preventDefault();
});
document.getElementById('CAbtn').addEventListener('click', function () {
  const UserName = document.getElementById('CAInputName').value;
  const UserMailid = document.getElementById('CAInputEmail1').value;
  const UserPassword = document.getElementById('CAInputPassword1').value;
  // let usernameKey = []
  // let key;
  // let data;
  // database.ref().once('value')
  //   .then(function (snapshot) {
  //       data = snapshot.val();
  //     for (const key in data){
  //       usernameKey =  key
  //       console.log(usernameKey);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   }); 
  if (UserName === '') {
    $('#nameerror').text("Enter Your name").css({
      'color': 'red',
      'font-size': '10px'
    });
    setTimeout(function () {
      $('#nameerror').hide()
    }, 2000); // 2000 milliseconds = 2 seconds
  } else if (UserMailid === '') {
    $('#emailerror').text("Enter Your email").css({
      'color': 'red',
      'font-size': '10px'
    });
    setTimeout(function () {
      $('#emailerror').hide()
    }, 2000); // 2000 milliseconds = 2 seconds
  } else if (UserPassword === '') {
    $('#pwderror').text("Enter Your password").css({
      'color': 'red',
      'font-size': '10px'
    });
    setTimeout(function () {
      $('#pwderror').hide()
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  else {
    const newProductRef = database.ref(`${UserName.toLowerCase()}`).push();
    newProductRef.set({
      Uname: UserName,
      UMailId: UserMailid,
      UPassword: UserPassword,
      Gender: selectedGender
    });
    // $('#signUpModal').modal('hide')
    // $('#signUpModal').hide().alert()
    document.getElementById('hidemodel').style.display = 'none'
    $('#signUpModalLabel').text('Account Created Successfully ✅').css({
      'color': 'green',
      'text-align': 'center'
    });
    // Show the button when conditions are satisfied
    setTimeout(function () {
      $('#signUpModalLabel').hide();
      $('#signUpModal').hide()
      // Open link after hiding the textwindow.open(`sellerpanel.html?data=${UserName.toLowerCase()}`, '_blank');
      window.open(`sellerpanel.html?data=${UserName.toLowerCase()}&Gender=${selectedGender}`, '_blank');
    }, 2000); // 3000 milliseconds = 3 seconds
    console.log('Sucess');
    document.getElementById('CAInputName').value = '';
    document.getElementById('CAInputEmail1').value = '';
    document.getElementById('CAInputPassword1').value = '';
  }
})