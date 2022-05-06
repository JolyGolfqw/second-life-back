const Fundraising = require("../models/Fundraising.model");

module.exports.fundraisingsController = {
    addFundraising: async (req, res) => {
        const { title, organizer, amount, image, requisites, description } = req.body;
        try {
            const fundraisings = await Fundraisings.create({
                title,
                organizer, 
                amount, 
                image, 
                requisites, 
                description
            });
            return res.json(fundraisings);
        } catch (err) {
            return res.json({ error: err.message });
        }
    },

    getFundraisings: async (req, res) => {
        try {
            const fundraising = await Fundraising.find();
            return res.json(fundraising);
        } catch (err) {
            return res.json({ error: err.message });
        }
    },

    editFundraisingById: async (req, res) => {
        const { title, organizer, amount, image, requisites, description } = req.body;
        try {
            const fundraisings = await Fundraising.findByIdAndUpdate(req.params.id, {
                title, 
                organizer, 
                amount, 
                image, 
                requisites, 
                description
            });
            res.json(fundraisings);
        } catch (err) {
            res.json({ error: err.message });
        }
    },

    deleteFundraisingById: async (req, res) => {
        try {
            const fundraising = await Fundraising.findByIdAndRemove(req.params.id);
            res.json(fundraising);
        } catch (err) {
            res.json({ error: err.message });
        }
    },
}