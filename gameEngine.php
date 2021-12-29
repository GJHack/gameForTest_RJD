<?php

$gameObjects = array(
  'wolf' => new GameObject('wolf','ВОЛК','imgs/wolf.png',54,75),
  'rabbit' => new GameObject('rabbit','КРОЛИК','imgs/rabbit.png',30,75),
  'cabbage' => new GameObject('cabbage','КАПУСТА','imgs/cabbage.png',43,75),
  'boat' => new GameObject('boat','ЛОДКА','imgs/boat.png',43,50)
);

class GameObject {

  protected string $name;
  protected string $pathToImg;
  protected string $id;
  protected int $x;
  protected int $y;

  function __construct(string $id , string $name = "Неизвестно" , string $pathToImg = "/imgs/defaultSprite.png" , int $x = 0 , int $y = 0) {

    $this->id = $id;
    $this->name = $name;
    $this->pathToImg = $pathToImg;
    $this->x = $x;
    $this->y = $y;

  }

  function getPosition() {

    $positions = [
                 "x" => $this->x ,
                 "y" => $this->y
                 ];

    return $positions;

  }

  function getName() {
    return $this->name;
  }

  function getSprite() {
    return $this->pathToImg;
  }

  function draw() {

    $html = '<div class = "gameCharacters" style = "top:'. $this->getPosition()["y"].'%'.'; left:'.$this->getPosition()["x"] .'%;"'.'>';
    $html .= '<img id = "'. $this->id . '" src=' . $this->getSprite() . ' alt = ' . $this->getName().'>';
    $html .= '</div>';

    return $html;
  }

}

?>
