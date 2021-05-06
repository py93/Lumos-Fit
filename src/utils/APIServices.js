import axios from "axios";

export async function apiRequest(url, requestType, data, id) {
  switch (requestType) {

    case "GET": {
      const res = await axios.get(url);
      if (res.status === 200) {
        return { response: res };
      } else {
        throw new Error("Failed to get data");
      }
    }

    case "POST": {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        return { response: res };
      } else {
        throw new Error("Failed to save");
      }
    }

    case "PUT": { //remove this and update with post for backend
      const res = await axios.put(`${url}/${id}`, data);
      if (res.status === 200) {
        return { response: res, errorFlag: false };
      } else {
        throw new Error("Failed to update");
      }
    }

    default:
      return null;
  }
}
