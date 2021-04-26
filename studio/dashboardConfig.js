export default {
  widgets: [
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
                  buildHookId: '6086d5ad1511a2124b39aa13',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-04-2021-studio',
                  apiId: '4c791e25-18cd-463d-94d2-e42a6cac6273'
                },
                {
                  buildHookId: '6086d5adb3316c0dca19789b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-04-2021',
                  apiId: 'c0d7495c-4566-4392-aab2-f540ed8a8eb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-kitchen-sink-04-2021',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-04-2021.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
