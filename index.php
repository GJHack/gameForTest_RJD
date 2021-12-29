<?php

  include_once 'header.php';
  require_once 'gameEngine.php';

?>


<section class = "mainGameContainer">

  <div id = "goal" class = "goal"> </div>

  <!--Контейнер персонажа и спрайт START -->
    <?php
    foreach($gameObjects as $gameObject) {
      echo $gameObject->draw();
    }
    ?>
  <!--Контейнер персонажа и спрайт END -->

  <div id = "start" class = "start"></div>

</section>



<?php include_once 'footer.php'; ?>
