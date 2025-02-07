<?php
$host = getenv('DB_HOST');
$db   = getenv('DB_NAME');
$user = getenv('DB_USER');
$pass = getenv('DB_PASS');

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

header('Content-Type: application/json');

$id_producto = $_GET['id_producto'] ?? null;

if ($id_producto) {
    $stmt = $pdo->prepare("SELECT * FROM productos WHERE id = ?");
    $stmt->execute([$id_producto]);
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($producto ?: ["error" => "Producto no encontrado"]);
} else {
    $stmt = $pdo->query("SELECT * FROM productos");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
?>
