(function () {
  var T = {
    en: {
      nav: { home:'Home', services:'Services', wood:'Wood Restoration', metal:'Metal Restoration', equipment:'Equipment', contact:'Contact Us', stone:'Stone Restoration', antique:'Antique Restoration' },
      home: {
        enter_btn: 'Enter',
        eyebrow: 'Advanced Pulsed Laser Technology',
        headline: 'Clean Smarter.<br><span>Preserve Better.</span>',
        sub: 'Advanced pulsed laser cleaning technology delivers powerful results without damaging the base material.',
        tagline: 'Powerful. Precise. Non-Abrasive.',
        tagline_sub: 'Remove rust, paint, oil, coatings and contaminants with light. No chemicals. No damage. Just clean results.',
        explore_btn: 'Explore Services →',
        feat1_title: 'Precise & Controlled', feat1_desc: 'Ensures precise cleaning without harming the surface.',
        feat2_title: 'Safe for Surface',         feat2_desc: 'Non-contact process that preserves the base material.',
        feat3_title: 'Eco-Friendly',             feat3_desc: 'No chemicals, no abrasives, no waste.',
        feat4_title: 'Fast & Efficient',    feat4_desc: 'High speed with minimal downtime.'
      },
      services: {
        eyebrow: 'What We Offer',
        heading: 'Our <span>Services</span>',
        sub: 'Advanced pulsed laser cleaning for wood and metal surfaces — precise, chemical-free and non-abrasive.',
        wood_desc: 'Bring old timber back to life. We remove paint, grime and discolouration from wood surfaces without sanding, chemicals or damage to the grain.',
        wood_cta: 'Explore Wood Restoration →',
        metal_desc: 'Strip rust, coatings and corrosion from metal surfaces. Ideal for tools, automotive parts, machinery and industrial components.',
        metal_cta: 'Explore Metal Restoration →',
        stone_desc: 'Revive weathered stone, brick and masonry with targeted laser cleaning that eliminates moss, lichen and staining.',
        stone_cta: 'Explore Stone Restoration →',
        antique_desc: 'Gently clean and revive antique furniture, artwork, clocks and collectibles without chemicals or abrasion.',
        antique_cta: 'Explore Antique Restoration →'
      },
      common: {
        wood_title: 'Wood Restoration', metal_title: 'Metal Restoration', stone_title: 'Stone Restoration', antique_title: 'Antique Restoration',
        cta_heading: 'See the Difference.<br><span>Feel the Quality.</span>',
        cta_sub: 'Contact us today for a demo or more information.',
        cta_demo: 'Request a Demo'
      },
      wood: {
        eyebrow: 'What We Do',
        heading: 'Wood Restoration &amp;<br><span>Surface Cleaning</span>',
        sub: 'Bring old wood back to life with advanced pulsed laser cleaning.',
        pill1:'Wooden Window Frames', pill2:'Antique Door Restoration', pill3:'Furniture Cleaning',
        pill4:'Wood Surface Restoration', pill5:'Paint Removal from Wood',
        detail_eyebrow: 'Wood &amp; Timber',
        detail_heading: 'Gentle on Wood.<br><span style="color:var(--gold);">Tough on Dirt.</span>',
        check1:'Cleaning wooden window frames', check2:'Restoration of old wooden doors',
        check3:'Furniture surface cleaning', check4:'Removal of paint, dirt, soot &amp; coatings',
        check5:'Gentle process without damaging the wood',
        eco_note: 'Safe, non-abrasive and chemical-free technology ideal for delicate wooden surfaces and restoration projects.',
        img1_title:'Window Frames', img2_title:'Wooden Doors', img3_title:'Wood Furniture'
      },
      metal: {
        eyebrow: 'Metal &amp; Industrial',
        heading: 'Metal Restoration &amp;<br><span>De-Rusting</span>',
        sub: 'Bring aged metal surfaces back to pristine condition with advanced pulsed laser cleaning.',
        pill1:'Rusted Tools &amp; Equipment', pill2:'Industrial Machine Components',
        pill3:'Automotive Restoration', pill4:'Antique Metal Restoration', pill5:'Weld Seam Cleaning',
        detail_eyebrow: 'Metal &amp; Industrial',
        detail_heading: 'Strip It Back.<br><span style="color:var(--gold);">Restore the Metal.</span>',
        detail_sub: 'Bring aged metal surfaces back to pristine condition with advanced pulsed laser cleaning.',
        check1:'Deep rust &amp; corrosion removal', check2:'Coating and paint stripping from equipment',
        check3:'De-greasing and oil removal from engine components', check4:'Oxide removal from weld seams',
        check5:'Precision cleaning of intricate metal parts', check6:'Non-abrasive process, preserves metal integrity',
        eco_note: 'Efficient, non-destructive, and chemical-free technology. Ideal for various metals and high-value restoration.',
        img1_title:'Metal Structures', img2_title:'Gates & Fences', img3_title:'Tools & Parts'
      },
      equip: {
        eyebrow:'Laser Technology', heading:'Equipment &amp; <span>Applications</span>',
        apps_eyebrow:'Versatile Technology', apps_heading:'Ideal for a Wide Range<br><span>of Applications</span>',
        app1_title:'Molds &amp; Tooling', app1_desc:'Precision cleaning of injection moulds and tooling without dimensional change.',
        app2_title:'Automotive Restoration',  app2_desc:'Strip rust, paint and coatings from bodywork and components safely.',
        app3_title:'Historical Restoration',  app3_desc:'Delicate cleaning of heritage structures, stonework and artefacts.',
        app4_title:'Weld Cleaning',           app4_desc:'Remove oxidation and discolouration from welds for pre-treatment or finishing.',
        specs_eyebrow:'Technical Specifications', specs_heading:'Built for<br><span>Superior Control.</span>',
        spec_machine:'300W Pulsed Laser Cleaning System',
        spec_power:'Power', spec_type:'Laser Type', spec_freq:'Pulse Frequency',
        spec_dur:'Pulse Duration', spec_spot:'Spot Size', spec_weight:'Weight', spec_supply:'Power Supply',
        check1:'300W average power', check2:'Pulsed technology for superior control',
        check3:'Suitable for a variety of materials', check4:'Minimal maintenance',
        check5:'Compact, mobile and easy to use', check6:'Consistent, high-quality results'
      },
      stone: {
        eyebrow:'What We Do', heading:'Stone Restoration &amp;<br><span>Surface Cleaning</span>',
        sub:'Bring weathered stone and masonry back to life with advanced pulsed laser cleaning.',
        pill1:'Stone & Masonry Cleaning', pill2:'Monument Restoration', pill3:'Brick & Pointing',
        pill4:'Natural Stone Surfaces', pill5:'Historic Structures',
        detail_eyebrow:'Stone & Masonry',
        detail_heading:'Restore the Stone.<br><span style="color:var(--gold);">Reveal the Character.</span>',
        check1:'Cleaning stone walls, paths and garden features',
        check2:'Removal of moss, lichen and biological growth',
        check3:'Graffiti and paint removal from stone',
        check4:'Historic building and monument cleaning',
        check5:'Non-abrasive process, no damage to stone structure',
        eco_note:'Safe, non-abrasive and chemical-free technology ideal for delicate stonework and heritage conservation projects.',
        img1_title:'Stone & Masonry', img2_title:'Monuments', img3_title:'Facades & Walls'
      },
      antique: {
        eyebrow:'What We Do',
        heading:'Antique Restoration &amp;<br><span>Precision Cleaning</span>',
        sub:'Revive precious antiques with advanced pulsed laser cleaning — safe, chemical-free and kind to original patina.',
        pill1:'Antique Furniture', pill2:'Artwork & Frames', pill3:'Clocks & Instruments',
        pill4:'Coins & Medals', pill5:'Ornaments & Objects',
        detail_eyebrow:'Antique & Heritage',
        detail_heading:'Restore the Past.<br><span style="color:var(--gold);">Preserve the Story.</span>',
        check1:'Gentle removal of dirt, tarnish and old varnish from furniture',
        check2:'Cleaning artwork, gilded frames and decorative surfaces',
        check3:'Restoration of clocks, instruments and metal fittings',
        check4:'Coin, medal and small collectible cleaning',
        check5:'No chemicals, no abrasion — original patina preserved',
        eco_note:'Pulsed laser technology is recognised by conservators worldwide for its precision on irreplaceable heritage objects.',
        img1_title:'Antique Furniture', img2_title:'Artwork & Frames', img3_title:'Clocks & Instruments'
      },
      contact: {
        eyebrow:'Get in Touch', heading:"Let's <span>Clean</span><br>Something.",
        intro:"Request a demo, ask about our 300W pulsed laser system, or just say hello. We'll get back to you as soon as possible.",
        name_label:'Name', name_ph:'Your name', phone_label:'Phone', phone_ph:'+353 ...',
        email_label:'Email', service_label:"I'm interested in", service_default:'Select a service...',
        service_opt1:'Wood restoration & surface cleaning',
        service_opt2:'Industrial equipment cleaning',
        service_opt3:'Automotive restoration',
        service_opt4:'Molds & tooling cleaning',
        service_opt5:'Historical restoration',
        service_opt6:'Weld cleaning & pre-treatment',
        service_opt7:'General enquiry',
        msg_label:'Message', msg_ph:'Tell us about your project...', send_btn:'Send Message',
        contact_details:'Contact Details', follow_us:'Follow Us', location:'Ireland'
      }
    },

    pl: {
      nav: { home:'Strona Główna', services:'Usługi', wood:'Renowacja Drewna', metal:'Renowacja Metalu', equipment:'Sprzęt', contact:'Kontakt', stone:'Renowacja Kamienia', antique:'Renowacja Antyków' },
      home: {
        enter_btn: 'Wejdź',
        eyebrow: 'Zaawansowana Impulsowa Technologia Laserowa',
        headline: 'Czyść Mądrzej.<br><span>Chroń Lepiej.</span>',
        sub: 'Zaawansowana impulsowa technologia laserowa zapewnia doskonałe wyniki bez uszkadzania podłoża.',
        tagline: 'Mocny. Precyzyjny. Nieabrazyjny.',
        tagline_sub: 'Usuń rdzę, farbę, olej, powłoki i zanieczyszczenia za pomocą światła. Bez chemikaliów. Bez uszkodzeń. Tylko czyste efekty.',
        explore_btn: 'Odkryj Usługi →',
        feat1_title:'Precyzyjny i Kontrolowany', feat1_desc:'Zapewnia precyzyjne czyszczenie bez uszkadzania powierzchni.',
        feat2_title:'Bezpieczny dla Powierzchni', feat2_desc:'Bezkontaktowy proces, który zachowuje materiał bazowy.',
        feat3_title:'Przyjazny Środisku',   feat3_desc:'Bez chemikaliów, bez materiałów ściernych, bez odpadów.',
        feat4_title:'Szybki i Wydajny',         feat4_desc:'Duża prędkość przy minimalnym przestoju.'
      },
      services: {
        eyebrow:'Co Oferujemy', heading:'Nasze <span>Usługi</span>',
        sub:'Zaawansowane impulsowe czyszczenie laserowe powierzchni drewnianych i metalowych — precyzyjne, bez chemikaliów i nieabrazyjne.',
        wood_desc:'Przywróć stare drewno do życia. Usuwamy farbę, brud i przebarwienia z powierzchni drewnianych bez szlifowania, chemikaliów i uszkodzeń.',
        wood_cta:'Odkryj Renowację Drewna →',
        metal_desc:'Usuń rdzę, powłoki i korozję z metalowych powierzchni. Idealne dla narzędzi, części samochodowych, maszyn i komponentów przemysłowych.',
        metal_cta:'Odkryj Renowację Metalu →',
        stone_desc:'Ożywienie zwietrzałego kamienia, cegły i muru. Usuwamy zabrudzenia, wzrost biologiczny i farbę z powierzchni kamiennych bez chemikaliów i materiałów ściernych.',
        stone_cta:'Odkryj Renowację Kamienia →',
        antique_desc:'Delikatnie czyść i rewitalizuj antyczne meble, dzieła sztuki, zegary i kolekcje bez chemikaliów i ścierniwa.',
        antique_cta:'Odkryj Renowację Antyków →'
      },
      common: {
        wood_title:'Renowacja Drewna', metal_title:'Renowacja Metalu', stone_title:'Renowacja Kamienia', antique_title:'Renowacja Antyków',
        cta_heading:'Poczuj Różnicę.<br><span>Poczuj Jakość.</span>',
        cta_sub:'Skontaktuj się z nami już dziś, aby umówić się na demonstrację lub uzyskać więcej informacji.',
        cta_demo:'Zamów Demo'
      },
      wood: {
        eyebrow:'Co Robimy', heading:'Renowacja Drewna &amp;<br><span>Czyszczenie Powierzchni</span>',
        sub:'Przywróć stare drewno do życia dzięki zaawansowanemu impulsowemu czyszczeniu laserowemu.',
        pill1:'Drewniane Ramy Okienne', pill2:'Renowacja Zabytkowych Drzwi', pill3:'Czyszczenie Mebli',
        pill4:'Renowacja Powierzchni Drewnianych', pill5:'Usuwanie Farby z Drewna',
        detail_eyebrow:'Drewno i Tarcica',
        detail_heading:'Delikatny dla Drewna.<br><span style="color:var(--gold);">Skuteczny wobec Brudu.</span>',
        check1:'Czyszczenie drewnianych ram okiennych', check2:'Renowacja starych drewnianych drzwi',
        check3:'Czyszczenie powierzchni mebli', check4:'Usuwanie farby, brudu, sadzy i powłok',
        check5:'Delikatny proces bez uszkadzania drewna',
        eco_note:'Bezpieczna, nieabrazyjna i bezchemiczna technologia idealna do delikatnych powierzchni drewnianych i projektów renowacyjnych.',
        img1_title:'Ramy Okienne', img2_title:'Drewniane Drzwi', img3_title:'Meble Drewniane'
      },
      metal: {
        eyebrow:'Metal i Przemyśł', heading:'Renowacja Metalu &amp;<br><span>Odrdzewianie</span>',
        sub:'Przywróć stare metalowe powierzchnie do pierwotnego stanu dzięki zaawansowanemu impulsowemu czyszczeniu laserowemu.',
        pill1:'Zardzeŵiałe Narzędzia i Sprzęt', pill2:'Komponenty Maszyn Przemysłowych',
        pill3:'Renowacja Samochodów', pill4:'Renowacja Zabytkowych Metali', pill5:'Czyszczenie Spoin Spawalniczych',
        detail_eyebrow:'Metal i Przemyśł',
        detail_heading:'Oczyść do Metalu.<br><span style="color:var(--gold);">Przywróć Blask.</span>',
        detail_sub:'Przywróć stare metalowe powierzchnie do pierwotnego stanu dzięki zaawansowanemu impulsowemu czyszczeniu laserowemu.',
        check1:'Głębokie usuwanie rdzy i korozji', check2:'Usuwanie powłok i farby ze sprzętu',
        check3:'Odsłuszczanie i usuwanie oleju z komponentów silnika', check4:'Usuwanie tlenków ze spoin spawalniczych',
        check5:'Precyzyjne czyszczenie skomplikowanych części metalowych', check6:'Nieabrazyjny proces, zachowuje integralność metalu',
        eco_note:'Wydajna, niedestrukcyjna i bezchemiczna technologia. Idealna do różnych metali i renowacji wysokiej wartości.',
        img1_title:'Konstrukcje Metalowe', img2_title:'Bramy i Ogrodzenia', img3_title:'Narzędzia i Części'
      },
      equip: {
        eyebrow:'Technologia Laserowa', heading:'Sprzęt i <span>Zastosowania</span>',
        apps_eyebrow:'Wszechstronna Technologia', apps_heading:'Idealne dla Szerokiego<br><span>Zakresu Zastosowań</span>',
        app1_title:'Formy i Narzędzia', app1_desc:'Precyzyjne czyszczenie form wtryskowych i narzędzi bez zmian wymiarowych.',
        app2_title:'Renowacja Samochodów', app2_desc:'Bezpiecznie usuń rdzę, farbę i powłoki z nadwozia i komponentów.',
        app3_title:'Renowacja Historyczna', app3_desc:'Delikatne czyszczenie obiektów zabytkowych, kamieniarki i artefaktów.',
        app4_title:'Czyszczenie Spoin', app4_desc:'Usuń utlenienie i przebarwienia ze spoin do obróbki wstępnej lub wykończającej.',
        specs_eyebrow:'Specyfikacje Techniczne', specs_heading:'Zaprojektowany dla<br><span>Najwyższej Kontroli.</span>',
        spec_machine:'System Czyszczenia Laserem Impulsowym 300W',
        spec_power:'Moc', spec_type:'Typ Lasera', spec_freq:'Częstotliwość Impulsów',
        spec_dur:'Czas Trwania Impulsu', spec_spot:'Rozmiar Plamki', spec_weight:'Waga', spec_supply:'Zasilanie',
        check1:'Srednia moc 300W', check2:'Technologia impulsowa dla najwyższej kontroli',
        check3:'Odpowiedni dla różnych materiałów', check4:'Minimalna konserwacja',
        check5:'Kompaktowy, mobilny i łatwy w użyciu', check6:'Konsekwentnie wysokiej jakości wyniki'
      },
      stone: {
        eyebrow:'Co Robimy', heading:'Renowacja Kamienia &amp;<br><span>Czyszczenie Powierzchni</span>',
        sub:'Przywróć zwietrzały kamień i mury do życia dzięki zaawansowanemu impulsowemu czyszczeniu laserowemu.',
        pill1:'Czyszczenie Kamienia i Muru', pill2:'Renowacja Pomników', pill3:'Cegła i Fugowanie',
        pill4:'Naturalne Powierzchnie Kamienne', pill5:'Historyczne Konstrukcje',
        detail_eyebrow:'Kamień i Mur',
        detail_heading:'Przywróć Blask Kamieniowi.<br><span style="color:var(--gold);">Odkryj Charakter.</span>',
        check1:'Czyszczenie kamiennych murów, ścieżek i elementów ogrodowych',
        check2:'Usuwanie mchu, porostów i wzrostu biologicznego',
        check3:'Usuwanie graffiti i farby z kamienia',
        check4:'Czyszczenie zabytkowych budynków i pomników',
        check5:'Nieabrazyjny proces, bez uszkodzenia struktury kamienia',
        eco_note:'Bezpieczna, nieabrazyjna i bezchemiczna technologia idealna do delikatnych robót kamiennych i projektów konserwacji dziedzictwa.',
        img1_title:'Kamień i Mury', img2_title:'Pomniki', img3_title:'Elewacje i Ściany'
      },
      antique: {
        eyebrow:'Co Robimy',
        heading:'Renowacja Antyków &amp;<br><span>Precyzyjne Czyszczenie</span>',
        sub:'Ożyw cenne antyki za pomocą zaawansowanego impulsowego czyszczenia laserowego — bezpiecznego, bez chemikaliów i przyjaznego dla oryginalnej patyny.',
        pill1:'Antyczne Meble', pill2:'Dzieła Sztuki i Ramy', pill3:'Zegary i Instrumenty',
        pill4:'Monety i Medale', pill5:'Ozdoby i Przedmioty',
        detail_eyebrow:'Antyki i Dziedzictwo',
        detail_heading:'Przywróć Przeszłość.<br><span style="color:var(--gold);">Zachowaj Historię.</span>',
        check1:'Delikatne usuwanie brudu, nalotu i starego lakieru z mebli',
        check2:'Czyszczenie dzieł sztuki, pozłacanych ram i powierzchni dekoracyjnych',
        check3:'Renowacja zegarów, instrumentów i metalowych okuć',
        check4:'Czyszczenie monet, medali i małych kolekcjonierskich przedmiotów',
        check5:'Bez chemikaliów, bez ścierniwa — oryginalna patyna zachowana',
        eco_note:'Technologia lasera impulsowego jest uznawana przez konserwatorów na całym świecie za precyzję w pracy z nieocenionymi obiektami dziedzictwa.',
        img1_title:'Antyczny Nábytok', img2_title:'Dzieła Sztuki i Ramy', img3_title:'Zegary i Instrumenty'
      },
      contact: {
        eyebrow:'Skontaktuj Się', heading:'Wyczyszczmy <span>Coś</span><br>Razem.',
        intro:'Zamów demonstrację, zapytaj o nasz impulsowy system laserowy 300W lub po prostu przywitaj się. Odpiszemy tak szybko, jak to możliwe.',
        name_label:'Imię i Nazwisko', name_ph:'Twoje imię i nazwisko',
        phone_label:'Telefon', phone_ph:'+353 ...',
        email_label:'Email', service_label:'Interesuje mnie', service_default:'Wybierz usługę...',
        service_opt1:'Renowacja drewna i czyszczenie powierzchni',
        service_opt2:'Czyszczenie urządzeń przemysłowych',
        service_opt3:'Renowacja samochodów',
        service_opt4:'Czyszczenie form i narzędzi',
        service_opt5:'Renowacja historyczna',
        service_opt6:'Czyszczenie spawów i przygotowanie powierzchni',
        service_opt7:'Zapytanie ogólne',
        msg_label:'Wiadomość', msg_ph:'Opowiedz nam o swoim projekcie...', send_btn:'Wyślij Wiadomość',
        contact_details:'Dane Kontaktowe', follow_us:'Obserwuj Nas', location:'Irlandia'
      }
    },

    sk: {
      nav: { home:'Domov', services:'Služby', wood:'Reštaurovanie Dreva', metal:'Reštaurovanie Kovov', equipment:'Zariadenie', contact:'Kontakt', stone:'Reštaurovanie Kameňa', antique:'Reštaurovanie Staržitností' },
      home: {
        enter_btn: 'Vstú piť',
        eyebrow: 'Pokročilá Impulzná Laserová Technológia',
        headline: 'Čistite Múdrejšie.<br><span>Chráňte Lepšie.</span>',
        sub: 'Pokročilá impulzná laserová čistiaca technológia prináša výkonné výsledky bez poškodenia základného materiálu.',
        tagline: 'Výkonný. Presný. Neabrazívny.',
        tagline_sub: 'Odstráňte hrdzu, farbu, olej, nátery a nečistoty svetlom. Bez chemikálií. Bez poškodenia. Len čisté výsledky.',
        explore_btn: 'Preskúmajte Služby →',
        feat1_title:'Presný a Kontrolovaný', feat1_desc:'Zabezpečuje presné čistenie bez poškodenia povrchu.',
        feat2_title:'Bezpečný pre Povrch',  feat2_desc:'Bezkontaktný proces, ktorý zachováva základný materiál.',
        feat3_title:'Ekologický',               feat3_desc:'Bez chemikálií, bez abrazív, bez odpadu.',
        feat4_title:'Rýchly a Efektívny', feat4_desc:'Vysoká rýchlosť s minimálnymi prestojmi.'
      },
      services: {
        eyebrow:'Čo Ponúkame', heading:'Naše <span>Služby</span>',
        sub:'Pokročilé impulzné laserové čistenie povrchov dreva a kovov — presné, bez chemikálií a neabrazívne.',
        wood_desc:'Vráťte starému drevu život. Odstraňujeme farbu, nečistoty a zmenu farby z drevenenvých povrchov bez brúsenia, chemikálií alebo poškodenia.',
        wood_cta:'Preskúmajte Reštaurovanie Dreva →',
        metal_desc:'Odstráňte hrdzu, nátery a koróziu z kovových povrchov. Ideálne pre nástroje, automobilové diely, stroje a priemyselné komponenty.',
        metal_cta:'Preskúmajte Reštaurovanie Kovov →',
        stone_desc:'Obnovte zvetrané kamene, tehly a murivo. Odstraňujeme škvrny, biologický rast a farbu z kamenných povrchov bez chemikálií a abrazív.',
        stone_cta:'Preskúmajte Reštaurovanie Kameňa →',
        antique_desc:'Jemne vyčistite a obnovte antický nábytok, umelecké diela, hodiny a zbierky bez chemikálií a abrazív.',
        antique_cta:'Preskúmajte Reštaurovanie Staržitností →'
      },
      common: {
        wood_title:'Reštaurovanie Dreva', metal_title:'Reštaurovanie Kovov', stone_title:'Reštaurovanie Kameňa', antique_title:'Reštaurovanie Staržitností',
        cta_heading:'Pocíťte Rozdiel.<br><span>Pocíťte Kvalitu.</span>',
        cta_sub:'Kontaktujte nás dnes pre demo alebo viac informácií.',
        cta_demo:'Požiadajte o Demo'
      },
      wood: {
        eyebrow:'Čo Robíme', heading:'Reštaurovanie Dreva &amp;<br><span>Čistenie Povrchov</span>',
        sub:'Vráťte starému drevu život pomocou pokročilého impulzného laserového čistenia.',
        pill1:'Drevené Okenné Rámy', pill2:'Reštaurovanie Antických Dverí', pill3:'Čistenie Nábytku',
        pill4:'Reštaurovanie Drevenenvých Povrchov', pill5:'Odstraňovanie Farby z Dreva',
        detail_eyebrow:'Drevo a Rezivo',
        detail_heading:'Jemný na Drevo.<br><span style="color:var(--gold);">Tvrdý na Špinu.</span>',
        check1:'Čistenie drevenenvých okenných rámov', check2:'Reštaurovanie starých drevenenvých dverí',
        check3:'Čistenie povrchov nábytku', check4:'Odstraňovanie farby, špiny, sadzí a náterov',
        check5:'Jemný proces bez poškodenia dreva',
        eco_note:'Bezpečná, neabrazívna a chemikáliami voľná technológia ideálna pre jemné drevené povrchy a reštaurovátorské projekty.',
        img1_title:'Okenné Rámy', img2_title:'Drevené Dvere', img3_title:'Drevený Nábytok'
      },
      metal: {
        eyebrow:'Kov a Priemysel', heading:'Reštaurovanie Kovov &amp;<br><span>Odhrdzavovanie</span>',
        sub:'Vráťte opotrebované kovové povrchy do pôvodného stavu pomocou pokročilého impulzného laserového čistenia.',
        pill1:'Zhrdzavené Nástroje a Zariadenia', pill2:'Komponenty Priemyselných Strojov',
        pill3:'Automobilová Reštaurácia', pill4:'Reštaurovanie Antických Kovov', pill5:'Čistenie Zvarových Švov',
        detail_eyebrow:'Kov a Priemysel',
        detail_heading:'Očistite až na Kov.<br><span style="color:var(--gold);">Obnovte Kov.</span>',
        detail_sub:'Vráťte opotrebované kovové povrchy do pôvodného stavu pomocou pokročilého impulzného laserového čistenia.',
        check1:'Hboké odstraňovanie hrdze a korózie', check2:'Odstraňovanie náterov a farby zo zariadení',
        check3:'Odmastenie a odstraňovanie oleja z motorových komponentov', check4:'Odstraňovanie oxidov zo zvarových švov',
        check5:'Presné čistenie zložitých kovových dielov', check6:'Neabrazívny proces, zachováva integritu kovu',
        eco_note:'Efektívna, edeštruktívna a chemikáliami voľná technológia. Ideálna pre rôzne kovy a renovácie vysokej hodnoty.',
        img1_title:'Kovové Konštrukcie', img2_title:'Brány a Ploty', img3_title:'Nástroje a Diely'
      },
      equip: {
        eyebrow:'Laserová Technológia', heading:'Zariadenie a <span>Aplikácie</span>',
        apps_eyebrow:'Všestranná Technológia', apps_heading:'Ideálne pre Široký<br><span>Rozsah Aplikácií</span>',
        app1_title:'Formy a Nástroje', app1_desc:'Presné čistenie vstrekovených foriem a nástrojov bez rozmerových zmien.',
        app2_title:'Automobilová Reštaurácia', app2_desc:'Bezpečne odstráňte hrdzu, farbu a nátery z karosérie a komponentov.',
        app3_title:'Historická Reštaurácia', app3_desc:'Jemné čistenie historických štruktúr, kamenárstva a artefaktov.',
        app4_title:'Čistenie Zvarov', app4_desc:'Odstráňte oxidáciu a zmenu farby zo zvarov pred ošetrením alebo dokončovaním.',
        specs_eyebrow:'Technické Špecifikácie', specs_heading:'Navrhnutý pre<br><span>Najvyššiu Kontrolu.</span>',
        spec_machine:'300W Impulzný Laserový Čistiaci Systém',
        spec_power:'Výkon', spec_type:'Typ Lasera', spec_freq:'Frekvencia Impulzov',
        spec_dur:'Trvanie Impulzu', spec_spot:'Veľkosť Bodu', spec_weight:'Hmotnosť', spec_supply:'Napájanie',
        check1:'Priemerny výkon 300W', check2:'Impulzná technológia pre najvyššiu kontrolu',
        check3:'Vhodný pre rôzne materiály', check4:'Minimálna údržba',
        check5:'Kompaktný, mobilný a ľahko použiteľný', check6:'Konzistentné výsledky vysokej kvality'
      },
      stone: {
        eyebrow:'Čo Robíme', heading:'Reštaurovanie Kameňa &amp;<br><span>Čistenie Povrchov</span>',
        sub:'Vráťte zvetrané kamene a murivo do života pomocou pokročilého impulzného laserového čistenia.',
        pill1:'Čistenie Kameňa a Muriva', pill2:'Reštaurovanie Pamiatok', pill3:'Tehla a Škárovanie',
        pill4:'Prírodné Kamenné Povrchy', pill5:'Historické Stavby',
        detail_eyebrow:'Kameň a Murivo',
        detail_heading:'Obnov Kameň.<br><span style="color:var(--gold);">Odhali Charakter.</span>',
        check1:'Čistenie kamenných múrov, chodníkov a záhradných prvkov',
        check2:'Odstraňovanie machu, lišajníkov a biologického rastu',
        check3:'Odstraňovanie graffiti a farby z kameňa',
        check4:'Čistenie historických budov a pamiatok',
        check5:'Neabrazívny proces, bez poškodenia štruktúry kameňa',
        eco_note:'Bezpečná, neabrazívna a chemikáliami voľná technológia ideálna pre jemné kamenárske práce a projekty ochrany kultúrneho dedičstva.',
        img1_title:'Kameň a Murivá', img2_title:'Pamätníky', img3_title:'Fasády a Steny'
      },
      antique: {
        eyebrow:'Čo Robíme',
        heading:'Reštaurovanie Staržitností &amp;<br><span>Precízne Čistenie</span>',
        sub:'Oživte vzácne staržitnosti pokročilým impulzným laserovým čistením — bezpečným, bez chemikálií a šetrným k pôvodnej patine.',
        pill1:'Antický Nábytok', pill2:'Umelecké Diela a Rámy', pill3:'Hodiny a Nástroje',
        pill4:'Mince a Medaily', pill5:'Ozdoby a Predmety',
        detail_eyebrow:'Staržitnosti a Dedičstvo',
        detail_heading:'Obnov Minulosť.<br><span style="color:var(--gold);">Zachovaj Príbeh.</span>',
        check1:'Jemné odstraňovanie nečistoť, oxidácie a starého laku z nábytku',
        check2:'Čistenie umeleckých diel, pozlátených rámov a dekoratívnych povrchov',
        check3:'Obnova hodín, nástrojov a kovových kovaní',
        check4:'Čistenie mincí, medalí a malých zberateľských predmetov',
        check5:'Bez chemikálií, bez abrazív — pôvodná patina zachovaná',
        eco_note:'Impulzná laserová technológia je celosvetovo uznávaná konzervátormi pre svoju presnosť pri práci s nenahraditeľnými dedičskými predmetmi.',
        img1_title:'Antický Nábytok', img2_title:'Umelecké Diela a Rámy', img3_title:'Hodiny a Nástroje'
      },
      contact: {
        eyebrow:'Kontaktujte Nás', heading:'Vyčistíme <span>Niečo</span><br>Spolu.',
        intro:'Požiadajte o demo, opýtajte sa na náš 300W impulzný laserový systém alebo sa jednoducho ozvite. Odpovíme čo najskôr.',
        name_label:'Meno', name_ph:'Vaše meno',
        phone_label:'Telefón', phone_ph:'+353 ...',
        email_label:'Email', service_label:'Zaujíma ma', service_default:'Vyberte službu...',
        service_opt1:'Reštaurovanie dreva a čistenie povrchov',
        service_opt2:'Čistenie priemyselných zariadení',
        service_opt3:'Automobilová reštaurácia',
        service_opt4:'Čistenie foriem a nástrojov',
        service_opt5:'Historická reštaurácia',
        service_opt6:'Čistenie zvarov a predúprava',
        service_opt7:'Všeobecná otázka',
        msg_label:'Správa', msg_ph:'Povedzte nám o vašom projekte...', send_btn:'Odoslať Správu',
        contact_details:'Kontaktné Údaje', follow_us:'Sledujte Nás', location:'Írsko'
      }
    }
  };

  function get(obj, path) {
    return path.split('.').reduce(function(o, k) { return (o && o[k] !== undefined) ? o[k] : null; }, obj);
  }

  function applyLang(lang) {
    if (!T[lang]) return;
    var t = T[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var val = get(t, el.getAttribute('data-i18n'));
      if (val !== null) {
        if (el.tagName === 'OPTION') { el.text = val; } else { el.textContent = val; }
      }
    });
    // Force select elements to repaint (Windows/Chrome native dropdown caches option text)
    document.querySelectorAll('select').forEach(function(sel) {
      var v = sel.value;
      sel.style.display = 'none';
      sel.offsetHeight;
      sel.style.display = '';
      sel.value = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var val = get(t, el.getAttribute('data-i18n-html'));
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
      var val = get(t, el.getAttribute('data-i18n-ph'));
      if (val !== null) el.placeholder = val;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('momos_lang', lang);
  }

  function init() {
    var saved = localStorage.getItem('momos_lang') || 'en';
    applyLang(saved);
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { applyLang(btn.getAttribute('data-lang')); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
