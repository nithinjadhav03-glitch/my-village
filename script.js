// Mobile menu

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");
}


// Search services
function searchServices() {

    const searchText =
        document.getElementById("searchBox").value.toLowerCase();

    const cards =
        document.querySelectorAll(".service-card");

    cards.forEach(function(card) {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


// Help button
function showHelp() {

    alert(
        "Welcome to My Village! 🌾\n\n" +
        "Choose what you need help with:\n\n" +
        "🏛️ Government Services\n" +
        "🌱 Agriculture\n" +
        "🏥 Health\n" +
        "🎓 Education\n" +
        "💼 Jobs\n" +
        "📢 Village Notices\n" +
        "📍 Village Directory\n" +
        "🆘 Emergency Help"
    );
}


const villageNotices = [
    {
        title: "⚡ Electricity Update",
        message: "No official electricity notice published yet.",
        date: "Not updated"
    },
    {
        title: "💧 Water Supply",
        message: "No official water supply notice published yet.",
        date: "Not updated"
    },
    {
        title: "🏫 School Notice",
        message: "No official school notice published yet.",
        date: "Not updated"
    }
];

function setLanguage(language) {

    const translations = {

        en: {
            welcome: "WELCOME TO",
            description: "One simple place for village services, information and help.",
            explore: "Explore Services",
            help: "🆘 Need Help?"
        },

        te: {
            welcome: "స్వాగతం",
            description: "గ్రామ సేవలు, సమాచారం మరియు సహాయం కోసం ఒకే సులభమైన ప్రదేశం.",
            explore: "సేవలను చూడండి",
            help: "🆘 సహాయం కావాలా?"
        },

        hi: {
            welcome: "स्वागत है",
            description: "गाँव की सेवाओं, जानकारी और सहायता के लिए एक सरल स्थान।",
            explore: "सेवाएँ देखें",
            help: "🆘 मदद चाहिए?"
        }

    };

    const selected = translations[language];

    document.getElementById("heroWelcome").textContent = selected.welcome;
    document.getElementById("heroDescription").textContent = selected.description;
    document.getElementById("exploreBtn").textContent = selected.explore;
    document.getElementById("helpBtn").textContent = selected.help;
}
