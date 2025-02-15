document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.getElementById("event-list");

    const events = [
        { title: "Siber Güvenlik Eğitimi", date: "📅 5 Nisan 2025 - 14:00", link: "#" },
        { title: "CTF Yarışması", date: "📅 20 Mart 2025 - 18:00", link: "#" },
        { title: "Haftalık Siber Güvenlik Haberleri", date: "📅 Her Cuma", link: "#" }
    ];

    events.forEach(event => {
        let eventCard = `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <a href="${event.link}" class="btn">Detaylar</a>
            </div>`;
        eventContainer.innerHTML += eventCard;
    });
});
