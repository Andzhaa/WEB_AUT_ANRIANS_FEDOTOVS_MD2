import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com";
  }

  static get makeAppointmentButton() {
    return cy.get("a").contains("Make Appointment");
  }
}