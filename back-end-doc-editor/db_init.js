const Note = require('./models/Note');

Note.sync({ force: true })
    .then(() => {
        Note.bulkCreate([
            { title: 'A NOTE', content: 'This is a note' },
            { title: 'ANOTHER', content: 'This is a second note' },
            { title: 'A THIRD', content: 'This is a THIRD note' },
        ]);
    })
