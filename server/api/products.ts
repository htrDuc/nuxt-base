export default defineEventHandler(async () => {
    let data: object = {}
    await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res) => (data = res))

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
})
