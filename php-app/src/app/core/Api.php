<?php

class Api
{
    protected $service;
    protected $method;
    protected $params;

    public function __construct()
    {
        $this->service = null;
        $this->method = 'index';

        $url = $this->parseURL();

        $servicePart = $url[0] ?? null;
        if (isset($servicePart) && file_exists(__DIR__ . '/../service/' . $servicePart . 'Service.php')) {
            require_once __DIR__ . '/../service/' . $servicePart . 'Service.php';
            $serviceClass = $servicePart . 'Service';
            $this->service = new $serviceClass();
        }
        unset($url[0]);

        $methodPart = $url[1] ?? null;
        if (isset($methodPart) && method_exists($this->service, $methodPart)) {
            $this->method = $methodPart;
            unset($url[1]);
        }

        if (!empty($url)) {
            $this->params = array_values($url);
        } else {
            $this->params = [];
        }
    }

    public function get() {
        header('Content-type: application/json');
        try {
            if (isset($this->service) && method_exists($this->service, $this->method)) {
                return json_encode([
                    'status' => 'success',
                    'data' => call_user_func_array([$this->service, $this->method], $this->params),
                    'message' => '',
                ], JSON_UNESCAPED_UNICODE);
            }
            else {
                throw new Exception('Method not found');
            }
        }
        catch (Exception $e) {
            return json_encode(['status' => 'error', 
                'data' => null,
                'message'=> $e->getMessage(),
            ], JSON_UNESCAPED_UNICODE);
        }
    }

    private function parseURL()
    {
        if (isset($_SERVER['PATH_INFO'])) {
            $url = trim($_SERVER['PATH_INFO'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);

            return $url;
        }
    }
}