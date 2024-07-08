let guestList: string[] = ["Hamza", "Umer", "Hannan", "Mouiza","Maryam", "Bisma", "Aisha", "Aurangzeb"];
console.log("Unfortunately! the new dinner table won’t arrive in time so we have space for only two guests.");
while(guestList.length > 2){
    let removedGuest: string | undefined = guestList.pop();
    if (removedGuest !== undefined){
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
};
guestList.forEach(guest =>{
    console.log(`Dear ${guest}, You are still invited to dinner.`);
});
guestList.splice(0,guestList.length);
console.log("Updated list of guest: []");