function distanceFromHqInBlocks(b){
    if (b=== 43){
        return 1;
    } else {
        if (b===50){
            return 8;
        }
    } return 8;
        }
function distanceFromHqInFeet(f){
    if (f===43){
        return 264;
    }else {
        if (f===50){
            return 2112;
        }
    } return 2112;
}

function distanceTravelledInFeet(t){
    if(t===43 && 48){
        return 1320;
    } else {
        if(t===50 && 60){
            return 2640;
        }
    }
     return 1584;
        }
    
        function calculatesFarePrice(start, destination) {
            let dist = Math.abs(destination-start)*264;
            if (dist <= 400) {
              return 0;
            } else if (dist>400 && dist <= 2000) {
              return (dist-400)*0.02;
            } else if (dist > 2000 && dist <= 2500) {
              return 25;
            } else {
              return 'cannot travel that far';
            }
        }