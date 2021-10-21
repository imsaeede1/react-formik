import http from "./httpServices";

export function getContact() {
  return http.get("/contacts");
}

export function addOneContact(data) {
  return http.post(`/contacts/`, data);
}

export function getOneContact(id, data) {
  return http.get(`/contacts/${id}`);
}

export function updateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}

export function deleteContact(selectContact) {
  return http.delete(`/contacts/${selectContact}`);
}

export function postContact(data) {
  const token = "SECURE TOKEN !";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return http.post("/contacts/", data, header);
}
