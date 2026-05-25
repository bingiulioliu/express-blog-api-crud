import express from 'express';
import postsRouter from './routers/posts.js'

const app=express();

const PORT= process.env.PORT;
const URL= process.env.URL;

app.use('/posts', postsRouter);


app.listen(PORT, (error) => {
    if(error) {
        console.error(error);
        return;
    }
    console.log(`Server avviato alla porta ${PORT}`);
    
})