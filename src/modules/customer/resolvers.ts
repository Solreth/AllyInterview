import { ResolverMap } from "../../types/graphql-utils";
const axios = require("axios");
import fetch from 'node-fetch'; // use node-fetch

export const resolvers: ResolverMap = {
    Query: {
        customers: async () => {
            const url = `https://randomuser.me/api/`;
            const customers = await axios.get(url);
            return customers.data.results
            
        // implment customers resolver here
    }
}
}