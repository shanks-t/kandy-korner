export const getFetch = (url) => {
    return fetch(url)
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

