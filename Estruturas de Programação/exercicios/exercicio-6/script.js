


function InfoDate(result) {
    if(typeof result === 'boolean') {
        console.log("Este dado é boolean");

    } else if(typeof result === 'string') {
        console.log("Este texto é textos");

    } else if(typeof result === 'number') {
        console.log("Este dado é numeros");
    }
}

InfoDate(22);
InfoDate("xee");
InfoDate(true);