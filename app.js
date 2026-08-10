// Akshay Unnikrishnan Portfolio - App JS
// High-End Technical Systems Engineering Visualization

document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION DICTIONARY ---
    let currentLanguage = 'en';

    const translations = {
        en: {
            "nav-home": "Home",
            "nav-work": "Selected Work",
            "nav-experience": "Experience",
            "nav-systems": "Systems",
            "nav-credentials": "Credentials",
            "nav-connect": "Let's Connect",
            "hero-eyebrow": "SYSTEMS ENGINEERING • AUTOMOTIVE • VEHICLE TECHNOLOGY",
            "hero-category": "AUTOMOTIVE SYSTEMS",
            "hero-headline": "Engineering Systems<br>From Concept<br>to Validation",
            "hero-intro": "I'm Akshay Unnikrishnan, an M.Sc. Commercial Vehicle Technology student focused on automotive systems, digital vehicle functions, simulation, system integration, and validation.",
            "hero-cta-work": "Explore My Work",
            "hero-cta-cv": "View CV",
            "hero-scroll": "SCROLL TO EXPLORE",
            
            "work-eyebrow": "SELECTED WORK",
            "work-headline": "Engineering problems,<br>modelled, simulated<br>and validated.",
            "work-subtext": "A selection of academic engineering projects spanning autonomous vehicles, hybrid-electric systems, simulation, system analysis and mechanical development.",
            "proj1-title": "AUTONOMOUS VEHICLE<br>MOTION PREDICTION",
            "proj1-desc": "Deep-learning-based trajectory prediction for autonomous driving environments.",
            "proj1-stat": "INTERACTION DATA POINTS",
            "toggle-view": "VIEW PROJECT",
            "drawer-tasks-header": "Key Project Tasks & Execution",
            "proj1-bullet1": "Processed and analysed approximately 100,000 interaction data points for training and validation.",
            "proj1-bullet2": "Performed data preprocessing, model evaluation and visualization using Python, NumPy, Pandas and PyTorch.",
            "proj1-bullet3": "Structured evaluation of movement data for assessing driving-environment and prediction models.",
            "drawer-arch-header-1": "System & Model Architecture",
            "drawer-models": "Models:",
            "drawer-pipeline": "Data Pipeline:",

            "proj2-title": "HYBRID ELECTRIC<br>VEHICLE SIMULATION",
            "proj2-desc": "Development of a rule-based energy-management strategy for a hybrid vehicle.",
            "proj2-stat": "FUEL CONSUMPTION REDUCTION",
            "proj2-bullet1": "Modelled drivetrain, energy flows and driving cycles in MATLAB/Simulink.",
            "proj2-bullet2": "Simulated and validated the model using realistic driving and system data.",
            "proj2-bullet3": "Analysed simulation results and documented fuel consumption properties.",
            "drawer-arch-header-2": "Simulation Architecture",
            "drawer-strategy": "Strategy:",
            "drawer-target": "Target:",

            "proj3-title": "ELECTROMECHANICAL<br>1-DOF SIMULATION MODEL",
            "proj3-desc": "Development of an electromechanical simulation model for analysing system behaviour.",
            "proj3-stat": "SYSTEM MODEL",
            "proj3-bullet1": "Defined technical requirements and modelling assumptions.",
            "proj3-bullet2": "Created and executed test cases for technical validation.",
            "proj3-bullet3": "Analysed parameter dependencies and structured technical results.",
            "drawer-arch-header-3": "System & Model Architecture",
            "drawer-modeling": "Modeling:",
            "drawer-validation": "Validation:",

            "proj4-title": "QUAD BIKE / ATV<br>DEVELOPMENT",
            "proj4-desc": "Mechanical development and product development of technical components for a Quad Bike / ATV project.",
            "proj4-stat": "COMPONENTS & ASSEMBLY",
            "proj4-bullet1": "Supported mechanical and product development of technical components.",
            "proj4-bullet2": "Contributed to optimization of components, assemblies and technical solutions.",
            "proj4-bullet3": "Created 3D models, assemblies, and engineering-compliant technical drawings.",
            "proj4-bullet4": "Documented technical results and independently handled structural engineering tasks.",
            "drawer-arch-header-4": "Mechanical & FEA Architecture",
            "drawer-fea": "FEA Environment:",

            "journey-eyebrow": "ENGINEERING JOURNEY",
            "journey-headline": "From mechanical foundations<br>to automotive systems engineering.",
            "j-step1-sub": "TIMELINE 01 • COMPLETED",
            "j-step1-title": "B.Tech Mechanical Engineering",
            "j-step1-inst": "A P J Abdul Kalam Technological University, Kerala, India",
            "j-step1-col1": "Mechanical Foundations",
            "j-skill-design": "Mechanical Design",
            "j-skill-thermo": "Thermodynamics",
            "j-skill-fluid": "Fluid Mechanics",
            "j-skill-mfg": "Manufacturing",
            "j-step1-col2": "System Integration & CAD",
            "j-skill-mechatronics": "Mechatronics",
            "j-skill-cad": "CAD / CAE",
            
            "j-step2-sub": "TIMELINE 02 • IN PROGRESS",
            "j-step2-title": "M.Sc. Commercial Vehicle Technology",
            "j-step2-inst": "RPTU Kaiserslautern, Germany",
            "j-step2-col1": "Vehicle Architecture",
            "j-skill-emobility": "Electromobility",
            "j-skill-dynamics": "Vehicle Dynamics",
            "j-skill-comm": "Vehicle Communication:",
            "j-skill-diag": "Vehicle Diagnostics",
            "j-skill-iso": "System Integration & ISO 26262",
            "j-step2-col2": "Software & Verification",
            "j-skill-sw": "Automotive Software & Systems Eng:",
            "j-skill-integration": "Integration",
            "j-skill-vv": "Verification & Validation",
            
            "jt-1": "MECHANICAL FOUNDATION",
            "jt-2": "VEHICLE TECHNOLOGY",
            "jt-3": "SYSTEMS ENGINEERING",

            "sys-eyebrow": "SYSTEMS & CAPABILITIES",
            "sys-headline": "Engineering Across<br>the Vehicle System",
            "sys-subtext": "From system architecture and vehicle communication to simulation, validation and data-driven modelling.",
            "sys-map-label": "ENGINEERING CAPABILITY MAP",
            "syst-1": "SYSTEMS THINKING",
            "syst-2": "ENGINEERING ANALYSIS",
            "syst-3": "VALIDATION",

            "cred-eyebrow": "CREDENTIALS",
            "cred-headline": "Built on Engineering Foundations",
            "cred-subtext": "Academic training, engineering projects and certifications shaping a systems-focused automotive perspective.",
            "cred-area-edu": "01 — EDUCATION",
            "edu-badge-msc": "CURRENT PROGRAM",
            "edu-badge-btech": "FOUNDATION",
            "edu-deg-msc": "M.Sc. Nutzfahrzeugtechnik (Hon)",
            "edu-loc-msc": "Kaiserslautern, Germany",
            "edu-skills-header-1": "Key Specializations",
            "edu-spec-comm": "Vehicle Communication",
            "edu-spec-sw": "Automotive Software & Systems Engineering",
            "edu-deg-btech": "B.Tech. Maschinenbau (Hon)",
            "edu-loc-btech": "Kerala, India",
            "edu-skills-header-2": "Core Engineering Disciplines",
            "edu-spec-ice": "Internal Combustion Engines",
            "cred-area-cert": "02 — CERTIFICATIONS",
            "credt-1": "ENGINEERING KNOWLEDGE",
            "credt-2": "ENGINEERING PRACTICE",

            "modal-badge": "ZERTIFIKAT",
            "modal-label-provider": "PROVIDER",
            "modal-label-date": "DATE",
            "modal-label-integrity": "CREDENTIAL INTEGRITY",
            "modal-verify-text": "This verification links to the official credential database confirmation for this certification. A PDF transcript or online certificate file can be attached here.",
            "modal-status": "VERIFICATION STATUS: ACTIVE",

            "conn-eyebrow": "LET'S CONNECT",
            "conn-headline": "Building the Next Generation<br>of Automotive Systems.",
            "conn-subtext": "Interested in automotive systems, engineering analysis, simulation, validation and opportunities to contribute to technically challenging projects.",
            "conn-avail-lbl1": "CURRENT AVAILABILITY",
            "conn-avail-val1": "MANDATORY INTERNSHIP<br>GERMANY",
            "conn-avail-lbl2": "AVAILABLE NOW",
            "conn-avail-val2": "MOBILE WITHIN GERMANY",
            "conn-dir-email": "EMAIL",
            "conn-dir-linkedin": "LINKEDIN",
            "conn-dir-phone": "PHONE",
            "conn-dir-loc": "LOCATION",
            "conn-dir-loc-val": "Kaiserslautern, Germany",
            "conn-cta-cv": "DOWNLOAD CV",
            "footer-details": "M.Sc. Commercial Vehicle Technology • Kaiserslautern, Germany",
            "footer-top": "BACK TO TOP",

            // Dynamic systems
            "systems-eng-title": "SYSTEMS ENGINEERING",
            "systems-eng-desc": "Methods and practices used to structure, integrate and validate complex automotive vehicles.",
            "veh-tech-title": "VEHICLE TECHNOLOGY",
            "veh-tech-desc": "Core vehicle architectures and operating systems governing digital functional layers.",
            "veh-comm-title": "VEHICLE COMMUNICATION",
            "veh-comm-desc": "Hardware buses and network interfaces linking distributed control modules.",
            "sim-model-title": "SIMULATION & MODELLING",
            "sim-model-desc": "Model-based approaches for analysing and validating engineering systems.",
            "data-ml-title": "DATA & MACHINE LEARNING",
            "data-ml-desc": "Computational models and algorithms extracting patterns from complex datasets.",
            "eng-tools-title": "ENGINEERING & DESIGN TOOLS",
            "eng-tools-desc": "Standard simulation and configuration systems supporting technical development.",
            "proj-quality-title": "PROJECT & QUALITY MANAGEMENT",
            "proj-quality-desc": "Management frameworks facilitating validation pipelines and stakeholder alignment."
        },
        de: {
            "nav-home": "Startseite",
            "nav-work": "Projekte",
            "nav-experience": "Werdegang",
            "nav-systems": "Kompetenzen",
            "nav-credentials": "Referenzen",
            "nav-connect": "Kontakt",
            "hero-eyebrow": "SYSTEMENGINEERING • AUTOMOTIVE • FAHRZEUGTECHNIK",
            "hero-category": "AUTOMOTIV-SYSTEME",
            "hero-headline": "Systementwicklung<br>Vom Konzept<br>zur Validierung",
            "hero-intro": "Ich bin Akshay Unnikrishnan, M.Sc.-Student der Fachrichtung Commercial Vehicle Technology, fokussiert auf Fahrzeugsysteme, digitale Fahrzeugfunktionen, Simulation, Systemintegration und Validierung.",
            "hero-cta-work": "Projekte ansehen",
            "hero-cta-cv": "Lebenslauf",
            "hero-scroll": "SCROLLEN ZUM ENTDECKEN",
            
            "work-eyebrow": "AUSGEWÄHLTE ARBEITEN",
            "work-headline": "Ingenieuraufgaben,<br>modelliert, simuliert<br>und validiert.",
            "work-subtext": "Eine Auswahl akademischer Ingenieurprojekte in den Bereichen autonome Fahrzeuge, hybrid-elektrische Systeme, Simulation, Systemanalyse und mechanische Entwicklung.",
            "proj1-title": "BEWEGUNGSPROGNOSE FÜR<br>AUTONOME FAHRZEUGE",
            "proj1-desc": "Deep-Learning-basierte Trajektorienvorhersage für autonome Fahrumgebungen.",
            "proj1-stat": "INTERAKTIONSDATENPUNKTE",
            "toggle-view": "PROJEKT ANSEHEN",
            "drawer-tasks-header": "Hauptaufgaben & Durchführung",
            "proj1-bullet1": "Verarbeitung und Analyse von ca. 100.000 Interaktionsdatenpunkten für Training und Validierung.",
            "proj1-bullet2": "Datenvorverarbeitung, Modellbewertung und Visualisierung mit Python, NumPy, Pandas und PyTorch.",
            "proj1-bullet3": "Strukturierte Auswertung von Bewegungsdaten zur Bewertung von Fahrumgebungs- und Prädiktionsmodellen.",
            "drawer-arch-header-1": "System- & Modellarchitektur",
            "drawer-models": "Modelle:",
            "drawer-pipeline": "Daten-Pipeline:",

            "proj2-title": "SIMULATION VON<br>HYBRID-ELEKTROFAHRZEUGEN",
            "proj2-desc": "Entwicklung einer regelbasierten Energiemanagement-Strategie für ein Hybridfahrzeug.",
            "proj2-stat": "KRAFTSTOFFREDUKTION",
            "proj2-bullet1": "Modellierung von Antriebsstrang, Energieflüssen und Fahrzyklen in MATLAB/Simulink.",
            "proj2-bullet2": "Simulation und Validierung des Modells mit realistischen Fahr- und Systemdaten.",
            "proj2-bullet3": "Analyse der Simulationsergebnisse und Dokumentation der Kraftstoffverbrauchskennwerte.",
            "drawer-arch-header-2": "Simulationsarchitektur",
            "drawer-strategy": "Strategie:",
            "drawer-target": "Ziel:",

            "proj3-title": "ELEKTROMECHANISCHES<br>1-DOF SIMULATIONSMODELL",
            "proj3-desc": "Entwicklung eines elektromechanischen Simulationsmodells zur Analyse des Systemverhaltens.",
            "proj3-stat": "SYSTEMMODELL",
            "proj3-bullet1": "Definition technischer Anforderungen und Modellierungsannahmen.",
            "proj3-bullet2": "Erstellung und Durchführung von Testfällen zur technischen Validierung.",
            "proj3-bullet3": "Analyse von Parameterabhängigkeiten und Strukturierung der technischen Ergebnisse.",
            "drawer-arch-header-3": "System- & Modellarchitektur",
            "drawer-modeling": "Modellierung:",
            "drawer-validation": "Validierung:",

            "proj4-title": "QUAD- / ATV-ENTWICKLUNG",
            "proj4-desc": "Mechanische und Produktentwicklung technischer Komponenten für ein Quad- / ATV-Projekt.",
            "proj4-stat": "KOMPONENTEN & BAUGRUPPEN",
            "proj4-bullet1": "Unterstützung der mechanischen Entwicklung und Produktentwicklung technischer Komponenten.",
            "proj4-bullet2": "Mitwirkung bei der Optimierung von Komponenten, Baugruppen und technischen Lösungen.",
            "proj4-bullet3": "Erstellung von 3D-Modellen, Baugruppen und normgerechten technischen Zeichnungen.",
            "proj4-bullet4": "Dokumentation technischer Ergebnisse und selbstständige Bearbeitung konstruktiver Aufgaben.",
            "drawer-arch-header-4": "Konstruktions- & FEA-Architektur",
            "drawer-fea": "FEA-Umgebung:",

            "journey-eyebrow": "WERDEGANG",
            "journey-headline": "Von mechanischen Grundlagen<br>zum Systems-Engineering für Fahrzeuge.",
            "j-step1-sub": "ZEITLEISTE 01 • ABGESCHLOSSEN",
            "j-step1-title": "B.Tech. Maschinenbau",
            "j-step1-inst": "A P J Abdul Kalam Technological University, Kerala, Indien",
            "j-step1-col1": "Maschinenbau-Grundlagen",
            "j-skill-design": "Konstruktion & Entwurf",
            "j-skill-thermo": "Thermodynamik",
            "j-skill-fluid": "Strömungsmechanik",
            "j-skill-mfg": "Fertigungstechnik",
            "j-step1-col2": "Systemintegration & CAD",
            "j-skill-mechatronics": "Mechatronik",
            "j-skill-cad": "CAD / CAE",
            
            "j-step2-sub": "ZEITLEISTE 02 • IN BEARBEITUNG",
            "j-step2-title": "M.Sc. Commercial Vehicle Technology",
            "j-step2-inst": "RPTU Kaiserslautern, Deutschland",
            "j-step2-col1": "Fahrzeugarchitektur",
            "j-skill-emobility": "Elektromobilität",
            "j-skill-dynamics": "Fahrdynamik",
            "j-skill-comm": "Fahrzeugkommunikation:",
            "j-skill-diag": "Fahrzeugdiagnose",
            "j-skill-iso": "Systemintegration & ISO 26262",
            "j-step2-col2": "Software & Verifikation",
            "j-skill-sw": "Automotive Software & Systems Eng:",
            "j-skill-integration": "Integration",
            "j-skill-vv": "Verifikation & Validierung",
            
            "jt-1": "MASCHINENBAU-GRUNDLAGEN",
            "jt-2": "FAHRZEUGTECHNIK",
            "jt-3": "SYSTEMENGINEERING",

            "sys-eyebrow": "SYSTEMKOMPETENZEN",
            "sys-headline": "Entwicklung über das<br>gesamte Fahrzeugsystem",
            "sys-subtext": "Von Systemarchitektur und Fahrzeugkommunikation bis hin zu Simulation, Validierung und datengestützter Modellierung.",
            "sys-map-label": "KOMPETENZKARTE SYSTEMENTWICKLUNG",
            "syst-1": "SYSTEMDENKEN",
            "syst-2": "INGENIEURANALYSE",
            "syst-3": "VALIDIERUNG",

            "cred-eyebrow": "QUALIFIKATIONEN",
            "cred-headline": "Fundiertes Ingenieurwissen",
            "cred-subtext": "Akademische Ausbildung, technische Projekte und Zertifikate für einen systemorientierten Blick auf das Fahrzeug.",
            "cred-area-edu": "01 — AUSBILDUNG",
            "edu-badge-msc": "AKTUELLES STUDIUM",
            "edu-badge-btech": "INGENIEURBGRUNDLAGE",
            "edu-deg-msc": "M.Sc. Nutzfahrzeugtechnik",
            "edu-loc-msc": "Kaiserslautern, Deutschland",
            "edu-skills-header-1": "Spezialisierungen",
            "edu-spec-comm": "Fahrzeugkommunikation",
            "edu-spec-sw": "Automotive Software & Systems Engineering",
            "edu-deg-btech": "B.Tech. Maschinenbau (Hon)",
            "edu-loc-btech": "Kerala, Indien",
            "edu-skills-header-2": "Kernfächer Maschinenbau",
            "edu-spec-ice": "Verbrennungsmotoren",
            "cred-area-cert": "02 — ZERTIFIKATE",
            "credt-1": "INGENIEURWISSEN",
            "credt-2": "INGENIEURPRAXIS",

            "modal-badge": "ZERTIFIKAT",
            "modal-label-provider": "HERAUSGEBER",
            "modal-label-date": "DATUM",
            "modal-label-integrity": "ZERTIFIKATSINTEGRITÄT",
            "modal-verify-text": "Diese Verifizierung bestätigt den offiziellen Status des Zertifikats. Ein PDF-Nachweis oder Online-Zertifikat kann hier verlinkt werden.",
            "modal-status": "VERIFIZIERUNGSSTATUS: AKTIV",

            "conn-eyebrow": "KONTAKT",
            "conn-headline": "Die nächste Generation<br>von Fahrzeugsystemen bauen.",
            "conn-subtext": "Interessiert an Fahrzeugsystemen, technischer Analyse, Simulation, Validierung und Möglichkeiten, zu technisch anspruchsvollen Projekten beizutragen.",
            "conn-avail-lbl1": "AKTUELLE VERFÜGBARKEIT",
            "conn-avail-val1": "PFLICHTPRAKTIKUM<br>DEUTSCHLAND",
            "conn-avail-lbl2": "SOFORT VERFÜGBAR",
            "conn-avail-val2": "DEUTSCHLANDWEIT MOBIL",
            "conn-dir-email": "E-MAIL",
            "conn-dir-linkedin": "LINKEDIN",
            "conn-dir-phone": "TELEFON",
            "conn-dir-loc": "STANDORT",
            "conn-dir-loc-val": "Kaiserslautern, Deutschland",
            "conn-cta-cv": "LEBENSLAUF HERUNTERLADEN",
            "footer-details": "M.Sc. Commercial Vehicle Technology • Kaiserslautern, Deutschland",
            "footer-top": "NACH OBEN",

            // Dynamic systems
            "systems-eng-title": "SYSTEMENGINEERING",
            "systems-eng-desc": "Methoden und Verfahren zur Strukturierung, Integration und Validierung komplexer Nutzfahrzeuge.",
            "veh-tech-title": "FAHRZEUGTECHNIK",
            "veh-tech-desc": "Fahrzeugarchitekturen und Betriebssysteme zur Steuerung digitaler Funktionsebenen.",
            "veh-comm-title": "FAHRZEUGKOMMUNIKATION",
            "veh-comm-desc": "Bussysteme und Netzwerkschnittstellen zur Kopplung verteilter Steuergeräte.",
            "sim-model-title": "SIMULATION & MODELLIERUNG",
            "sim-model-desc": "Modellbasierte Ansätze zur Analyse und Validierung technischer Systeme.",
            "data-ml-title": "DATEN & MACHINE LEARNING",
            "data-ml-desc": "Berechnungsmodelle und Algorithmen zur Extraktion von Mustern aus komplexen Datensätzen.",
            "eng-tools-title": "ENTWICKLUNGS- & KONSTRUKTIONSWERKZEUGE",
            "eng-tools-desc": "Simulations- und Konfigurationssysteme zur Unterstützung der technischen Entwicklung.",
            "proj-quality-title": "PROJEKT- & QUALITÄTSMANAGEMENT",
            "proj-quality-desc": "Management-Frameworks zur Koordination von Validierungspipelines und Stakeholder-Abstimmung."
        }
    };

    // Global Active capability index
    let currentCapabilityIndex = 0;

    // Translate page text helper
    function translatePage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Rebuild dynamic components
        updateDetailPanel(currentCapabilityIndex);
        rebuildMobileAccordion();
    }

    // Bind lang Selector Click Listener
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.querySelectorAll('.lang').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                if (lang !== currentLanguage) {
                    currentLanguage = lang;
                    langSelector.querySelectorAll('.lang').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    translatePage(lang);
                }
            });
        });
    }

    // --- NAVIGATION MENU MOBILE TOGGLE ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            const bars = menuToggle.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(4px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // --- CANVAS HERO BACKGROUND SYSTEMS DIAGRAM ---
    const canvas = document.getElementById('diagramCanvas');
    const container = document.getElementById('diagramWrapper');
    if (canvas && container) {
        const ctx = canvas.getContext('2d');
        let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1;
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                mouse.targetX = (x - rect.width / 2) / 15;
                mouse.targetY = (y - rect.height / 2) / 15;
            } else {
                mouse.targetX = 0;
                mouse.targetY = 0;
            }
        });

        const nodes = [
            { id: 'sensors', label: 'VEHICLE SYSTEMS', sub: 'Digital Vehicle Functions', x: 0.15, y: 0.3, width: 145, height: 45 },
            { id: 'perception', label: 'SYSTEM INTEGRATION', sub: 'CAN / LIN / Ethernet / FlexRay', x: 0.5, y: 0.3, width: 155, height: 45 },
            { id: 'control', label: 'SIMULATION', sub: 'MATLAB / Simulink Models', x: 0.85, y: 0.3, width: 145, height: 45 },
            { id: 'actuation', label: 'VERIFICATION', sub: 'V-Model Methodology', x: 0.85, y: 0.7, width: 145, height: 45 },
            { id: 'plant', label: 'VALIDATION', sub: 'ISO 26262 Standards', x: 0.5, y: 0.7, width: 145, height: 45 },
            { id: 'validation', label: 'TECHNICAL ANALYSIS', sub: 'Python / PyTorch Simulation', x: 0.15, y: 0.7, width: 145, height: 45 }
        ];

        const connections = [
            { from: 'sensors', to: 'perception', pulses: [0.1, 0.6] },
            { from: 'perception', to: 'control', pulses: [0.3, 0.8] },
            { from: 'control', to: 'actuation', pulses: [0.0, 0.5] },
            { from: 'actuation', to: 'plant', pulses: [0.2, 0.7] },
            { from: 'plant', to: 'validation', pulses: [0.4, 0.9] },
            { from: 'validation', to: 'sensors', pulses: [0.15, 0.75] }
        ];

        function getNodeCoords(node, width, height, px, py) {
            return {
                x: node.x * width + px,
                y: node.y * height + py
            };
        }

        function animate() {
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, w, h);

            ctx.strokeStyle = '#F0F0F0';
            ctx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 40) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
            }
            for (let y = 0; y < h; y += 40) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
            }

            ctx.strokeStyle = '#DCDCDC';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(w / 2, 20); ctx.lineTo(w / 2, 40);
            ctx.moveTo(w / 2 - 10, 30); ctx.lineTo(w / 2 + 10, 30);
            ctx.stroke();

            connections.forEach(conn => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                const fromPos = getNodeCoords(fromNode, w, h, mouse.x, mouse.y);
                const toPos = getNodeCoords(toNode, w, h, mouse.x, mouse.y);

                ctx.beginPath();
                ctx.moveTo(fromPos.x, fromPos.y);
                ctx.lineTo(toPos.x, toPos.y);
                ctx.strokeStyle = '#DCDCDC';
                ctx.stroke();

                conn.pulses.forEach((p, idx) => {
                    conn.pulses[idx] += 0.005;
                    if (conn.pulses[idx] > 1) conn.pulses[idx] = 0;
                    const px = fromPos.x + (toPos.x - fromPos.x) * conn.pulses[idx];
                    const py = fromPos.y + (toPos.y - fromPos.y) * conn.pulses[idx];
                    ctx.fillStyle = '#666666';
                    ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
                });
            });

            nodes.forEach(node => {
                const pos = getNodeCoords(node, w, h, mouse.x, mouse.y);
                ctx.fillStyle = '#FFFFFF';
                ctx.strokeStyle = '#111111';
                ctx.lineWidth = 1.5;
                ctx.fillRect(pos.x - node.width / 2, pos.y - node.height / 2, node.width, node.height);
                ctx.strokeRect(pos.x - node.width / 2, pos.y - node.height / 2, node.width, node.height);

                ctx.strokeStyle = '#666666';
                ctx.lineWidth = 0.5;
                const marker = 4;
                ctx.beginPath();
                ctx.moveTo(pos.x - node.width/2 - marker, pos.y - node.height/2);
                ctx.lineTo(pos.x - node.width/2 + marker, pos.y - node.height/2);
                ctx.moveTo(pos.x - node.width/2, pos.y - node.height/2 - marker);
                ctx.lineTo(pos.x - node.width/2, pos.y - node.height/2 + marker);
                ctx.stroke();

                ctx.fillStyle = '#111111';
                ctx.font = 'bold 10px "Inter", sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(node.label, pos.x, pos.y - 7);

                ctx.fillStyle = '#666666';
                ctx.font = '8px "Inter", sans-serif';
                ctx.fillText(node.sub, pos.x, pos.y + 9);
            });

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // --- EXPANDABLE DRAWER MECHANICS ---
    const projectToggles = document.querySelectorAll('.project-toggle');
    projectToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const projectId = toggle.getAttribute('data-project');
            const drawer = document.getElementById(`drawer-${projectId}`);
            if (drawer) {
                const isActive = drawer.classList.contains('active');
                document.querySelectorAll('.project-drawer').forEach(d => d.classList.remove('active'));
                document.querySelectorAll('.project-toggle').forEach(t => {
                    const viewText = translations[currentLanguage]["toggle-view"] || "VIEW PROJECT";
                    t.innerHTML = `${viewText} <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
                });

                if (!isActive) {
                    drawer.classList.add('active');
                    const closeText = currentLanguage === 'de' ? 'DETAILS SCHLIESSEN' : 'CLOSE DETAILS';
                    toggle.innerHTML = `${closeText} <svg class="arrow-icon" style="transform: rotate(-90deg);" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
                    setTimeout(() => {
                        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 300);
                }
            }
        });
    });

    // --- SCROLL REVEAL INTERSECTION OBSERVER ---
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('fade-in-up');
        revealObserver.observe(header);
    });
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in-up');
        revealObserver.observe(card);
    });
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.classList.add('fade-in-up');
        revealObserver.observe(card);
    });
    document.querySelectorAll('.education-card').forEach(card => {
        card.classList.add('fade-in-up');
        revealObserver.observe(card);
    });
    const availBox = document.querySelector('.availability-box');
    if (availBox) {
        availBox.classList.add('fade-in-up');
        revealObserver.observe(availBox);
    }

    // --- CAPABILITIES MAP CONFIG ---
    const capabilitiesData = [
        {
            num: "01",
            id: "systems-eng",
            title: "SYSTEMS ENGINEERING",
            desc: "Methods and practices used to structure, integrate and validate complex automotive vehicles.",
            skills: ["V-Model", "System Integration", "Verification", "Validation", "ISO 26262", "Technical System Analysis"],
            x: 0.5, y: 0.18
        },
        {
            num: "02",
            id: "veh-tech",
            title: "VEHICLE TECHNOLOGY",
            desc: "Core vehicle architectures and operating systems governing digital functional layers.",
            skills: ["Digital Vehicle Functions", "MB.OS", "Feature Testing", "System Integration", "Vehicle Diagnostics"],
            x: 0.2, y: 0.45
        },
        {
            num: "03",
            id: "veh-comm",
            title: "VEHICLE COMMUNICATION",
            desc: "Hardware buses and network interfaces linking distributed control modules.",
            skills: ["CAN", "LIN", "Ethernet", "FlexRay"],
            x: 0.2, y: 0.78
        },
        {
            num: "04",
            id: "sim-model",
            title: "SIMULATION & MODELLING",
            desc: "Model-based approaches for analysing and validating engineering systems.",
            skills: ["MATLAB", "Simulink", "Simscape", "Model-Based Development", "System Analysis"],
            x: 0.5, y: 0.45
        },
        {
            num: "05",
            id: "data-ml",
            title: "DATA & MACHINE LEARNING",
            desc: "Computational models and algorithms extracting patterns from complex datasets.",
            skills: ["Python", "PyTorch", "NumPy", "Pandas", "LSTM", "MLP", "Data Analysis", "Data Visualization"],
            x: 0.8, y: 0.45
        },
        {
            num: "06",
            id: "eng-tools",
            title: "ENGINEERING & DESIGN TOOLS",
            desc: "Standard simulation and configuration systems supporting technical development.",
            skills: ["SolidWorks", "ANSYS", "Jira", "Git", "PowerPoint", "Excel"],
            x: 0.8, y: 0.78
        },
        {
            num: "07",
            id: "proj-quality",
            title: "PROJECT & QUALITY MANAGEMENT",
            desc: "Management frameworks facilitating validation pipelines and stakeholder alignment.",
            skills: ["Project Tracking", "Project Schedules", "Approvals", "Quality Management", "Reviews", "Status Reports", "Dashboards", "Technical Documentation", "Stakeholder Communication", "Coordination"],
            x: 0.5, y: 0.78
        }
    ];

    const capabilityConnections = [
        { from: "systems-eng", to: "veh-tech" },
        { from: "systems-eng", to: "sim-model" },
        { from: "systems-eng", to: "data-ml" },
        { from: "veh-tech", to: "veh-comm" },
        { from: "sim-model", to: "proj-quality" },
        { from: "data-ml", to: "eng-tools" },
        { from: "veh-comm", to: "proj-quality" },
        { from: "eng-tools", to: "proj-quality" },
        { from: "proj-quality", to: "systems-eng" }
    ];

    const capCanvas = document.getElementById('capabilityCanvas');
    const capContainer = document.getElementById('capabilityMapContainer');
    
    // Panel Elements
    const panelNum = document.getElementById('detailCategoryNum');
    const panelTitle = document.getElementById('detailCategoryTitle');
    const panelDesc = document.getElementById('detailCategoryDesc');
    const panelSkills = document.getElementById('detailSkillsList');

    function updateDetailPanel(idx) {
        if (!panelNum || !panelTitle) return;
        const item = capabilitiesData[idx];
        if (!item) return;

        panelNum.innerText = item.num;
        panelTitle.innerText = translations[currentLanguage][`${item.id}-title`] || item.title;
        panelDesc.innerText = translations[currentLanguage][`${item.id}-desc`] || item.desc;
        
        panelSkills.innerHTML = '';
        item.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.innerText = skill;
            panelSkills.appendChild(tag);
        });
    }

    if (capCanvas && capContainer) {
        const capCtx = capCanvas.getContext('2d');
        let hoveredIndex = null;
        let capMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        function resizeCapCanvas() {
            const dpr = window.devicePixelRatio || 1;
            const rect = capContainer.getBoundingClientRect();
            capCanvas.width = rect.width * dpr;
            capCanvas.height = rect.height * dpr;
            capCtx.scale(dpr, dpr);
            capCanvas.style.width = `${rect.width}px`;
            capCanvas.style.height = `${rect.height}px`;
        }

        window.addEventListener('resize', resizeCapCanvas);
        resizeCapCanvas();
        updateDetailPanel(currentCapabilityIndex);

        capContainer.addEventListener('mousemove', (e) => {
            const rect = capCanvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            capMouse.targetX = (mouseX - rect.width / 2) / 35;
            capMouse.targetY = (mouseY - rect.height / 2) / 35;

            const w = capCanvas.width / (window.devicePixelRatio || 1);
            const h = capCanvas.height / (window.devicePixelRatio || 1);
            
            let foundIndex = null;
            capabilitiesData.forEach((node, idx) => {
                const nx = node.x * w + capMouse.x;
                const ny = node.y * h + capMouse.y;
                const dist = Math.hypot(mouseX - nx, mouseY - ny);
                if (dist < 28) foundIndex = idx;
            });

            hoveredIndex = foundIndex;
            capCanvas.style.cursor = hoveredIndex !== null ? 'pointer' : 'default';
        });

        capContainer.addEventListener('click', () => {
            if (hoveredIndex !== null) {
                currentCapabilityIndex = hoveredIndex;
                updateDetailPanel(currentCapabilityIndex);
            }
        });

        let pulseTime = 0;
        function drawCapMap() {
            pulseTime += 0.02;
            capMouse.x += (capMouse.targetX - capMouse.x) * 0.08;
            capMouse.y += (capMouse.targetY - capMouse.y) * 0.08;

            const w = capCanvas.width / (window.devicePixelRatio || 1);
            const h = capCanvas.height / (window.devicePixelRatio || 1);
            capCtx.clearRect(0, 0, w, h);

            capCtx.strokeStyle = '#F0F0F0';
            capCtx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 40) {
                capCtx.beginPath(); capCtx.moveTo(x, 0); capCtx.lineTo(x, h); capCtx.stroke();
            }
            for (let y = 0; y < h; y += 40) {
                capCtx.beginPath(); capCtx.moveTo(0, y); capCtx.lineTo(w, y); capCtx.stroke();
            }

            const currentActive = hoveredIndex !== null ? hoveredIndex : currentCapabilityIndex;
            const activeNode = capabilitiesData[currentActive];

            capabilityConnections.forEach(conn => {
                const fromNode = capabilitiesData.find(n => n.id === conn.from);
                const toNode = capabilitiesData.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return;

                const fx = fromNode.x * w + capMouse.x;
                const fy = fromNode.y * h + capMouse.y;
                const tx = toNode.x * w + capMouse.x;
                const ty = toNode.y * h + capMouse.y;

                const isPart = (fromNode.id === activeNode.id || toNode.id === activeNode.id);
                capCtx.beginPath();
                capCtx.moveTo(fx, fy);
                capCtx.lineTo(tx, ty);

                if (isPart) {
                    capCtx.strokeStyle = '#111111';
                    capCtx.lineWidth = 1.8;
                } else {
                    capCtx.strokeStyle = '#DCDCDC';
                    capCtx.lineWidth = 0.8;
                }
                capCtx.stroke();
            });

            capabilitiesData.forEach((node, idx) => {
                const nx = node.x * w + capMouse.x;
                const ny = node.y * h + capMouse.y;
                const isActive = (idx === currentCapabilityIndex);
                const isHovered = (idx === hoveredIndex);

                if (isActive || isHovered) {
                    capCtx.strokeStyle = 'rgba(17, 17, 17, 0.15)';
                    capCtx.lineWidth = 1;
                    capCtx.beginPath();
                    capCtx.arc(nx, ny, 18 + Math.sin(pulseTime) * 4, 0, Math.PI * 2);
                    capCtx.stroke();
                }

                capCtx.beginPath();
                capCtx.arc(nx, ny, 9, 0, Math.PI * 2);
                if (isActive) {
                    capCtx.fillStyle = '#111111'; capCtx.strokeStyle = '#111111';
                } else if (isHovered) {
                    capCtx.fillStyle = '#666666'; capCtx.strokeStyle = '#111111';
                } else {
                    capCtx.fillStyle = '#FFFFFF'; capCtx.strokeStyle = '#DCDCDC';
                }
                capCtx.lineWidth = 2;
                capCtx.fill();
                capCtx.stroke();

                capCtx.fillStyle = (isActive || isHovered) ? '#111111' : '#666666';
                const nodeTitle = translations[currentLanguage][`${node.id}-title`] || node.title;
                capCtx.font = (isActive || isHovered) ? 'bold 8.5px "Inter", sans-serif' : '500 8px "Inter", sans-serif';
                capCtx.textAlign = 'center';
                capCtx.fillText(nodeTitle, nx, ny - 16);
            });

            requestAnimationFrame(drawCapMap);
        }
        drawCapMap();
    }

    // --- ACCORDION GENERATION ---
    const accordionContainer = document.getElementById('capabilitiesAccordion');
    function rebuildMobileAccordion() {
        if (!accordionContainer) return;
        accordionContainer.innerHTML = '';
        capabilitiesData.forEach((item, idx) => {
            const accItem = document.createElement('div');
            accItem.className = `accordion-item ${idx === 0 ? 'active' : ''}`;
            
            const accHeader = document.createElement('div');
            accHeader.className = 'accordion-header';
            
            const titleContainer = document.createElement('div');
            titleContainer.className = 'accordion-title-container';
            
            const accNum = document.createElement('span');
            accNum.className = 'accordion-num';
            accNum.innerText = item.num;
            
            const accTitle = document.createElement('h4');
            accTitle.className = 'accordion-title';
            accTitle.innerText = translations[currentLanguage][`${item.id}-title`] || item.title;

            titleContainer.appendChild(accNum);
            titleContainer.appendChild(accTitle);

            const accIcon = document.createElement('span');
            accIcon.className = 'accordion-icon';
            accIcon.innerHTML = '+';

            accHeader.appendChild(titleContainer);
            accHeader.appendChild(accIcon);

            const accContent = document.createElement('div');
            accContent.className = 'accordion-content';
            
            const accDesc = document.createElement('p');
            accDesc.className = 'accordion-desc';
            accDesc.innerText = translations[currentLanguage][`${item.id}-desc`] || item.desc;

            const accSkills = document.createElement('div');
            accSkills.className = 'accordion-skills';
            item.skills.forEach(skill => {
                const tag = document.createElement('span');
                tag.innerText = skill;
                accSkills.appendChild(tag);
            });

            accContent.appendChild(accDesc);
            accContent.appendChild(accSkills);
            accItem.appendChild(accHeader);
            accItem.appendChild(accContent);

            accItem.addEventListener('click', () => {
                const isActive = accItem.classList.contains('active');
                document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
                if (!isActive) accItem.classList.add('active');
            });

            accordionContainer.appendChild(accItem);
        });
    }
    rebuildMobileAccordion();

    // --- TIMELINE TRACK PROGRESS SCROLL ---
    const progressLine = document.getElementById('timelineProgress');
    const timelineContainer = document.querySelector('.timeline-container');

    function updateTimelineProgress() {
        if (!progressLine || !timelineContainer) return;
        const rect = timelineContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const startPoint = viewportHeight / 1.2;
        const containerTop = rect.top;
        const containerHeight = rect.height;
        let progress = 0;
        if (containerTop < startPoint) {
            const scrolledDistance = startPoint - containerTop;
            progress = Math.min(100, (scrolledDistance / (containerHeight * 0.95)) * 100);
        }
        progressLine.style.height = `${Math.max(0, progress)}%`;
    }

    window.addEventListener('scroll', updateTimelineProgress);
    window.addEventListener('resize', updateTimelineProgress);
    updateTimelineProgress();

    const steps = document.querySelectorAll('.timeline-step');
    steps.forEach(step => revealObserver.observe(step));
    const journeyHeader = document.querySelector('.journey-section .section-header');
    if (journeyHeader) revealObserver.observe(journeyHeader);

    // --- CERTIFICATIONS GRID BINDINGS ---
    const certsGrid = document.getElementById('certificationsGrid');
    const credModal = document.getElementById('credentialModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalProvider = document.getElementById('modalProvider');
    const modalDate = document.getElementById('modalDate');

    const certificationsData = [
        {
            num: "CERTIFICATION 01",
            title: "INTRODUCTION TO MODEL-BASED SYSTEMS ENGINEERING",
            provider: "Coursera",
            date: "12.2025"
        },
        {
            num: "CERTIFICATION 02",
            title: "ENGINEERING DESIGN AND SIMULATION PROFESSIONAL CERTIFICATION",
            provider: "edX",
            date: "11.2024"
        },
        {
            num: "CERTIFICATION 03",
            title: "MATLAB-SIMULINK FUNDAMENTALS",
            provider: "MathWorks",
            date: "06.2024"
        },
        {
            num: "CERTIFICATION 04",
            title: "MACHINE DYNAMICS WITH MATLAB",
            provider: "edX",
            date: "11.2022"
        }
    ];

    if (certsGrid) {
        certificationsData.forEach((cert, index) => {
            const card = document.createElement('div');
            card.className = 'certification-card';
            card.setAttribute('tabindex', '0');
            
            // Generate label translated
            const labelText = currentLanguage === 'de' ? `ZERTIFIKAT 0${index + 1}` : `CERTIFICATION 0${index + 1}`;
            const viewText = currentLanguage === 'de' ? 'ZERTIFIKAT ANSEHEN' : 'VIEW CREDENTIAL';

            card.innerHTML = `
                <span class="cert-num">${labelText}</span>
                <h4 class="cert-title">${cert.title}</h4>
                <div class="cert-footer">
                    <span class="cert-provider">${cert.provider}</span>
                    <span class="cert-date">${cert.date}</span>
                </div>
                <div class="cert-view-btn">
                    <span>${viewText}</span>
                    <span class="arrow">↗</span>
                </div>
            `;

            const openModal = () => {
                if (credModal) {
                    modalTitle.innerText = cert.title;
                    modalProvider.innerText = cert.provider;
                    modalDate.innerText = cert.date;
                    credModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    const closeBtn = document.getElementById('modalClose');
                    if (closeBtn) closeBtn.focus();
                }
            };

            card.addEventListener('click', openModal);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal();
                }
            });

            card.classList.add('fade-in-up');
            revealObserver.observe(card);
            certsGrid.appendChild(card);
        });
    }

    const closeModal = () => {
        if (credModal) {
            credModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    const modalCloseBtn = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && credModal && credModal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- PROJECTS CANVAS ---
    let tTime = 0;
    initProjectCanvas('canvas-01', (pCtx, w, h, pMouse) => {
        tTime += 0.01;
        const centerX = w / 2 + pMouse.x;
        const centerY = h / 2 + pMouse.y;
        pCtx.strokeStyle = '#DCDCDC';
        pCtx.lineWidth = 1;
        pCtx.beginPath();
        pCtx.moveTo(20, centerY); pCtx.lineTo(w - 20, centerY);
        pCtx.moveTo(centerX, 20); pCtx.lineTo(centerX, h - 20);
        pCtx.stroke();

        pCtx.strokeStyle = '#666666';
        pCtx.lineWidth = 1.5;
        pCtx.beginPath();
        for (let x = 30; x < w - 30; x++) {
            const relX = (x - centerX) / 50;
            const y = centerY + Math.sin(relX + tTime * 0.2) * 40 - relX * 10;
            if (x === 30) pCtx.moveTo(x, y); else pCtx.lineTo(x, y);
        }
        pCtx.stroke();

        pCtx.strokeStyle = '#111111';
        pCtx.lineWidth = 2;
        pCtx.setLineDash([5, 5]);
        pCtx.beginPath();
        for (let x = centerX; x < w - 30; x++) {
            const relX = (x - centerX) / 50;
            const y = centerY + Math.sin(relX + tTime * 0.2) * 40 - relX * 10 + Math.cos(relX * 2 + tTime) * 15 * Math.max(0, relX / 3);
            if (x === centerX) pCtx.moveTo(x, y); else pCtx.lineTo(x, y);
        }
        pCtx.stroke();
        pCtx.setLineDash([]);

        const activeX = centerX + 40;
        const activeY = centerY + Math.sin(40/50 + tTime * 0.2) * 40 - (40/50) * 10;
        pCtx.fillStyle = '#666666';
        pCtx.beginPath(); pCtx.arc(activeX, activeY, 4, 0, Math.PI * 2); pCtx.fill();

        pCtx.fillStyle = '#111111';
        pCtx.font = '7px monospace';
        const labelStr = currentLanguage === 'de' ? 'TRAJEKTORIENDATEN (100K)' : 'TRAJECTORY DATA (100K)';
        const predStr = currentLanguage === 'de' ? 'BERECHNETE_BAHN' : 'PREDICTED_PATH';
        pCtx.fillText(labelStr, 20, 25);
        pCtx.fillText(`OBS_COORD: [${Math.round(activeX)}, ${Math.round(activeY)}]`, 20, 37);
        pCtx.fillText(predStr, w - 100, h - 25);
    });

    let energyPhase = 0;
    initProjectCanvas('canvas-02', (pCtx, w, h, pMouse) => {
        energyPhase += 0.03;
        const ox = pMouse.x;
        const oy = pMouse.y;
        const boxes = [
            { id: 'eng', label: currentLanguage === 'de' ? 'MOTOR' : 'ENGINE', x: 0.2, y: 0.35, w: 75, h: 30 },
            { id: 'bat', label: currentLanguage === 'de' ? 'BATTERIE' : 'BATTERY', x: 0.2, y: 0.65, w: 75, h: 30 },
            { id: 'mgt', label: 'EMS CORE', x: 0.5, y: 0.5, w: 85, h: 35 },
            { id: 'drv', label: currentLanguage === 'de' ? 'ANTRIEB' : 'DRIVE', x: 0.8, y: 0.5, w: 75, h: 30 }
        ];

        function connect(b1, b2) {
            const x1 = b1.x * w + ox; const y1 = b1.y * h + oy;
            const x2 = b2.x * w + ox; const y2 = b2.y * h + oy;
            pCtx.strokeStyle = '#DCDCDC';
            pCtx.lineWidth = 1;
            pCtx.beginPath(); pCtx.moveTo(x1, y1); pCtx.lineTo(x2, y2); pCtx.stroke();

            const px = x1 + (x2 - x1) * ((energyPhase % 1.0));
            const py = y1 + (y2 - y1) * ((energyPhase % 1.0));
            pCtx.fillStyle = '#111111';
            pCtx.beginPath(); pCtx.arc(px, py, 3, 0, Math.PI * 2); pCtx.fill();
        }

        connect(boxes[0], boxes[2]);
        connect(boxes[1], boxes[2]);
        connect(boxes[2], boxes[3]);

        boxes.forEach(b => {
            const bx = b.x * w + ox - b.w / 2;
            const by = b.y * h + oy - b.h / 2;
            pCtx.fillStyle = '#FFFFFF'; pCtx.strokeStyle = '#111111'; pCtx.lineWidth = 1.2;
            pCtx.fillRect(bx, by, b.w, b.h); pCtx.strokeRect(bx, by, b.w, b.h);
            pCtx.fillStyle = '#111111'; pCtx.font = 'bold 8px "Inter", sans-serif'; pCtx.textAlign = 'center';
            pCtx.fillText(b.label, b.x * w + ox, b.y * h + oy + 3);
        });

        pCtx.fillStyle = '#666666'; pCtx.font = '7px monospace'; pCtx.textAlign = 'left';
        pCtx.fillText('FUEL REDUCTION: -29%', 20, 25);
        pCtx.fillText('CYCLE: WLTP CLASS 3', 20, 37);
    });

    let dofTime = 0;
    initProjectCanvas('canvas-03', (pCtx, w, h, pMouse) => {
        dofTime += 0.02;
        const ox = w * 0.15 + pMouse.x;
        const oy = h * 0.65 + pMouse.y;
        const plotW = w * 0.7;
        const plotH = h * 0.45;

        pCtx.strokeStyle = '#DCDCDC';
        pCtx.lineWidth = 1;
        pCtx.beginPath();
        pCtx.moveTo(ox, oy - plotH); pCtx.lineTo(ox, oy); pCtx.lineTo(ox + plotW, oy);
        pCtx.stroke();

        pCtx.strokeStyle = '#666666';
        pCtx.setLineDash([3, 3]);
        pCtx.beginPath(); pCtx.moveTo(ox, oy - plotH * 0.6); pCtx.lineTo(ox + plotW, oy - plotH * 0.6); pCtx.stroke();
        pCtx.setLineDash([]);

        pCtx.strokeStyle = '#111111';
        pCtx.lineWidth = 1.5;
        pCtx.beginPath();
        for (let sx = 0; sx < plotW; sx++) {
            const relX = sx / 50;
            let response = 0;
            if (relX > 0.5) {
                const t = relX - 0.5;
                response = 1 - Math.exp(-1.5 * t) * Math.cos(5 * t);
            }
            const px = ox + sx;
            const py = oy - response * (plotH * 0.6);
            if (sx === 0) pCtx.moveTo(px, py); else pCtx.lineTo(px, py);
        }
        pCtx.stroke();

        pCtx.fillStyle = '#111111'; pCtx.font = '7px monospace';
        pCtx.fillText('STEP_INPUT: u(t)', ox + 10, oy - plotH * 0.6 - 5);
        pCtx.fillText('SYSTEM RESPONSE: x(t)', ox + plotW - 100, oy - 20);
        const plotLabel = currentLanguage === 'de' ? '1-DOF GEDÄMPFTE STABILISIERUNG' : '1-DOF DAMPED STABILIZATION';
        pCtx.fillText(plotLabel, 20, 25);
    });

    let cadRot = 0;
    initProjectCanvas('canvas-04', (pCtx, w, h, pMouse) => {
        cadRot += 0.005;
        const cx = w / 2 + pMouse.x;
        const cy = h / 2 + pMouse.y;
        const r = Math.min(w, h) * 0.28;
        const points = [];
        for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI * 2) / 8 + cadRot;
            points.push({ x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * (r * 0.6) });
        }
        pCtx.strokeStyle = '#666666'; pCtx.lineWidth = 0.8;
        pCtx.beginPath();
        points.forEach((pt, idx) => {
            if (idx === 0) pCtx.moveTo(pt.x, pt.y); else pCtx.lineTo(pt.x, pt.y);
        });
        pCtx.closePath(); pCtx.stroke();

        pCtx.strokeStyle = '#DCDCDC'; pCtx.lineWidth = 0.5;
        for (let i = 0; i < 8; i++) {
            for (let j = i + 2; j < 8; j++) {
                pCtx.beginPath(); pCtx.moveTo(points[i].x, points[i].y); pCtx.lineTo(points[j].x, points[j].y); pCtx.stroke();
            }
        }
        pCtx.strokeStyle = '#111111'; pCtx.lineWidth = 1.2; pCtx.fillStyle = '#FFFFFF';
        pCtx.beginPath(); pCtx.arc(cx, cy, 6, 0, Math.PI * 2); pCtx.fill(); pCtx.stroke();

        pCtx.fillStyle = '#111111'; pCtx.font = '7px monospace';
        pCtx.fillText('CAD MODEL / MESH', 20, 25);
        const optLabel = currentLanguage === 'de' ? 'OPTIMIERUNG: DYNAMISCHE BAUGRUPPEN' : 'OPTIMIZATION: DYNAMIC assemblies';
        pCtx.fillText(optLabel, 20, 37);
    });

    function initProjectCanvas(canvasId, drawFn) {
        const pCanvas = document.getElementById(canvasId);
        if (!pCanvas) return;
        const pCtx = pCanvas.getContext('2d');
        const card = pCanvas.closest('.project-card');
        let pMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const parent = pCanvas.parentElement;
            pCanvas.width = parent.clientWidth * dpr;
            pCanvas.height = parent.clientHeight * dpr;
            pCtx.scale(dpr, dpr);
            pCanvas.style.width = `${parent.clientWidth}px`;
            pCanvas.style.height = `${parent.clientHeight}px`;
        }
        window.addEventListener('resize', resize);
        resize();

        if (card) {
            card.addEventListener('mousemove', (e) => {
                const rect = pCanvas.getBoundingClientRect();
                pMouse.targetX = (e.clientX - rect.left - rect.width / 2) / 20;
                pMouse.targetY = (e.clientY - rect.top - rect.height / 2) / 20;
            });
            card.addEventListener('mouseleave', () => {
                pMouse.targetX = 0; pMouse.targetY = 0;
            });
        }

        function renderLoop() {
            pMouse.x += (pMouse.targetX - pMouse.x) * 0.1;
            pMouse.y += (pMouse.targetY - pMouse.y) * 0.1;
            const w = pCanvas.width / (window.devicePixelRatio || 1);
            const h = pCanvas.height / (window.devicePixelRatio || 1);
            pCtx.clearRect(0, 0, w, h);
            pCtx.strokeStyle = '#F0F0F0'; pCtx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 30) {
                pCtx.beginPath(); pCtx.moveTo(x, 0); pCtx.lineTo(x, h); pCtx.stroke();
            }
            for (let y = 0; y < h; y += 30) {
                pCtx.beginPath(); pCtx.moveTo(0, y); pCtx.lineTo(w, y); pCtx.stroke();
            }
            drawFn(pCtx, w, h, pMouse);
            requestAnimationFrame(renderLoop);
        }
        renderLoop();
    }

    // --- EDUCATION CANVASES ---
    function initMscCanvas() {
        const mCanvas = document.getElementById('canvas-msc');
        if (!mCanvas) return;
        const mCtx = mCanvas.getContext('2d');
        const parent = mCanvas.parentElement;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            mCanvas.width = parent.clientWidth * dpr;
            mCanvas.height = parent.clientHeight * dpr;
            mCtx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();

        let stepPhase = 0;
        function draw() {
            stepPhase += 0.015;
            const w = mCanvas.width / (window.devicePixelRatio || 1);
            const h = mCanvas.height / (window.devicePixelRatio || 1);
            mCtx.clearRect(0, 0, w, h);

            mCtx.strokeStyle = '#F9F9F9'; mCtx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 20) {
                mCtx.beginPath(); mCtx.moveTo(x, 0); mCtx.lineTo(x, h); mCtx.stroke();
            }
            for (let y = 0; y < h; y += 20) {
                mCtx.beginPath(); mCtx.moveTo(0, y); mCtx.lineTo(w, y); mCtx.stroke();
            }

            const steps = currentLanguage === 'de' ? ['FAHRZEUG', 'SYSTEME', 'INTEGRATION', 'VALIDIERUNG'] : ['VEHICLE', 'SYSTEMS', 'INTEG.', 'VALID.'];
            const blockW = w * 0.75;
            const blockH = 26;
            const startY = h * 0.15;
            const gapY = h * 0.22;

            steps.forEach((lbl, idx) => {
                const bx = (w - blockW) / 2;
                const by = startY + idx * gapY;
                mCtx.fillStyle = '#FFFFFF'; mCtx.strokeStyle = '#111111'; mCtx.lineWidth = 1;
                mCtx.fillRect(bx, by, blockW, blockH); mCtx.strokeRect(bx, by, blockW, blockH);
                mCtx.fillStyle = '#111111'; mCtx.font = 'bold 7.5px "Inter", sans-serif'; mCtx.textAlign = 'center';
                mCtx.fillText(lbl, w / 2, by + blockH / 2 + 3);

                if (idx < steps.length - 1) {
                    mCtx.strokeStyle = '#DCDCDC'; mCtx.lineWidth = 0.8;
                    mCtx.beginPath(); mCtx.moveTo(w / 2, by + blockH); mCtx.lineTo(w / 2, by + blockH + gapY - blockH); mCtx.stroke();
                    const pulseY = by + blockH + ((gapY - blockH) * ((stepPhase + idx * 0.25) % 1.0));
                    mCtx.fillStyle = '#666666'; mCtx.beginPath(); mCtx.arc(w / 2, pulseY, 2.5, 0, Math.PI * 2); mCtx.fill();
                }
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    function initBtechCanvas() {
        const bCanvas = document.getElementById('canvas-btech');
        if (!bCanvas) return;
        const bCtx = bCanvas.getContext('2d');
        const parent = bCanvas.parentElement;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            bCanvas.width = parent.clientWidth * dpr;
            bCanvas.height = parent.clientHeight * dpr;
            bCtx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();

        let traceT = 0;
        function draw() {
            traceT += 0.015;
            const w = bCanvas.width / (window.devicePixelRatio || 1);
            const h = bCanvas.height / (window.devicePixelRatio || 1);
            bCtx.clearRect(0, 0, w, h);

            bCtx.strokeStyle = '#F9F9F9'; bCtx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 20) {
                bCtx.beginPath(); bCtx.moveTo(x, 0); bCtx.lineTo(x, h); bCtx.stroke();
            }
            for (let y = 0; y < h; y += 20) {
                bCtx.beginPath(); bCtx.moveTo(0, y); bCtx.lineTo(w, y); bCtx.stroke();
            }

            const ox = w * 0.15; const oy = h * 0.8;
            const plotW = w * 0.7; const plotH = h * 0.6;
            bCtx.strokeStyle = '#DCDCDC'; bCtx.lineWidth = 1;
            bCtx.beginPath(); bCtx.moveTo(ox, oy - plotH); bCtx.lineTo(ox, oy); bCtx.lineTo(ox + plotW, oy); bCtx.stroke();

            bCtx.strokeStyle = '#666666'; bCtx.lineWidth = 1.2;
            bCtx.beginPath();
            for (let sx = 0; sx < plotW; sx++) {
                const relX = sx / plotW;
                let relY = 0;
                if (relX < 0.3) relY = relX * 2.2;
                else if (relX < 0.5) relY = 0.66 + Math.sin((relX - 0.3) * Math.PI) * 0.08;
                else if (relX < 0.85) relY = 0.72 + Math.sin((relX - 0.5) / 0.35 * Math.PI / 2) * 0.18;
                else relY = 0.9 - (relX - 0.85) / 0.15 * 0.2;
                
                const px = ox + sx; const py = oy - relY * plotH;
                if (sx === 0) bCtx.moveTo(px, py); else bCtx.lineTo(px, py);
            }
            bCtx.stroke();

            const scanX = ox + ((traceT * 40) % plotW);
            bCtx.strokeStyle = 'rgba(17, 17, 17, 0.15)'; bCtx.lineWidth = 0.8;
            bCtx.beginPath(); bCtx.moveTo(scanX, oy - plotH); bCtx.lineTo(scanX, oy); bCtx.stroke();

            bCtx.fillStyle = '#111111'; bCtx.font = '7px monospace';
            bCtx.fillText('STRESS \u03c3', ox - 5, oy - plotH + 5);
            bCtx.fillText('STRAIN \u03b5', ox + plotW - 40, oy + 12);
            const graphLabel = currentLanguage === 'de' ? 'ZUGSPANNUNGSMODELL' : 'TENSILE STRESS MODEL';
            bCtx.fillText(graphLabel, 20, 20);

            requestAnimationFrame(draw);
        }
        draw();
    }

    initMscCanvas();
    initBtechCanvas();
    const credHeader = document.querySelector('.credentials-section .section-header');
    if (credHeader) revealObserver.observe(credHeader);

    // --- CONVERGENCE CANVAS ---
    function initConvergenceCanvas() {
        const cCanvas = document.getElementById('convergenceCanvas');
        if (!cCanvas) return;
        const cCtx = cCanvas.getContext('2d');
        const parent = cCanvas.parentElement;
        let cMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            cCanvas.width = parent.clientWidth * dpr;
            cCanvas.height = parent.clientHeight * dpr;
            cCtx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();

        parent.addEventListener('mousemove', (e) => {
            const rect = cCanvas.getBoundingClientRect();
            cMouse.targetX = (e.clientX - rect.left - rect.width / 2) / 25;
            cMouse.targetY = (e.clientY - rect.top - rect.height / 2) / 25;
        });
        parent.addEventListener('mouseleave', () => {
            cMouse.targetX = 0; cMouse.targetY = 0;
        });

        let pulsePhase = 0;
        function draw() {
            pulsePhase += 0.012;
            cMouse.x += (cMouse.targetX - cMouse.x) * 0.08;
            cMouse.y += (cMouse.targetY - cMouse.y) * 0.08;

            const w = cCanvas.width / (window.devicePixelRatio || 1);
            const h = cCanvas.height / (window.devicePixelRatio || 1);
            cCtx.clearRect(0, 0, w, h);

            cCtx.strokeStyle = '#F9F9F9'; cCtx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 30) {
                cCtx.beginPath(); cCtx.moveTo(x, 0); cCtx.lineTo(x, h); cCtx.stroke();
            }
            for (let y = 0; y < h; y += 30) {
                cCtx.beginPath(); cCtx.moveTo(0, y); cCtx.lineTo(w, y); cCtx.stroke();
            }

            const cx = w / 2 + cMouse.x; const cy = h / 2 + cMouse.y;
            const radius = Math.min(w, h) * 0.32;

            const branches = [
                { label: currentLanguage === 'de' ? 'SYSTEME' : 'SYSTEMS', angle: -Math.PI / 4 },
                { label: 'SIMULATION', angle: Math.PI / 4 },
                { label: 'VALIDATION', angle: (3 * Math.PI) / 4 },
                { label: currentLanguage === 'de' ? 'FAHRZEUG' : 'VEHICLE', angle: (-3 * Math.PI) / 4 }
            ];

            cCtx.strokeStyle = '#DCDCDC'; cCtx.lineWidth = 1;
            branches.forEach(br => {
                const bx = cx + Math.cos(br.angle) * radius;
                const by = cy + Math.sin(br.angle) * radius;
                cCtx.beginPath(); cCtx.moveTo(bx, by); cCtx.lineTo(cx, cy); cCtx.stroke();

                const pRatio = (pulsePhase + br.angle) % 1.0;
                const px = bx + (cx - bx) * pRatio;
                const py = by + (cy - by) * pRatio;
                cCtx.fillStyle = '#666666';
                cCtx.beginPath(); cCtx.arc(px, py, 2.5, 0, Math.PI * 2); cCtx.fill();
            });

            branches.forEach(br => {
                const bx = cx + Math.cos(br.angle) * radius;
                const by = cy + Math.sin(br.angle) * radius;
                cCtx.fillStyle = '#FFFFFF'; cCtx.strokeStyle = '#111111'; cCtx.lineWidth = 1.2;
                cCtx.beginPath(); cCtx.arc(bx, by, 6, 0, Math.PI * 2); cCtx.fill(); cCtx.stroke();

                cCtx.fillStyle = '#666666'; cCtx.font = 'bold 7px "Inter", sans-serif'; cCtx.textAlign = 'center';
                cCtx.fillText(br.label, bx, by + 16);
            });

            cCtx.fillStyle = '#FFFFFF'; cCtx.strokeStyle = '#111111'; cCtx.lineWidth = 1.8;
            cCtx.beginPath(); cCtx.arc(cx, cy, 14, 0, Math.PI * 2); cCtx.fill(); cCtx.stroke();

            cCtx.fillStyle = '#111111'; cCtx.beginPath(); cCtx.arc(cx, cy, 3, 0, Math.PI * 2); cCtx.fill();
            cCtx.fillStyle = '#111111'; cCtx.font = 'bold 8.5px "Inter", sans-serif'; cCtx.textAlign = 'center';
            cCtx.fillText('AKSHAY U.', cx, cy - 20);

            cCtx.fillStyle = '#666666'; cCtx.font = '7px monospace'; cCtx.textAlign = 'left';
            cCtx.fillText('CONVERGENCE_NODE_01', 20, 20);
            cCtx.fillText('MOBILITY: ACTIVE', 20, 32);
        }
        setInterval(draw, 1000 / 60); // 60fps timer loop
    }
    initConvergenceCanvas();

    const connectHeader = document.querySelector('.connect-section .connect-container');
    if (connectHeader) revealObserver.observe(connectHeader);
});
