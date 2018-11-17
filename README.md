# Tech-Store

**English**

This is a school project where we have created a website that sells smartphones (company "Tech-Store").

Here we create an e-commerce page where you can "buy" mobile phones,
add products to the customer basket, remove products, calculate total price, login function and get their purchase history.

*The webdevelopers involved in the project are: Slim-Pete, DY Dog, R Slice.*


**Svenska**

Här skapar vi en e-handelssida för att "köpa" mobiltelefoner och datorer, 
med funktionalitet att lägga produkter i kundvarukorgen, ta bort produkter, räkna ut totalpriset, logga in/registrera funktion och få ut sin köphistorik.


__Login/registrera funktion__

Vi har valt att använda av oss av en popup form där man kan registrera sig och logga in istället för en separat logginsida. Anledningen till detta är att man ska slippa och komma till en ny sida och på det sättet logga in från alla sidor. På samma popup så kan man toggla mellan logga in och registrera användare, detta har vi gjort med jQuery. 

*Förbättring vi kan göra:* Vi hade kunnat ha en mörk bakgrundston så att popup formen hade kommit i mer i fokus. 

Vi har dessutom lagt till en alert på om användarnamnet redan finns i localstorage när man skapar ett konto och även om man loggar in och skriver fel inloggningsuppgifter så får man upp ett felmeddelande med totalt tre försök sedan efter det så rensas input fälten.

*Förbättring vi kan göra:* Efter dom tre inloggnings försöken ska man få feedback på att man har slut på försök. 

__När man är inloggad__

Vi har en login session som är unik från den vanliga sidan, vi har lagt till en text som ger feedback på att man är inloggad (med "Hallå" + användarnamnet) och att man kan logga in får alla sidor samt att man måste vara inloggad för att slutföra sitt köp. Köphistoriken syns på en länk i navbaren. När man inte är inloggad så döljs detta. 

På köphistorikssidan så har vi valt en mörkare färg på bakgrunden för att det ska skilja sig från resten av sidorna. Sist men inte minst, så har vi fixat så att varje order samlas i en container för varje slutfört köp. Dessa förbättringar är till för att användare ska kunna se att man är inloggad och vilka beställningar som har gjort för varje order. På det sättet efterlikna en vanlig e-handelssida så att dom lättare kan känna igen sig utifrån funktionaliteter.

*Förbättring vi kan göra:* Det vi kan göra för att gör det mer tydligare för kunden är att lägga till ett datum för varje order som är gjord och totalsumman för varje order. 

*Webbutvecklare som är involverad i projektet är: Slim-Pete, DY Dog, R Slice.*



Check out our site [here](https://ranchino.github.io/Tech-Store/)!
