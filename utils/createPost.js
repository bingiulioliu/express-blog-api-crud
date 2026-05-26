export const createPost = (postArray, obj) =>{

    const {title, tags, prep_time, slug, published = false} = obj;
    
    // Campi obbligatori
    if (!title){
        return {
            status: 400,
            error: 'Titolo e slug obbligatori',
            result: null
        };
    }

    // Generazione slug
    const newSlug = title.toLowerCase().replaceAll(' ', '-');
    const slugExists = postArray.some(post=>post.slug===newSlug);
    if (slugExists){
        return {
            status: 400,
            error: 'Titolo/slug giá presenti',
            result: null
        };
    }

    // Generazione id
    const newId = postArray.length > 0 ? postArray[postArray.length - 1].id + 1 : 1;

    const newPost = {
        id: newId,
        title,
        slug: newSlug,
        prep_time: Number(prep_time),
        tags: tags || []
    }

    return{
        status: 201,
        error: null,
        data: newPost
    }
};