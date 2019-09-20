FROM node:8.3-alpine
EXPOSE 8080
RUN mkdir /kapirotinha_portf
WORKDIR /kapirotinha_portf
RUN cd /kapirotinha_portf
COPY ./package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]