module.exports = {
    updatePrice(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.update_price([req.params.id, req.query.price])
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send())

    },

    updateName(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.update_bin_name([req.params.id, req.query.name])
        .then(() => res.status(200).send())
        .catch(()=> res.status(500).send())

    },

    getOne(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.get_one_bin([req.params.id])
        .then((bin)=> res.status(200).send(bin))
        .catch(() => res.status(500).send());
    },

    getMultiple(req, res, next) {
        const dbInstance = req.app.get('db');

//may not need parameter

        dbInstance.get_bins([req.params.name])
        .then((bins)=> res.status(200).send(bins))
        .catch(() => res.status(500).send())

    },

    resetBin(req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.update_bin_name([req.params.id, req.query.name, req.query.price])
        .then(() => res.status(200).send())
        .catch(()=> res.status(500).send())
    }
}