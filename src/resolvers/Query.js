const Query = {
    async customers(parent, args, ctx, info) {
        const customers = await ctx.db.query.customers();
        return customers;
    },
    async testimonials(parent, args, ctx, info) {
        const testimonials = await ctx.db.query.testimonials();
        return testimonials;
    },
    async ranks(parent, args, ctx, info) {
        const ranks = await ctx.db.query.ranks();
        return ranks;
    },
    async galleries(parent, args, ctx, info) {
        const galleries = await ctx.db.query.galleries();
        return galleries;
    }
};

module.exports = Query;