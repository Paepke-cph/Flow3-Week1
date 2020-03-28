import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
 
  const handleSubmit = event => {
    alert(JSON.stringify(reservation));
  }

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
        name="lastName"
        value={reservation.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        />
        <br />
        <input
        name="email"
        value={reservation.email}
        onChange={handleChange}
        placeholder="E-mail"
        />
        <br />
        <input
        type="number"
        name="phone"
        value={reservation.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        />
        <br />
        <input
        name="street"
        value={reservation.street}
        onChange={handleChange}
        placeholder="Street"
        />
        <br />
        <input
        name="city"
        value={reservation.city}
        onChange={handleChange}
        placeholder="City"
        />
        <br />
        <input
        type="number"
        name="zip"
        value={reservation.zip}
        onChange={handleChange}
        placeholder="ZipCode"
        />
        <br />
        <input
        name="country"
        value={reservation.country}
        onChange={handleChange}
        placeholder="Country"
        />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;