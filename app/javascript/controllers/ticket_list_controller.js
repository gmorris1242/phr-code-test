import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["extra", "toggleButton"]

  toggle() {
    const isHidden = this.extraTarget.classList.contains("hidden")

    if (isHidden) {
      this.extraTarget.classList.remove("hidden")
      this.toggleButtonTarget.textContent = "Show Less"
    } else {
      this.extraTarget.classList.add("hidden")
      this.toggleButtonTarget.textContent = "Show More"
    }
  }
}
