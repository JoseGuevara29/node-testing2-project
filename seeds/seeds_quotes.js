exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("quotes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quotes").insert([
        { quotes: "Helloooowwww" },
        { quotes: "Thereee" },
      ]);
    });
};
