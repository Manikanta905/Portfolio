
    document.getElementById("year").textContent = new Date().getFullYear();

    function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      localStorage.setItem("contactMessage", JSON.stringify(data));
      alert("Message saved locally! Thank you, " + data.name);
      form.reset();
      return false;
    }
