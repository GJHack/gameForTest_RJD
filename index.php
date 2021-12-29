<?php

  require_once 'header.php';
  require_once 'gameEngine.php';

?>


<section class = "mainGameContainer">

  <div id = "goal" class = "goal">

    <div id = "position0" class = "finishSpot"></div>
    <div id = "position1" class = "finishSpot"></div>
    <div id = "position2" class = "finishSpot"></div>

  </div>

  <!-- START -->
    <?php

      foreach($gameObjects as $gameObject) {
        echo $gameObject->draw();
      }

    ?>
  <!-- END -->

  <div id = "start" class = "start"></div>

</section>



<?php include_once 'footer.php'; ?>
