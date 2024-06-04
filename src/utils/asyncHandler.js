const asyncHandler =(requestHandler)=>{(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}}

app.use((err, req, res, next) => {
    // Handle the error
    res.status(500).send("Internal Server Error");
});


export { asyncHandler };

// const asyncHandler =()=>{}
// const asyncHandler =(func)=>()=>{}
// const asyncHandler =(func)=>async()=>{} HOF higer order function

// const asyncHandler = (func) => async (req,res,next) => {                 using try catch writting the function
// try {
//    await func(req,res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         success:false,
//         message: error.message
//     })
// }
// };