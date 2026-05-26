esercizio di oggi: Express Blog - API CRUD (parte 1)

repo: `express-blog-api-crud`

### Esercizio

**Milestone 1**

Mettete il file `posts`, quello in allegato (è diverso da quello di ieri, sono stati aggiunti dei parametri) nella cartella `data`

Assicuriamoci di aver creato le cartelle:
- **controllers** per i controllers definiti nel nostro progetto.
- **routers** con il nostro instradatore per i post.

**Milestone 2**

Continuiamo le logiche delle nostre CRUD:

- Index dovrà restituire la lista dei post in formato JSON (controllare se gli status HTTP restituito sono corretti)
- Show dovrà restituire un singolo post in formato JSON (stessa cosa per gli stati)
- Destroy dovrà eliminare un singolo post dalla lista (dopo aver ovviamente controllato l'esistenza). Stampatevi in console il menu dopo la rimozione, cosi da assicurarvi che il post è stato rimosso.

Testate su Postman i vari casi limite (valori errati, id negativi, id non presenti ecc...)

### Bonus

- Implementare almeno 2 filtri nella rotta index per permettere di effettuare delle ricerche o dei filtri nei campi (avete tanti parametri su cui applicare delle ricerche).
- Testare con Postman la correttezza dei filtri inseriti

### Super Bonus

- Importare uno dei due middleware nel file `server.js`
 
```js
app.use(express.urlencoded()); // Utile per le richieste application/x-www-form-urlencoded
```
o
```js
app.use(express.json()); // Utile per le richieste application/json
```

- Modificare la rotta Create per leggere i dati contenuti in `request.body` e stamparli in console.
- Testare l'invio dei dati tramite Postman inviado i dati nel formato che abbiamo importato
- Restituire nella risposta i soliti campi passati nella richiesta di creare (echo-back)

Esempio risposta:

```json
{
    "messaggio": "Stai provando a creare dei dati",
    "dati": {
        "title": "...",
        "content": "...",
        ...

    }
}
```

## (parte 2)

repo: `express-blog-api-crud`

### Esercizio

**Milestone 1**

Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 

- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

*Nota: se vogliamo avere delle immagini, inventiamole pure.* 

*Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l'aiuto del database) a fornirlo.*

Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo e li restituiamo al client.

**Milestone 2**
Testiamo tutti i casi possibili di errore nei dati e aggistiamo il codice quando ci rendiamo conto di aver dimenticato qualche bug nella validazione.
Ricordate la validazione backend è molto importante, quindi è ovvio che tanta parte del codice sia per essa.


**Milestone 3**

Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testiamolo con postman.

**Milestone 4**

Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 

### Bonus

A scelta tra:
- Implementazione delle chiamate tramite slug (al posto di id)
- Implementazione della soft-delete (tramite flag). Potete utilizzare una chiave già presente oppure aggiungerne una specifica per questo scopo (deleted) 

Buon Lavoro e buon divertimento