FROM node:lts-alpine 
# node image 

ADD src/ /src 
# copy folder src
WORKDIR /src
# change folder to src
RUN npm install

EXPOSE 80

CMD ["node", "index.js"]