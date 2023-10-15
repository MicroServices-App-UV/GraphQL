import {tasks} from "./sample.js"
export const resolvers = {
    Query:{
        hello: () => {return "Hello World with GraphQL";},
        greet: (root, {name})=>{return `Hello ${name}, hope you're doing well`;},
        tasks: () =>{ return tasks;}
    },
    Mutation:{
        createTask (_, {input }){
            input._id = tasks.length;
            tasks.push(input)
            return input;
        }
    }
}