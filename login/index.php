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

$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data['usuario'] ?? '';
$clave = $data['clave'] ?? '';

if (empty($usuario) || empty($clave)) {
    echo json_encode(["status" => "error", "message" => "Usuario y clave requeridos"]);
    exit;
}

$sql = "SELECT * FROM usuarios WHERE usuario = ? AND clave = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$usuario, $clave]);
$user = $stmt->fetch();

if ($user) {
    echo json_encode(["status" => "correcto", "message" => "Login exitoso"]);
} else {
    echo json_encode(["status" => "incorrecto", "message" => "Credenciales inválidas"]);
}
?>
