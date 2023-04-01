<?php
require __DIR__ . './../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . './../');
$dotenv->load();


class DataBase
{

  private $dbName;
  private $connection;
  private $servername;
  private $username;
  private $password;


  public function __construct()
  {
    $this->dbName = $_ENV["DB_NAME_PROD"] ?? $_ENV["DB_NAME_DEV"];
    $this->servername = $_ENV["SERVER_NAME_PROD"] ?? $_ENV["SERVER_NAME_DEV"];
    $this->username = $_ENV["USERNAME_PROD"] ?? $_ENV["USERNAME_DEV"];
    $this->password = $_ENV["PASS_PROD"] ?? $_ENV["PASS_DEV"];
  }

  // Create connection
  public function connect()
  {
    // the prfix p stands for persistent connection
    try {
      $this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbName);
      return true;
    } catch (Exception $e) {

      die ("Connection failed to mysql server :".$e->getMessage());
      //return false;
    }
  }


  public function getConnection()
  {
    return $this->connection;
  }


  // data base must be close after each termination of a script
  public function closeDb()
  {
    $this->connection->close();
  }
}
