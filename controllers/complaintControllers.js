

import { getData, initData } from "../dal/complaints.dal.js";


export async function getDataC(req, res) {
    try {
        const result = await getData(req.body);
        if (result.success === 'ok') {
            res.status(200).json(result.res);
        }
        if (result.success === 'field') {
            res.status(500).json({ msg: 'error to init' });
        }
    } catch (err) {
        console.log(`${err.message}`);
        res.status(500).json({ msg: 'error to init in file CTRL' });
    }
}

export async function initDataC(req, res) {
    try {
        const result = await initData(req.body);
        if (result.success === 'ok') {
            res.status(201).json(result);
        }
        if (result.success === 'field') {
            res.status(500).json({ msg: 'error to init' });
        }
    } catch (err) {
        console.log(`${err.message}`);
        res.status(500).json({ msg: 'error to init in file CTRL' });
    }
}
//הדאטה הבא לצורכי testing
// בעת ביצוע init - זה המלל שמגיע

// result = 
// {
//     "success": "ok",
//     "res": {
//         "acknowledged": true,
//         "insertedId": "68949508c1b170c90f116295"
//     }
// }
