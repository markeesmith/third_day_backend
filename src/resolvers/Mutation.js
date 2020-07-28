const Mutation = {
    async createCustomer(parent, args, ctx, info) {
        const customer = await ctx.db.mutation.createCustomer({
            data: {
                ...args
            }
        }, info);
        
        return customer;
    }
};

module.exports = Mutation;