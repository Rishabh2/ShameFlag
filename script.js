function roll() {
    console.log("roll start");

    const itemCount = 2;
    const floorCount = 2;
    const charCount = 2;

    const floor = document.getElementById("floor");
    const character = document.getElementById("character");
    const item = document.getElementById("item");

    floor.src = "floor" + (Math.floor(Math.random() * floorCount) + 1).toString() + ".png";
    character.src = "character" + (Math.floor(Math.random() * charCount) + 1).toString() + ".png";
    item.src = "item" + (Math.floor(Math.random() * itemCount) + 1).toString() + ".png";

    console.log("roll end");
}