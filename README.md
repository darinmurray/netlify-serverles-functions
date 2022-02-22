# netlify-serverles-functions
sandbox for testing netlify workfkow, env and serverless functions



create netlify.toml (outside published directory) with contents: 
# example netlify.toml
[build]
  functions = "functions/" # where your js functions are stored
  publish = "public/"  # the root directory of published site

create actual 'functions' folder (outside published directory) and create a js file with the funciton(s) to be called

terminal, cd to project
npm init -y
create .gitignore OUTSIDE of published directory and add 'node_modeuls' to the file
npm i node-fetch



comand line: netlify dev   to run in dev mode