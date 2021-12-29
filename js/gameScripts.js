const [wolf, rabbit, cabbage, boat, mainContainer ] = [
                                       document.querySelector('#wolf'),
                                       document.querySelector('#rabbit'),
                                       document.querySelector('#cabbage'),
                                       document.querySelector('#boat'),
                                       document.querySelector('.mainGameContainer'),
                                       ],

      endPointsList = document.querySelectorAll('.finishSpot');

let result = [],
    steps = 0;

const targeting = (evt) => {

  if(evt.target.id) {

    switch(evt.target.id) {

      case "wolf":

        for(let point of endPointsList) {

          if(!point.childNodes.length) {
            point.append(evt.target);
            steps++;
            result.push('wolf');
            break;
          } else { continue };

        }

        break;

      case "rabbit":

        for(let point of endPointsList) {

          if(!point.childNodes.length) {
            point.append(evt.target);
            steps++;
            result.push('rabbit');
            break;
          } else { continue };

        }

        break;

      case "cabbage":

        for(let point of endPointsList) {

          if(!point.childNodes.length) {
            point.append(evt.target);
            steps++;
            result.push('cabbage');
            break;
          } else { continue };

        }

        break;

      default:
        console.log("No no no");
    }

  }

  if(steps == 3) checkResult(result);

},
checkResult = (resultArray) => {

  let popUp = document.createElement('div');
  let textPopUp = document.createElement('h2');
      textPopUp.innerText = (resultArray[resultArray.length - 1] != 'rabbit') ? "Ты проиграл :(" : "ПОЗДРАВЛЯЮ!";
      popUp.append(textPopUp);
      mainContainer.append(popUp);
      popUp.classList.toggle('popUp');
}

document.addEventListener('click', (event) => targeting(event));
