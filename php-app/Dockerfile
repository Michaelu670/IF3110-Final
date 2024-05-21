FROM php:8.0-apache

WORKDIR /var/www/html

COPY src/public/index.php .

RUN rm /etc/apt/preferences.d/no-debian-php && \
    apt-get -y update && \
    apt-get -y upgrade && \
    apt-get install -y ffmpeg libxml2-dev php-soap

RUN docker-php-ext-install mysqli pdo pdo_mysql soap && \
    docker-php-ext-enable soap

RUN a2enmod rewrite

EXPOSE 80