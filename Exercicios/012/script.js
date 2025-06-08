createStringConnection("db_products", "db_users", "db_pass");
function createStringConnection(database, user, password) {
    const connectionString = `mongodb://${user}:${password}@localhost:27017/${database}`;
    console.log(connectionString);}

    