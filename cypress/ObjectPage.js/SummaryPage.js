import { BasePage } from "./BasePage";

export class SummaryPage extends BasePage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/appointment.php#summary";
    }

    static get checkFacility() {
        return cy.get("#facility");
    }
     
    static get checkReadmission() {
        return cy.get("#hospital_readmission");
    }

    static get checkProgram() {
        return cy.get("#program");
    }

    static get checkDate() {
        return cy.get("#visit_date");
    }

    static get checkComment() {
        return cy.get("#comment");
    }
}