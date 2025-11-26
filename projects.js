// Projects data with categories
const projects = {
    discoveru: {
        title: "DiscoverU",
        category: "fullstack",
        type: "Collaborative Project — Thesis",
        year: "2025",
        website: "https://student-gqoc0f7zw-discoveru.vercel.app",
        github: "https://github.com/charlysss-l/Psyche",
        tools: "MongoDB, Express.js, React, Typescript, Node.js, SCSS, Python, JWT Authentication, Figma, Vercel",
        desc: "Connect students through online and physical tests with automated checking using Computer Vision.",
        images: ["images/discover1.png", "images/discover2.png","images/discover3.png","images/discover4.png","images/discover5.png","images/discover6.png","images/discover7.png"]
    },
    lpReservation: {
        title: "Launchpad Reservation System",
        category: "fullstack",
        type: "Business Project",
        year: "2024",
        website: "",
        github: "https://github.com/charlysss-l/lp-reservation",
        tools: "MongoDB, Express.js, Node.js, React, CSS, Figma, Vercel",
        desc: "Reservation system for Launchpad Alabang, enabling client booking and reservation management.",
        images: ["images/lp-reservation.png"]
    },
    lpInventory: {
        title: "Launchpad Inventory and Borrowing System",
        category: "fullstack",
        type: "Business Project",
        year: "2024",
        website: "",
        github: "https://github.com/charlysss-l/inventory-launchpad",
        tools: "MongoDB, Express.js, Node.js, React, CSS, Figma, Vercel",
        desc: "Inventory and borrowing management system.",
        images: ["images/lp-inventory.png"]
    },
    yanas: {
        title: "Yana’s Tindahan",
        category: "fullstack",
        type: "Personal Project",
        year: "2024",
        github: "https://github.com/charlysss-l/YanaTindahan",
        tools: "MySQL, Express.js, React, Node.js, CSS",
        desc: "Custom POS system to manage inventory and sales for a local store.",
        images: ["images/yanaTindahan.png"]
    },
    attheory: {
        title: "A&T Theory",
        category: "frontend",
        type: "Freelance",
        year: "2025",
        website: "https://charlysss-l.github.io/A-T-Theory/",
        github: "https://github.com/charlysss-l/A-T-Theory",
        tools: "JavaScript, HTML, CSS",
        desc: "Landing page about psychology theories for students.",
        images: ["images/aT1.png", "images/aT2.png", "images/aT3.png", "images/aT4.png", "images/aT5.png", "images/aT6.png", "images/aT7.png"]
    },
    naildit: {
        title: "Nail’d It!",
        category: "frontend",
        type: "Personal Project",
        year: "2025",
        github:"https://github.com/charlysss-l/naild-It",
        website: "https://charlysss-l.github.io/naild-It/",
        tools: "HTML, CSS",
        desc: "Landing page for a nail services business.",
        images: ["images/naildIt1.png", "images/naildIt2.png", "images/naildIt3.png", "images/naildIt4.png", "images/naildIt5.png"]
    },
    snuggle: {
        title: "Snuggle Buddies",
        category: "frontend",
        type: "Personal Project",
        year: "2025",
        github: "https://github.com/charlysss-l/snuggle-buddies",
        website: "https://charlysss-l.github.io/snuggle-buddies/",
        tools: "JavaScript, HTML, CSS",
        desc: "Landing page for a stuffed toy brand.",
        images: ["images/snuggle1.png", "images/snuggle2.png", "images/snuggle3.png", "images/snuggle4.png", "images/snuggle5.png", "images/snuggle6.png"]
    },
    photobooth: {
        title: "Photobooth",
        category: "frontend",
        type: "Personal Project",
        year: "2025",
        github: "https://github.com/charlysss-l/photobooth",
        website: "https://charlysss-l.github.io/photobooth/",
        tools: "JavaScript, HTML, CSS",
        desc: "Digital photobooth with printable photo strips.",
        images: ["images/pt1.png", "images/pt2.png", "images/pt3.png"]
    },
    webservices: {
        title: "Web Services",
        category: "frontend",
        type: "Personal Project",
        year: "2025",
        github: "https://github.com/charlysss-l/webServices",
        website: "https://charlysss-l.github.io/webServices/",
        tools: "HTML, CSS",
        desc: "Landing page for freelance web development services.",
        images: ["images/web1.png", "images/web2.png", "images/web3.png", "images/web4.png", "images/web5.png"]
    },
    reflair: {
        title: "ReFlair Thrift Store",
        category: "frontend",
        type: "Collaborative Project",
        year: "2023",
        github: "https://github.com/charlysss-l/reflair_thrift_store",
        website: "https://reflair-thrift-store.vercel.app/",
        tools: "React, TypeScript, SCSS, Figma, Vercel",
        desc: "E-commerce platform for a thrift store focusing on UI/UX.",
        images: ["images/reflair1.png", "images/reflair2.png", "images/reflair3.png", "images/reflair4.png", "images/reflair5.png"]
    },
    drnk: {
        title: "DRNK",
        category: "frontend",
        type: "Personal Project",
        year: "2023",
        github:"http://github.com/charlysss-l/drnk",
        website: "https://drnk.vercel.app/",
        tools: "React, Typescript, SCSS, Adobe Illustrator, Canva, Vercel",
        desc: "Modern landing page for alcoholic beverage branding.",
        images: ["images/drnk1.png", "images/drnk2.png", "images/drnk3.png", "images/drnk4.png", "images/drnk5.png", "images/drnk6.png", "images/drnk7.png", "images/drnk8.png", "images/drnk9.png"]
    },
    jpg:{
         title: "Jean Paul Gaultier",
        category: "wordpress",
        type: "Personal Project",
        year: "2025",
        github:"",
        website: "",
        tools: "WordPress",
        desc: "Modern landing page for Jean Paul Gaultier Le Male Elixir.",
        images: ["images/jp1.png", "images/jp2.png", "images/jp3.png", "images/jp4.png", "images/jp5.png", "images/jp6.png", "images/jp7.png", "images/jp8.png", "images/jp9.png", "images/jp10.png"]
    },
    sales:{
         title: "Sales Inventory",
        category: "wordpress",
        type: "Personal Project",
        year: "2025",
        github:"",
        website: "",
        tools: "WordPress",
        desc: "Inventory management system for sales tracking.",
        images: ["images/sales1.png", "images/sales2.png", "images/sales3.png", "images/sales4.png", "images/sales5.png", "images/sales6.png", "images/sales7.png", "images/sales8.png", "images/sales9.png", "images/sales10.png"]
    }
};

// Populate sidebar but keep lists hidden initially
function populateSidebar() {
    const categories = ["frontend", "fullstack", "wordpress"];
    categories.forEach(cat => {
        const listEl = document.getElementById(`${cat}-list`);
        for (let key in projects) {
            if (projects[key].category === cat) {
                const li = document.createElement("li");
                li.textContent = projects[key].title;
                li.onclick = () => showProject(key);
                listEl.appendChild(li);
            }
        }
    });
}

// Toggle category list visibility
function toggleCategory(cat) {
    const listEl = document.getElementById(`${cat}-list`);
    listEl.style.display = listEl.style.display === "block" ? "none" : "block";
}

// Show project details
function showProject(key) {
    const p = projects[key];
    const box = document.getElementById("projectDisplay");

    box.innerHTML = `
        <h1>${p.title}</h1>
        <p><strong>[Type]</strong> ${p.type}</p>
        <p><strong>[Year]</strong> ${p.year}</p>
        <p><strong>[Tools]</strong> ${p.tools}</p>
        <p><strong>[Description]</strong> ${p.desc}</p>
        ${p.website ? `<p><strong>[Website]</strong> <a href="${p.website}" target="_blank">${p.website}</a></p>` : ""}
        ${p.github ? `<p><strong>[Github]</strong> <a href="${p.github}" target="_blank">${p.github}</a></p>` : ""}
        <div class="project-images">
         <p class="click-note">Click an image to enlarge</p>
            ${p.images && p.images.length > 0 
                ? p.images.map(img => `<img src="${img}" alt="${p.title} image" onclick="openLightbox('${img}')">`).join("") 
                : "<p>No images available.</p>"
            }
        </div>
    `;
}

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Initialize sidebar
populateSidebar();
