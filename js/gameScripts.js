const [wolf, rabbit, cabbage, boat ] = [
                                       document.querySelector('#wolf'),
                                       document.querySelector('#rabbit'),
                                       document.querySelector('#cabbage'),
                                       document.querySelector('#boat')
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
    console.log(result)
    console.log(result[result.length - 1])
  }

}

document.addEventListener('click', (event) => targeting(event));
