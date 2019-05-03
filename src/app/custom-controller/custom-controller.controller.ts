import { Controller, GraphQLControllerOptions, Query, Type, GraphQLObjectType, GraphQLString } from '@gapi/core';

export const CustomControllerType = new GraphQLObjectType({
    name: 'CustomControllerType',
    fields: {
        init: {
            type: GraphQLString
        }
    }
});

@Controller<GraphQLControllerOptions>({
    guards: [],
    type: []
})
export class CustomControllerController {

    @Type(CustomControllerType)
    @Query()
    initQuery() {
        return {};
    }
}
