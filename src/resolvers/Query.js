const Query = {
    async customers(parent, args, ctx, info) {
        const customers = await ctx.db.query.customers();
        return customers;
    }
};

module.exports = Query;