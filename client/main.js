const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes")
        .then(res => {
            alert(res.data)
    })
}

fortuneBtn.addEventListener('click', getFortunes)

const newFortuneBtn = document.getElementById(`new-fortune-button`)

const addFortunes = () => {
    let fortunesInput = document.getElementById(`new-fortune-input`)

    let body = {
        fortunes: fortunesInput.value
    }

    axios.post(`http://localhost:4000/api/fortunes`, body)
    .then(res => {
        alert(res.data)
        fortunesInput.value = ``
    })
}

newFortuneBtn.addEventListener(`click`, addFortunes)

const updateFortuneBtn = document.getElementById(`update-fortune-button`)

const updateFortunes = () => {
    let fortuneIndex = document.getElementById(`update-fortune-index`)
    let updatedFortuneInput = document.getElementById(`update-fortune-input`)

    let body = {
        fortunes: updatedFortuneInput.value
    }

    axios.put(`http://localhost:4000/api/fortunes${fortuneIndex.value}`, body)
    .then(res => {
        alert(res.data)
        fortuneIndex.value = ``
        updatedFortuneInput.value = ``
    })
}

updateFortuneBtn.addEventListener(`click`, updateFortunes)

const deleteFortuneBtn = document.getElementById(`delete-fortune-button`)

const deleteFortunes = () => {
    let deleteFortuneInput = document.getElementById(`delete-fortune-input`)

    axios.delete(`http://localhost:4000/api/fortunes${deleteFortuneInput.value}`)
    .then (res => {
        alert(res.data)
        deleteFortuneInput.value = ``
    }) 
}
deleteFortuneBtn.addEventListener(`click`, deleteFortunes)