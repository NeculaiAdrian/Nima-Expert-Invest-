//Pt Join Button

function sendMail2() {
  var params = {
    firstname: document.getElementById("first-name").value,
    lastname: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  if (document.getElementById("first-name").value.trim() === "") {
    alert("Please enter your first name.");
    document.getElementById("first-name").focus();
    return false;
  }

  if (document.getElementById("last-name").value.trim() === "") {
    alert("Please enter your last name.");
    document.getElementById("last-name").focus();
    return false;
  }

  if (document.getElementById("email").value.trim() === "") {
    alert("Please enter your email.");
    document.getElementById("email").focus();
    return false;
  }

  if (document.getElementById("phone").value.trim() === "") {
    alert("Please enter your phone.");
    document.getElementById("phone").focus();
    return false;
  }

  const serviceID = "service_625v6ts";
  const templateID = "template_wuxvxmc";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
