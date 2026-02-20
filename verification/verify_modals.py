from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_modal_lazy_loading(page: Page):
    # 1. Arrange: Go to the app in Full Mode
    print("Navigating to app...")
    page.goto("http://localhost:3000/?mode=full")

    # Wait for the main content to load (FullExperience)
    print("Waiting for FullExperience...")
    expect(page.get_by_text("Cargando experiencia...")).not_to_be_visible(timeout=10000)

    # 2. Act: Scroll to Premium Services and click the first "Saber Más" button (Discovery Session)
    print("Finding Discovery Session button...")

    # The text "Sesión Descubrimiento" is in the card.
    discovery_card = page.locator("div").filter(has_text="Sesión Descubrimiento").first

    # Scroll to it
    discovery_card.scroll_into_view_if_needed()

    # Click the "Saber Más" button within that card or generally the first one
    buttons = page.get_by_role("button", name="Saber Más")
    first_button = buttons.first

    print("Clicking 'Saber Más'...")
    first_button.click()

    # 3. Assert: Check if the modal opens
    # The modal title for Discovery is "Sesión Descubrimiento"
    print("Waiting for modal title...")
    modal_title = page.get_by_role("heading", name="Sesión Descubrimiento").first
    expect(modal_title).to_be_visible(timeout=5000)

    # Check for content from the lazy loaded component (DiscoverySessionPage)
    print("Waiting for lazy loaded content...")
    lazy_content = page.get_by_text("Tu primer paso para desmantelar tus patrones")
    expect(lazy_content).to_be_visible(timeout=5000)

    print("Modal content verified!")

    # Wait for animations to finish
    print("Waiting for animations...")
    time.sleep(2)

    # 4. Screenshot
    print("Taking screenshot...")
    page.screenshot(path="verification/modal_verification_2.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_modal_lazy_loading(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
