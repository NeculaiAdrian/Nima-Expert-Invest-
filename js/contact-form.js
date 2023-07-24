//For Contact Button
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (document.getElementById("name").value.trim() === "") {
    alert("Please enter your name.");
    document.getElementById("name").focus();
    return false;
  }

  if (document.getElementById("email").value.trim() === "") {
    alert("Please enter your email.");
    document.getElementById("email").focus();
    return false;
  }

  if (document.getElementById("subject").value.trim() === "") {
    alert("Please enter your subject.");
    document.getElementById("subject").focus();
    return false;
  }

  if (document.getElementById("message").value.trim() === "") {
    alert("Please enter your message.");
    document.getElementById("message").focus();
    return false;
  }

  const serviceID = "service_625v6ts";
  const templateID = "template_qzw4i16";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
