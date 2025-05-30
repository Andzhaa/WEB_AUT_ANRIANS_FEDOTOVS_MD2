import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/profile.php#login";
    }

    static get loginField() {
        return cy.get("input[name='username']");
    }

    static get passwordField() {
        return cy.get("input[name='password']");
    }

    static get loginButton() {
        return cy.get("#btn-login");
    }
}