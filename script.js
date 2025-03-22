const input = document.querySelector("#amount")
const harina = document.querySelector("#harina")
const agua = document.querySelector("#agua")

const HARINA_BASE = 69
const AGUA_BASE = 124

input.addEventListener("input", () => {
    const amount = input.value
    harina.textContent = `Harina Pan: ${HARINA_BASE*amount} gr`
    agua.textContent = `Agua: ${AGUA_BASE*amount} ml`
})