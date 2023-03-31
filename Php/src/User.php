<?php
include "./DbConnection.php";


class User
{
  private $tableName = "Users";

  private  $columNames = ["f_name", "l_name", "email", "branch", "password", "profile_img", "type", "membership"];

  private $connection;

  public function __construct($connection){
    $this->connection=$connection;
  }
  
}
