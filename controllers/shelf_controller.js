module.exports = {
    
    
    getAll(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.get_shelves()
        .then((shelves) => res.status(200).send(shelves))
        .catch(()=> res.status(500).send());
    },
    
    getOne(req, res, next) {
        const dbInstance = req.app.get('db');
        
                dbInstance.get_shelves([req.params.name])
                .then((shelf) => res.status(200).send(shelf))
                .catch(()=> res.status(500).send());
    }
}