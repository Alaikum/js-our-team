console.log('Our Team')

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e 
// la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di 
// stringhe

// nome           role                    image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg





// funzione che crea oggetti 
function generateTeam(nome, ruolo, image) {
    const ourTeam = {
        nome: nome,
        ruolo: ruolo,
        image: image,
    }
    return ourTeam
}


const theTeam = [
    generateTeam('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    generateTeam('Angela Caroll', 'Chief Editor', 'angela - caroll - chief - editor.jpg'),
    generateTeam('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    generateTeam('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    generateTeam('Scott Estrada', 'Developer', 'scott - estrada - developer.jpg'),
    generateTeam('Barbara Ramos', 'Graphic Designer', 'barbara - ramos - graphic - designer.jpg'),

    
]

console.log(theTeam)

for (const key in theTeam) {

    const element = theTeam[key];

    console.log(element)
}

