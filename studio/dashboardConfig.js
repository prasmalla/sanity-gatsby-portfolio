export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df06e0e564fbdb407983809',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oakjua8c',
                  apiId: '2022b7de-f486-4769-8c7b-4d23cfd8ffab'
                },
                {
                  buildHookId: '5df06e0e57a26debee83dcd3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3o9cqnfo',
                  apiId: 'e3c79706-84bb-416f-a205-7e377716f5a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prasmalla/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3o9cqnfo.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
