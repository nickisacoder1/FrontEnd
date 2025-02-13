export async function sendTextMessageToBandEnd(phoneNumber, message) {
  try {
    const response = await fetch("https://phone-web-app-backend.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, message }),
    });

    const json = await response.json();
    console.log(json);
    console.log(response);
  } catch (error) {
    console.log("Cuidado, equivocaste amigo", error);
  }
}
