'use strict';

const contactArr = [
  {name: "Олена", phone:"+380506767676"},
  {name: "Андрій", phone: "+380679997777"},
  {name: "Софія", phone: "+380931111222"},
  {name: 'Maksym Petrenko', phone: '+380444444555'}
];


function findPhoneByName(name) {
    for (const user of contactArr) {
        if (user.name === name) {
            return user.phone;
        }
    }
    return null;
}

// console.dir(findPhoneByName('Maksym Petrenko'))
// console.dir(findPhoneByName('Олена'))
// console.dir(findPhoneByName('Андрій'))
// console.dir(findPhoneByName('Софія'))

const guidebook = {
    Олена: '+380506767676',
    Андрій: '+380679997777',
    Софія: '+380931111222',
    Maksym: '+380444444555'
}

function findPhoneByNameGuideBook(name) {
    return guidebook[name]
}

console.dir(findPhoneByNameGuideBook('Олена'))
console.dir(findPhoneByNameGuideBook('Андрій'))
console.dir(findPhoneByNameGuideBook('Софія'))
console.dir(findPhoneByNameGuideBook('Maksym'))
