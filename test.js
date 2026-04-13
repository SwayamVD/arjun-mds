/**
 * Selenium WebDriver — Basic Automated Tests
 * Arjun Motor Driving School Portfolio
 *
 * Prerequisites:
 *   1. npm install selenium-webdriver (already done)
 *   2. Chrome + ChromeDriver installed (chromedriver auto-managed by selenium 4.x)
 *   3. Run dev server: npm run dev
 *   4. Run tests: node test.js
 *
 * Target: http://localhost:5173
 */

import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

const BASE_URL = "http://localhost:5173";
const TIMEOUT = 10000;

// ─── Helpers ────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✅ PASS — ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL — ${testName}`);
    failed++;
  }
}

async function scrollToSection(driver, id) {
  await driver.executeScript(
    `document.getElementById('${id}')?.scrollIntoView({ behavior: 'instant' })`
  );
  await driver.sleep(400);
}

// ─── Test Suites ─────────────────────────────────────────────────────────────

async function testPageLoad(driver) {
  console.log("\n📄 Page Load");
  await driver.get(BASE_URL);
  await driver.wait(until.titleContains(""), TIMEOUT);

  const title = await driver.getTitle();
  assert(title.length > 0, "Page has a title");

  const body = await driver.findElement(By.css("body"));
  assert(body !== null, "Body element exists");
}

async function testNavigation(driver) {
  console.log("\n🧭 Navigation");

  const navbar = await driver.findElement(By.css("nav.navbar"));
  assert(navbar !== null, "Navbar is present");

  const logo = await driver.findElement(By.css(".navbar-brand img"));
  const logoSrc = await logo.getAttribute("src");
  assert(logoSrc.includes("arjun-mds-transparent.png"), "Logo image loads");

  // Nav links exist
  const navLinks = await driver.findElements(By.css(".navbar-nav .nav-link"));
  assert(navLinks.length >= 4, `At least 4 nav links found (got ${navLinks.length})`);

  // Check nav link hrefs
  const hrefs = await Promise.all(navLinks.map((l) => l.getAttribute("href")));
  assert(hrefs.some((h) => h && h.includes("#about")), "About nav link exists");
  assert(hrefs.some((h) => h && h.includes("#services")), "Services nav link exists");
  assert(hrefs.some((h) => h && h.includes("#contact")), "Contact nav link exists");
  assert(hrefs.some((h) => h && h.includes("#testimonials")), "Testimonials nav link exists");
}

async function testHeroSection(driver) {
  console.log("\n🏠 Home / Hero Section");

  const homeSection = await driver.findElement(By.id("home"));
  assert(homeSection !== null, "#home section exists");

  const tagline = await driver.findElement(By.css("#home h1.tagline"));
  const taglineText = await tagline.getText();
  assert(taglineText.length > 0, "Tagline text is visible");

  // CTA buttons
  const ctaButtons = await driver.findElements(By.css(".hero-buttons a"));
  assert(ctaButtons.length >= 2, "At least 2 CTA buttons in hero");

  const btnHrefs = await Promise.all(ctaButtons.map((b) => b.getAttribute("href")));
  assert(btnHrefs.some((h) => h && h.includes("#services")), "Services CTA button exists");
  assert(btnHrefs.some((h) => h && h.includes("#contact")), "Contact CTA button exists");
}

async function testAboutSection(driver) {
  console.log("\n👤 About Section");

  await scrollToSection(driver, "about");
  const about = await driver.findElement(By.id("about"));
  assert(about !== null, "#about section exists");

  const isDisplayed = await about.isDisplayed();
  assert(isDisplayed, "#about section is visible");
}

async function testTestimonialsSection(driver) {
  console.log("\n⭐ Testimonials Section");

  await scrollToSection(driver, "testimonials");
  const section = await driver.findElement(By.id("testimonials"));
  assert(section !== null, "#testimonials section exists");

  const isDisplayed = await section.isDisplayed();
  assert(isDisplayed, "#testimonials section is visible");
}

async function testServicesSection(driver) {
  console.log("\n🚗 Services Section");

  await scrollToSection(driver, "services");
  const section = await driver.findElement(By.id("services"));
  assert(section !== null, "#services section exists");

  const isDisplayed = await section.isDisplayed();
  assert(isDisplayed, "#services section is visible");
}

async function testGallerySection(driver) {
  console.log("\n🖼️  Gallery Section");

  await scrollToSection(driver, "gallery");
  const section = await driver.findElement(By.id("gallery"));
  assert(section !== null, "#gallery section exists");

  const images = await driver.findElements(By.css("#gallery img"));
  assert(images.length > 0, `Gallery has images (found ${images.length})`);
}

async function testContactSection(driver) {
  console.log("\n📞 Contact Section");

  await scrollToSection(driver, "contact");
  const section = await driver.findElement(By.id("contact"));
  assert(section !== null, "#contact section exists");

  // Phone number visible
  const contactValues = await driver.findElements(By.css(".contact-value"));
  const texts = await Promise.all(contactValues.map((el) => el.getText()));
  assert(texts.some((t) => t.includes("9850263331")), "Phone number is displayed");

  // Google Maps iframe
  const iframe = await driver.findElement(By.css("#contact iframe"));
  assert(iframe !== null, "Google Maps iframe is present");

  // Contact form modal trigger
  const contactFormBtn = await driver.findElement(By.css(".contactbadge.contactform"));
  assert(contactFormBtn !== null, "Contact form button exists");
}

async function testContactFormModal(driver) {
  console.log("\n📝 Contact Form Modal");

  await scrollToSection(driver, "contact");

  const formBtn = await driver.findElement(By.css(".contactbadge.contactform"));
  await formBtn.click();
  await driver.sleep(500);

  const modal = await driver.findElement(By.css(".modal.show"));
  assert(modal !== null, "Modal opens on click");

  const nameInput = await driver.findElement(By.css("input[name='name']"));
  const emailInput = await driver.findElement(By.css("input[name='email']"));
  const messageInput = await driver.findElement(By.css("textarea[name='message']"));
  assert(nameInput !== null, "Name input exists in modal");
  assert(emailInput !== null, "Email input exists in modal");
  assert(messageInput !== null, "Message textarea exists in modal");

  // Fill form
  await nameInput.sendKeys("Test User");
  await emailInput.sendKeys("test@example.com");
  await messageInput.sendKeys("This is a test message.");

  const nameVal = await nameInput.getAttribute("value");
  assert(nameVal === "Test User", "Name input accepts text");

  // Close modal
  const closeBtn = await driver.findElement(By.css(".btn-close"));
  await closeBtn.click();
  await driver.sleep(300);

  const modals = await driver.findElements(By.css(".modal.show"));
  assert(modals.length === 0, "Modal closes on X button");
}

async function testLanguageToggle(driver) {
  console.log("\n🌐 Language Toggle");

  await driver.executeScript("window.scrollTo(0, 0)");
  await driver.sleep(300);

  // Get initial nav link text (English)
  const navLinks = await driver.findElements(By.css(".navbar-nav .nav-link"));
  const initialTexts = await Promise.all(navLinks.map((l) => l.getText()));
  assert(initialTexts.some((t) => t === "About Me"), "Default language is English");

  // Click language toggle
  const langBtn = await driver.findElement(By.css("button.togglebtn"));
  await langBtn.click();
  await driver.sleep(500);

  const newNavLinks = await driver.findElements(By.css(".navbar-nav .nav-link"));
  const newTexts = await Promise.all(newNavLinks.map((l) => l.getText()));
  assert(newTexts.some((t) => t === "माझ्याबद्दल"), "Language switches to Marathi");

  // Toggle back to English
  await langBtn.click();
  await driver.sleep(500);

  const resetLinks = await driver.findElements(By.css(".navbar-nav .nav-link"));
  const resetTexts = await Promise.all(resetLinks.map((l) => l.getText()));
  assert(resetTexts.some((t) => t === "About Me"), "Language toggles back to English");
}

async function testFooter(driver) {
  console.log("\n🦶 Footer");

  await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  await driver.sleep(400);

  const footer = await driver.findElement(By.css("footer.footer"));
  assert(footer !== null, "Footer is present");

  const footerLinks = await driver.findElements(By.css(".footer-links a"));
  assert(footerLinks.length >= 4, `Footer has at least 4 quick links (got ${footerLinks.length})`);

  const copyright = await driver.findElement(By.css(".footer-bottom span"));
  const copyrightText = await copyright.getText();
  assert(copyrightText.includes("Arjun MDS"), "Copyright text is present");
}

async function testResponsiveMobileView(driver) {
  console.log("\n📱 Mobile Viewport");

  // Set mobile viewport
  await driver.manage().window().setRect({ width: 390, height: 844 });
  await driver.get(BASE_URL);
  await driver.sleep(500);

  const toggler = await driver.findElement(By.css(".navbar-toggler"));
  const isDisplayed = await toggler.isDisplayed();
  assert(isDisplayed, "Hamburger menu toggler visible on mobile");

  // Open mobile menu
  await toggler.click();
  await driver.sleep(400);

  const navCollapse = await driver.findElement(By.id("navbarNav"));
  const collapseClass = await navCollapse.getAttribute("class");
  assert(collapseClass.includes("show"), "Mobile nav menu opens on toggle");

  // Restore desktop size
  await driver.manage().window().setRect({ width: 1280, height: 800 });
}

// ─── Runner ──────────────────────────────────────────────────────────────────

(async function run() {
  const options = new chrome.Options();
  // options.addArguments("--headless=new"); // uncomment to run headless

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  console.log("🚀 Starting Selenium tests for Arjun MDS Portfolio");
  console.log(`   Target: ${BASE_URL}\n`);

  try {
    await driver.manage().window().setRect({ width: 1280, height: 800 });

    await testPageLoad(driver);
    await testNavigation(driver);
    await testHeroSection(driver);
    await testAboutSection(driver);
    await testTestimonialsSection(driver);
    await testServicesSection(driver);
    await testGallerySection(driver);
    await testContactSection(driver);
    await testContactFormModal(driver);
    await testLanguageToggle(driver);
    await testFooter(driver);
    await testResponsiveMobileView(driver);
  } catch (err) {
    console.error("\n💥 Unexpected error:", err.message);
    failed++;
  } finally {
    await driver.quit();
    console.log(`\n─────────────────────────────────`);
    console.log(`Results: ${passed} passed, ${failed} failed`);
    console.log(`─────────────────────────────────`);
    process.exit(failed > 0 ? 1 : 0);
  }
})();
