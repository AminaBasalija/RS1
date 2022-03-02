import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  
};

const Reservations = {
  list: (id) => requests.get("/reservation/"+id),
};

const Calendar = {
  list: (id) => requests.get("/reservation/calendar/"+id),
};

const agent = {
  Reservations,
  Calendar
};

export default agent;