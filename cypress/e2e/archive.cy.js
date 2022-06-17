import { archiveOrg } from "../fixtures/page_objects/archiveOrg";
import{scrumLogin} from "../fixtures/page_objects/scrumLogin";
import{organization} from "../fixtures/page_objects/organization"
describe("Archive organization test", () => {
    let orgId;
    beforeEach("visit my organizations page", () => {
      cy.visit("/login");
      login.login("ninasamsung2001@gmail.com", "test123456");
      cy.wait(3000);
      cy.visit("/my-organizations");
      cy.url().should("include", "/my-organizations");
    });
});