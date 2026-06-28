// ================= BOOKING PAGE =================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    // Get vehicle details from URL
    const params = new URLSearchParams(window.location.search);

    const vehicle = params.get("vehicle") || "Sports Coupe V8";
    const price = parseInt(params.get("price")) || 8000;

    // Show vehicle details
    document.getElementById("vehicleName").textContent = vehicle;
    document.getElementById("pricePerDay").textContent = price;

    // Update days and amount when dates change
    function calculateBooking() {

        let pickupValue = document.getElementById("pickupDate").value;
        let returnValue = document.getElementById("returnDate").value;

        if (pickupValue && returnValue) {

            let pickupDate = new Date(pickupValue);
            let returnDate = new Date(returnValue);

            if (returnDate > pickupDate) {

                let days = (returnDate - pickupDate) / (1000 * 60 * 60 * 24);

                let subtotal = days * price;

                document.getElementById("displayDays").textContent =
                    days + " Day(s)";

                document.getElementById("totalPrice").textContent =
                    subtotal;
            }
        }
    }

    document.getElementById("pickupDate")
        .addEventListener("change", calculateBooking);

    document.getElementById("returnDate")
        .addEventListener("change", calculateBooking);


    // Confirm Booking
    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        if (name === "" || email === "" || phone === "") {
            alert("Please fill all fields");
            return;
        }

        let pickupDate = new Date(document.getElementById("pickupDate").value);
        let returnDate = new Date(document.getElementById("returnDate").value);

        let days = (returnDate - pickupDate) / (1000 * 60 * 60 * 24);

        if (days <= 0) {
            alert("Return date must be after pickup date");
            return;
        }

        let subtotal = days * price;
        let tax = subtotal * 0.05;
        let total = subtotal + tax;

        // Save booking details
        localStorage.setItem("vehicle", vehicle);
        localStorage.setItem("price", price);
        localStorage.setItem("days", days);
        localStorage.setItem("tax", tax.toFixed(0));
        localStorage.setItem("total", total.toFixed(0));

        // Go to payment page
        window.location.href = "payment.html";
    });

}