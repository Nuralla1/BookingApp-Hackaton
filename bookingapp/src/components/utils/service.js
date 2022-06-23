const baseUrl = "http://localhost:6060/api";
// const configObjAuth = (obj) => ({
//   method: "POST",
//   body: JSON.stringify(obj),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

export function signIn(obj) {
  const response = fetch(`${baseUrl}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response;
}

export function signUp(obj) {
  const response = fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response;
}

export function getSlots(room, day) {
  //   const token = sessionStorage.getItem("Token");
  const response = fetch(
    `${baseUrl}/booking/booking-room?room=R${room}&weekday=${day}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
      },
    }
  );

  return response;
}

export function addReservation(obj) {
  const token = sessionStorage.getItem("Token");
  const response = fetch(`${baseUrl}/booking/booking-room`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
