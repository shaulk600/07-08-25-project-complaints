
export async function getResponseLog(req, res) {
    if (req.body.data['success'] === true) {
        res.status(200).redirect('../public/html/getting_compaint.html');
    }
    else {
        res.status(403).json({ msg: ' Access denied ' });
    }
}