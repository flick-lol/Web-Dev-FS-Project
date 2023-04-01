<?php
include "./src/DbConnection.php";
require __DIR__ . '/vendor/autoload.php';

use Slim\Factory\AppFactory;
use Slim\Handlers\Strategies\RequestHandler;
use Slim\Psr7\Response;
use Slim\Psr7\Request;

$Db = new DataBase();

if ($Db->connect()) {

    $app = AppFactory::create();


    $app->addRoutingMiddleware();



    // Define app routes
    $app->get('/hello/{name}', function (Request $request, Response $response, $args) {
        $request->getQueryParams();// this is to get the query parameters
        $name = $args['name'];// this is to get the url parameters
        $response->getBody()->write("Hello, $name");
        return $response;
    });
    $app->get('/{uri:.*}', function (Request $request, Response $response, $args) {
        $response->getBody()->write("ehy there");
        return $response;
    });



    $errorMiddleware = $app->addErrorMiddleware(true, true, true);
    // Run app

    $app->run();
} else {

}
