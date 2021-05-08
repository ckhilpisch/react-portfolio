
const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({node , actions}) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        });

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
              node,
              name: "authorId",
              value: slugify(node.frontmatter.author)
            });
        }
    }
    
    if(node.internal.type === 'AuthorsJson'){
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }

}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const templates =  {
        projectDetails: path.resolve('src/template/project-details.js'),
    }

    return graphql(`
        {
            allProjectJson {
                edges {
                    node {
                        id
                    }
                }
            }
            
        }
    `).then( res => {
        if (res.errors) return Promise.reject(res.errors)
        const project = res.data.allProjectJson.edges

         // Create Project Page
         project.forEach(({ node }) => {
            createPage({
                // path: node.fields.slug,
                path: `project/${slugify(node.id)}`,
                component: templates.projectDetails,
                context: {
                    id: node.id
                }
            })
        })

    })

}






