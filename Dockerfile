FROM node:21
WORKDIR "/opt/unit_test"
COPY . ./
# COPY package*.json .
# RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]