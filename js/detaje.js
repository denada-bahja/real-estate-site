    const properties = {
      1: {
        image: "https://images.unsplash.com/photo-1609740699990-436c2cbf7151?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
        label: "Qira",
        rating: "★★★★☆ <span class='text-danger'>4.7(10)</span>",
        title: "Garsoniere moderne",
        location: "📍 Tiranë, Komuna e Parisit",
        description: "Kjo garsoniere moderne ofron një ambient të ngrohtë dhe funksional për banim të përditshëm. Ndriçimi natyral dhe arredimi bashkëkohor krijojnë një atmosferë të qetë dhe relaksuese. Ajo është veçanërisht e përshtatshme për studentë ose çifte që kërkojnë qasje të shpejtë në universitete dhe shërbime publike.",
        specs: "📐 45 m² 🛏 1 krevat 🛁 1 banjo",
        price: "250 €/muaj"
      },
      2: {
        image: "https://images.unsplash.com/photo-1643319602530-7425f2168125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        label: "Shitje",
        rating: "★★★★★ <span class='text-danger'>5.0(8)</span>",
        title: "Vilë buzë detit",
        location: "📍 Durrës, Plazh",
        description: "Vilë luksoze me pozicion të shkëlqyer buzë detit, e cila ofron pamje panoramike dhe relaks total. Me verandë të bollshme, kjo pronë përfaqëson zgjedhjen ideale për ata që duan të jetojnë pranë natyrës ose të investojnë në një shtëpi pushimi me stil dhe rehati.",
        specs: "📐 200 m² 🛏 4 krevate 🛁 3 banjo",
        price: "180,000 €"
      },
      3: {
        image: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0",
        label: "Qira",
        rating: "★★★☆☆ <span class='text-danger'>3.9(4)</span>",
        title: "Apartament modern",
        location: "📍 Shkodër, Qendër",
        description: "Ky apartament modern përfshin një kombinim të shkëlqyer mes dizajnit bashkëkohor dhe funksionalitetit. I vendosur në qendër të qytetit, ofron akses të lehtë në qendrat tregtare, institucione dhe transport publik. Ambienti është ideal për çifte ose familje të vogla që vlerësojnë komoditetin urban.",
        specs: "📐 70 m² 🛏 2 krevate 🛁 1 banjo",
        price: "300 €/muaj"
      },
      4: {
        image: "https://images.unsplash.com/photo-1631528858266-5ebeb8bfc6f5?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0",
        label: "Shitje",
        rating: "★★★★☆ <span class='text-danger'>4.4(7)</span>",
        title: "Apartament",
        location: "📍 Vlorë, Lungomare",
        description: "Apartament i mrekullueshëm me pamje të drejtpërdrejtë nga deti, i cili ofron një ndjesi qetësie dhe pushimi të përhershëm. Me mobilim modern dhe afërsi me Lungomaren, ky është një investim ideal për banim ose përdorim gjatë sezonit turistik.",
        specs: "📐 90 m² 🛏 2 krevate 🛁 2 banjo",
        price: "95,000 €"
      },
      5: {
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
        label: "Qira",
        rating: "★★★☆☆ <span class='text-danger'>3.8(3)</span>",
        title: "Studio e vogël",
        location: "📍 Elbasan, Qendër",
        description: "Studio praktike dhe funksionale për një person të vetëm që kërkon të jetojë në qendër të qytetit. E përshtatshme për studentë ose profesionistë që dëshirojnë një hapësirë të vogël, të ngrohtë dhe ekonomike, me akses të shpejtë në çdo shërbim të nevojshëm.",
        specs: "📐 35 m² 🛏 1 krevat 🛁 1 banjo",
        price: "180 €/muaj"
      },
      6: {
        image: "https://images.unsplash.com/photo-1638030802076-41493b4764dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
        label: "Shitje",
        rating: "★★★★★ <span class='text-danger'>5.0(12)</span>",
        title: "Shtëpi tradicionale",
        location: "📍 Korçë, Pazari i Vjetër",
        description: "Një shtëpi autentike shqiptare me arkitekturë tradicionale dhe karakter të veçantë. E ndodhur në një zonë historike dhe turistike, kjo pronë ofron një përvojë unike jetese me kombinimin perfekt të kulturës, historisë dhe rehatisë.",
        specs: "📐 150 m² 🛏 3 krevate 🛁 2 banjo",
        price: "120,000 €"
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const property = properties[id];

    if (property) {
      document.getElementById('propertyImage').src = property.image;
      document.getElementById('propertyLabel').innerHTML = property.label;
      document.getElementById('propertyRating').innerHTML = property.rating;
      document.getElementById('propertyTitle').innerText = property.title;
      document.getElementById('propertyLocation').innerText = property.location;
      document.getElementById('propertyDescription').innerText = property.description;
      document.getElementById('propertySpecs').innerText = property.specs;
      document.getElementById('propertyPrice').innerText = property.price;
    } else {
      document.querySelector('.property-container').innerHTML = '<p class="text-danger">Prona nuk u gjet.</p>';
    }