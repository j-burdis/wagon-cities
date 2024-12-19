export default function(state = null, action) {
  switch (action.type) {
    case 'CITY_SELECTED': {
      state;
    }
    default: {
      return [
        { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" },
        { name: "London", address: "14-22 Elder St, London E1 6BT", slug: "london" },
        { name: "Berlin", address: "Rudi-Dutschke-Straße 26, 10969 Berlin", slug: "berlin" },
        { name: "Bali", address: "Jalan Raya Batu Bolong, Canggu, Badung Regency, Bali, Indonesia", slug: "bali" },
        { name: "Montréal", address: "5333, avenue Casgrain, 102, Montréal (Québec), H2T1X3", slug: "montreal" },
        { name: "Tokyo", address: "2-11-3 Meguro, Meguro-ku, Tokyo ", slug: "tokyo" },
        { name: "Amsterdam", address: "Overhoeksplein 2, 1031 KS Amsterdam", slug: "amsterdam" },
        { name: "Brussels", address: "Place Sainte-Gudule 5, 1000 Brussels", slug: "brussels" },
        { name: "Lisbon", address: "Avenida Casal Ribeiro 28, Lisbon", slug: "lisbon" },
        { name: "Rio de Janeiro", address: "Rua Duque Estrada, 41 - Gávea, Rio de Janeiro", slug: "rio" },
        { name: "São Paulo", address: "Rua Mourato Coelho, 1404 – Vila Madalena, São Paulo - SP", slug: "sao-paulo" },
        { name: "Barcelona", address: "Travessera de Dalt, 33, 08024 Barcelona", slug: "barcelona" },
        { name: "Nantes", address: "11 impasse Juton, Nantes", slug: "nantes" },
        { name: "Bordeaux", address: "107 cours Balguerie Stuttenberg, 33300", slug: "bordeaux" },
        { name: "Lille", address: "2 Avenue des Saules, 59000 Lille", slug: "lille" },
        { name: "Lyon", address: "23 Rue Paul Montrochet, 69002 Lyon", slug: "lyon" }
      ];
    }
  }
}
