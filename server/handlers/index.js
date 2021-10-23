module.exports ={
    ...require('./auth')
}
module.exports.notfound=(req,res,next)=> {
    const err=new Error('Not found');
    err.status=404;
    next(err);
};
module.exports.errors=(err,req,res,next)=>{
    res.status(err.status || 500).json({
        err : err.message || 'something wrong'
    });
};