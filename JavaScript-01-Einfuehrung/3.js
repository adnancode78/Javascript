const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const day = await prompt("Please enter number ( 1  -  7 ): ");
    if (day <= 7 && day >=0){


    if (day == 1 ){
        console.log('today is sunday ');
    }
    else if (day == 2 )
        console.log('today is Monday ');

    else if  (day == 3 )
        console.log('today is Tuesday ');

    else if  (day == 4 )
        console.log('today is Wednesday ');

    else if  (day == 5 )
        console.log('today is Thursday ');

    else if  (day == 6 )
        console.log('today is Friday ');

    else if  (day == 7 )

        console.log('today is Saturday ');

    }else{
        console.log('wrong Number ');
    }




    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());