import codecs

html_path = r'd:\MARCAS\5 KEZANIX\3 WEB\index.html'
with codecs.open(html_path, 'r', 'utf-8') as f:
    html = f.read()

repls = [
    # Ticker
    ('<div class="ticker-item">ENERGÍA CETOGÉNICA', '<div class="ticker-item" data-i18n="ticker_text">ENERGÍA CETOGÉNICA'),
    
    # HUD Indicators
    ('<span class="hud-label">Control de<br>Peso</span>', '<span class="hud-label" data-i18n="hud_weight">Control de<br>Peso</span>'),
    ('<span class="hud-label">Energía<br>Sostenida</span>', '<span class="hud-label" data-i18n="hud_energy">Energía<br>Sostenida</span>'),
    ('<span class="hud-label">Mejor<br>Concentración</span>', '<span class="hud-label" data-i18n="hud_focus">Mejor<br>Concentración</span>'),
    ('<span class="hud-label">Sueño<br>Reparador</span>', '<span class="hud-label" data-i18n="hud_sleep">Sueño<br>Reparador</span>'),
    
    # Teasers
    ('<span class="tag">Innovación</span>', '<span class="tag" data-i18n="teaser_p_tag">Innovación</span>'),
    ('<h2>Energía Pura, Rendimiento Total</h2>', '<h2 data-i18n="teaser_p_title">Energía Pura, Rendimiento Total</h2>'),
    ('<p>Optimiza tu metabolismo y alcanza la cetosis profunda de forma natural. Sin bajones, solo claridad mental y física.</p>', '<p data-i18n="teaser_p_desc">Optimiza tu metabolismo y alcanza la cetosis profunda de forma natural. Sin bajones, solo claridad mental y física.</p>'),
    ('<button onclick="switchView(\'producto\')" class="btn btn-white">Ver detalles sobre Keto Prime</button>', '<button onclick="switchView(\'producto\')" class="btn btn-white" data-i18n="teaser_p_btn">Ver detalles sobre Keto Prime</button>'),
    
    ('<span class="tag">Nuestra Misión</span>', '<span class="tag" data-i18n="teaser_a_tag">Nuestra Misión</span>'),
    ('<h2>Ciencia al Servicio del Bienestar</h2>', '<h2 data-i18n="teaser_a_title">Ciencia al Servicio del Bienestar</h2>'),
    ('<p>Fusionamos la tecnología alimentaria con la neurociencia para entregarte el suplemento más potente del mercado.</p>', '<p data-i18n="teaser_a_desc">Fusionamos la tecnología alimentaria con la neurociencia para entregarte el suplemento más potente del mercado.</p>'),
    ('<button onclick="switchView(\'nosotros\')" class="btn btn-outline" style="border: 1px solid #2238FF; color: #2238FF;">Saber más sobre nosotros</button>', '<button onclick="switchView(\'nosotros\')" class="btn btn-outline" style="border: 1px solid #2238FF; color: #2238FF;" data-i18n="teaser_a_btn">Saber más sobre nosotros</button>'),

    # Testimonials header
    ('<span class="tag">Éxito Real</span>', '<span class="tag" data-i18n="test_tag">Éxito Real</span>'),
    ('<h2>Historias de Cambio</h2>', '<h2 data-i18n="test_title">Historias de Cambio</h2>'),
    ('class="btn-testimonio">Ver testimonio</a>', 'class="btn-testimonio" data-i18n="test_btn">Ver testimonio</a>'),

    # Testimonial quotes
    ('<p class="quote">"Keto Prime me ayudó a romper el límite de los 90 kilos. Después de años estancado, por fin vi resultados reales. Estoy muy contento."</p>', '<p class="quote" data-i18n="test_q1">"Keto Prime me ayudó a romper el límite de los 90 kilos. Después de años estancado, por fin vi resultados reales. Estoy muy contento."</p>'),
    ('<p class="quote">"Como instructora de zumba necesito energía todos los días, y Keto Prime me la ha dado. Me siento más activa y enfocada en cada clase."</p>', '<p class="quote" data-i18n="test_q2">"Como instructora de zumba necesito energía todos los días, y Keto Prime me la ha dado. Me siento más activa y enfocada en cada clase."</p>'),
    ('<p class="quote">"En la etapa de la menopausia todo se vuelve más complicado por los cambios hormonales. Keto Prime me ha ayudado muchísimo a sentirme mejor y más equilibrada."</p>', '<p class="quote" data-i18n="test_q3">"En la etapa de la menopausia todo se vuelve más complicado por los cambios hormonales. Keto Prime me ha ayudado muchísimo a sentirme mejor y más equilibrada."</p>'),
    ('<p class="quote">"Hhe bajado de peso y, lo más importante, me ha ayudado con la ansiedad. Ahora siento más control y tranquilidad."</p>', '<p class="quote" data-i18n="test_q4">"He bajado de peso y, lo más importante, me ha ayudado con la ansiedad. Ahora siento más control y tranquilidad."</p>'),
    ('<p class="quote">"Como persona físicamente activa, Keto Prime me ha ayudado a tonificar, mejorar mi digestión y mantener una concentración increíble durante el día."</p>', '<p class="quote" data-i18n="test_q5">"Como persona físicamente activa, Keto Prime me ha ayudado a tonificar, mejorar mi digestión y mantener una concentración increíble durante el día."</p>'),
    ('<p class="quote">"Este producto me permitió retomar mi vida. Me ha ayudado con mis alergias, con mi peso y con sentirme nuevamente en control."</p>', '<p class="quote" data-i18n="test_q6">"Este producto me permitió retomar mi vida. Me ha ayudado con mis alergias, con mi peso y con sentirme nuevamente en control."</p>'),
    ('<p class="quote">"Ahora disfruto de una energía renovada, menos inflamación y un bienestar que se nota en mi día a día. Keto Prime realmente marca la diferencia."</p>', '<p class="quote" data-i18n="test_q7">"Ahora disfruto de una energía renovada, menos inflamación y un bienestar que se nota en mi día a día. Keto Prime realmente marca la diferencia."</p>'),
    ('<p class="quote">"Más energía, menos inflamación y 4 kilos menos. Mary Cecilia lo logró en solo dos semanas con Keto Prime."</p>', '<p class="quote" data-i18n="test_q8">"Más energía, menos inflamación y 4 kilos menos. Mary Cecilia lo logró en solo dos semanas con Keto Prime."</p>'),
    ('<p class="quote">"Mi cuerpo cambió por completo. Vivía con inflamación, metabolismo lento y esa sensación de estar atrapada en mi propio cuerpo. Con Keto Prime empecé a recuperar ligereza, energía y bienestar."</p>', '<p class="quote" data-i18n="test_q9">"Mi cuerpo cambió por completo. Vivía con inflamación, metabolismo lento y esa sensación de estar atrapada en mi propio cuerpo. Con Keto Prime empecé a recuperar ligereza, energía y bienestar."</p>'),
    ('<p class="quote">"Gracias a Keto Prime estoy logrando resultados increíbles que transforman mi salud día a día. Bajé 13.8 kilos y, más importante aún, recuperé mi energía y mi confianza."</p>', '<p class="quote" data-i18n="test_q10">"Gracias a Keto Prime estoy logrando resultados increíbles que transforman mi salud día a día. Bajé 13.8 kilos y, más importante aún, recuperé mi energía y mi confianza."</p>'),
    ('<p class="quote">"Durante meses busqué definir, desinflamar y mejorar mi digestión… y encontré en Keto Prime el apoyo que necesitaba para avanzar sin frustración."</p>', '<p class="quote" data-i18n="test_q11">"Durante meses busqué definir, desinflamar y mejorar mi digestión… y encontré en Keto Prime el apoyo que necesitaba para avanzar sin frustración."</p>'),
    ('<p class="quote">"Mi cambio ha sido completo. Con Keto Prime como aliado he trabajado con constancia y determinación, y hoy veo un progreso que me inspira a seguir."</p>', '<p class="quote" data-i18n="test_q12">"Mi cambio ha sido completo. Con Keto Prime como aliado he trabajado con constancia y determinación, y hoy veo un progreso que me inspira a seguir."</p>'),
    ('<p class="quote">"Trabajo el doble, sueño en grande y no bajo el ritmo. Keto Prime se convirtió en el impulso real que necesitaba para seguir con energía y claridad cada día."</p>', '<p class="quote" data-i18n="test_q13">"Trabajo el doble, sueño en grande y no bajo el ritmo. Keto Prime se convirtió en el impulso real que necesitaba para seguir con energía y claridad cada día."</p>'),

    # Footer
    ('<p class="footer-copy">© 2026 KEZANIX GROUP. Todos los derechos reservados.</p>', '<p class="footer-copy" data-i18n="footer_copy">© 2026 KEZANIX GROUP. Todos los derechos reservados.</p>'),

    # About Section
    ('<p class="tagline" style="font-size: 0.8rem;">Nuestra Historia</p>', '<p class="tagline" style="font-size: 0.8rem;" data-i18n="about_tag">Nuestra Historia</p>'),
    ('<h2 class="legacy-title" style="font-size: 2.2rem; margin-bottom: 10px;">Fundando un Nuevo Estándar</h2>', '<h2 class="legacy-title" style="font-size: 2.2rem; margin-bottom: 10px;" data-i18n="about_title">Fundando un Nuevo Estándar</h2>'),
    ('<p class="history-text" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">\n              Ante una realidad global', '<p class="history-text" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;" data-i18n="about_text">\n              Ante una realidad global'),
    ('<h3>Misión</h3>', '<h3 data-i18n="about_m_title">Misión</h3>'),
    ('<p>Empoderar a cada individuo para que alcance su máximo potencial metabólico y cognitivo a través de ciencia nutricional de vanguardia y productos sin compromisos.</p>', '<p data-i18n="about_m_desc">Empoderar a cada individuo para que alcance su máximo potencial metabólico y cognitivo a través de ciencia nutricional de vanguardia y productos sin compromisos.</p>'),
    ('<h3>Visión</h3>', '<h3 data-i18n="about_v_title">Visión</h3>'),
    ('<p>Ser la marca líder global en longevidad y rendimiento humano, redefiniendo los límites de lo que el cuerpo y la mente pueden lograr con el combustible correcto.</p>', '<p data-i18n="about_v_desc">Ser la marca líder global en longevidad y rendimiento humano, redefiniendo los límites de lo que el cuerpo y la mente pueden lograr con el combustible correcto.</p>'),
    ('<h3>Valores</h3>', '<h3 data-i18n="about_val_title">Valores</h3>'),
    ('<li>Integridad Científica</li>', '<li data-i18n="about_val_1">Integridad Científica</li>'),
    ('<li>Innovación Constante</li>', '<li data-i18n="about_val_2">Innovación Constante</li>'),
    ('<li>Calidad Excepcional</li>', '<li data-i18n="about_val_3">Calidad Excepcional</li>'),
    ('<li>Impacto Real</li>', '<li data-i18n="about_val_4">Impacto Real</li>'),

    # Bienestar Section
    ('<div class="hero-text-block blogs-header">\n              <span class="tag">Contenido Kezanix</span>', '<div class="hero-text-block blogs-header">\n              <span class="tag" data-i18n="b_tag_1">Contenido Kezanix</span>'),
    ('<h2>Ciencia y Salud</h2>', '<h2 data-i18n="b_title_1">Ciencia y Salud</h2>'),
    ('<p>Explora la ciencia avanzada de la cetosis con Kezanix.</p>', '<p data-i18n="b_desc_1">Explora la ciencia avanzada de la cetosis con Kezanix.</p>'),
    ('<div class="hero-text-block recipes-header">\n              <span class="tag">Contenido Kezanix</span>', '<div class="hero-text-block recipes-header">\n              <span class="tag" data-i18n="b_tag_2">Contenido Kezanix</span>'),
    ('<h2>Recetario Keto</h2>', '<h2 data-i18n="b_title_2">Recetario Keto</h2>'),
    ('<p>Sabores potentes diseñados para tu máximo rendimiento.</p>', '<p data-i18n="b_desc_2">Sabores potentes diseñados para tu máximo rendimiento.</p>'),
    ('<button class="tab-btn active btn-blogs" onclick="switchBienestarTab(\'blogs\')">Blogs</button>', '<button class="tab-btn active btn-blogs" onclick="switchBienestarTab(\'blogs\')" data-i18n="b_tab_1">Blogs</button>'),
    ('<button class="tab-btn btn-recipes" onclick="switchBienestarTab(\'recipes\')">Recetario Keto</button>', '<button class="tab-btn btn-recipes" onclick="switchBienestarTab(\'recipes\')" data-i18n="b_tab_2">Recetario Keto</button>'),

    # Blog/Recipe Cards
    ('<span class="card-tag">Ciencia</span>', '<span class="card-tag" data-i18n="res_tag_1">Ciencia</span>'),
    ('<h3>Beneficios de la Cetosis</h3>', '<h3 data-i18n="res_title_1">Beneficios de la Cetosis</h3>'),
    ('<span class="card-tag">Biohacking</span>', '<span class="card-tag" data-i18n="res_tag_2">Biohacking</span>'),
    ('<h3>Ayuno Intermitente</h3>', '<h3 data-i18n="res_title_2">Ayuno Intermitente</h3>'),
    ('<span class="card-tag">Nutrición</span>', '<span class="card-tag" data-i18n="res_tag_3">Nutrición</span>'),
    ('<h3>Grasas Saludables</h3>', '<h3 data-i18n="res_title_3">Grasas Saludables</h3>'),
    ('<span class="card-tag">Hormonas</span>', '<span class="card-tag" data-i18n="res_tag_4">Hormonas</span>'),
    ('<h3>Cortisol y Dieta</h3>', '<h3 data-i18n="res_title_4">Cortisol y Dieta</h3>'),
    ('<span class="card-tag">Deporte</span>', '<span class="card-tag" data-i18n="res_tag_5">Deporte</span>'),
    ('<h3>Rendimiento Keto</h3>', '<h3 data-i18n="res_title_5">Rendimiento Keto</h3>'),
    ('<h3>Aguacate Relleno Atún</h3>', '<h3 data-i18n="res_title_6">Aguacate Relleno Atún</h3>')
]

for src, dst in repls:
    html = html.replace(src, dst)

with codecs.open(html_path, 'w', 'utf-8') as f:
    f.write(html)
print("done")
