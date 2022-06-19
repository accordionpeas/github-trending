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
    ]
  })
})

Given('The API returns no results', () => {
  cy.intercept('https://api.github.com/search/*', {
    items: []
  })
})

When('I visit the home page', () => {
  cy.visit('/')
})

Then('I see the results rendered on the page', () => {
  cy.findByText('Fake name 1').should('exist')
  cy.findByText('Fake description 1').should('exist')
  cy.findByText('1', { selector: '.star-count' }).should('exist')
  cy.findByText('Fake language 1').should('exist')
})

Then('I see the empty message', () => {
  cy.findByText('Nothing to see here').should('exist')
})
