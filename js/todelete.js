/**
 * The 3 pillars of JS:
 * 
 */


const tableBody = document.getElementById("container")

const items = [
    {
        id: 
        Name: 
        Email:
        Phone number:
        Password:
        ID:
    }
    
    {
        id: 2,
        name: "bread",
        price: 50,
        qty: 3,
        total: 0
    }
]

function removeItem(target){
    // target.closest("tr").remove()
    target.parentNode.parentNode.remove()
}

for (item of items) {
    const tr = document.createElement("tr") // Creating a table row for each item in array
    tableBody.appendChild(tr) // adding the above row to the  table container

    // creating colums for each row
    for (key in item) {
        const td = document.createElement("td")

        if (key === "total") {
            td.innerText = item.qty * item.price
        } else {
            td.innerText = item[key]
        }

        tr.appendChild(td) // adding cell to row
    }

    // create button to remove items from cart
    const tdAction = document.createElement("td")
    tdAction.innerHTML = `<button onclick="removeItem(this)" class="btn btn-sm text-danger border border-danger mx-auto px-4">x</button>`
    tr.appendChild(tdAction)


}

