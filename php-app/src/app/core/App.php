<?php

class App
{
    protected $controller;
    protected $method;
    protected $params;

    public function __construct()
    {
        require_once __DIR__ . '/../controllers/NotFoundController.php';
        $this->controller = new NotFoundController();
        $this->method = 'index';

        $url = $this->parseURL();

        $controllerPart = $url[0] ?? null;
        if (isset($controllerPart) && file_exists(__DIR__ . '/../controllers/' . $controllerPart . 'Controller.php')) {
            require_once __DIR__ . '/../controllers/' . $controllerPart . 'Controller.php';
            $controllerClass = $controllerPart . 'Controller';
            $this->controller = new $controllerClass();
        }
        unset($url[0]);

        $methodPart = $url[1] ?? null;
        if (isset($methodPart) && method_exists($this->controller, $methodPart)) {
            $this->method = $methodPart;
        }
        unset($url[1]);

        if (!empty($url)) {
            $this->params = array_values($url);
        } else {
            $this->params = [];
        }

        try {
            call_user_func_array([$this->controller, $this->method], $this->params);
        }
        catch (Exception $e) {
            switch ($_SERVER['REQUEST_METHOD']) {
                case 'GET':
                    require_once __DIR__ . '/../view/not-found/ExceptionView.php';
                    $view = new ExceptionView(['message' => $e->getMessage(), 'code' => $e->getCode()]);
                    $view->render();
                    break;
                case 'POST':
                    break;
            }
            
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