import posts from "../data/posts.js";
import { findPost } from "../utils/findPost.js";

function index(request, response) {
    response.json(posts)
}

function show(request, response) {
    // Recuper l'ID dai params
    const { id } = request.params;

    const result = findPost(posts, id)

    if (result.error) {
        return response.status(404).json({
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

    response.json({
        status: result.status,
        error: null,
        messaggio: `Richiesta di eliminazione per post con ID ${id}`,
        results: result.data
    })
}


export {
    index, show, create, destroy
}