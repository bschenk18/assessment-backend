let fortunes = ["A pleasant surprise is waiting for you", "A truly rich life contains love and art in abundance", "All your hard work will soon pay off", "Congratulations! You are on your way", "Do not make extra work for yourself"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
},

    getFortunes: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune)
},

    addFortunes: (req, res) => {
        let (fortunes) = req.body

        fortunes.push(fortunes)

        res.status(200).send(`Your fortune was added!`)
 },

    updateFortunes: (req, res) => {
            let {index} = req.params
            let {fortunes} = req.body

            fortunes.splice(index, 1, fortunes)

    res.status(200).send(`The fortune was updated!`)
},

    deleteFortunes: (req,res) => {
        let {index} = req.params

        fortunes.splice(index, 1)

        res.status(200).send(`The fortune was deleted!`)
    }
}
//     deleteFortune: (req,res) => {
//     let index = fortune.findIndex(fortune => fortune.id === +req.params.id)

//     fortune.splice(index, 1)

//     res.status(200).send(fortune)
//   },

//   createFortune: (req, res) => {
//     let {title, rating, imageURL} = req.body

//     let newFortune = {
//         id: globalId,
//         title,
//         rating,
//         imageURL
//     }

//     fortune.push(newFortune)

//     res.status(200).send(fortune)
//     globalId++
//   },
//   updateFortune: (req, res) => {
//     let {type} = req.body
//     let {id} = req.params