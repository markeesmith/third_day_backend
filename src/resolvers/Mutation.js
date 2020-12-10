const { transport, contactNewWorkEmail, contactResponseEmail } = require('../mail');

const Mutation = {
    async createCustomer(parent, {firstName, lastName, email, phone, budget, description, testimonial}, ctx, info) {
        const customer = await ctx.db.mutation.createCustomer({
            data: {
              firstName, 
              lastName, 
              email,
              phone,
              budget, 
              description,
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
     },
    //  async updateTestimonial(parent, args, ctx, info) {
    //    const testimonial = await ctx.db.mutation.updateTestimonial({
    //      data: {
    //        ...args
    //      }
    //    }, info);
    //  },
     async requestContact(parent, { firstName, lastName, email, phone, streetAddress, city, state, zipCode, chkCustom, chkRemodel, chkAddition, budget, description }, ctx, info) {
      const customer = await ctx.db.mutation.createCustomer({
        data: {
          firstName, 
          lastName, 
          email,
          phone,
          budget, 
          description,
        }
      }, info);

      const mailResOwner = await transport.sendMail({
        from: process.env.FROM_EMAIL,
        to: process.env.OWNER_EMAIL,
        subject: "NEW WORK REQUEST FROM: " + firstName + " " + lastName,
        html: contactNewWorkEmail({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode,
          chkCustom: chkCustom,
          chkRemodel: chkRemodel,
          addition: chkAddition,
          budget: budget,
          description: description,
        }),
      });
      
      const mailResDev = await transport.sendMail({
        from: process.env.FROM_EMAIL,
        to: process.env.DEV_EMAIL,
        subject: "NEW WORK REQUEST FROM: " + firstName + " " + lastName,
        html: contactNewWorkEmail({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode,
          chkCustom: chkCustom,
          chkRemodel: chkRemodel,
          addition: chkAddition,
          budget: budget,
          description: description,
        }),
      });

      const mailResCustomer = await transport.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: "Third Day Builders Work Request",
        html: contactResponseEmail({
          chkCustom: chkCustom,
          chkRemodel: chkRemodel,
          addition: chkAddition,
          budget: budget,
          description: description,
        }),
      });

      return customer;
     },
};

module.exports = Mutation;