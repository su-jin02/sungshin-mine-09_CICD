FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y build-essential curl
RUN mkdir -p /app
COPY . /app/
WORKDIR /app/server/
RUN rm -rf /etc/localtime 
RUN ln -s /usr/share/zoneinfo/Asia/Seoul /etc/localtime 
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN apt-get -y install nodejs
CMD nvm install 18.15.0
CMD nvm use 18.15.0
CMD npm install
CMD npm start 
