/**
 * The 3 pillars of JS:
 *  1. Manipulating the DOM
 *  2. Handling Eventlisteners
 *  3. Communicating with the server
 * 
 */






function removeItem(target) {
    target.closest("tr").remove()
}

function createColumn(tr) {
    for (key in item) {
        const td = document.createElement("td")

        if (key === "total") {
            td.innerText = item.qty * item.price
        } else {
            td.innerText = item[key]
        }

        tr.appendChild(td)
    }
}

function createRow(container, items) {
    for (item of items) {
        const tr = document.createElement("tr")
        container.appendChild(tr)

        createColumn(tr)

        const btnRemove = document.createElement("td")
        btnRemove.innerHTML = `
        <button onclick="removeItem(this)" class="btn btn-sm text-danger border border-danger mx-auto px-3">x</button>
    `

        tr.appendChild(btnRemove)
    }
}


function submitItem(){
    const form = document.querySelector("#frm-add-item")
    const container = document.querySelector("#container")
    form.addEventListener("submit", function(event){
        event.preventDefault()
        let items = []
     
        items.push({
            id: 1,
            name: event.target.name.value,
            price: Number(event.target.price.value),
            qty:Number(event.target.qty.value),
            total: 0
        })
        createRow(container, items)
    })


}


document.addEventListener("DOMContentLoaded", ()=>{
    submitItem()
})




