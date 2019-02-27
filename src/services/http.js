export const API_ROOT = "http:/192.168.37.1:1337/api";
//export const API_ROOT = "http:/localhost:1337/api";

export default class http {

  getToken() {
    return null;
  }

  sendRegister(data) {
    return request(
      {
        endpoint: "api/auth/local/register",
        body: data,
        contentType: "multipart/form-data"
      });
  }

  sendLogin(data) {
    return request(
      {
        endpoint: "api/auth/local",
        body: data,
        contentType: "multipart/form-data"
      });
  }

  listCoops(){
    return request(
      {
        endpoint: "/cooperativa",
        method: "GET",
        token: this.getToken()
      });
  }
}

export function request(
{
  endpoint,
  body,
  token = null,
  method = "POST",
  contentType = "application/json",
  accept = "application/json"
}) {

  let headers = {
    "Accept": accept,
    "Content-Type": contentType
  };

  if (token !== null)
    headers["token"] = token;

  let params = {
    method,
    headers
  };
  if (method === "POST")
    params.body = body;

  return fetch(API_ROOT + endpoint, params)
        .then((res) => {
          if (!res.ok) {
            let error = new Error(response.statusText);
            error.response = res;
            throw error;
          }
          return res.json();
        });
}
