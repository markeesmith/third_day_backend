const { forwardTo } = require('prisma-binding');

const Query = {
    customers: forwardTo('db'),
    customer: forwardTo('db'),
    galleries: forwardTo('db'),
    async testimonials(parent, args, ctx, info) {
        const testimonials = await ctx.db.query.testimonials({}, info);
        return testimonials;
    },
    async ranks(parent, args, ctx, info) {
        const ranks = await ctx.db.query.ranks({}, info);
        return ranks;
    }
};

module.exports = Query;