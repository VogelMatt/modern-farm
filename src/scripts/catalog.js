export const catalog = (harvestArray) => {
    let string = "";
    for(let obj of harvestArray) {
        string += `<section class="plant">${obj.type}</section>`
    }
    return string
}