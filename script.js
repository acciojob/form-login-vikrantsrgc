function getFormvalue(event) {
      event.preventDefault(); // Prevent page reload

      // Access the form using event.target or document.forms
      const form = event.target;

      // Get values and trim extra spaces
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      // Combine names (if either is missing, show partial or empty alert)
      const fullName = `${firstName} ${lastName}`.trim();

      // Show the result
      alert(fullName);
    }