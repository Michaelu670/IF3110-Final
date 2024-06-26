<?php

// URL
define('BASE_URL', '/public');
define('STORAGE_URL', '/storage');

// SOAP
define('SOAP_URL', 'http://host.docker.internal:8067/service');
define('SOAP_WSDL', SOAP_URL . '?wsdl');
define('SOAP_USERNAME', 'php_app');
define('SOAP_PASSWORD', 'sSAd7f69ast7f6sdf796SSdaUHSAI78f8ufhaYAsuasdf87asduAUYsvasf7guyvAydbsfuhdjcxvj918DSda');

// Database
define('HOST', $_ENV['MYSQL_HOST']);
define('DB_NAME', $_ENV['MYSQL_DATABASE']);
define('USER', $_ENV['MYSQL_USER'] ?? 'root');
define('PASSWORD', $_ENV['MYSQL_PASSWORD']);
define('PORT', $_ENV['MYSQL_PORT'] ?? 3306);
define('ROWS_PER_PAGE', 10);

// File
define('MAX_FILE_SIZE', 10 * 1024 * 1024);
define('ALLOWED_IMAGES', ['image/jpeg' => '.jpeg', 'image/png' => '.png', 'video/mp4' => '.mp4', 'video/ogg' => '.ogg']);

// Session
define('COOKIES_LIFETIME', 60 * 60 * 24);
define('SESSION_EXPIRATION_TIME', 60 * 60 * 24);
define('SESSION_REGENERATE_TIME', 30 * 60);

// Debounce
define('DEBOUNCE_TIMEOUT', 500);

// Bcrypt
define('BCRYPT_COST', 10);