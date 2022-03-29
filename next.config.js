// /** @type {import('next').NextConfig} */
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  //   // if (phase === PHASE_DEVELOPMENT_SERVER)
  //   //   return {
  //   //     env: {
  //   //       mongodb_url: "",
  //   //       mongodb_username: "",
  //   //       mongodb_password: "",
  //   //       mongodb_clustername: "",
  //   //       mongodb_database: "123",
  //   //     },
  //   //   };

  //   // return {
  //   //   env: {
  //   //     mongodb_url: "",
  //   //     mongodb_username: "",
  //   //     mongodb_password: "",
  //   //     mongodb_clustername: "",
  //   //     mongodb_database: "456",
  //   //   },
  //   // };
  return {
    images: {
      domains: ["localhost", "https://my-blog-app-mauve.vercel.app/"],
    },
  };
};

module.exports = nextConfig;

