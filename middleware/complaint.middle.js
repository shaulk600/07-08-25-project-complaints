
export async function checkData(req, res, next) {
    const category = req.body['select-option-complaint'];
    const message = req.body['complaint_content'];

    const now = new Date();
    const isoString = now.toISOString();

    const objData = {
        category,
        message,
        create_at: isoString
    }

    req.body.data = objData;
    next();
}