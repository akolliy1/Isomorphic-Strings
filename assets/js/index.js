const submitBtn = document.querySelector('#submit');
const inputBox1 = document.querySelector('#string1');
const inputBox2 = document.querySelector('#string2');
const output = document.querySelector('#output');
const h2 = document.createElement('h2');
let value1, value2, outputCheck;

submitBtn.addEventListener('click', function (event) {
    value1 = inputBox1.value;
    value2 = inputBox2.value;
    if (value1.length !== value2.length) {
        h2.innerHTML = 'Input string of same length.'
        output.appendChild(h2)
    }
    else {
        outputCheck = isIsomorphic(value1, value2)
        if (outputCheck) {
            h2.innerHTML = true
            output.appendChild(h2)
        } else {
            h2.innerHTML = false
            output.appendChild(h2)
        }
    }

})


const isIsomorphic = (str1, str2) => {
    const string1 = [];
    const string2 = [];
    if (!(str1 && str2)) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    const mapIndexStr1 = [];
    const mapIndexStr2 = [];
    const dict1 = {};
    const dict2 = {}
    for (let i = 0; i < str1.length; i++) {
        const str = i
        if (dict1[str1[i]] !== 1) {
            dict1[str1[i]] = 1;
            mapIndexStr1.push(i);
            string1.push(str1[i]);
        }
        if (dict2[str2[i]] !== 1) {
            dict2[str2[i]] = 1;
            mapIndexStr2.push(i);
            string2.push(str2[i]);
        }

    }
    const index1 = mapIndexStr1.join('');
    const index2 = mapIndexStr2.join('');
    const letters1 = string1.join('');
    const letters2 = string2.join('');
    if (letters1 !== str1 && letters2 !== str2) {
        if (index1 === index2) {
            return true
        }
        else {
            return false
        }
    }
    return false
}
