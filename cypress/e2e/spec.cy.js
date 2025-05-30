import { AppointmentPage } from "../ObjectPage.js/AppointmentPage";
import { HomePage } from "../ObjectPage.js/HomePage";
import { HistoryPage } from "../ObjectPage.js/HistoryPage";
import { LoginPage } from "../ObjectPage.js/LoginPage";
import { SummaryPage } from "../ObjectPage.js/SummaryPage";

describe('MD 2 tests', () => {
    beforeEach(() => {
      HomePage.visit();
    });

  it('Make an Appointment', () => {
    //Click make an appointment button
    HomePage.makeAppointmentButton.click();
    //Login into demo account
    LoginPage.loginField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();
    //Make an appointment
    //Facility - Seoul CURA Healthcare Center
    AppointmentPage.facilityCombo.select("Seoul CURA Healthcare Center");
    //Facility - Seoul CURA Healthcare Center
    AppointmentPage.readmissionCheck.click();
    //Select - Medicaid
    AppointmentPage.programChoice.contains("Medicaid").click();
    //Set Date value by using the widget - 30
    AppointmentPage.openVisitDate.click();
    AppointmentPage.chooseDateForVisit.contains("30").click();
    AppointmentPage.clikcSomwhere.contains("Make Appointment").click(); //date widget covers comment filed so gotta click somwhere
    //Set comment - CURA Healthcare Service
    AppointmentPage.commentField.click().type("CURA Healthcare Service");
    //Click - Book Appointment
    AppointmentPage.bookAppointmentButton.click();
    //Validate stuff
    SummaryPage.checkFacility.should("contain.text", "Seoul CURA Healthcare Center");
    SummaryPage.checkReadmission.should("contain.text", "Yes");
    SummaryPage.checkProgram.should("contain.text", "Medicaid");
    SummaryPage.checkDate.should("contain.text", "30");
    SummaryPage.checkComment.should("contain.text", "CURA Healthcare Service");
  })

  it.only("Appointment history empty", () => {
    //Click make an appointment button
    HomePage.makeAppointmentButton.click();
    //Login into demo account
    LoginPage.loginField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();
    //clikc menu thing
    AppointmentPage.menuButton.click();
    //Check if the sidebar is present
    AppointmentPage.sidebar.should("has.class", "active");
    //Click history
    AppointmentPage.historyButton.click();
    //Validate that there is no history
    HistoryPage.checkAppointment.should("contain.text", "No appointment.");
  })
})