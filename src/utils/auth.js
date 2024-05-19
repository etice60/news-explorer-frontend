import { baseUrl } from "./Api";
import { processServerResponse } from "./utils";

//--------sing up for registration---------//
// export const registration = ({ email, password, name }) => {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password, name }),
//   }).then(processServerResponse);
// };

//-------sign up for user auth----------//
// export const authorization = ({ email, password }) => {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(processServerResponse);
// };

// //-------check token------------//
// export const checkToken = (token) => {
//   console.log(checkToken);
//   return fetch(`${baseUrl}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   }).then(processServerResponse);
// };

//-----------Mock Server-------//
export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
    });
  });
};

export const authorization = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token " });
  });
};

export const registration = (email, password, name) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
    });
  });
};
