function rrange(min, max) { // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll() {
    console.log("roll start");

    const itemCount = 2;
    const floorCount = 5;
    const charCount = 2;

    const floor = document.getElementById("floor");
    const character = document.getElementById("character");
    const item = document.getElementById("item");

    // topmin, topmax, leftmin, leftmax
    const itemranges = [100, 250, 50, 250];
    const charranges = [400, 500, 900, 1050];

    floor.src = "floor" + rrange(1, floorCount).toString() + ".png";

    character.src = "character" + rrange(1, charCount).toString() + ".png";
    character.style.top = rrange(charranges[0], charranges[1]).toString() + "px";
    character.style.left = rrange(charranges[2], charranges[3]).toString() + "px";

    item.src = "item" + rrange(1, itemCount).toString() + ".png";
    item.style.top = rrange(itemranges[0], itemranges[1]).toString() + "px";
    item.style.left = rrange(itemranges[2], itemranges[3]).toString() + "px";

    console.log("roll end");
}