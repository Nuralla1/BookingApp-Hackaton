const baseUrl = "http://localhost:8080/api";
const configObjAuth = (obj) => ({
  method: "POST",
  body: JSON.stringify(obj),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function signIn(obj) {
  const response = fetch(`${baseUrl}/auth/signin`, configObjAuth(obj));
  return response;
}

export function signUp(obj) {
  const response = fetch(`${baseUrl}/auth/signup`, configObjAuth(obj));
  return response;
}

export function getSlots(room, day) {
  const response = fetch(
    `${baseUrl}/booking/booking-room?room=R${room}&weekday=${day}`
  );
  return response;
}
