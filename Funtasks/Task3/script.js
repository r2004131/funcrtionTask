function clean_text(text){
    if(typeof text != "string"){
        return "Your input must be String "
    }

    let clean = text.trim()

    clean = clean.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "");

    clean = clean.replace(/\s+/g, " ");

    clean = clean.trim()

    return clean

}

console.log(clean_text("      Alhelo       Rabea    "));




// function cleanText(text) {
//     if (typeof text !== "string") return { error: "Your input must be String" };

//     return text
//         .trim()                          
//         .replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "")  
//         .replace(/\s+/g, " ")            
//         .trim();                      
// }

// console.log(cleanText("   alhelo    rabea "));  
