//You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.

const truthy = [1, true, "string", {}, []];
const falsy = [null, undefined, 0, "", false];

//note empty array and obj still evaluate to true


//**************************************************************************** */
// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

const ghostBusters = (building) => {
  return building.split(" ").join("") === building
    ? "You just wanted my autograph didn't you?"
    : building.split(" ").join("");
};
//***************************************************************************** */
function time(distance, boatSpeed, stream) {
    //distance divided by speed of the boat - speed of stream if upstream + if its downstream

    function time(distance, boatSpeed, stream) {
        let [streamdir, streamspeed] = stream.split(' ');
        if (streamdir === "Downstream") {
            return Math.round(distance / (boatSpeed + Number(streamspeed)) * 100) / 100
        } else {
            return Math.round(distance / (boatSpeed - Number(streamspeed)) * 100) / 100
        }
    }
}