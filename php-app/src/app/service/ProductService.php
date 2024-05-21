<?php

class ProductService {
    private function index() {
        require_once __DIR__ . '/../model/ProductModel.php';
        $productModel = new ProductModel();
        $page = $_GET['page'] ?? 1;
        $q = $_GET['q'] ?? '';
        $sortVar = $_GET['sortVar'] ?? 'name';
        $order = $_GET['order'] ?? 'asc';
        $tags = isset($_GET['tags']) ? explode(',', $_GET['tags']) : [];
        $minPrice = $_GET['minPrice'] ?? null;
        $maxPrice = $_GET['maxPrice'] ?? null;
        
        $q = '%' . $q .'%';
        return $productModel->getProductsInPage($page, $q, $sortVar, $order, $tags, $minPrice, $maxPrice);
    }

    private function product($id) {
        require_once __DIR__ . '/../model/ProductModel.php';
        $productModel = new ProductModel();
        return $productModel->getProductFromID($id);
    }

    public function __call($method, $args) {
        if ($method == "index") {
            if (!isset($args[0])) {
                return $this->index();
            }
            else {
                return $this->product($args[0]);
            }
        }
        
    }
}