import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Address() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({});
  useEffect(() => {
    //IIFE: good practice
    (async function () {
      const addressesData = await axios.get("/api/addresses");
      setAddresses(addressesData.data.addresses);
    })();
  }, []);

  return (
    <>
      <h1> Address Management </h1>
      <div style={{ display: "flex" }}>
        <div style={{ border: "solid 1px black", width: "40%" }}>
          <h4>Add new address</h4>
          <input
            type="text"
            className="address-input"
            value={newAddress.fullName}
            placeholder="Name"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, fullName: value });
            }}
          />
          <input
            className="address-input"
            value={newAddress.addressLine1}
            placeholder="Address Line 1"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, addressLine1: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.addressLine2}
            placeholder="Address Line 2"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, addressLine2: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.city}
            placeholder="City"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, city: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.state}
            placeholder="State"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, state: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.zipCode}
            placeholder="Zip Code"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, zipCode: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.country}
            placeholder="Country"
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, country: value });
            }}
          ></input>
          <input
            className="address-input"
            value={newAddress.contactNo}
            placeholder="Contact No."
            onChange={(event) => {
              const { value } = event.target;
              setNewAddress({ ...newAddress, contactNo: value });
            }}
          ></input>
          <button onClick={addNewAddress}>Add</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {addresses.map((address) => (
            <div key={address.id} style={{ textAlign: "left" }}>
              <div
                style={{
                  border: "solid black 1px",
                  padding: "1rem",
                  margin: "1rem"
                }}
              >
                <div style={{ fontWeight: "bold" }}>{address.fullName}</div>
                <div>{address.addressLine1}</div>
                <div>{address.addressLine2}</div>
                <div>{address.city}</div>
                <div>{address.state}</div>
                <div>{address.zipCode}</div>
                <div>{address.phoneNumber}</div>
                <button>Edit</button> | <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  async function addNewAddress() {
    try {
      console.log("newAddress", newAddress);
      const data = await axios.post("/api/addresses", {
        address: {
          fullName: newAddress.fullName,
          addressLine1: newAddress.addressLine1,
          addressLine2: newAddress.addressLine2,
          city: newAddress.city,
          state: newAddress.state,
          country: newAddress.country,
          zipCode: newAddress.zipCode,
          contactNo: newAddress.contactNo
        }
      });
      console.log(data);
      setAddresses([data.data.address, ...addresses]);
      setNewAddress((add) => {});
    } catch (err) {
      console.log(err);
    }
  }
}
