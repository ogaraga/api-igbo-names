import express from 'express';
import { yourNames } from '../allNames/igboNames.js';
export const router = express();

//get restapi and get rote
router.get('/api/igbo_names', async (req, res, next)=>{
  const {name} = req.body;
  try {
    const foundName = await yourNames.find(item=>item.name===name || item.name.toLowerCase()===name||item.name.toUpperCase()===name)
if (name ===foundName.name.toLowerCase() || name===foundName.name.toUpperCase()||name===foundName.name){
  res.status(200).json({
    Message: 'Name found!',
    NameInfo: foundName
  })
}
}catch(error){
res.status(404).json(error.message)
}
  
 next();
});
//   axios.get('http://localhost:4000/api/igbo_names',{
//   headers:{
//     "Content-Type":'application/json'
//   },
// }).then(resData => console.log(resData.data)).catch(err=>console.log(err))



    

 