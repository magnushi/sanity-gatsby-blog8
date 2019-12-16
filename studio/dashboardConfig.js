export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5df7fadce8b876ef65b60f83',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog8-studio',
                  apiId: 'f3dd8333-678e-40dc-8ba3-a57a9ed33024'
                },
                {
                  buildHookId: '5df7fadc94dea1a296996c53',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog8',
                  apiId: '0b676208-2638-4df0-95c1-3dbbfc68b35c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog8',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
