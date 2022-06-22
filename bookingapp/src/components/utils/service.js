const baseUrl = "http://localhost:8080/api/auth";

export function signIn(obj) {
  const response = fetch(`${baseUrl}/signin`, {
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
  const response = fetch(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response;
}
