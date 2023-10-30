/// <reference types="Cypress" />
describe('Payment Cookie', () => {
it('should contain singular cookie', () => {
  cy.visit('https://shop.platform.dev.carry1st.com/en/ZA');
  
  cy.request({
    method: 'POST',
    url: 'https://shop.platform.dev.carry1st.com/api/shop/cart', 
    headers: {
        "Content-Type": "application/vnd.carry1st.cart.cart+json",
    },
    body: {
        "countryCode": "ZA",
        "ipAddress": "95.47.149.133",
        "price": null,
        "productBundleId": 1,
        "quantity": 2,
        "recipientIdentifier": "test",
        "info": {
            "identifier": "1+test"
    }
  }
}).then( res => { expect(res.status).to.eq(200)});

    cy.visit('https://shop.platform.dev.carry1st.com/en/ZA/cart');
    cy.contains('PROCEED TO PAY').click();

    cy.getCookie('shop_analytics_ids').its('value')
    .should('not.match', new RegExp(`${'singularDeviceId'}.*${'null'}.*${'singularSessionId'}.*${'null'}.*${'tiktokClickId'}`))
    
});
})