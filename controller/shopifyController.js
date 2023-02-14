const axios = require('axios');
const { json } = require('body-parser');
const token = process.env;


const getproductBy_Bulk = async (req, res) => {
    const query=`mutation {
        bulkOperationRunQuery(
         query: """
          {
            products {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
          """
        ) {
          bulkOperation {
            id
            status
          }
          userErrors {
            field
            message
          }
        }
      }`
    axios({
        url: "https://dev-store-data.myshopify.com/admin/api/2021-10/graphql.json",
        method: "post",
        headers: {
            "Content-Type": "application/graphql",
            "X-Shopify-Access-Token": token,
            "Accept-Encoding": "gzip,deflate,compress"
        },
        
    }).then(response => {
        res.status(200).json(response.data);
    }).catch((err) => {
        res.status(500).json({ message: err });
    });
};


const getproduct = async (req, res) => {
    axios({
        url: "https://dev-store-data.myshopify.com/admin/api/2022-04/products.json",
        method: "get",
        headers: {
            "Content-Type": "application/graphql",
            "X-Shopify-Access-Token": token,
            "Accept-Encoding": "gzip,deflate,compress"
        }
    }).then(response => {
        res.status(200).json(response.data);
    }).catch((err) => {
        res.status(500).json({ message: err });
    });
};
module.exports = {
    getproduct
}