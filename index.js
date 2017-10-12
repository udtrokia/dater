
//date generator

function dater(y,m,d){
    let date
    if(arguments.length===1){
	date = new Date(y)
    }else{
	date = new Date(y,m,d)
    }
    let dater={
	    date : date,
	    year : date.getFullYear(),
	    month : date.getMonth(),
	    day : date.getDate(),
	    days: parseInt(date.getTime()/(1000*60*60*24)),
	    chinese : date.getFullYear()+'年'+date.getMonth()+'月'+date.getDate()+"日",
	    ms: date.getTime()
    }
    return dater
}

module.exports=dater
//export {dater as default}
