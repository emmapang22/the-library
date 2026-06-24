# 📌 Rättningsrapport – fed25s-the-library-emmapang22

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift - The Library

Denna inlämningsuppgift fokuserar på att du skall lära dig hantera server side kod i next. Du skall hämta data från ett api: <https://openlibrary.org/dev/docs/api/search>

Läs gärna på kring dokumentationen om detta api och se över vilka querystrings som just du kommer behöva i ditt projekt.

## Uppgiften

Denna uppgift består av två delar.

### Hämta böcker

Du skall söka efter böcker från openlibrary och presentera den med:

- Titel
- Författare
- Utgivningsår
- Omslagsbild (om det finns)

Detta skall ske i en server component så att du hämtar data till din applikation från servern istället för via webbläsaren.

För att se böckerna skall en egen route användas, t.ex. /books

### Skapa en läslista

För att träna lite mer på att hantera egen data kommer du i denna del att skapa den egen läslista och lagra den i en mongoose-databas.

Här behöver du hitta anslutningssträngen till din databas igen, kika gärna i den tidigare kursens kod om du behöver. Sedan behöver du skapa en mongoose model för ett objekt i din läslista. Och nu behöver du sedan skapa crud-operationerna för denna model så att du kan hantera läslistan via server actions.

För att se din läslista skall en egen route användas, t.ex. /reading-list

## Krav

### Betyg G

- Göra en sökning av böcker baserat på en textruta
- Hantera all data på servern
- Ha kontroll över antalet böcker som du hämtar (bör inte vara alla utan ett begränsat antal)
- Presentera böckerna enligt beskrivningen ovan
- Kunna klicka på en bok för att lägga till den i din läslista
- Kunna se din läslista
- Samtliga punkter ovan skall skötas via server actions och server components
- Responsiv design med hjälp av tailwind

### Betyg VG

- Kunna ta bort böcker från läslistan
- Använda paginering för att presentera böckerna i /books
- Använda paginering för att presentera läslistan i /reading-list
- Validering av data som skall sparas i databasen
- Felhantering implementeras om t.ex. databasen eller api:t inte svarar
- Statusmeddelande om när en bok läggs till i läslistan eller tas bort ur läslistan

## Övrigt

Det är ok att ett krav inte är 100% uppfyllt, studenterna lär sig fortfarande. Så länge funktionaliteten är genomtänkt och ett bra försök att lösa problemet har gjorts.

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Projektet uppfyller samtliga G-krav på ett tydligt och i huvudsak korrekt sätt. Det finns en dedikerad /books-route som gör sökningen mot OpenLibrary på serversidan (server component som anropar serverlogik), och resultaten presenteras med titel, författare, utgivningsår och omslagsbild (med rimliga fallbacks). Användaren kan styra hur många böcker som hämtas via limit i querystring, och dataflödet/persistensen hanteras server-side: böcker kan läggas till i en läslista via server actions och sparas i MongoDB via Mongoose, och /reading-list-route hämtar och renderar läslistan på serversidan. Responsiv design är implementerad med Tailwind-klasser genom komponenterna.

VG-kraven är påbörjade men inte tillräckligt robusta för att bedömas som uppfyllda. Borttagning från läslistan finns, och paginering finns i UI för både /books och /reading-list, men pagineringen har en tydlig funktionell brist: beräkningen av antal sidor hårdkodar division med 10 och ignorerar limit, vilket gör att pagineringen blir fel när användaren väljer andra sidstorlekar. Dessutom byggs länkar i /reading-list inkonsekvent med hårdkodad limit=10, vilket gör beteendet svårförutsägbart. Validering av data innan den sparas i databasen är begränsad (server action tar emot ett Book-objekt och skapar direkt utan tydlig server-side sanering/validering utöver schema-krav), och statusmeddelanden vid add/remove är inte kopplade till faktisk success/failure (t.ex. UI triggar feedback utan att invänta server action och utan robust try/catch-flöde). Sammantaget: stabilt G, men flera VG-punkter faller på korrekthet/robusthet snarare än att funktionalitet helt saknas.

💡 **Förbättringsförslag:**  
För att nå VG (prioriterad ordning):
- Fixa pagineringslogiken så att antal sidor baseras på aktuell limit (t.ex. Math.ceil(total / limit)) och inte en hårdkodad 10. Säkerställ att samma limit används konsekvent i alla pagination-länkar.
- Gör /reading-list konsekvent: antingen (A) lås sidstorleken till 10 och ta bort/ignorera limit-param helt, eller (B) stöd valbar limit även där och bygg href/querystring från aktuella searchParams.
- Implementera robust status/felhantering för server actions: gör klickhanteraren async, await:a add/remove, använd try/catch och visa “success/error”-meddelande baserat på resultat (helst inline/toast istället för alert). Låt server actions returnera ett tydligt resultat (t.ex. { ok: true } / { ok: false, message }).
- Lägg till server-side validering/sanering innan BookModel.create (kontrollera att key/title finns och är rimliga strängar; normalisera author/year/cover). Komplettera gärna med unikt index på key för att undvika dubbletter i läslistan.

Kodkvalitet/underhåll:
- Centralisera URL/querystring-byggande för pagination i en helper för att minska duplicering och hårdkodning.
- Ta bort kvarvarande debug-loggar (t.ex. console.log i books-sidan).
- Gör className-sammanslagning robust (t.ex. alltid lägga in mellanslag vid extraClasses eller använd en cn/clsx-helper).

Pepp: Du har en bra grundarkitektur med tydlig uppdelning mellan serverlogik, actions, modeller och UI—fixar du pagineringen och gör actions-flödet mer robust är du väldigt nära VG.