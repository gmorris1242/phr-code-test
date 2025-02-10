import { Application } from '@hotwired/stimulus'
import TicketListController from "./ticket_list_controller";

const application = Application.start()

application.register("ticket-list", TicketListController);

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
