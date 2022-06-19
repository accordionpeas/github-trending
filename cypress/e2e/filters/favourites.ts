import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('The API returns some results', () => {
  cy.intercept('https://api.github.com/search/*', {
    items: [
      {
        id: 1,
        full_name: 'Fake name 1',
        html_url: 'http://fake-html-url.com',
        description: 'Fake description 1',
        stargazers_count: 1,
        language: 'Fake language 1',
        languages_url: 'http://fake-language-url.com',
      },
      {
        id: 2,
        full_name: 'Fake name 2',
        html_url: 'http://fake-html-url.com',
        description: 'Fake description 2',
        stargazers_count: 2,
        language: 'Fake language 2',
        languages_url: 'http://fake-language-url.com',
      },
      {
        id: 3,
        full_name: 'Fake name 3',
        html_url: 'http://fake-html-url.com',
        description: 'Fake description 3',
        stargazers_count: 3,
        language: 'Fake language 3',
        languages_url: 'http://fake-language-url.com',
      },
    ]
  })
})

When('I visit the home page', () => {
  cy.visit('/')
})

When('I favourite a repo', () => {
  cy.findAllByText('Add to favourites').eq(0).click({ force: true })
})

When('I filter by favourites', () => {
  cy.findByText('Filters').click()
  cy.findByText('Favourites').click()
})

Then('I only see the favourited repos', () => {
  cy.findByText('Fake name 1').should('exist')
  cy.findByText('Fake name 2').should('not.exist')
  cy.findByText('Fake name 3').should('not.exist')
})
