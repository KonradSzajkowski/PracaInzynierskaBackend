const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise (
        
        async(resolve,reject)=>{
            await db.KpirPosition.create({
                document:data.body.document,
                date:data.body.date,
                description:data.body.description,
                contractorName:data.body.contractorName,
                contractorPost:data.body.contractorPost,
                contractorPostName:data.body.contractorPostName,
                contractorAdres:data.body.contractorAdres,
                contractorNip:data.body.contractorNip,
                salesIncome:data.body.salesIncome,
                otherIncomes:data.body.otherIncomes,
                materialsCosts:data.body.materialsCosts,
                sideCosts:data.body.sideCosts,
                salaryCosts:data.body.salaryCosts,
                otherCosts:data.body.otherCosts,
                other:data.body.other,
                researchDescription:data.body.researchDescription,
                researchValue:data.body.researchValue,
                comments:data.body.comments,
                CompanyId:data.company.id
            }).then(
                async kpirPositions=>{
                    await kpirPositions.save()
                    resolve(kpirPositions.id)
                }
            ).catch(err=>reject(err))
        }
    )
}