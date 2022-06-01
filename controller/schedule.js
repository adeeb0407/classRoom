import db from '../config/config.js'

export const getAllSchedule = (req, res) => {
    db.query('SELECT * FROM schedule',
     (err, result) => {
        if(err){
            console.log(err);
            res.json({message : "error"})
        }else{
            res.json(result)
        }
    })
}
export const schedulePost =  ((req, res) => {

    const {title, textArea, date, time} = req.body

    db.query(`INSERT INTO schedule (batch_name, teacher_name, batch_date, batch_time) VALUES(?,?,?,?)`, [title, textArea, date, time], (err, result) =>{
        if(err){
            console.log(err);
        }
        res.send({result : "sucess"});   
    })
});

export const scheduleDelete =  ((req, res ) => {

    const {id} = req.body

    db.query(`DELETE FROM schedule WHERE idschedule = ${id};`, (err, result) =>{
        if(err){
            console.log(err);
        }
        res.send({result : "sucess"});   
    })
});