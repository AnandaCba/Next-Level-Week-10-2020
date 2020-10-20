const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db=>{

    //Inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-23.3382024",
        lng:"-46.8537658",
        name:"Lar dos Meninos",
        about:"Presta assistência para meninos e meninas",
        whatsapp:"888555222",
        images:[
            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horários de visita das 8h até as 18h",
        open_on_weekends:"0"
    })

    //Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages ")
    console.log(selectedOrphanages)
 /*
    //Consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT  * FROM orphanages WHERE id="3"')
    console.log(orphanage)

    //Deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id ='4'")
    await db.run("DELETE FROM orphanages WHERE id ='5'")
*/

})