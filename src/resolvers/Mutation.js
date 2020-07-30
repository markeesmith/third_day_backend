const Mutation = {
    async createCustomer(parent, args, ctx, info) {
        const customer = await ctx.db.mutation.createCustomer({
            data: {
                ...args
            }
        }, info);
        
        return customer;
    },
    async createTestimonial(parent, args, ctx, info) {
        const testimonial = await ctx.db.mutation.createTestimonial({
            data: {
                ...args
            }
        }, info);

        return testimonial;
    },
    async createRank(parent, args, ctx, info) {
        const rank = await ctx.db.mutation.createRank({
            data: {
                ...args
            }
        }, info);

        return rank;
    },
     async createGallery(parent, args, ctx, info) {
         const gallery = await ctx.db.mutation.createGallery({
             data: {
                 ...args
             }
         }, info);

         return gallery;
     }
};

module.exports = Mutation;