import posts from "../data/posts.js";
import { findPost } from "../utils/findPost.js";

function index(request, response) {

    // Parametri per la query string
    const {
        title,
        maxPrepTime,
        tag
    } = request.query;

    
    // Filter unico
    const filteredPosts = posts.filter(post => {
        // Filtro prep time
        const prepTimeReal = Number(maxPrepTime);
        // Escludo i post con prep time non validi
        if (!isNaN(prepTimeReal) && post.prep_time > prepTimeReal) {
            return false;
        }
        // Filtro nome
        if (title !== undefined && name !== '') {
            const nameLower = name.toLowerCase();
            const postNameLower = post.title.toLowerCase();

            if (!postNameLower.includes(nameLower)) {
                return false;
            }
        }
        // Filtro tag
        if (tag !== undefined && tag !== '') {
            const tagLower = tag.toLowerCase();

            const hasTag = post.tags.map(tag => tag.toLowerCase()).includes(tagLower);

            if (!hasTag) {
                return false;
            }
        }
            return true;
        })
    response.status(200).json(filteredPosts);
}

function show(request, response) {
    // Recuper l'ID dai params
    const { id } = request.params;

    const result = findPost(posts, id)

    if (result.error) {
        return response.status(result.status).json({
            status: result.status,
            error: result.error,
            results: null
        });
    }

    response.json({
        error: null,
        messaggio: `Stai visualizzando il post con ID ${id}`,
        results: result.data,
    });

}

function create(request, response) {
    response.json({
        messaggio: 'Richiesta di creazione'
    })
}

function destroy(request, response) {
    const { id } = request.params;

    const result = findPost(posts, id)

    if (result.error) {
        return response.status(result.status).json({
            status: result.status,
            error: result.error,
            results: null
        });
    }

    // Cerco l'indice del post
    const postIndex = posts.findIndex(post => post.id === Number(id));
    // Elimino
    posts.splice(postIndex, 1);

    console.log(posts);

    response.status(200).json({
        error: null,
        messaggio: `Richiesta di eliminazione per post con ID ${id}`,
        results: result.data
    })
}


export {
    index, show, create, destroy
}