class ArchiveOrg {
    get organization() {
        return cy.get(".vs-c-my-organization__header").first();
      }
    
      get yesBtn() {
        return cy.get(".vs-u-text--right > button").last();
      }
    }
    
    export const archiveOrg = new ArchiveOrg();
    
    
    
    
    
    
    
    
    
    
    
    
    
}