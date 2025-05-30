import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/#appointment";
    }

    static get facilityCombo() {
        return cy.get("#combo_facility");
    }

    static get readmissionCheck() {
        return cy.get(".checkbox-inline");
    }

    static get programChoice() {
        return cy.get(".radio-inline");
    }

    static get openVisitDate() {
        return cy.get(".glyphicon-calendar");
    }

    static get chooseDateForVisit() {
        return cy.get(".datepicker-days");
    }

    static get commentField() {
        return cy.get("#txt_comment");
    }

    static get bookAppointmentButton() {
        return cy.get("#btn-book-appointment");
    }

    static get clikcSomwhere() {
        return cy.get("h2");
    }

    static get menuButton() {
        return cy.get("#menu-toggle");
    }

    static get sidebar() {
        return cy.get("#sidebar-wrapper")
    }

    static get historyButton() {
        return cy.get("a").contains("History");
    }
}