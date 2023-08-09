import React from "react";
import Image from "next/image";

const QRComponent = ({ qrCode, username, password }) => {
  const handleLogout = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ username: username, password: password }),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwgUztsYgTp8TzUUIE68rh2411PGqxyGma6UJVEdwfUWZ1lU3lgjjzgcYrie11c34aC/exec?op=markLogout&username=" +
          username +
          "&password=" +
          password,
        options
      );
      const data = await response.json();
      if (data.success) {
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }

    window.location.href = "/";
  };

  return (
    <>
      <Image src={qrCode} alt="QR CODE" />
      <button
        onClick={handleLogout}
        className="mt-10 w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Cerrar Sesión
      </button>
    </>
  );
};

export default QRComponent;