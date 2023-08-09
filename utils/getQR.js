export const getQR = async (e) => {
  e.preventDefault();

  const options = {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ username: "dgarcia", password: "1234" }),
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwgUztsYgTp8TzUUIE68rh2411PGqxyGma6UJVEdwfUWZ1lU3lgjjzgcYrie11c34aC/exec?op=getQR&username=dgarcia&password=1234",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
