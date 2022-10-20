const axios = require("axios");

module.exports.getLayout = () => {
  return axios
    .post("http://0.0.0.0:3031/batch", {
      header: {
        name: "Header",
        data: {
          title: "Microfrontends demo",
          links: [
            {
              url: "http://localhost:8080/",
              text: "Home",
            },
            {
              url: "http://localhost:8080/",
              text: "Github code",
            },
          ],
        },
      },
    })
    .then(({ data }) => {
      return data.results;
    });
};
