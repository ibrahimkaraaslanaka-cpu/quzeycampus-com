/* === QUZEY CAMPUS - Script === */

const countries = {
    uk: {
          name: "Ingiltere", flag: "GB", image: "assets/uk.png",
          intro: "Ingiltere, Ingilizce'nin ana dili olarak konusuldugu 


        // UI Helpers
        function selectCountry(key) {
      document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
      const tab = document.querySelector(`[data-country="${key}"]`);
      if (tab) tab.classList.add('active');
      renderCountry(key);
}

document.getElementById('navToggle').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      data.access_key = "3599026b-677a-4933-9097-6a5839eb774a";
      await fetch("https://api.web3forms.com/submit", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(data)});
      alert("Mesajiniz gonderildi!");
});
