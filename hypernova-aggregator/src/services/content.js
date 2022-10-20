const axios = require("axios");

module.exports.getContent = () => {
  return axios
    .post("http://0.0.0.0:3030/batch", {
      content: {
        name: "ProductList",
        data: {
          title: "Products",
          items: [
            {
              title: "Product 1",
              imageUrl:
                "https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            },
          ],
        },
      },
    })
    .then(({ data }) => {
      return data.results.content;
    });
};
