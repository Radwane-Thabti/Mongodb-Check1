const mongoose =require('mongoose')
const connectdb =async()=>{
try {
    await mongoose.connect('mongodb+srv://RadwaneThabti:KKxrYVsfVO4LrkGt@cluster0.6ponqwq.mongodb.net/birddb')
    console.log('data base is connected')
} catch (error) {
    console.log(error)
}


}
module.exports=connectdb
