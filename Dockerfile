FROM node:8.11.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000
CMD [ "npm", "build" ]
CMD [ "npm", "start" ]

