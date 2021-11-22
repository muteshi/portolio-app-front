import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = apiUrl + "/blog/";

// const axiosInstance = axios.create({
//   baseURL: apiUrl,
//   headers: {
//     "Content-Type": "application/json",
//     accept: "application/json",
//   },
// });

function postUrl(slug) {
  return `${apiEndpoint}${slug}`;
}

export function getPost(postSlug) {
  return http.get(postUrl("posts/" + postSlug + "/"));
}

export function getResume() {
  return http.get(apiEndpoint + "resumes/");
}

export function getServices() {
  return http.get(apiEndpoint + "posts/?cats=3");
}

export function getTestimonials() {
  return http.get(apiEndpoint + "posts/?cats=4");
}

export function getExperience() {
  return http.get(apiEndpoint + "posts/?cats=5");
}

export function getSkills() {
  return http.get(apiEndpoint + "skills/");
}

export function getPortfolios() {
  return http.get(apiEndpoint + "portfolios/");
}
export function getWebPortfolios() {
  return http.get(apiEndpoint + "portfolios/?tags=4");
}
export function getMobilePortfolios() {
  return http.get(apiEndpoint + "portfolios/?tags=6");
}

export function getBlogPosts() {
  return http.get(apiEndpoint + "posts/?cats=7");
}

export function getBlogPost(postSlug) {
  return http.get(postUrl("posts/" + postSlug + "/"));
}

export function sendMessage(message) {
  return http.post(apiEndpoint + "new-message/", message);
}
