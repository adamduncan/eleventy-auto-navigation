const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://pietropassarelli.com/11ty-auto-navigation-book-template';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;
const packageJson = require('../../package.json');
const {name,version,description, homepage} = packageJson;

module.exports = {
    environment,
    isProd,
    tracking: {
      gtag: ''
    },
    title: name.replace(/-/g, ' '),// optional 
    version, // optional 
    description,// optional 
    baseUrl,
    repo: homepage,
    author: {
      name: "Pietro",
      email: "pietro.passarelli@gmail.com"
    },
    owner: {
      name: "Pietro",
      last_name: "Passarelli",
      email: "pietro.passarelli@gmail.com", // optional 
      twitter: "pietropassarell", // optional 
      facebook: "pietro.passarelli", // optional 
      github: "pietrop/11ty-auto-navigation-book-template", // optional 
      linkedin: "pietropassarelli", // optional 
      instagram: "pietro.ps", // optional 
      // "image:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //  "image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80" // optional 
    },
    og_locale: "en_US"
};