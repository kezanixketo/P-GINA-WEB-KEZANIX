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
            res_title_1: "Beneficios de la Cetosis",
            res_tag_2: "Biohacking",
            res_title_2: "Ayuno Intermitente",
            res_tag_3: "Nutrición",
            res_title_3: "Grasas Saludables",
            res_tag_4: "Hormonas",
            res_title_4: "Cortisol y Dieta",
            res_tag_5: "Deporte",
            res_title_5: "Rendimiento Keto",
            res_title_6: "Aguacate Relleno Atún"
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
            res_title_1: "Ketosis Benefits",
            res_tag_2: "Biohacking",
            res_title_2: "Intermittent Fasting",
            res_tag_3: "Nutrition",
            res_title_3: "Healthy Fats",
            res_tag_4: "Hormones",
            res_title_4: "Cortisol and Diet",
            res_tag_5: "Sports",
            res_title_5: "Keto Performance",
            res_title_6: "Tuna Stuffed Avocado"
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
                title: "Beneficios de la Cetosis Profunda",
                tag: "Ciencia",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
                author: "Dr. Kezanix",
                date: "12 Mar, 2026",
                content: `
                    <p>La cetosis profunda no es solo un estado metabólico, es un interruptor biológico que redefine cómo tu cuerpo procesa la energía. Cuando entras en cetosis, tu cerebro comienza a utilizar cuerpos cetónicos en lugar de glucosa, proporcionando una fuente de combustible mucho más eficiente y estable.</p>
                    <p>Los beneficios principales incluyen:</p>
                    <ul>
                        <li><strong>Claridad Mental:</strong> Adiós a la niebla cerebral matutina.</li>
                        <li><strong>Energía Sostenida:</strong> Sin picos ni caídas de insulina.</li>
                        <li><strong>Control de Inflamación:</strong> Las cetonas tienen efectos antiinflamatorios naturales.</li>
                    </ul>
                    <p>Para alcanzar este estado, es crucial el equilibrio entre grasas saludables y una suplementación estratégica de electrolitos.</p>
                `
            }
        },
        recipe: {
            1: {
                title: "Aguacate Relleno de Atún Prime",
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
                portions: "2 porciones",
                time: "15 minutos",
                difficulty: "Fácil",
                ingredients: ["2 aguacates maduros", "1 lata de atún en agua", "1 cda de mayonesa keto", "Cebollín picado", "Sal del Himalaya", "Pimienta negra"],
                steps: [
                    "Corta los aguacates por la mitad y retira el hueso.",
                    "En un tazón, mezcla el atún con la mayonesa, sal y pimienta.",
                    "Rellena el hueco de los aguacates con la mezcla.",
                    "Decora con el cebollín picado y sirve frío."
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
