function rrange(min, max) { // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll() {
    console.log("roll start");

    const itemCount = 2;
    const floorCount = 5;
    const charCount = 2;
    const pickupCount = 7;

    const floor = document.getElementById("floor");
    const character = document.getElementById("character");
    const item = document.getElementById("item");

    const pickups = [document.getElementById("pickup1"), document.getElementById("pickup2"), document.getElementById("pickup3")];

    // topmin, topmax, leftmin, leftmax
    const itemranges = [50, 200, 25, 200];
    const charranges = [275, 350, 725, 875];
    const pickupranges = [100, 600, 50, 1100];

    floor.src = "floor" + rrange(1, floorCount).toString() + ".png";

    character.src = "character" + rrange(1, charCount).toString() + ".png";
    character.style.top = rrange(charranges[0], charranges[1]).toString() + "px";
    character.style.left = rrange(charranges[2], charranges[3]).toString() + "px";

    item.src = "item" + rrange(1, itemCount).toString() + ".png";
    item.style.top = rrange(itemranges[0], itemranges[1]).toString() + "px";
    item.style.left = rrange(itemranges[2], itemranges[3]).toString() + "px";

    for (let pickup of pickups) {
        pickup.src = "pickup" + rrange(1, pickupCount).toString() + ".png";
        pickup.style.top = rrange(pickupranges[0], pickupranges[1]).toString() + "px";
        pickup.style.left = rrange(pickupranges[2], pickupranges[3]).toString() + "px";
        if (Math.random() < 0.5) {
            pickup.style.display = "inline";
        } else {
            pickup.style.display = "none";
        }
    }

    console.log("roll end");
}