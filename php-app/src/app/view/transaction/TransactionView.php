<?php

class TransactionView implements ViewInterface {
    public $data;
    function __construct($data) {
        $this->data = $data;
    }

    function render() {
        require_once __DIR__ . '/../../component/transaction/TransactionPage.php';
    }
}