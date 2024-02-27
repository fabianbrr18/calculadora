<?php
require_once '../Class/ClassCalculadora.php';
//verifcar solicitud
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // expresion  se ha enviado en la solicitud post(comprueba el parametro)
    if(isset($_POST["expression"]) && !empty($_POST["expression"])){
        $expression = $_POST["expression"];

        // Realizar el cálculo usando la clase Calculator
        $calculator = new Calculator();
        try {
            //Se evalua la expresion con la funcion eval y se guarda en result
            $result = eval('return ' . $expression . ';');
            echo $result;
        } catch (Exception $e) {
            echo 'Error en la expresión';
        }
    } else {
        echo "Error: La expresión no se recibió correctamente";
    }
}
?>
