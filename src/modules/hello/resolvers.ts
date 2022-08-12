import { ResolverMap } from "../../types/graphql-utils";

export const resolvers: ResolverMap = {
    Query: {
        greeting: async (parent, args, context, info) => {
            return "Greetings from GraphQL!"
        }
    }
}