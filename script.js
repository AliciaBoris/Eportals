document.getElementById("interestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = {
        full_name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        qualification: document.getElementById("qualification").value,
        duration: document.getElementById("duration").value,
        sponsor: document.getElementById("sponsor").value,
    };

    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success message
        document.getElementById("interestForm").reset(); // Clear all form fields
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});
