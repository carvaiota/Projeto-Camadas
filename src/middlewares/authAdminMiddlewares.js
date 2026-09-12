async function authAdminMiddleware(req,res,next) {
    if (!req.user || req.user.role != "admin"){
        return res.status(403).json({
            message: "Usuario nn é um adm"
        })
        next()
    }
    
}

export default authAdminMiddleware;

