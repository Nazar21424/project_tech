document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let conteiner = document.querySelector(".cart-item")
    let totalEl = document.querySelector(".total")

    function renderCart(){
        conteiner.innerHTML = ''
        let total = 0

        if (cart.length == 0){
            conteiner.innerHTML = "<h3>Кошик порожній :( <h3>"
            totalEl.textContent = ""
            return
        }

        cart.forEach(element => {
            total += element.price + element.qty

            conteiner.innerHTML += `
            <div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>

            <button onclick=changeQty(${item.id}, -1)>-</button>
            <span>${item.price}</span>
            <button onclick=changeQty(${item.id}, 1)>+</button>
            <button onclick=removeItem(${item.id})>Видалити</button>
            </div>
            `
        });

        totalEl.textContent = "Разом: " + total + "грн."
    }
    //Продовження коду
})