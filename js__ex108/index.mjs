
const container = document.querySelector("#container")

const list = document.createElement("ul")

for (let i = 1; i <= 5; i++) {
    const element = document.createElement("li");
    element.innerText = "Item" + i;
    list.appendChild(element);
}

container.appendChild(list)

