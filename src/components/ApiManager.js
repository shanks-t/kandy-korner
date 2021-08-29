export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
}
