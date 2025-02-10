import { Application } from '@hotwired/stimulus'
import TicketController from "./ticket_controller";

const application = Application.start()

application.register("ticket", TicketController);

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
