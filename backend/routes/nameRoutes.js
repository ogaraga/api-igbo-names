import express from 'express';
import { yourNames } from '../allNames/igboNames.js';
export const router = express();


//getting route to work
router.get('/api/igbo_names', async (req, res, next) => {
    const {name} = req.body;
    try {
        const foundName = await yourNames.find(item=>item.name===name || item.name.toLowerCase()===name||item.name.toUpperCase()===name)
    if (name ===foundName.name.toLowerCase() || name===foundName.name.toUpperCase()||name===foundName.name){
      res.status(200).json({
        Message:' Name found!',
        NameInfo: foundName
      });
     }
     else{
      res.status(404).json('Name not found!')
     } 
  } catch (error) {
    res.json('Something went wrong!')
  }
  next()
});

 