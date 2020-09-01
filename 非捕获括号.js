const regex = /(ab)+/g
const regex1 = /(?:ab)+/g

const string = "ababa abbb ababab";

string.replace(regex, function (match, p1) {
    console.log(match, p1)
})
string.replace(regex1, function (match, p1) {
    console.log(match, p1)
})