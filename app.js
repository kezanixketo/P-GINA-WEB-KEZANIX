document.addEventListener('DOMContentLoaded', () => {
    // --- Multi-Language Data (Updated) ---
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_product: "Producto",
            nav_about: "Nosotros",
            nav_bienestar: "Bienestar",
            nav_buy: "Comprar Ahora",
            hero_scroll: "Scroll para explorar",
            intro_title: "Bienestar Real y <span style='color: var(--primary); text-shadow: 0 0 10px rgba(34, 56, 255, 0.1);'>Sostenible</span>",
            intro_desc: "KetoPrime es el sistema cetogénico que transforma tu metabolismo de adentro hacia afuera, con ingredientes premium y un protocolo diseñado por nutricionistas.",
            intro_btn_discover: "Descubrir Producto",
            intro_btn_shop: "Ir a Tienda",
            p_tag_intro: "Bienvenido",
            p_card_0_title: "Keto Prime Experience",
            p_tag_science: "Ciencia Metabólica",
            p_tag_formula: "La Fórmula",
            p_tag_results: "Logros Reales",
            p_card_1_title: "Activa tu Metabolismo",
            p_card_1_desc: "Cetosis optimizada con respaldo científico de alto nivel para un rendimiento físico y mental total.",
            fact_natural: "Cetosis Natural",
            fact_stable: "Estado Estable",
            fact_backed: "Clínicamente Respaldado",
            p_card_2_title: "Sistema Advanced Prime",
            p_card_2_desc: "Una combinación sinérgica de ingredientes premium que eliminan el 'Keto Flu' y maximizan tu claridad mental.",
            pill_bhb: "Cetonas Exógenas",
            pill_mct: "Triglicéridos de cadena media",
            pill_cog: "Potenciadores Mentales",
            pill_enz: "Enzimas Digestivas",
            p_card_3_title: "¿Qué nos hace diferentes?",
            p_card_3_desc: "No somos solo un suplemento; somos un sistema integral diseñado para transformar tu bienestar sin atajos ni sacrificios extremos.",
            q_natural_title: "Sabor Natural",
            q_natural_desc: "Sin químicos agresivos.",
            q_results_title: "Primeros 7 días",
            q_results_desc: "Resultados inmediatos.",
            p_card_4_title: "Beneficios Clave",
            p_benefit_1: "Energía Estable",
            p_benefit_2: "Enfoque Total",
            p_benefit_3: "Quema de Grasa",
            p_benefit_4: "Control Apetito",
            p_benefit_5: "Digestión Ligera",
            p_benefit_6: "Sin Efectos Sec.",
            p_card_5_title: "Contenido del Pack",
            pack_protocol: "Protocolo por Etapas",
            pack_usda: "Certificado USDA",
            p_tag_resources: "Recursos Especializados",
            p_card_6_title: "Documentación Técnica",
            p_card_6_desc: "Accede a la información científica oficial y protocolos de optimización para maximizar tus resultados.",
            doc_ficha_title: "Ficha Técnica",
            doc_ficha_desc: "Especificaciones detalladas",
            doc_protocolo_title: "Protocolo de Alimentación",
            doc_protocolo_desc: "Guía de uso paso a paso",
            doc_view: "Ver",
            doc_download: "Descargar",
            about_title: "Nuestro Legado",
            about_desc: "En Kezanix, no solo creamos suplementos; diseñamos herramientas de optimización humana.",
            about_item_1_title: "Respaldo Científico",
            about_item_1_desc: "Fórmulas desarrolladas bajo estrictos estándares.",
            about_item_2_title: "Calidad Premium",
            about_item_2_desc: "Resultados reales garantizados.",
            cta_title: "¿Listo para elevar tu estándar?",
            cta_desc: "Únete a los miles que ya han desbloqueado su máximo potencial con Kezanix Keto.",
            cta_btn: "Ingresar a la Tienda Oficial",
            footer_rights: "© 2026 Kezanix. Todos los derechos reservados.",
            ticker_text: "ENERGÍA CETOGÉNICA • CLARIDAD MENTAL • RENDIMIENTO SIN LÍMITES • SALUD CELULAR • BIENESTAR KEZANIX • ENERGÍA CETOGÉNICA • CLARIDAD MENTAL • RENDIMIENTO SIN LÍMITES • SALUD CELULAR • BIENESTAR KEZANIX • ENERGÍA CETOGÉNICA • CLARIDAD MENTAL • RENDIMIENTO SIN LÍMITES • SALUD CELULAR • BIENESTAR KEZANIX • ",
            hud_weight: "Control de<br>Peso",
            hud_energy: "Energía<br>Sostenida",
            hud_focus: "Mejor<br>Concentración",
            hud_sleep: "Sueño<br>Reparador",
            teaser_p_tag: "Innovación",
            teaser_p_title: "Energía Pura, Rendimiento Total",
            teaser_p_desc: "Optimiza tu metabolismo y alcanza la cetosis profunda de forma natural. Sin bajones, solo claridad mental y física.",
            teaser_p_btn: "Ver detalles sobre Keto Prime",
            teaser_a_tag: "Nuestra Misión",
            teaser_a_title: "Ciencia al Servicio del Bienestar",
            teaser_a_desc: "Fusionamos la tecnología alimentaria con la neurociencia para entregarte el suplemento más potente del mercado.",
            teaser_a_btn: "Saber más sobre nosotros",
            test_tag: "Éxito Real",
            test_title: "Historias de Cambio",
            test_btn: "Ver testimonio",
            test_q1: '"Keto Prime me ayudó a romper el límite de los 90 kilos. Después de años estancado, por fin vi resultados reales. Estoy muy contento."',
            test_q2: '"Como instructora de zumba necesito energía todos los días, y Keto Prime me la ha dado. Me siento más activa y enfocada en cada clase."',
            test_q3: '"En la etapa de la menopausia todo se vuelve más complicado por los cambios hormonales. Keto Prime me ha ayudado muchísimo a sentirme mejor y más equilibrada."',
            test_q4: '"He bajado de peso y, lo más importante, me ha ayudado con la ansiedad. Ahora siento más control y tranquilidad."',
            test_q5: '"Como persona físicamente activa, Keto Prime me ha ayudado a tonificar, mejorar mi digestión y mantener una concentración increíble durante el día."',
            test_q6: '"Este producto me permitió retomar mi vida. Me ha ayudado con mis alergias, con mi peso y con sentirme nuevamente en control."',
            test_q7: '"Ahora disfruto de una energía renovada, menos inflamación y un bienestar que se nota en mi día a día. Keto Prime realmente marca la diferencia."',
            test_q8: '"Más energía, menos inflamación y 4 kilos menos. Mary Cecilia lo logró en solo dos semanas con Keto Prime."',
            test_q9: '"Mi cuerpo cambió por completo. Vivía con inflamación, metabolismo lento y esa sensación de estar atrapada en mi propio cuerpo. Con Keto Prime empecé a recuperar ligereza, energía y bienestar."',
            test_q10: '"Gracias a Keto Prime estoy logrando resultados increíbles que transforman mi salud día a día. Bajé 13.8 kilos y, más importante aún, recuperé mi energía y mi confianza."',
            test_q11: '"Durante meses busqué definir, desinflamar y mejorar mi digestión… y encontré en Keto Prime el apoyo que necesitaba para avanzar sin frustración."',
            test_q12: '"Mi cambio ha sido completo. Con Keto Prime como aliado he trabajado con constancia y determinación, y hoy veo un progreso que me inspira a seguir."',
            test_q13: '"Trabajo el doble, sueño en grande y no bajo el ritmo. Keto Prime se convirtió en el impulso real que necesitaba para seguir con energía y claridad cada día."',            
            footer_copy: "© 2026 KEZANIX GROUP. Todos los derechos reservados.",
            about_tag: "Nuestra Historia",
            about_title: "Fundando un Nuevo Estándar",
            about_text: "Ante una realidad global donde más de 700 millones de personas viven con sobrepeso, KEZANIX nació en Estados Unidos con una misión clara: hacer que transformar tu cuerpo sea también transformar tu vida.<br><br>Somos un equipo apasionado por el bienestar real, y KetoPrime es nuestra respuesta — ciencia, naturaleza y nutrición en un solo sistema.<br><br>Porque la salud no es un destino. Es un estilo de vida.",
            about_m_title: "Misión",
            about_m_desc: "Empoderar a cada individuo para que alcance su máximo potencial metabólico y cognitivo a través de ciencia nutricional de vanguardia y productos sin compromisos.",
            about_v_title: "Visión",
            about_v_desc: "Ser la marca líder global en longevidad y rendimiento humano, redefiniendo los límites de lo que el cuerpo y la mente pueden lograr con el combustible correcto.",
            about_val_title: "Valores",
            about_val_1: "Integridad Científica",
            about_val_2: "Innovación Constante",
            about_val_3: "Calidad Excepcional",
            about_val_4: "Impacto Real",
            b_tag_1: "Contenido Kezanix",
            b_title_1: "Ciencia y Salud",
            b_desc_1: "Explora la ciencia avanzada de la cetosis con Kezanix.",
            b_tag_2: "Contenido Kezanix",
            b_title_2: "Recetario Keto",
            b_desc_2: "Sabores potentes diseñados para tu máximo rendimiento.",
            b_tab_1: "Blogs",
            b_tab_2: "Recetario Keto",
            res_tag_1: "Ciencia",
            res_title_1: "Cetosis y Diabetes",
            res_tag_2: "Biohacking",
            res_title_2: "Epigenética y Cetosis",
            res_tag_3: "Nutrición",
            res_title_3: "Pérdida de Peso",
            res_tag_4: "Metabolismo",
            res_title_4: "Combatiendo la Obesidad",
            res_tag_5: "Hormonas",
            res_title_5: "Salud Hormonal",
            res_tag_6: "Salud",
            res_title_6: "Equilibrio Inflamatorio",
            res_tag_7: "Deporte",
            res_title_7: "Ejercicio y Cetosis",
            res_tag_8: "Cerebro",
            res_title_8: "Salud Cerebral",
            res_tag_9: "Origen",
            res_title_9: "Estado Natural",
            res_tag_10: "Educación",
            res_title_10: "Diferencias Dietéticas",
            rec_tag_1: "Desayuno",
            rec_title_1: "Huevos Cremosos",
            rec_tag_2: "Almuerzo",
            rec_title_2: "Pollo al Limón",
            rec_tag_3: "Cena",
            rec_title_3: "Cazuela de Carne",
            rec_tag_4: "Snack",
            rec_title_4: "Taco de Queso",
            rec_tag_5: "Almuerzo",
            rec_title_5: "Ensalada de Atún",
            rec_tag_6: "Cena",
            rec_title_6: "Albóndigas Cremosas",
            rec_tag_7: "Básico",
            rec_title_7: "Arroz de Coliflor",
            rec_tag_8: "Básico",
            rec_title_8: "Pan Keto Sartén",
            rec_tag_9: "Cena",
            rec_title_9: "Pizza Keto Sartén",
            rec_tag_10: "Postre",
            rec_title_10: "Brownie Keto",
            community_title: "Sé parte de la comunidad Keto Prime",
            community_desc: "Conoce información y recetas exclusivas para potenciar tu bienestar.",
            community_btn: "Explorar Bienestar"
        },
        en: {
            nav_home: "Home",
            nav_product: "Product",
            nav_about: "About",
            nav_bienestar: "Well-being",
            nav_buy: "Buy Now",
            hero_scroll: "Scroll to explore",
            intro_title: "Real and <span style='color: var(--primary); text-shadow: 0 0 10px rgba(34, 56, 255, 0.1);'>Sustainable Wellness</span>",
            intro_desc: "KetoPrime is the ketogenic system that transforms your metabolism from the inside out, with premium ingredients and a protocol designed by nutritionists.",
            intro_btn_discover: "Discover Product",
            intro_btn_shop: "Go to Store",
            p_tag_intro: "Welcome",
            p_card_0_title: "Keto Prime Experience",
            p_tag_science: "Metabolic Science",
            p_tag_formula: "The Formula",
            p_tag_results: "Real Results",
            p_card_1_title: "Activate Your Metabolism",
            p_card_1_desc: "Optimized ketosis with high-level scientific support for total physical and mental performance.",
            fact_natural: "Natural Ketosis",
            fact_stable: "Stable State",
            fact_backed: "Clinically Backed",
            p_card_2_title: "Advanced Prime System",
            p_card_2_desc: "A synergistic combination of premium ingredients that eliminate 'Keto Flu' and maximize mental clarity.",
            pill_bhb: "Exogenous Ketones",
            pill_mct: "Medium Chain Triglycerides",
            pill_cog: "Mental Boosters",
            pill_enz: "Digestive Enzymes",
            p_card_3_title: "What makes us different?",
            p_card_3_desc: "We are not just a supplement; we are an integral system designed to transform your well-being without shortcuts or extreme sacrifices.",
            q_natural_title: "Natural Flavor",
            q_natural_desc: "No harsh chemicals.",
            q_results_title: "First 7 Days",
            q_results_desc: "Immediate results.",
            p_card_4_title: "Key Benefits",
            p_benefit_1: "Stable Energy",
            p_benefit_2: "Total Focus",
            p_benefit_3: "Fat Burning",
            p_benefit_4: "Appetite Control",
            p_benefit_5: "Light Digestion",
            p_benefit_6: "No Side Effects",
            p_card_5_title: "Pack Content",
            pack_protocol: "Phase Protocol",
            pack_usda: "USDA Certified",
            p_tag_resources: "Expert Resources",
            p_card_6_title: "Technical Documentation",
            p_card_6_desc: "Access official scientific information and optimization protocols to maximize your results.",
            doc_ficha_title: "Technical Sheet",
            doc_ficha_desc: "Detailed specifications",
            doc_protocolo_title: "Dietary Protocol",
            doc_protocolo_desc: "Step-by-step usage guide",
            doc_view: "View",
            doc_download: "Download",
            about_title: "Our Legacy",
            about_desc: "At Kezanix, we don't just create supplements; we design human optimization tools.",
            about_item_1_title: "Scientific Backing",
            about_item_1_desc: "Formulas developed under strict standards.",
            about_item_2_title: "Premium Quality",
            about_item_2_desc: "Guaranteed real results.",
            cta_title: "Ready to raise your standard?",
            cta_desc: "Join the thousands who have already unlocked their maximum potential with Kezanix Keto.",
            cta_btn: "Enter Official Store",
            footer_rights: "© 2026 Kezanix. All rights reserved.",
            ticker_text: "KETOGENIC ENERGY • MENTAL CLARITY • LIMITLESS PERFORMANCE • CELLULAR HEALTH • KEZANIX WELLNESS • KETOGENIC ENERGY • MENTAL CLARITY • LIMITLESS PERFORMANCE • CELLULAR HEALTH • KEZANIX WELLNESS • KETOGENIC ENERGY • MENTAL CLARITY • LIMITLESS PERFORMANCE • CELLULAR HEALTH • KEZANIX WELLNESS • ",
            hud_weight: "Weight<br>Control",
            hud_energy: "Sustained<br>Energy",
            hud_focus: "Better<br>Focus",
            hud_sleep: "Restful<br>Sleep",
            teaser_p_tag: "Innovation",
            teaser_p_title: "Pure Energy, Total Performance",
            teaser_p_desc: "Optimize your metabolism and reach deep ketosis naturally. No crashes, only mental and physical clarity.",
            teaser_p_btn: "See details on Keto Prime",
            teaser_a_tag: "Our Mission",
            teaser_a_title: "Science at the Service of Wellness",
            teaser_a_desc: "We merge food technology with neuroscience to deliver the most powerful supplement on the market.",
            teaser_a_btn: "Learn more about us",
            test_tag: "Real Success",
            test_title: "Stories of Change",
            test_btn: "See testimonial",
            test_q1: '"Keto Prime helped me break the 90 kilos limit. After years of stagnation, I finally saw real results. I am very happy."',
            test_q2: '"As a Zumba instructor I need energy every day, and Keto Prime has given it to me. I feel more active and focused in every class."',
            test_q3: '"In the menopause stage, everything becomes more complicated due to hormonal changes. Keto Prime has helped me a lot to feel better and more balanced."',
            test_q4: '"I have lost weight and, most importantly, it has helped me with anxiety. Now I feel more in control and at peace."',
            test_q5: '"As a physically active person, Keto Prime has helped me tone up, improve my digestion and maintain incredible concentration during the day."',
            test_q6: '"This product allowed me to get my life back. It has helped me with my allergies, my weight, and feeling in control again."',
            test_q7: '"Now I enjoy renewed energy, less inflammation and a well-being that is noticeable in my day to day. Keto Prime really makes a difference."',
            test_q8: '"More energy, less inflammation and 4 kilos less. Mary Cecilia did it in just two weeks with Keto Prime."',
            test_q9: '"My body changed completely. I lived with inflammation, slow metabolism and that feeling of being trapped in my own body. With Keto Prime I started to recover lightness, energy and well-being."',
            test_q10: '"Thanks to Keto Prime I am achieving incredible results that transform my health day by day. I lost 13.8 kilos and, more importantly, I recovered my energy and confidence."',
            test_q11: '"For months I kept trying to tone up, reduce inflammation, and improve my digestion... and I found in Keto Prime the support I needed to advance without frustration."',
            test_q12: '"My change has been complete. With Keto Prime as an ally I have worked with consistency and determination, and today I see a progress that inspires me to continue."',
            test_q13: '"I work twice as hard, dream big and don\'t slow down. Keto Prime became the real boost I needed to move forward with energy and clarity every day."',            
            footer_copy: "© 2026 KEZANIX GROUP. All rights reserved.",
            about_tag: "Our History",
            about_title: "Founding a New Standard",
            about_text: "Faced with a global reality where more than 700 million people live with excess weight, KEZANIX was born in the United States with a clear mission: to make transforming your body also transforming your life.<br><br>We are a team passionate about real wellness, and KetoPrime is our answer — science, nature, and nutrition in a single system.<br><br>Because health is not a destination. It is a lifestyle.",
            about_m_title: "Mission",
            about_m_desc: "To empower every individual to reach their maximum metabolic and cognitive potential through cutting-edge nutritional science and uncompromised products.",
            about_v_title: "Vision",
            about_v_desc: "To be the leading global brand in human longevity and performance, redefining the limits of what the body and mind can achieve with the right fuel.",
            about_val_title: "Values",
            about_val_1: "Scientific Integrity",
            about_val_2: "Constant Innovation",
            about_val_3: "Exceptional Quality",
            about_val_4: "Real Impact",
            b_tag_1: "Kezanix Content",
            b_title_1: "Science and Health",
            b_desc_1: "Explore the advanced science of ketosis with Kezanix.",
            b_tag_2: "Kezanix Content",
            b_title_2: "Keto Recipe Book",
            b_desc_2: "Powerful flavors designed for your maximum performance.",
            b_tab_1: "Blogs",
            b_tab_2: "Keto Recipe Book",
            res_tag_1: "Science",
            res_title_1: "Ketosis & Diabetes",
            res_tag_2: "Biohacking",
            res_title_2: "Epigenetics & Ketosis",
            res_tag_3: "Nutrition",
            res_title_3: "Weight Loss",
            res_tag_4: "Metabolism",
            res_title_4: "Combating Obesity",
            res_tag_5: "Hormones",
            res_title_5: "Hormonal Health",
            res_tag_6: "Health",
            res_title_6: "Inflammatory Balance",
            res_tag_7: "Sports",
            res_title_7: "Exercise & Ketosis",
            res_tag_8: "Brain",
            res_title_8: "Brain Health",
            res_tag_9: "Origin",
            res_title_9: "Natural State",
            res_tag_10: "Education",
            res_title_10: "Dietary Differences",
            rec_tag_1: "Breakfast",
            rec_title_1: "Creamy Eggs",
            rec_tag_2: "Lunch",
            rec_title_2: "Lemon Chicken",
            rec_tag_3: "Dinner",
            rec_title_3: "Beef Casserole",
            rec_tag_4: "Snack",
            rec_title_4: "Cheese Taco",
            rec_tag_5: "Lunch",
            rec_title_5: "Tuna Salad",
            rec_tag_6: "Dinner",
            rec_title_6: "Creamy Meatballs",
            rec_tag_7: "Basic",
            rec_title_7: "Cauliflower Rice",
            rec_tag_8: "Basic",
            rec_title_8: "Skillet Keto Bread",
            rec_tag_9: "Dinner",
            rec_title_9: "Skillet Keto Pizza",
            rec_tag_10: "Dessert",
            rec_title_10: "Keto Brownie",
            community_title: "Be part of the Keto Prime community",
            community_desc: "Discover valuable information and exclusive recipes for your well-being.",
            community_btn: "Explore Well-being"
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('kezanix_lang', lang);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        document.documentElement.lang = lang;
    }

    // Mobile Menu Logic
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            mobileOverlay.classList.add('active');
        });
        mobileClose.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileOverlay.classList.remove('active');
            });
        });
    }

    // --- SPA View Controller ---
    window.switchView = function(viewId) {
        const sections = document.querySelectorAll('.view-section');
        const targetSection = document.getElementById(viewId) || document.getElementById('view-' + viewId);

        if (!targetSection) return;
        sections.forEach(s => s.classList.remove('active'));
        targetSection.classList.add('active');
        targetSection.scrollTop = 0;

        document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
            const href = link.getAttribute('href').substring(1);
            link.classList.toggle('active-nav', href === viewId);
        });

        if (window.location.hash.substring(1) !== viewId) {
            history.pushState(null, null, '#' + viewId);
        }
    };

    // --- PNG Sequence Canvas Scrubbing Engine ---
    const canvas      = document.getElementById('scrub-canvas');
    const ctx         = canvas ? canvas.getContext('2d') : null;
    
    const bgCanvas    = document.getElementById('bg-canvas');
    const bgCtx       = bgCanvas ? bgCanvas.getContext('2d') : null;

    const loaderEl    = document.getElementById('seq-loader');
    const loaderBar   = document.getElementById('seq-loader-bar');
    const loaderText  = document.getElementById('seq-loader-text');
    const scrubContainer = document.querySelector('.product-scrub-container');
    const productView    = document.getElementById('view-producto');

    const TOTAL_FRAMES = 240;  // PRODUCT_00000.png … PRODUCT_00239.png
    const FRAME_PATH   = 'Pouch SEC/PRODUCT_';
    const frames       = new Array(TOTAL_FRAMES).fill(null);

    const BG_TOTAL_FRAMES = 143; // Blue Dusty Powder Explosion_00000.png … Blue Dusty Powder Explosion_00142.png
    const BG_FRAME_PATH   = 'Blue Dusty Powder Explosion/Blue Dusty Powder Explosion_';
    const bgFrames       = new Array(BG_TOTAL_FRAMES).fill(null);

    let   loadedCount  = 0;
    const totalToLoad  = TOTAL_FRAMES + BG_TOTAL_FRAMES;
    let   currentFrame = 0;
    let   bgCurrentFrame = 0;
    let   seqReady     = false;

    function padIndex(i) {
        return String(i).padStart(5, '0'); // 00000 … 00239
    }

    function drawFrame(index) {
        if (!ctx || !frames[index]) return;
        canvas.width  = frames[index].naturalWidth;
        canvas.height = frames[index].naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frames[index], 0, 0);
    }

    function drawBgFrame(index) {
        if (!bgCtx || !bgFrames[index]) return;
        bgCanvas.width  = bgFrames[index].naturalWidth;
        bgCanvas.height = bgFrames[index].naturalHeight;
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        bgCtx.drawImage(bgFrames[index], 0, 0);
    }

    if (canvas && ctx) {
        const checkLoadComplete = (i, isBg) => {
            loadedCount++;
            const pct = Math.round((loadedCount / totalToLoad) * 100);
            if (loaderBar)  loaderBar.style.width  = pct + '%';
            if (loaderText) loaderText.textContent = 'Cargando... ' + pct + '%';

            if (!isBg && i === 0 && !seqReady) drawFrame(0);
            if (isBg  && i === 0 && !seqReady) drawBgFrame(0);

            if (loadedCount === totalToLoad) {
                seqReady = true;
                if (loaderEl) {
                    loaderEl.style.transition = 'opacity 0.6s ease';
                    loaderEl.style.opacity    = '0';
                    setTimeout(() => loaderEl.style.display = 'none', 650);
                }
                drawFrame(0);
                drawBgFrame(0);
            }
        };

        // Preload foreground frames
        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = FRAME_PATH + padIndex(i) + '.png';
            img.onload = () => checkLoadComplete(i, false);
            frames[i] = img;
        }

        // Preload background frames
        if (bgCanvas && bgCtx) {
            for (let i = 0; i < BG_TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = BG_FRAME_PATH + padIndex(i) + '.png';
                img.onload = () => checkLoadComplete(i, true);
                bgFrames[i] = img;
            }
        }

        // Scroll → frame mapping + glow update
        if (scrubContainer && productView) {
            productView.addEventListener('scroll', () => {
                const scrollPos    = productView.scrollTop;
                const scrollHeight = scrubContainer.offsetHeight - window.innerHeight;
                const fraction     = Math.max(0, Math.min(1, scrollPos / scrollHeight));
                
                const frameIndex   = Math.round(fraction * (TOTAL_FRAMES - 1));
                if (frameIndex !== currentFrame && frames[frameIndex] && frames[frameIndex].complete) {
                    currentFrame = frameIndex;
                    drawFrame(currentFrame);
                }

                if (bgCanvas) {
                    const bgFrameIndex = Math.round(fraction * (BG_TOTAL_FRAMES - 1));
                    if (bgFrameIndex !== bgCurrentFrame && bgFrames[bgFrameIndex] && bgFrames[bgFrameIndex].complete) {
                        bgCurrentFrame = bgFrameIndex;
                        drawBgFrame(bgCurrentFrame);
                    }
                }

                // Glow reacts to scroll: scale + color temperature
                if (productGlow) {
                    const s = 0.8 + fraction * 0.7; // 0.8 → 1.5
                    const alpha1 = 0.45 + fraction * 0.4;
                    const alpha2 = 0.20 + fraction * 0.3;
                    productGlow.style.transform = `translate(-50%, -50%) scale(${s})`;
                    productGlow.style.background = `radial-gradient(circle,
                        rgba(56, ${Math.round(130 + fraction * 80)}, 255, ${alpha1.toFixed(2)}) 0%,
                        rgba(34, 56, 255, ${alpha2.toFixed(2)}) 35%,
                        transparent 75%)`;
                }

                // Navbar glass effect on scroll
                const nav = document.querySelector('nav');
                if (scrollPos > 50) nav.classList.add('nav-scrolled');
                else                nav.classList.remove('nav-scrolled');
            }, { passive: true });
        }
    }

    // --- Floating Bubble Particles (Product Dark Theme) ---
    const bubblesContainer = document.getElementById('product-bubbles');
    const productGlow      = document.getElementById('product-glow');

    if (bubblesContainer) {
        const BUBBLE_COUNT = 30;
        for (let i = 0; i < BUBBLE_COUNT; i++) {
            const b    = document.createElement('div');
            b.className = 'bubble';

            const size     = Math.random() * 55 + 8;
            const left     = Math.random() * 100;
            const duration = Math.random() * 13 + 15;   // 15s – 28s (slow, dreamy)
            const startPct = Math.random() * 85 + 5;
            const delay    = -(duration * (startPct / 100));
            const blurPx   = Math.random() * 9 + 3;    // 3px – 12px (softer blur)
            const baseOp   = (Math.random() * 0.18 + 0.05).toFixed(2);
            const hx       = Math.round(25 + Math.random() * 25);
            const hy       = Math.round(20 + Math.random() * 20);

            b.style.cssText = [
                `width:${size}px`,
                `height:${size}px`,
                `left:${left}%`,
                `bottom:${startPct}%`,
                `filter:blur(${blurPx}px)`,
                `opacity:${baseOp}`,
                `animation-duration:${duration}s`,
                `animation-delay:${delay}s`,
                `background:radial-gradient(circle at ${hx}% ${hy}%,rgba(120,200,255,0.60),rgba(80,170,255,0.18))`,
                `border:1px solid rgba(180,225,255,0.20)`,
            ].join(';');

            bubblesContainer.appendChild(b);
        }
    }

    // --- Global Nav Scroll Handler for other views ---
    const allViews = document.querySelectorAll('.view-section');
    allViews.forEach(view => {
        if (view.id === 'view-producto') return; // Handled above
        view.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (view.scrollTop > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        }, { passive: true });
    });

    // --- Global Reveal System (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    const globalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Keep active once revealed for smoother experience
                // Or remove it if you want the reveal to trigger every time
                // entry.target.classList.remove('active'); 
            }
        });
    }, { 
        threshold: 0.1, // Trigger earlier for smoother entry
        rootMargin: '0px 0px -50px 0px' // Slightly offset for better visual timing
    });
    
    revealElements.forEach(el => globalObserver.observe(el));

    // --- Listeners & Detection ---
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1) || 'inicio';
        switchView(hash);
    });

    document.querySelectorAll('.nav-links a, .logo').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '#inicio';
            if (href.startsWith('#')) {
                e.preventDefault();
                switchView(href.substring(1));
            }
        });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    const savedLang = localStorage.getItem('kezanix_lang') || 
                      (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(savedLang);

    const initialHash = window.location.hash.substring(1) || 'inicio';
    switchView(initialHash);

    // Parallax logic for other sections can go here if needed
    
    // --- Testimonials Carousel Logic ---
    let currentTestimonial = 0;
    const track = document.getElementById('testimonial-track');
    let autoSlideInterval;

    window.moveCarousel = (direction) => {
        if (!track) return;
        const cards = document.querySelectorAll('.testimonial-card');
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth + 30; // + gap
        const visibleCards = window.innerWidth > 968 ? 3 : 1;
        const maxIndex = Math.max(0, cards.length - visibleCards);
        
        currentTestimonial += direction;
        
        // Circular Infinite Loop
        if (currentTestimonial < 0) currentTestimonial = maxIndex;
        else if (currentTestimonial > maxIndex) currentTestimonial = 0;
        
        const offset = currentTestimonial * cardWidth;
        track.style.transform = `translateX(-${offset}px)`;
        
        resetAutoSlide();
    };

    function startAutoSlide() {
        if (!track) return;
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            moveCarousel(1);
        }, 2500); 
    }

    function resetAutoSlide() {
        startAutoSlide();
    }

    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    // Initialize auto sliding on load
    startAutoSlide();

    // --- Interactive Product Mockup (Home Parallax - Focused) ---
    const pouch = document.getElementById('interactive-pouch');
    const mockupWrapper = document.querySelector('.interactive-mockup-wrapper');

    if (pouch && mockupWrapper) {
        mockupWrapper.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = mockupWrapper.getBoundingClientRect();
            // Relative cursor position from -0.5 to 0.5 within the wrapper
            const relX = (e.clientX - left) / width - 0.5;
            const relY = (e.clientY - top) / height - 0.5;

            // Sensitivity Factors (Optimized for focused area)
            const tiltX = relY * 35; // Rotate around X
            const tiltY = -relX * 35; // Rotate around Y
            const moveX = relX * 20; // Slight horizontal shift
            const moveY = relY * 20; // Slight vertical shift

            pouch.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${moveX}px) translateY(${moveY}px) scale(1.05)`;
            pouch.style.animation = 'none'; // Pause floating while interacting
        });

        mockupWrapper.addEventListener('mouseleave', () => {
            pouch.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateX(0) translateY(0) scale(1)';
            pouch.style.animation = 'pouchFloat 6s ease-in-out infinite'; // Resume floating
        });
    }

    // --- Bienestar Content Logic (Simplified for CSS Transitions) ---
    window.switchBienestarTab = function(tabId) {
        // Toggle Grids
        document.querySelectorAll('.bienestar-grid').forEach(g => g.classList.remove('active'));
        document.getElementById('bienestar-' + tabId).classList.add('active');

        // Toggle All Button Pairs (in both twin blocks)
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.btn-' + tabId).forEach(b => b.classList.add('active'));

        // Toggle Focus Class for Backgrounds and Header Cross-fade
        const bienestarView = document.getElementById('view-bienestar');
        bienestarView.classList.remove('focus-blogs', 'focus-recipes');
        bienestarView.classList.add('focus-' + tabId);
    };

    const resources = {
        blog: {
            1: {
                title: "Cetosis, diabetes y resistencia a la insulina: una mirada clara y basada en ciencia",
                tag: "Ciencia",
                img: "BLOGS/BLOG 1/FOTO BLOG 1.png",
                author: "Giovanni Coto",
                date: "12 Marzo, 2026",
                content: `
                    <p>La resistencia a la insulina se ha convertido en uno de los problemas metabólicos más comunes de la actualidad. Muchas personas viven con cansancio constante, aumento de peso, antojos intensos y niveles de glucosa que suben lentamente con los años, sin saber que su cuerpo ya no responde de forma adecuada a la insulina. Este proceso, cuando avanza, puede derivar en prediabetes, diabetes tipo 2, inflamación crónica y acumulación de grasa abdominal, especialmente la visceral.</p>
                    <p>En los últimos años, la dieta cetogénica y la cetosis nutricional han llamado la atención de la comunidad científica por su impacto en la salud metabólica. Al reducir de manera significativa la ingesta de carbohidratos, el cuerpo cambia su fuente principal de energía y comienza a utilizar grasas y cetonas. Este cambio metabólico puede disminuir la carga de glucosa en sangre, reducir la necesidad de insulina y favorecer una mejor sensibilidad en los tejidos, lo que abre una puerta interesante para quienes buscan mejorar su control glucémico.</p>
                    <p>La evidencia disponible muestra que, en personas con diabetes tipo 2, un enfoque bajo en carbohidratos puede ayudar a estabilizar los niveles de glucosa, reducir la hemoglobina glicosilada (HbA1c) y apoyar la pérdida de grasa corporal. También se ha observado una disminución en la variabilidad glucémica y una mayor sensación de saciedad, lo que facilita la adherencia a largo plazo. En el caso de la diabetes tipo 1, la cetosis puede ofrecer beneficios en la estabilidad de la glucosa, pero requiere supervisión estricta debido al riesgo de cetoacidosis si no se maneja correctamente.</p>
                    <p>Para aplicar este enfoque de manera segura, es importante contar con acompañamiento profesional, especialmente si la persona utiliza medicamentos para la glucosa o la presión arterial. Una dieta cetogénica bien diseñada no se basa en eliminar alimentos al azar, sino en priorizar grasas saludables como aceite de oliva, aguacate, frutos secos y pescados grasos; proteínas de calidad; y una variedad de verduras bajas en carbohidratos. La hidratación y el equilibrio de electrolitos también son fundamentales para evitar malestares durante la transición metabólica.</p>
                    <p>El monitoreo regular de glucosa y, cuando es posible, de cetonas, permite ajustar la alimentación según la respuesta individual. Algunas personas entran en cetosis con facilidad; otras requieren un enfoque más gradual. Lo importante es entender que no se trata de una dieta rígida, sino de una herramienta que puede adaptarse a diferentes estilos de vida y objetivos.</p>
                    <p>La cetosis nutricional no es una solución mágica, pero sí una estrategia con respaldo científico que puede mejorar la salud metabólica, apoyar la pérdida de grasa y aumentar la energía diaria. Cuando se aplica con criterio y acompañamiento, puede convertirse en un recurso valioso para quienes buscan recuperar el equilibrio de su metabolismo y mejorar su bienestar general.</p>
                `
            },
            2: {
                title: "Cetosis, epigenética y expresión genética: cómo la alimentación puede influir en tu biología",
                tag: "Biohacking",
                img: "BLOGS/BLOG 2/FOTO BLOG 2.png",
                author: "Giovanni Coto",
                date: "25 de Marzo, 2026",
                content: `
                    <p>Durante años se creyó que la genética era un destino fijo, una especie de programación inalterable que definía nuestra salud, nuestro metabolismo y nuestra tendencia a ganar o perder peso. Hoy sabemos que no es así. La ciencia de la epigenética ha demostrado que los genes no funcionan como interruptores rígidos, sino como sistemas dinámicos que responden al entorno, al estilo de vida y, especialmente, a la alimentación. Entre los enfoques nutricionales que más interés han generado en este campo se encuentra la cetosis nutricional.</p>
                    <p>La cetosis ocurre cuando el cuerpo reduce de forma significativa la ingesta de carbohidratos y comienza a utilizar grasas como fuente principal de energía. Este cambio metabólico produce cetonas, como el beta‑hidroxibutirato, que no solo sirven como combustible, sino que también actúan como moléculas de señalización capaces de influir en procesos celulares profundos. En los últimos años, diversos estudios han mostrado que estas cetonas pueden interactuar con mecanismos epigenéticos, modulando la expresión de genes relacionados con inflamación, estrés oxidativo, longevidad y metabolismo energético.</p>
                    <p>Uno de los hallazgos más interesantes es el papel del beta‑hidroxibutirato como inhibidor de ciertas enzimas que regulan la compactación del ADN. Al modificar este proceso, algunas regiones del genoma pueden volverse más accesibles o menos activas, lo que impacta directamente en la forma en que las células responden al entorno. Esto se ha asociado con una reducción de la inflamación sistémica, una mayor eficiencia metabólica y una mejor respuesta al estrés celular. En otras palabras, la cetosis no solo cambia la forma en que el cuerpo obtiene energía, sino también la forma en que las células “leen” la información genética.</p>
                    <p>Además, la cetosis parece influir en rutas relacionadas con la longevidad, como las vías de AMPK, mTOR y sirtuinas, que participan en la reparación celular, el equilibrio energético y la protección frente al daño oxidativo. Estas rutas son las mismas que se activan durante el ayuno, lo que sugiere que la cetosis podría imitar algunos de los beneficios metabólicos asociados a periodos de restricción calórica. Esto ha despertado interés en su potencial para apoyar la salud metabólica, mejorar la flexibilidad energética y favorecer un envejecimiento más saludable.</p>
                    <p>Aunque la investigación sigue avanzando, la evidencia actual indica que la cetosis puede ser una herramienta poderosa para influir en procesos epigenéticos de manera positiva. Sin embargo, como cualquier intervención nutricional profunda, requiere un enfoque responsable. Una dieta cetogénica bien diseñada debe incluir grasas saludables, proteínas de calidad y una variedad de vegetales bajos en carbohidratos que aporten micronutrientes esenciales. También es importante contar con acompañamiento profesional, especialmente en personas con condiciones metabólicas o que utilizan medicación.</p>
                    <p>La relación entre cetosis, epigenética y expresión genética abre una ventana fascinante hacia una nutrición más personalizada y consciente. No se trata solo de perder peso o controlar la glucosa, sino de entender cómo ciertos patrones alimentarios pueden influir en la biología más íntima del cuerpo. La cetosis no es una solución mágica, pero sí una estrategia respaldada por ciencia emergente que muestra cómo nuestras decisiones diarias pueden moldear la forma en que nuestros genes se expresan y, con ello, nuestro bienestar a largo plazo.</p>
                `
            },
            3: {
                title: "Cetosis y pérdida de peso: lo que dice la ciencia en la actualidad",
                tag: "Nutrición",
                img: "BLOGS/BLOG 3/FOTO BLOG 3.png",
                author: "Giovanni Coto",
                date: "30 de Marzo, 2026",
                content: `
                    <p>La pérdida de peso es uno de los motivos más comunes por los que muchas personas se acercan a la dieta cetogénica, pero detrás de los resultados visibles hay procesos metabólicos profundos que explican por qué este enfoque funciona para ciertos cuerpos. La cetosis nutricional ocurre cuando la ingesta de carbohidratos se reduce lo suficiente como para que el organismo cambie su fuente principal de energía y comience a utilizar grasas y cetonas. Este cambio no solo modifica la forma en que el cuerpo obtiene combustible, sino también la manera en que regula el apetito, la saciedad y el almacenamiento de grasa.</p>
                    <p>La evidencia científica actual muestra que, al disminuir los carbohidratos, se reducen los picos de glucosa e insulina, dos factores clave en la acumulación de grasa corporal. Cuando la insulina se mantiene baja por más tiempo, el cuerpo tiene mayor facilidad para movilizar grasa almacenada y utilizarla como energía. Esto explica por qué muchas personas experimentan una pérdida de peso más rápida en las primeras semanas de cetosis, acompañada de una sensación de mayor control sobre el apetito. Además, las cetonas parecen tener un efecto directo en el cerebro, favoreciendo la saciedad y reduciendo los antojos intensos de carbohidratos.</p>
                    <p>Otro aspecto relevante es la mejora en la sensibilidad a la insulina. Muchas personas que luchan con el peso tienen algún grado de resistencia a esta hormona, lo que dificulta la pérdida de grasa incluso con dietas tradicionales. La cetosis puede ayudar a revertir parcialmente este proceso, permitiendo que el metabolismo responda de manera más eficiente. También se ha observado una reducción en la inflamación sistémica, un factor que influye tanto en el aumento de peso como en la retención de líquidos y la sensación de hinchazón.</p>
                    <p>La pérdida de peso en cetosis no depende únicamente del déficit calórico, sino de una reorganización completa del metabolismo. Al utilizar grasas como fuente principal de energía, el cuerpo se vuelve más flexible y eficiente, lo que facilita mantener resultados a largo plazo. Sin embargo, para que este proceso sea sostenible, es fundamental que la alimentación incluya grasas saludables, proteínas de calidad y vegetales bajos en carbohidratos que aporten micronutrientes esenciales. Una dieta cetogénica bien diseñada no es restrictiva ni monótona; es estratégica.</p>
                    <p>La ciencia actual coincide en que la cetosis puede ser una herramienta efectiva para la pérdida de peso, especialmente en personas con resistencia a la insulina, antojos intensos o dificultad para controlar el apetito. No es una solución mágica ni funciona igual para todos, pero sí representa un enfoque sólido y respaldado por evidencia para quienes buscan un cambio metabólico real. Cuando se aplica con criterio y acompañamiento, puede convertirse en un camino seguro y sostenible hacia un peso más saludable y un bienestar integral.</p>
                `
            },
            4: {
                title: "Dieta cetogénica como herramienta contra la obesidad y los trastornos metabólicos",
                tag: "Metabolismo",
                img: "BLOGS/BLOG 4/FOTO BLOG 4.png",
                author: "Giovanni Coto",
                date: "3 de Abril, 2026",
                content: `
                    <p>La obesidad y los trastornos metabólicos se han convertido en uno de los mayores desafíos de salud pública en el mundo moderno. Más allá de la apariencia física, estos problemas están profundamente relacionados con inflamación crónica, resistencia a la insulina, alteraciones hormonales y un metabolismo que pierde flexibilidad con el tiempo. En este contexto, la dieta cetogénica ha emergido como una estrategia nutricional capaz de influir directamente en los mecanismos que originan estos desequilibrios.</p>
                    <p>La cetosis nutricional ocurre cuando el cuerpo reduce de forma significativa la ingesta de carbohidratos y comienza a utilizar grasas como fuente principal de energía. Este cambio metabólico tiene efectos que van mucho más allá de la pérdida de peso. Al disminuir los niveles de glucosa e insulina, el organismo puede acceder con mayor facilidad a sus reservas de grasa, lo que favorece una reducción progresiva del tejido adiposo, especialmente el visceral, que es el más asociado a riesgo cardiometabólico.</p>
                    <p>La evidencia científica actual muestra que la dieta cetogénica puede mejorar la sensibilidad a la insulina, reducir la inflamación sistémica y estabilizar los niveles de glucosa en personas con obesidad, prediabetes o diabetes tipo 2. Estos beneficios no dependen únicamente del déficit calórico, sino de una reorganización profunda del metabolismo. Al utilizar grasas y cetonas como combustible, el cuerpo se vuelve más eficiente, reduce la variabilidad glucémica y experimenta una mayor sensación de saciedad, lo que facilita la adherencia a largo plazo.</p>
                    <p>Otro aspecto relevante es su impacto en la flexibilidad metabólica. Muchas personas con obesidad presentan dificultad para cambiar entre carbohidratos y grasas como fuente de energía, lo que genera fatiga, antojos intensos y acumulación de grasa. La cetosis ayuda a restaurar esta capacidad, permitiendo que el cuerpo responda mejor a diferentes demandas energéticas. Esto se traduce en más energía, menos hambre emocional y una reducción gradual del peso corporal.</p>
                    <p>La dieta cetogénica también ha mostrado beneficios en condiciones asociadas a la obesidad, como hígado graso no alcohólico, síndrome metabólico y dislipidemias. En varios estudios, se ha observado una disminución de triglicéridos, un aumento del HDL y una mejora en marcadores inflamatorios. Estos cambios contribuyen a un perfil metabólico más saludable y a una reducción del riesgo cardiovascular.</p>
                    <p>Para que este enfoque sea seguro y sostenible, es fundamental que esté bien diseñado. Una dieta cetogénica efectiva no se basa en eliminar alimentos sin criterio, sino en priorizar grasas saludables, proteínas de calidad y vegetales bajos en carbohidratos que aporten fibra, vitaminas y minerales. El acompañamiento profesional es clave, especialmente en personas que utilizan medicación para la glucosa o la presión arterial, ya que los ajustes deben hacerse de manera gradual y controlada.</p>
                    <p>La dieta cetogénica no es una solución milagrosa, pero sí una herramienta poderosa cuando se aplica con conocimiento y estrategia. Su capacidad para influir en la inflamación, la sensibilidad a la insulina, la saciedad y la flexibilidad metabólica la convierte en una opción sólida para quienes buscan abordar la obesidad desde su raíz y no solo desde la restricción calórica. Con un enfoque responsable, puede ser un camino efectivo hacia una salud metabólica más estable y un bienestar integral.</p>
                `
            },
            5: {
                title: "Cetosis y salud hormonal: cómo influye en el equilibrio del cuerpo",
                tag: "Hormonas",
                img: "BLOGS/BLOG 5/FOTO BLOG 5.png",
                author: "Giovanni Coto",
                date: "5 Abril, 2026",
                content: `
                    <p>Las hormonas regulan prácticamente todo lo que ocurre en el organismo: el apetito, el metabolismo, el estado de ánimo, la energía, la inflamación y la forma en que el cuerpo almacena o libera grasa. Cuando estas señales internas se desequilibran, aparecen síntomas como aumento de peso, fatiga, antojos intensos, cambios en el estado emocional, dificultad para dormir y problemas metabólicos. En los últimos años, la cetosis nutricional ha despertado interés por su capacidad para influir en varios de estos sistemas hormonales de manera positiva.</p>
                    <p>La cetosis ocurre cuando el cuerpo reduce de forma significativa la ingesta de carbohidratos y comienza a utilizar grasas y cetonas como fuente principal de energía. Este cambio no solo afecta el metabolismo, sino también la forma en que el cuerpo regula hormonas clave como la insulina, el cortisol, la leptina, la grelina y las hormonas sexuales. Una de las primeras mejoras observadas es la reducción de los niveles de insulina, una hormona que, cuando se mantiene elevada por largos periodos, favorece el almacenamiento de grasa, aumenta la inflamación y dificulta la pérdida de peso. Al estabilizar la glucosa y disminuir la necesidad de insulina, el cuerpo recupera parte de su equilibrio metabólico.</p>
                    <p>La cetosis también parece influir en la leptina y la grelina, dos hormonas relacionadas con el hambre y la saciedad. Muchas personas experimentan una disminución de los antojos y una mayor sensación de control sobre el apetito, lo que facilita mantener un patrón alimentario más estable. Este efecto no se debe únicamente a la reducción de carbohidratos, sino también a la acción de las cetonas en el sistema nervioso, que pueden modular señales de hambre y energía.</p>
                    <p>Otro aspecto relevante es el impacto en el cortisol, la hormona del estrés. Aunque el estrés crónico puede elevar el cortisol y dificultar la pérdida de grasa, especialmente en la zona abdominal, la cetosis ha mostrado efectos interesantes en la regulación de esta hormona cuando se aplica de manera adecuada. Al mejorar la estabilidad energética y reducir la variabilidad glucémica, el cuerpo experimenta menos “picos y caídas” que suelen activar respuestas de estrés. Esto contribuye a una sensación de mayor claridad mental, energía sostenida y mejor manejo emocional.</p>
                    <p>En mujeres, la cetosis también ha sido estudiada en relación con el síndrome de ovario poliquístico (SOP), una condición marcada por resistencia a la insulina y desequilibrios hormonales. Algunos estudios han mostrado mejoras en ciclos menstruales, sensibilidad a la insulina y marcadores metabólicos, lo que sugiere que este enfoque puede ser una herramienta útil en ciertos casos. Sin embargo, como en cualquier intervención hormonal, la personalización es clave.</p>
                    <p>Para que la cetosis apoye realmente el equilibrio hormonal, es fundamental que la alimentación sea completa y bien diseñada. Esto incluye grasas saludables, proteínas de calidad, vegetales bajos en carbohidratos y una adecuada ingesta de micronutrientes. El descanso, la hidratación y el manejo del estrés también juegan un papel esencial, ya que las hormonas responden a todo el entorno, no solo a la comida.</p>
                    <p>La relación entre cetosis y salud hormonal es compleja, pero la evidencia actual muestra que puede ser una herramienta valiosa para mejorar la regulación del apetito, la sensibilidad a la insulina, la energía y el bienestar general. No es una solución universal, pero sí un enfoque sólido para quienes buscan recuperar equilibrio interno y apoyar su metabolismo desde la raíz.</p>
                `
            },
            6: {
                title: "Inflamación y dieta cetogénica: cómo la cetosis influye en el equilibrio inflamatorio del cuerpo",
                tag: "Salud",
                img: "BLOGS/BLOG 6/FOTO BLOG 6.png",
                author: "Giovanni Coto",
                date: "7 Abril, 2026",
                content: `
                    <p>La inflamación es un proceso natural del organismo, necesario para la reparación y la defensa. Sin embargo, cuando se vuelve crónica, comienza a afectar la energía, el metabolismo, el peso, la digestión y la salud general. Muchas personas viven con inflamación silenciosa sin saberlo: hinchazón constante, retención de líquidos, fatiga, dolor articular, dificultad para bajar de peso y una sensación persistente de malestar. En los últimos años, la dieta cetogénica ha despertado interés por su capacidad para influir en los mecanismos que regulan este tipo de inflamación.</p>
                    <p>La cetosis nutricional ocurre cuando el cuerpo reduce de manera significativa la ingesta de carbohidratos y comienza a utilizar grasas y cetonas como fuente principal de energía. Este cambio metabólico no solo modifica la forma en que el cuerpo obtiene combustible, sino también la forma en que responde a procesos inflamatorios. Una de las moléculas más estudiadas en este contexto es el beta‑hidroxibutirato, una cetona que actúa como señal celular y que puede modular rutas inflamatorias asociadas a condiciones metabólicas.</p>
                    <p>Diversas investigaciones han mostrado que el beta‑hidroxibutirato puede inhibir la activación de complejos inflamatorios como el NLRP3, un componente clave en la inflamación crónica relacionada con obesidad, resistencia a la insulina y enfermedades metabólicas. Al reducir esta activación, el cuerpo experimenta menos estrés oxidativo, menos inflamación sistémica y una mejor respuesta energética. Esto explica por qué muchas personas reportan una disminución en la hinchazón, una mejora en la digestión y una sensación de mayor ligereza después de entrar en cetosis.</p>
                    <p>La dieta cetogénica también influye en la variabilidad glucémica, un factor que contribuye a la inflamación. Los picos constantes de glucosa e insulina pueden activar rutas inflamatorias y favorecer el almacenamiento de grasa visceral, que es altamente inflamatoria. Al estabilizar la glucosa y reducir la necesidad de insulina, el cuerpo experimenta menos fluctuaciones metabólicas y una respuesta inflamatoria más equilibrada. Esto se traduce en más energía, menos antojos y una sensación general de bienestar.</p>
                    <p>Otro aspecto importante es la mejora en la salud intestinal. La inflamación crónica suele estar relacionada con desequilibrios en la microbiota, permeabilidad intestinal y sensibilidad a ciertos alimentos. La cetosis, al reducir azúcares y carbohidratos refinados, puede favorecer un entorno intestinal más estable y menos propenso a la inflamación. Aunque la investigación en este campo sigue creciendo, los resultados actuales son prometedores.</p>
                    <p>Para que la dieta cetogénica apoye realmente la reducción de la inflamación, es fundamental que esté bien diseñada. Esto implica priorizar grasas saludables como aceite de oliva, aguacate, frutos secos y pescados ricos en omega‑3, junto con proteínas de calidad y vegetales bajos en carbohidratos que aporten antioxidantes y micronutrientes esenciales. Una keto basada en alimentos procesados no ofrece los mismos beneficios y puede incluso generar el efecto contrario.</p>
                    <p>La relación entre inflamación y dieta cetogénica es uno de los campos más interesantes de la nutrición moderna. La evidencia actual muestra que la cetosis puede ayudar a modular procesos inflamatorios, mejorar la energía, apoyar la pérdida de grasa y favorecer un bienestar más estable. No es una solución universal, pero sí una herramienta sólida para quienes buscan reducir la inflamación desde la raíz y recuperar equilibrio en su salud metabólica.</p>
                `
            },
            7: {
                title: "Combinación de ejercicio + dieta cetogénica: cómo potenciar resultados y energía",
                tag: "Deporte",
                img: "BLOGS/BLOG 7/FOTO BLOG 7.png",
                author: "Giovanni Coto",
                date: "7 Abril, 2026",
                content: `
                    <p>La relación entre alimentación y movimiento siempre ha sido clave para la salud, pero en los últimos años la combinación de ejercicio con dieta cetogénica ha despertado un interés particular. Muchas personas que adoptan la cetosis notan cambios en su energía, su rendimiento y su composición corporal, y la ciencia ha comenzado a explicar por qué este enfoque puede potenciar los resultados cuando se integra con actividad física.</p>
                    <p>La cetosis nutricional ocurre cuando el cuerpo reduce de forma significativa la ingesta de carbohidratos y comienza a utilizar grasas y cetonas como fuente principal de energía. Este cambio metabólico favorece una mayor estabilidad energética, ya que las reservas de grasa son mucho más abundantes que las de glucógeno. Para quienes entrenan, esto puede traducirse en menos caídas de energía, mayor resistencia y una sensación de claridad mental durante el movimiento.</p>
                    <p>Uno de los beneficios más estudiados es la mejora en la flexibilidad metabólica. Muchas personas que dependen de carbohidratos para entrenar experimentan picos y caídas de energía, antojos intensos después del ejercicio y dificultad para quemar grasa. La cetosis ayuda a que el cuerpo utilice de manera más eficiente sus reservas de grasa, lo que favorece una oxidación más estable durante el entrenamiento. Esto es especialmente útil en actividades de resistencia, caminatas largas, ciclismo, entrenamientos de baja a moderada intensidad y rutinas de quema de grasa.</p>
                    <p>El ejercicio también potencia los efectos de la cetosis. Al mover el cuerpo, se mejora la sensibilidad a la insulina, se reduce la inflamación y se favorece la movilización de grasa almacenada. Esto crea un círculo virtuoso: la cetosis facilita el uso de grasa como energía, y el ejercicio acelera ese proceso. Además, el entrenamiento de fuerza juega un papel fundamental, ya que ayuda a preservar y desarrollar masa muscular, un factor clave para mantener un metabolismo activo y estable a largo plazo.</p>
                    <p>En cuanto al rendimiento, la evidencia muestra que las personas adaptadas a la cetosis pueden mantener niveles de energía estables durante entrenamientos prolongados. Aunque los deportes de alta intensidad dependen más del glucógeno, muchas personas reportan mejoras en recuperación, menos inflamación muscular y una sensación de energía más limpia y sostenida. Esto se debe en parte a la acción de las cetonas, que pueden reducir el estrés oxidativo y apoyar la función mitocondrial.</p>
                    <p>Para que la combinación de ejercicio y dieta cetogénica funcione de manera óptima, es importante que la alimentación esté bien diseñada. Esto incluye grasas saludables, proteínas suficientes para apoyar la recuperación muscular y una buena hidratación con electrolitos. El cuerpo necesita tiempo para adaptarse a utilizar grasas como combustible principal, por lo que las primeras semanas pueden sentirse diferentes. Una vez superada esta fase, muchas personas experimentan una mejora notable en su rendimiento y bienestar general.</p>
                    <p>La unión entre ejercicio y cetosis representa una estrategia poderosa para mejorar la composición corporal, aumentar la energía y apoyar la salud metabólica. No se trata de entrenar más, sino de entrenar con un metabolismo más eficiente. Cuando ambos enfoques se integran de manera consciente, los resultados pueden ser profundos y sostenibles.</p>
                `
            },
            8: {
                title: "Cetosis y salud cerebral: cómo las cetonas influyen en la energía, la claridad mental y la función cognitiva",
                tag: "Cerebro",
                img: "BLOGS/BLOG 8/FOTO BLOG 8.png",
                author: "Giovanni Coto",
                date: "9 Abril, 2026",
                content: `
                    <p>El cerebro es uno de los órganos más demandantes en términos de energía. Aunque tradicionalmente se ha dicho que depende casi exclusivamente de la glucosa, hoy sabemos que también puede funcionar de manera eficiente —e incluso más estable— utilizando cetonas como fuente de combustible. Este descubrimiento ha impulsado un creciente interés en la relación entre cetosis y salud cerebral, especialmente en áreas como claridad mental, memoria, enfoque y protección neuronal.</p>
                    <p>La cetosis nutricional ocurre cuando el cuerpo reduce de forma significativa la ingesta de carbohidratos y comienza a producir cetonas, como el beta‑hidroxibutirato. Estas moléculas no solo sirven como energía alternativa, sino que también actúan como señales metabólicas capaces de influir en procesos celulares profundos. A nivel cerebral, las cetonas ofrecen una fuente de energía más estable que la glucosa, lo que puede traducirse en menos fluctuaciones, mayor concentración y una sensación de claridad mental sostenida.</p>
                    <p>Uno de los aspectos más interesantes es la eficiencia energética. Las cetonas producen más energía por unidad de oxígeno que la glucosa, lo que significa que el cerebro puede funcionar con mayor estabilidad y menos estrés oxidativo. Esto explica por qué muchas personas reportan una mejora en el enfoque, la creatividad y la capacidad de mantener atención prolongada después de entrar en cetosis. Además, las cetonas pueden atravesar la barrera hematoencefálica con facilidad, lo que garantiza un suministro constante incluso cuando los niveles de glucosa son bajos.</p>
                    <p>La investigación también ha explorado el papel de la cetosis en la protección neuronal. El beta‑hidroxibutirato parece modular rutas relacionadas con la inflamación, el estrés oxidativo y la función mitocondrial, tres factores clave en el envejecimiento cerebral. Al reducir la inflamación y mejorar la eficiencia energética, la cetosis podría apoyar un entorno más favorable para la salud cognitiva a largo plazo. Esto ha generado interés en su potencial en condiciones como deterioro cognitivo leve, epilepsia, migrañas y enfermedades neurodegenerativas, aunque la investigación sigue avanzando.</p>
                    <p>Otro beneficio relevante es la estabilidad emocional. Muchas personas experimentan menos altibajos en el estado de ánimo cuando entran en cetosis, en parte porque las cetonas ayudan a estabilizar la energía cerebral y reducir la variabilidad glucémica. La sensación de “mente más tranquila” o “pensamiento más claro” es uno de los efectos más reportados por quienes adoptan este estilo de alimentación.</p>
                    <p>Para que la cetosis apoye realmente la salud cerebral, es fundamental que la alimentación sea completa y bien diseñada. Esto incluye grasas saludables como aceite de oliva, aguacate, frutos secos y pescados ricos en omega‑3, junto con proteínas de calidad y vegetales bajos en carbohidratos que aporten antioxidantes y micronutrientes esenciales. El descanso, la hidratación y el manejo del estrés también influyen directamente en la función cognitiva, por lo que forman parte del mismo ecosistema de bienestar.</p>
                    <p>La relación entre cetosis y salud cerebral es uno de los campos más prometedores de la nutrición moderna. La evidencia actual muestra que las cetonas pueden ofrecer una energía más estable, apoyar la claridad mental y contribuir a un entorno cerebral más equilibrado. No es una solución mágica, pero sí una herramienta poderosa para quienes buscan optimizar su rendimiento mental y cuidar su cerebro a largo plazo.</p>
                `
            },
            9: {
                title: "Qué es la cetosis y por qué es un estado natural del cuerpo desde que nacemos",
                tag: "Origen",
                img: "BLOGS/BLOG 9/FOTO BLOG 9.png",
                author: "Giovanni Coto",
                date: "15 Abril, 2026",
                content: `
                    <p>La cetosis es un estado metabólico en el que el cuerpo utiliza grasas y cetonas como su principal fuente de energía. Aunque hoy se habla de ella como una estrategia nutricional moderna, en realidad es un mecanismo profundamente humano, presente desde nuestros primeros días de vida. La cetosis no es una alteración del metabolismo, sino una de sus funciones más antiguas y eficientes.</p>
                    <p>Cuando la ingesta de carbohidratos disminuye, el cuerpo comienza a producir cetonas a partir de las grasas. Estas moléculas, como el beta‑hidroxibutirato, se convierten en un combustible limpio y estable que puede alimentar al cerebro, los músculos y otros tejidos. Este proceso no solo permite sobrevivir en ausencia de carbohidratos, sino que también ofrece beneficios en energía, claridad mental y estabilidad metabólica.</p>
                    <p>Uno de los datos más reveladores es que los seres humanos entramos en cetosis de manera natural desde el nacimiento. Los recién nacidos dependen en gran medida de las cetonas como fuente de energía, especialmente para el cerebro, que en esa etapa consume una cantidad enorme de recursos. La leche materna, rica en grasas y baja en carbohidratos, favorece este estado metabólico. Esto demuestra que la cetosis no es un estado artificial inducido por una dieta moderna, sino una función biológica diseñada para sostener el desarrollo humano.</p>
                    <p>A lo largo de la historia, la cetosis ha sido una herramienta de supervivencia. Nuestros antepasados pasaban por periodos de abundancia y escasez, y el cuerpo aprendió a alternar entre glucosa y grasas según la disponibilidad de alimentos. Esta flexibilidad metabólica permitía mantener energía estable incluso cuando no había carbohidratos accesibles. Hoy, en un entorno donde los carbohidratos son abundantes y constantes, muchas personas han perdido esa flexibilidad, lo que contribuye a problemas como resistencia a la insulina, inflamación y fatiga crónica.</p>
                    <p>La cetosis moderna, inducida a través de una dieta cetogénica, busca recuperar esa capacidad natural del cuerpo. Al reducir carbohidratos y priorizar grasas saludables, el metabolismo vuelve a utilizar cetonas como combustible, lo que puede mejorar la energía, la claridad mental y la estabilidad glucémica. Este proceso también favorece la pérdida de grasa, ya que el cuerpo aprende nuevamente a acceder a sus reservas y utilizarlas de manera eficiente.</p>
                    <p>Más allá de la energía, las cetonas actúan como moléculas de señalización que influyen en procesos celulares profundos. Se ha observado que pueden modular la inflamación, mejorar la función mitocondrial y apoyar la salud cerebral. Esto explica por qué muchas personas reportan mejoras en concentración, estado de ánimo y bienestar general cuando entran en cetosis.</p>
                    <p>La cetosis no es una moda pasajera ni una dieta extrema. Es un estado metabólico que forma parte de nuestra biología desde el primer día de vida. Comprenderlo desde esta perspectiva cambia por completo la narrativa: no se trata de forzar al cuerpo a hacer algo extraño, sino de permitirle volver a una función que siempre ha tenido. Cuando se aplica de manera consciente y bien diseñada, puede convertirse en una herramienta poderosa para recuperar equilibrio, energía y salud metabólica.</p>
                `
            },
            10: {
                title: "Diferencias entre la dieta cetogénica y otras dietas",
                tag: "Educación",
                img: "BLOGS/BLOG 10/FOTO BLOG 10.png",
                author: "Giovanni Coto",
                date: "17 Abril, 2026",
                content: `
                    <p>La dieta cetogénica ha ganado popularidad en los últimos años, pero su esencia no tiene nada que ver con las dietas tradicionales. Mientras muchos enfoques se centran únicamente en reducir calorías o eliminar grupos de alimentos sin un propósito metabólico claro, la cetosis propone algo distinto: cambiar la forma en que el cuerpo obtiene energía. Esa diferencia es lo que la convierte en un enfoque único dentro del mundo de la nutrición.</p>
                    <p>La mayoría de las dietas convencionales se basan en controlar porciones, disminuir calorías o aumentar el gasto energético a través del ejercicio. Aunque estos métodos pueden funcionar a corto plazo, suelen generar hambre, ansiedad y un metabolismo más lento. El cuerpo interpreta la restricción calórica constante como una señal de escasez y responde reduciendo su gasto energético, lo que dificulta mantener los resultados. Por eso muchas personas experimentan el famoso “rebote” después de seguir dietas estrictas.</p>
                    <p>La dieta cetogénica funciona desde otro ángulo. En lugar de obligar al cuerpo a comer menos, lo entrena para utilizar una fuente de energía más estable: las grasas. Al reducir los carbohidratos, la insulina disminuye y el cuerpo accede con mayor facilidad a sus reservas de grasa. Esto no solo favorece la pérdida de peso, sino que también mejora la energía, la claridad mental y la estabilidad emocional. La cetosis no depende de pasar hambre, sino de cambiar el combustible principal del metabolismo.</p>
                    <p>Otra diferencia importante es la relación con el apetito. Muchas dietas tradicionales generan antojos intensos porque mantienen al cuerpo en un ciclo constante de picos y caídas de glucosa. En cambio, la cetosis estabiliza esos niveles, lo que reduce el hambre emocional y facilita mantener un patrón alimentario más equilibrado. Las cetonas, además, tienen un efecto directo en el cerebro que favorece la saciedad y la concentración.</p>
                    <p>La calidad de los alimentos también marca una diferencia. Mientras algunas dietas se enfocan únicamente en “comer menos”, la cetogénica prioriza grasas saludables, proteínas de calidad y vegetales bajos en carbohidratos. Esto aporta micronutrientes esenciales, antioxidantes y una nutrición más completa. No se trata de eliminar alimentos sin sentido, sino de elegir aquellos que apoyan la función metabólica y la energía diaria.</p>
                    <p>A nivel metabólico, la cetosis ofrece beneficios que otras dietas no pueden replicar. La reducción de la inflamación, la mejora en la sensibilidad a la insulina y la estabilidad energética son efectos que van más allá del peso. Por eso se ha estudiado en contextos como resistencia a la insulina, síndrome metabólico, hígado graso y salud cerebral. No es solo una dieta para bajar de peso; es una estrategia para mejorar la forma en que el cuerpo funciona desde adentro.</p>
                    <p>La diferencia más profunda entre la dieta cetogénica y otros enfoques es que no busca forzar al cuerpo, sino devolverle una capacidad natural: la de utilizar grasas como energía. Es un estado metabólico que forma parte de nuestra biología y que ha acompañado a la humanidad durante miles de años. Cuando se aplica de manera consciente y bien diseñada, la cetosis no solo transforma la composición corporal, sino también la relación con la comida, la energía y el bienestar general.</p>
                `
            }
        },
        recipe: {
            1: {
                title: "Huevos cremosos con espinaca y parmesano",
                img: "RECETARIO/RECETA 1/FOTO 1.png",
                portions: "1-2 porciones",
                time: "5 minutos",
                difficulty: "Fácil",
                ingredients: ["2 huevos", "1 taza de espinaca fresca picada", "2 cdas de crema o queso crema", "1 cda de mantequilla", "1 cda de queso parmesano rallado", "Sal y pimienta al gusto"],
                steps: [
                    "Calentar la mantequilla en una sartén a fuego medio.",
                    "Agregar la espinaca y saltear hasta que reduzca.",
                    "Bajar el fuego y añadir los huevos ligeramente batidos.",
                    "Incorporar la crema o queso crema para dar textura cremosa.",
                    "Cocinar lentamente, moviendo suavemente hasta lograr la consistencia deseada.",
                    "Agregar parmesano, sal y pimienta antes de servir."
                ]
            },
            2: {
                title: "Pollo al limón keto",
                img: "RECETARIO/RECETA 2/FOTO 2.png",
                portions: "2 porciones",
                time: "25 minutos",
                difficulty: "Media",
                ingredients: ["2 pechugas de pollo sin piel", "2 cdas de mantequilla", "1 cda de aceite de oliva", "Jugo de 1 limón fresco", "1 cdta de ralladura de limón", "1 diente de ajo picado", "1/4 taza de caldo de pollo", "Perejil fresco, sal y pimienta"],
                steps: [
                    "Secar las pechugas de pollo y sazonarlas con sal y pimienta.",
                    "Calentar el aceite de oliva y la mantequilla en una sartén a fuego medio.",
                    "Dorar el pollo por ambos lados hasta que esté bien sellado.",
                    "Agregar el ajo y saltearlo unos segundos.",
                    "Incorporar el jugo, ralladura y caldo de pollo.",
                    "Bajar el fuego y cocinar tapado durante 10-12 minutos.",
                    "Espolvorear perejil fresco antes de servir."
                ]
            },
            3: {
                title: "Cazuela keto de carne y vegetales",
                img: "RECETARIO/RECETA 3/FOTO 3.png",
                portions: "3-4 porciones",
                time: "30 minutos",
                difficulty: "Media",
                ingredients: ["400g de carne molida", "1 taza de brócoli picado", "1/2 taza de calabacín", "1/2 taza de pimiento rojo", "1/2 taza de crema agria", "1 taza de mozzarella rallado", "2 cdas de mantequilla", "Ajo, sal, pimienta y orégano"],
                steps: [
                    "Precalentar el horno a 180°C.",
                    "Derretir la mantequilla y saltear el ajo.",
                    "Agregar la carne molida y cocinar hasta dorar.",
                    "Incorporar los vegetales y cocinar unos minutos.",
                    "Añadir la crema y mitad del queso, mezclando bien.",
                    "Pasar a fuente para horno y cubrir con el resto del queso.",
                    "Hornear 15-20 minutos hasta gratinar."
                ]
            },
            4: {
                title: "Taco de queso y huevo",
                img: "RECETARIO/RECETA 4/FOTO 4.png",
                portions: "1 porción",
                time: "10 minutos",
                difficulty: "Muy Fácil",
                ingredients: ["2 huevos grandes", "3 cdas de queso rallado", "1 cda de mantequilla o aceite de coco", "Sal y pimienta al gusto", "Orégano o cebollino"],
                steps: [
                    "Calentar la mantequilla en una sartén antiadherente.",
                    "Batir los huevos con sal, pimienta y el queso rallado.",
                    "Verter la mezcla en la sartén y cocinar sin mover unos segundos.",
                    "Cuando cuaje, bajar el fuego y cocinar hasta que esté firme pero jugoso.",
                    "Doblar la tortilla suavemente y servir caliente."
                ]
            },
            5: {
                title: "Ensalada de atún tibia",
                img: "RECETARIO/RECETA 5/FOTO 5.png",
                portions: "1 porción",
                time: "10 minutos",
                difficulty: "Fácil",
                ingredients: ["1 lata de atún en aceite de oliva", "1 huevo duro picado", "1/2 aguacate en cubos", "1/2 taza de espinaca", "2 cdas de mayonesa keto", "Limón, sal y pimienta"],
                steps: [
                    "Calentar ligeramente el atún en una sartén por 1-2 minutos.",
                    "En un bol, mezclar el huevo duro, el aguacate y las espinacas.",
                    "Agregar el atún tibio y combinar suavemente.",
                    "Incorporar la mayonesa keto y el jugo de limón.",
                    "Ajustar sazón y servir inmediatamente."
                ]
            },
            6: {
                title: "Albóndigas keto en salsa cremosa",
                img: "RECETARIO/RECETA 6/FOTO 6.png",
                portions: "3 porciones",
                time: "35 minutos",
                difficulty: "Media",
                ingredients: ["400g de carne molida", "1 huevo", "2 cdas parmesano", "2 cdas mantequilla", "1/2 taza crema para cocinar", "1/4 taza puré tomate seco", "Ajo, orégano y perejil"],
                steps: [
                    "Mezclar carne con huevo, queso, perejil y especias; formar albóndigas.",
                    "Dorar las albóndigas en mantequilla; retirar y reservar.",
                    "En la misma sartén, saltear ajo, tomate, crema y orégano.",
                    "Cocinar a fuego bajo 5-7 min hasta que la salsa espese.",
                    "Incorporar las albóndigas y cocinar tapado 10-12 min más."
                ]
            },
            7: {
                title: "Arroz falso de coliflor",
                img: "RECETARIO/RECETA 7/FOTO 7.png",
                portions: "2 porciones",
                time: "15 minutos",
                difficulty: "Fácil",
                ingredients: ["2 tazas de coliflor rallada", "2 cdas de mantequilla", "1 diente de ajo", "Perejil o cebollino", "Sal y pimienta"],
                steps: [
                    "Rallar la coliflor hasta obtener textura de granos de arroz.",
                    "Calentar mantequilla y saltear el ajo hasta que suelte aroma.",
                    "Incorporar la coliflor y cocinar 5-7 min removiendo.",
                    "Añadir sal, pimienta y opcionalmente cúrcuma.",
                    "Cocinar hasta que esté tierno pero no blando. Espolvorear hierbas verdes."
                ]
            },
            8: {
                title: "Pan keto de sartén",
                img: "RECETARIO/RECETA 8/FOTO 8.png",
                portions: "1 porción",
                time: "5 minutos",
                difficulty: "Muy Fácil",
                ingredients: ["1 huevo", "2 cdas harina de almendra", "1 cda mantequilla derretida", "1/2 cdta polvo hornear", "Sal del Himalaya"],
                steps: [
                    "Mezclar todos los ingredientes hasta obtener una masa homogénea.",
                    "Calentar una sartén antiadherente a fuego medio.",
                    "Verter la mezcla y extenderla formando un círculo.",
                    "Cocinar 2-3 minutos por cada lado hasta que esté dorado."
                ]
            },
            9: {
                title: "Pizza keto de sartén",
                img: "RECETARIO/RECETA 9/FOTO 9.png",
                portions: "1 porción",
                time: "15 minutos",
                difficulty: "Fácil",
                ingredients: ["1 taza mozzarella", "1 huevo", "2 cdas harina almendra", "1/2 cdta polvo hornear", "Salsa tomate keto", "Toppings al gusto"],
                steps: [
                    "Mezclar mozzarella, huevo, harina y polvo de hornear.",
                    "Extender en sartén a fuego medio; dorar ambos lados.",
                    "Agregar salsa de tomate, más queso y toppings.",
                    "Tapar y cocinar a fuego bajo 5-7 minutos hasta fundir."
                ]
            },
            10: {
                title: "Brownie keto de chocolate",
                img: "RECETARIO/RECETA 10/FOTO 10.png",
                portions: "4 porciones",
                time: "20 minutos",
                difficulty: "Media",
                ingredients: ["1/2 taza harina almendra", "1/4 taza cacao puro", "1/4 taza mantequilla", "2 huevos", "1/4 taza eritritol", "Vainilla y sal"],
                steps: [
                    "Precalentar el horno a 180°C.",
                    "Mezclar ingredientes secos en un bol.",
                    "En otro recipiente, batir huevos con mantequilla y vainilla.",
                    "Unir ambas mezclas; añadir nueces o chocolate si se desea.",
                    "Hornear en molde engrasado 15-18 minutos.",
                    "Dejar enfriar totalmente antes de cortar."
                ]
            }
        }
    };

    window.openResource = function(type, id) {
        const item = resources[type][id];
        const container = document.getElementById('rm-content');
        const modal = document.getElementById('resource-modal');
        
        if (!item) return;

        let html = '';
        if (type === 'blog') {
            html = `
                <img src="${item.img}" class="detail-header-img" alt="${item.title}">
                <div class="detail-body">
                    <span class="card-tag">${item.tag}</span>
                    <h2>${item.title}</h2>
                    <div class="detail-meta-row">
                        <div class="meta-item"><span class="label">Autor</span><span class="val">${item.author}</span></div>
                        <div class="meta-item"><span class="label">Fecha</span><span class="val">${item.date}</span></div>
                    </div>
                    <div class="detail-text">${item.content}</div>
                </div>
            `;
        } else {
            html = `
                <img src="${item.img}" class="detail-header-img" alt="${item.title}">
                <div class="detail-body">
                    <h2>${item.title}</h2>
                    <div class="detail-meta-row">
                        <div class="meta-item"><span class="label">⏱️ Tiempo</span><span class="val">${item.time}</span></div>
                        <div class="meta-item"><span class="label">🍽️ Porción</span><span class="val">${item.portions}</span></div>
                        <div class="meta-item"><span class="label">⭐ Dif.</span><span class="val">${item.difficulty}</span></div>
                    </div>
                    
                    <h3 class="detail-section-title">Ingredientes</h3>
                    <ul class="ingredients-list">
                        ${item.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>

                    <h3 class="detail-section-title">Preparación</h3>
                    <div class="preparation-steps">
                        ${item.steps.map((step, idx) => `
                            <div class="step-item">
                                <div class="step-num">${idx + 1}</div>
                                <div class="detail-text">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;
        modal.classList.add('active');
        
        // Reset scroll position of the modal container to top
        modal.scrollTop = 0;

        document.body.style.overflow = 'hidden'; // Prevent main page scroll
    };

    window.closeResource = function() {
        const modal = document.getElementById('resource-modal');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    // --- Parallax Images Dynamic Swap ---
    const parallaxImages = document.querySelectorAll('.parallax-container .p-img');
    if (parallaxImages.length > 0) {
        const totalImagesList = Array.from({length: 13}, (_, i) => `PARALLAX IMG/${i + 1}.jpg`);
        
        // Add CSS transition for smooth fade
        parallaxImages.forEach(img => {
            img.style.transition = 'opacity 0.5s ease-in-out';
        });

        setInterval(() => {
            // Get currently used images
            const currentSrcs = Array.from(parallaxImages).map(img => img.getAttribute('src'));
            
            // Find an image that is not currently being used
            const availableSources = totalImagesList.filter(src => !currentSrcs.includes(src));
            
            if (availableSources.length > 0) {
                // Randomly pick one slot to update
                const randomSlotIndex = Math.floor(Math.random() * parallaxImages.length);
                const targetImg = parallaxImages[randomSlotIndex];
                
                // Randomly pick a new source
                const newSrc = availableSources[Math.floor(Math.random() * availableSources.length)];
                
                // Fade out
                targetImg.style.opacity = '0';
                
                setTimeout(() => {
                    targetImg.src = newSrc;
                    // Fade in immediately to trigger css transition naturally
                    targetImg.style.opacity = '1';
                }, 500); // match transition time
            }
        }, 3000); // Swap an image every 3 seconds
    }

    console.log('%c Kezanix Keto Immersive Experience Active ', 'background: #2238FF; color: #fff; font-weight: bold; padding: 4px;');
});
