class IncidentTypePage {
    selectIncidentTypes(incidentTypes) {
        // Iterate through each incident type and select the corresponding checkbox
        incidentTypes.forEach(incidentType => {
            cy.get(`input[value="${incidentType.value}"]`).check({ force: true });
        });
    }

    // You can add more methods for interacting with this page as needed
}

export default new IncidentTypePage();
