const { forwardTo } = require('prisma-binding');

const Query = {
    customers: forwardTo('db'),
    customer: forwardTo('db'),
    galleries: forwardTo('db'),
    gallery: forwardTo('db'),
    async testimonials(parent, args, ctx, info) {
        const testimonials = await ctx.db.query.testimonials({}, info);
        return testimonials;
    },
};

module.exports = Query;