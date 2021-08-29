export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
}
export const getPurchases = () => {
    return fetch("http://localhost:8088/purchases?_expand=product")
    .then(res => res.json())
}
// export const getAllCustomers = () => {
//     return fetch("http://localhost:8088/customers")
//     .then(res => res.json())
// }
// export const getAllCustomers = () => {
//     return fetch("http://localhost:8088/customers")
//     .then(res => res.json())
// }

