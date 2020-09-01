/**
 * 匹配出动态字段
 */
const string = '/api/tags/:id/name/:user'
const regex = /\:([\w]*)/g

const map = {
    id: 11,
    user: 22
}
const str = string.replace(regex, (p, group) => {
    console.log(p, group)
    if (map[group]) {
        return map[group]
    }
    return p
})
console.log(str)
