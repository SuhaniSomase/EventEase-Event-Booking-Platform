
/* ========================================
   EventEase — Event Booking Application
   ======================================== */

"use strict";

const STORAGE_KEYS = {
    bookings: "eventEaseBookings",
    theme: "eventEaseTheme",
    newsletter: "eventEaseNewsletter"
};

const events = [
    {
        id: 1,
        title: "Neon Nights Music Festival",
        category: "Music",
        date: "2027-01-16",
        time: "6:00 PM",
        venue: "Phoenix Arena, Pune",
        price: 799,
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
        description: "An electrifying night of live music, lights and unforgettable energy."
    },
    {
        id: 2,
        title: "FutureTech Innovation Summit",
        category: "Technology",
        date: "2027-01-23",
        time: "10:00 AM",
        venue: "Innovation Hub, Pune",
        price: 499,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
        description: "Explore emerging technologies, startups and ideas shaping tomorrow."
    },
    {
        id: 3,
        title: "Creative Canvas Workshop",
        category: "Workshop",
        date: "2027-02-06",
        time: "11:00 AM",
        venue: "Art House Studio, Pune",
        price: 349,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
        description: "Unleash your creativity with a fun, beginner-friendly painting session."
    },
    {
        id: 4,
        title: "Sunset Rooftop Sessions",
        category: "Music",
        date: "2027-02-13",
        time: "5:30 PM",
        venue: "Skyline Terrace, Pune",
        price: 599,
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
        description: "Enjoy live DJ sets, great music and sunset views with friends."
    },
    {
        id: 5,
        title: "AI & Future Skills Bootcamp",
        category: "Technology",
        date: "2027-02-20",
        time: "9:30 AM",
        venue: "Tech Park Auditorium, Pune",
        price: 899,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        description: "Discover practical AI concepts and the skills needed for tomorrow."
    },
    {
        id: 6,
        title: "Mindful Morning Retreat",
        category: "Lifestyle",
        date: "2027-03-06",
        time: "7:00 AM",
        venue: "Green Valley Gardens, Pune",
        price: 299,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
        description: "Recharge with guided meditation, gentle movement and mindful living."
    },
    {
        id: 7,
        title: "Acoustic Unplugged Evening",
        category: "Music",
        date: "2027-03-13",
        time: "6:30 PM",
        venue: "The Music Room, Pune",
        price: 449,
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
        description: "An intimate evening of acoustic performances and soulful melodies."
    },
    {
        id: 8,
        title: "Build Your First Website",
        category: "Workshop",
        date: "2027-03-20",
        time: "10:00 AM",
        venue: "Digital Learning Lab, Pune",
        price: 399,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        description: "Learn the basics of web design and create your first web page."
    },
    {
        id: 9,
        title: "The Great Food Carnival",
        category: "Lifestyle",
        date: "2027-04-03",
        time: "12:00 PM",
        venue: "Riverside Grounds, Pune",
        price: 199,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
        description: "Explore delicious street food, local flavours and food experiences."
    },
    {
        id: 10,
        title: "Startup Founders Meetup",
        category: "Technology",
        date: "2027-04-10",
        time: "2:00 PM",
        venue: "CoCreate Workspace, Pune",
        price: 299,
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
        description: "Meet ambitious founders, exchange ideas and grow your network."
    },
    {
        id: 11,
        title: "Photography Walk",
        category: "Workshop",
        date: "2027-04-17",
        time: "7:00 AM",
        venue: "Shaniwar Wada, Pune",
        price: 249,
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
        description: "Capture everyday beauty and learn practical photography techniques."
    },
    {
        id: 12,
        title: "Spring Wellness Festival",
        category: "Lifestyle",
        date: "2027-04-24",
        time: "8:00 AM",
        venue: "Lakeside Retreat, Pune",
        price: 549,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
        description: "A refreshing day of wellness activities, movement and self-care."
    }
];

/* DOM ELEMENTS */

const eventsGrid = document.getElementById("eventsGrid");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const sortSelect = document.getElementById("sortSelect");
const eventTotal = document.getElementById("eventTotal");
const emptyState = document.getElementById("emptyState");
const resetFilters = document.getElementById("resetFilters");

const bookingModal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const eventIdInput = document.getElementById("eventId");
const selectedEvent = document.getElementById("selectedEvent");
const ticketQuantity = document.getElementById("ticketQuantity");
const bookingTotal = document.getElementById("bookingTotal");
const closeModal = document.getElementById("closeModal");

const bookingsList = document.getElementById("bookingsList");
const emptyBookings = document.getElementById("emptyBookings");
const bookingCount = document.getElementById("bookingCount");
const bookingSummary = document.getElementById("bookingSummary");

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const newsletterForm = document.getElementById("newsletterForm");
const toastElement = document.getElementById("toast");

let activeCategory = "All";
let searchQuery = "";
let selectedEventData = null;
let toastTimeout;

/* SAFE LOCAL STORAGE HELPERS */

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        console.warn("Unable to read saved data:", error);
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Unable to save data:", error);
        showToast("Could not save data. Check browser storage settings.");
        return false;
    }
}

function getBookings() {
    const data = readStorage(STORAGE_KEYS.bookings, []);
    return Array.isArray(data) ? data : [];
}

function formatPrice(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);
    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastElement.classList.remove("show");
    }, 3000);
}

/* EVENT SEARCH, FILTER AND SORT */

function getVisibleEvents() {
    let result = events.filter(event => {
        const matchesCategory =
            activeCategory === "All" || event.category === activeCategory;

        const searchableText = [
            event.title,
            event.category,
            event.venue,
            event.description
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchQuery);

        return matchesCategory && matchesSearch;
    });

    switch (sortSelect.value) {
        case "price-low":
            result.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            result.sort((a, b) => b.price - a.price);
            break;

        case "date":
            result.sort((a, b) => a.date.localeCompare(b.date));
            break;

        default:
            result.sort((a, b) => a.id - b.id);
    }

    return result;
}

function renderEvents() {
    const visibleEvents = getVisibleEvents();

    eventTotal.textContent =
        `${visibleEvents.length} event${visibleEvents.length === 1 ? "" : "s"} to discover`;

    eventsGrid.innerHTML = "";
    emptyState.classList.toggle("hidden", visibleEvents.length !== 0);

    visibleEvents.forEach(event => {
        const card = document.createElement("article");
        card.className = "event-card";

        card.innerHTML = `
            <div class="event-image-wrap">
                <img class="event-image"
                     src="${event.image}"
                     alt="${event.title}"
                     loading="lazy">
                <span class="event-category">${event.category}</span>
            </div>
            <div class="event-card-body">
                <span class="event-date">${formatDate(event.date)} · ${event.time}</span>
                <h3>${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-location">
                    <span aria-hidden="true">⌖</span>
                    <span>${event.venue}</span>
                </div>
                <div class="event-card-bottom">
                    <div class="event-price">
                        ${formatPrice(event.price)}
                        <small>per ticket</small>
                    </div>
                    <button class="btn btn-primary book-event-btn"
                            data-event-id="${event.id}">
                        Book Now ↗
                    </button>
                </div>
            </div>
        `;

        eventsGrid.appendChild(card);
    });
}

categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    categoryFilters.querySelectorAll(".filter-btn").forEach(filter => {
        filter.classList.toggle("active", filter === button);
    });

    renderEvents();
});

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    searchQuery = searchInput.value.trim().toLowerCase();
    renderEvents();
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderEvents();
});

sortSelect.addEventListener("change", renderEvents);

resetFilters.addEventListener("click", () => {
    activeCategory = "All";
    searchQuery = "";
    searchInput.value = "";
    sortSelect.value = "featured";

    categoryFilters.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.category === "All");
    });

    renderEvents();
});

/* BOOKING MODAL */

eventsGrid.addEventListener("click", event => {
    const button = event.target.closest(".book-event-btn");
    if (!button) return;

    openBookingModal(Number(button.dataset.eventId));
});

function openBookingModal(id) {
    selectedEventData = events.find(event => event.id === id);
    if (!selectedEventData) return;

    eventIdInput.value = String(selectedEventData.id);

    selectedEvent.innerHTML = `
        <img src="${selectedEventData.image}" alt="">
        <div>
            <strong>${selectedEventData.title}</strong>
            <span>${formatDate(selectedEventData.date)} · ${selectedEventData.venue}</span>
        </div>
    `;

    ticketQuantity.value = "1";
    updateBookingTotal();

    bookingModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("customerName").focus();
}

function hideBookingModal() {
    bookingModal.classList.add("hidden");
    document.body.style.overflow = "";
    selectedEventData = null;
    bookingForm.reset();
}

closeModal.addEventListener("click", hideBookingModal);

bookingModal.addEventListener("click", event => {
    if (event.target === bookingModal) {
        hideBookingModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !bookingModal.classList.contains("hidden")) {
        hideBookingModal();
    }
});

ticketQuantity.addEventListener("change", updateBookingTotal);

function updateBookingTotal() {
    if (!selectedEventData) return;

    const quantity = Number(ticketQuantity.value);
    bookingTotal.textContent = formatPrice(selectedEventData.price * quantity);
}

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const eventId = Number(eventIdInput.value);
    const eventData = events.find(item => item.id === eventId);

    if (!eventData) {
        showToast("Please select a valid event.");
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const quantity = Number(ticketQuantity.value);

    if (name.length < 2 || !email || !email.includes("@")) {
        showToast("Please enter valid name and email details.");
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
        showToast("Please choose between 1 and 5 tickets.");
        return;
    }

    const bookings = getBookings();

    const booking = {
        bookingId: `EE-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        eventId: eventData.id,
        eventTitle: eventData.title,
        eventDate: eventData.date,
        eventVenue: eventData.venue,
        eventImage: eventData.image,
        customerName: name,
        customerEmail: email,
        quantity,
        total: eventData.price * quantity,
        bookedAt: new Date().toISOString()
    };

    bookings.unshift(booking);

    if (!writeStorage(STORAGE_KEYS.bookings, bookings)) return;

    hideBookingModal();
    renderBookings();
    showToast("Booking confirmed! Your spot is saved.");
    document.getElementById("bookings").scrollIntoView({ behavior: "smooth" });
});

/* MY BOOKINGS AND CANCELLATION */

function renderBookings() {
    const bookings = getBookings();

    bookingCount.textContent = String(bookings.length);
    bookingSummary.textContent =
        `${bookings.length} booking${bookings.length === 1 ? "" : "s"}`;

    emptyBookings.classList.toggle("hidden", bookings.length > 0);
    bookingsList.innerHTML = "";

    bookings.forEach(booking => {
        const card = document.createElement("article");
        card.className = "booking-card";

        const image = document.createElement("img");
        image.src = booking.eventImage || "";
        image.alt = booking.eventTitle || "Booked event";
        image.loading = "lazy";

        const info = document.createElement("div");
        info.className = "booking-info";

        const date = document.createElement("span");
        date.className = "event-date";
        date.textContent = booking.eventDate ? formatDate(booking.eventDate) : "Date unavailable";

        const title = document.createElement("h3");
        title.textContent = booking.eventTitle || "Event";

        const venue = document.createElement("p");
        venue.textContent = `⌖ ${booking.eventVenue || "Venue unavailable"}`;

        const tickets = document.createElement("p");
        tickets.textContent = `Tickets: ${booking.quantity} · ${booking.customerName}`;

        const email = document.createElement("p");
        email.textContent = booking.customerEmail || "";

        const actions = document.createElement("div");
        actions.className = "booking-actions";

        const total = document.createElement("strong");
        total.textContent = formatPrice(Number(booking.total) || 0);

        const cancel = document.createElement("button");
        cancel.type = "button";
        cancel.className = "cancel-btn";
        cancel.textContent = "Cancel Booking";
        cancel.dataset.bookingId = booking.bookingId;

        actions.append(total, cancel);
        info.append(date, title, venue, tickets, email, actions);
        card.append(image, info);
        bookingsList.appendChild(card);
    });
}

bookingsList.addEventListener("click", event => {
    const button = event.target.closest(".cancel-btn");
    if (!button) return;

    const bookingId = button.dataset.bookingId;

    if (!confirm("Are you sure you want to cancel this booking?")) {
        return;
    }

    const updatedBookings = getBookings().filter(
        booking => booking.bookingId !== bookingId
    );

    if (!writeStorage(STORAGE_KEYS.bookings, updatedBookings)) return;

    renderBookings();
    showToast("Booking cancelled successfully.");
});

/* DARK / LIGHT MODE */

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

const savedTheme = readStorage(STORAGE_KEYS.theme, "light");
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode")
        ? "light"
        : "dark";

    applyTheme(nextTheme);
    writeStorage(STORAGE_KEYS.theme, nextTheme);
});

/* MOBILE NAVIGATION */

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }
});

/* NEWSLETTER DEMO */

newsletterForm.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = document.getElementById("newsletterEmail");
    const email = emailInput.value.trim();

    if (!email) {
        showToast("Please enter your email address.");
        return;
    }

    const subscribers = readStorage(STORAGE_KEYS.newsletter, []);
    const safeSubscribers = Array.isArray(subscribers) ? subscribers : [];

    if (safeSubscribers.includes(email.toLowerCase())) {
        showToast("This email is already subscribed.");
        return;
    }

    safeSubscribers.push(email.toLowerCase());

    if (!writeStorage(STORAGE_KEYS.newsletter, safeSubscribers)) return;

    newsletterForm.reset();
    showToast("You're on the list! Thanks for subscribing.");
});

/* INITIALIZE APPLICATION */

document.getElementById("currentYear").textContent =
    String(new Date().getFullYear());

renderEvents();
renderBookings();
