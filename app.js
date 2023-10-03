                                         
const express = require('express');
const common = require('../common');
const { doc } = require('../googleSheets')

const router = express.Router()

router.post('/login', async (req, res) => {

    const reqData = req.body;

    try {

            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];
            await sheet.addRow({'age': reqData.age,
                                'city': reqData.city,
                                'target': reqData.target,
                                'work': reqData.work,
                                'priority': reqData.priority,
                                'salary': reqData.salary,
                            })



            common.response200(res)
        } catch (err) {
            common.response404(res, err);
        }
    });

    module.exports = router;

