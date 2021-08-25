
const submitName = (event) => {
    event.preventDefault();
    
    const inputName = document.getElementById('fullname')
    console.log(inputName)

    // debugger

    const fullname = inputName.value
    console.log(fullname)
    console.warn(fullname)
    console.error(fullname)

    // debugger

    const character_array = fullname.split("")
    const reversed_characters_array = character_array.reverse()
    const reversed_fullname = reversed_characters_array.join("")
    console.log(reversed_fullname)

    document.getElementById('reversed_name').innerHTML = reversed_fullname
}