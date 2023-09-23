import db from '../models/index';

let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        // console.log(data);
        return res.render('homepage.ejs', {
            data : JSON.stringify(data)
        }); //tim all data trong bang user
    }catch(e){
        console.log(e);
    }
};

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
};

//exports nhieu function;
module.exports = {
    getHomePage : getHomePage,
    getAboutPage : getAboutPage
}   