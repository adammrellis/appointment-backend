exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Sherill Babbage",
          email: "sbabbage0@ucla.edu",
          password: "hcmKoOr"
        },
        {
          name: "Beret Luc",
          email: "bluc1@cornell.edu",
          password: "A12PirY61b"
        },
        {
          name: "Maggy Diviney",
          email: "mdiviney2@smugmug.com",
          password: "3DkZXSV4Fd"
        },
        {
          name: "Lula Gierke",
          email: "lgierke3@businesswire.com",
          password: "crBUqU9I"
        },
        {
          name: "Nikoletta Huckle",
          email: "nhuckle4@paypal.com",
          password: "iXGt9xa"
        },
        {
          name: "Fancie Crighton",
          email: "fcrighton5@zimbio.com",
          password: "YjdXPaWXNnQ"
        },
        {
          name: "Liv Loveridge",
          email: "lloveridge6@lulu.com",
          password: "M7xVf9QgL"
        },
        {
          name: "Annabella Pindell",
          email: "apindell7@scribd.com",
          password: "RJZFSUjPWD"
        },
        {
          name: "Chickie Addie",
          email: "caddie8@geocities.jp",
          password: "HYKoFfBj7d"
        },
        {
          name: "Katina Gerrad",
          email: "kgerrad9@bbc.co.uk",
          password: "164xFEY"
        },
        {
          name: "Moreen Stallworthy",
          email: "mstallworthya@epa.gov",
          password: "esK2AjN1Qo6b"
        },
        {
          name: "Clarette Levane",
          email: "clevaneb@freewebs.com",
          password: "7GBdduHIQ2Be"
        },
        {
          name: "Sybilla Hansemann",
          email: "shansemannc@technorati.com",
          password: "YP4aj2az"
        },
        {
          name: "Kally Schule",
          email: "kschuled@cloudflare.com",
          password: "sXhp4yTL"
        },
        {
          name: "Kati Stobo",
          email: "kstoboe@opensource.org",
          password: "NuWw9Q"
        },
        {
          name: "Normand Maunton",
          email: "nmauntonf@naver.com",
          password: "SlsNev4QXKs"
        },
        {
          name: "Dosi Valentim",
          email: "dvalentimg@xing.com",
          password: "3waGI9"
        },
        {
          name: "Rubie Dosedale",
          email: "rdosedaleh@accuweather.com",
          password: "qKbnE7wpj"
        },
        {
          name: "Ingeborg Munnis",
          email: "imunnisi@shinystat.com",
          password: "KKMo01jUUWS"
        },
        {
          name: "Eada Loweth",
          email: "elowethj@a8.net",
          password: "ZzXBiNbjb"
        },
        {
          name: "Ariadne Osinin",
          email: "aosinink@mail.ru",
          password: "0q7eR9yxLQR"
        },
        {
          name: "Kellsie Benediktsson",
          email: "kbenediktssonl@slideshare.net",
          password: "r04xvTFp3Wun"
        },
        {
          name: "Ibby Beningfield",
          email: "ibeningfieldm@ihg.com",
          password: "lRkx2Q"
        },
        {
          name: "Sophi Claxson",
          email: "sclaxsonn@instagram.com",
          password: "XB4x15Iwb0"
        },
        {
          name: "Pall Brockhurst",
          email: "pbrockhursto@blogger.com",
          password: "jt5a2Q"
        },
        {
          name: "Jacinthe Kencott",
          email: "jkencottp@canalblog.com",
          password: "1DHdbYkKED"
        },
        {
          name: "Price Durston",
          email: "pdurstonq@columbia.edu",
          password: "ydxai7BcOo"
        },
        {
          name: "Freedman Gallant",
          email: "fgallantr@ucoz.ru",
          password: "bC6EqrE4c"
        },
        {
          name: "Ilse Handmore",
          email: "ihandmores@howstuffworks.com",
          password: "NNsuyvFYXZ"
        },
        {
          name: "Zitella Torrent",
          email: "ztorrentt@house.gov",
          password: "w7hKfKn"
        },
        {
          name: "Kristal Botger",
          email: "kbotgeru@chicagotribune.com",
          password: "qWzlU9"
        },
        {
          name: "Emmalynne Greschke",
          email: "egreschkev@fema.gov",
          password: "M0pAwjCf"
        },
        {
          name: "Anallese Pinhorn",
          email: "apinhornw@yale.edu",
          password: "Ix0JkC6"
        },
        {
          name: "Sibley Fowlie",
          email: "sfowliex@google.fr",
          password: "44WTkNx7bs"
        },
        {
          name: "Tawsha Martino",
          email: "tmartinoy@163.com",
          password: "JWw4A0B47C"
        },
        {
          name: "Cordey Cauldfield",
          email: "ccauldfieldz@cbsnews.com",
          password: "GXNI5OuCqdlB"
        },
        {
          name: "Delphine Dendon",
          email: "ddendon10@statcounter.com",
          password: "3HBDb1d9nJA"
        },
        {
          name: "Arda Gelder",
          email: "agelder11@army.mil",
          password: "YbI3Lti3"
        },
        {
          name: "Merrill Marchington",
          email: "mmarchington12@slate.com",
          password: "K3Q8y8q6Eu5R"
        },
        {
          name: "Valli Atyea",
          email: "vatyea13@rakuten.co.jp",
          password: "dLG73u9LXeTC"
        },
        {
          name: "Wanids Souza",
          email: "wsouza14@jimdo.com",
          password: "yFaioRurd"
        },
        {
          name: "Dominik Kissack",
          email: "dkissack15@cmu.edu",
          password: "U9tpDadfO7xj"
        },
        {
          name: "Mischa Irdale",
          email: "mirdale16@army.mil",
          password: "22ZGGj"
        },
        {
          name: "Zaccaria Glassup",
          email: "zglassup17@amazonaws.com",
          password: "rNkEzUPrQAq"
        },
        {
          name: "Merrily McSorley",
          email: "mmcsorley18@rakuten.co.jp",
          password: "nKVeDszP"
        },
        {
          name: "Johnnie Adney",
          email: "jadney19@dell.com",
          password: "Btfsjvqx7"
        },
        {
          name: "Nollie Bernaldo",
          email: "nbernaldo1a@sun.com",
          password: "Czy4bZ6VV1xk"
        },
        {
          name: "Grete Moretto",
          email: "gmoretto1b@pagesperso-orange.fr",
          password: "ttmcSMlaG"
        },
        {
          name: "Dinah Meyer",
          email: "dmeyer1c@ucla.edu",
          password: "d8CB9J0X"
        },
        {
          name: "Marcos Ballinghall",
          email: "mballinghall1d@bloglines.com",
          password: "WPrbQei"
        },
        {
          name: "Nana Trewett",
          email: "ntrewett1e@cnbc.com",
          password: "18eDIOnIgYZv"
        },
        {
          name: "Zacharie Brou",
          email: "zbrou1f@surveymonkey.com",
          password: "0lGiIJuXws"
        },
        {
          name: "Kimbell Eastope",
          email: "keastope1g@narod.ru",
          password: "H2yMZ8OOv"
        },
        {
          name: "Mill Bosomworth",
          email: "mbosomworth1h@yelp.com",
          password: "nhxLUqDUwo"
        },
        {
          name: "Celinka Beazer",
          email: "cbeazer1i@oracle.com",
          password: "utdw90R"
        },
        {
          name: "Myriam Marcus",
          email: "mmarcus1j@msu.edu",
          password: "NsAYJffMOngx"
        },
        {
          name: "Sioux Sterman",
          email: "ssterman1k@desdev.cn",
          password: "NVv1AyQK66Oh"
        },
        {
          name: "Carlie Moralee",
          email: "cmoralee1l@woothemes.com",
          password: "leVYQn"
        },
        {
          name: "Franklyn Stoffel",
          email: "fstoffel1m@goo.gl",
          password: "BHBw7H"
        },
        {
          name: "Margarete Stidever",
          email: "mstidever1n@kickstarter.com",
          password: "bUJkkY"
        },
        {
          name: "Pavel McAuslene",
          email: "pmcauslene1o@rakuten.co.jp",
          password: "7fiP4KSAmx"
        },
        {
          name: "Maritsa Illiston",
          email: "milliston1p@hibu.com",
          password: "lYLHi59NRur"
        },
        { name: "Nert Duprey", email: "nduprey1q@fda.gov", password: "z8lay2" },
        {
          name: "Daffi Simmans",
          email: "dsimmans1r@statcounter.com",
          password: "JG0t55dcX"
        },
        {
          name: "Carlynne Sorbie",
          email: "csorbie1s@opera.com",
          password: "MVDnxQd"
        },
        {
          name: "Kerri Manford",
          email: "kmanford1t@pen.io",
          password: "f56rAje"
        },
        {
          name: "Hillier Vickarman",
          email: "hvickarman1u@hao123.com",
          password: "C7Et28"
        },
        {
          name: "Trumaine Keener",
          email: "tkeener1v@webnode.com",
          password: "1jktMAu30"
        },
        {
          name: "Hewett Jacke",
          email: "hjacke1w@lycos.com",
          password: "oHUZ2bn2k7"
        },
        {
          name: "Cory Stovold",
          email: "cstovold1x@un.org",
          password: "mSeUdmx"
        },
        {
          name: "Glad Brettell",
          email: "gbrettell1y@google.de",
          password: "JzDcfF5Dw"
        },
        {
          name: "Charyl Dombrell",
          email: "cdombrell1z@guardian.co.uk",
          password: "SlaT2liPGMTR"
        },
        {
          name: "Cathyleen Laise",
          email: "claise20@discuz.net",
          password: "GuWgGPFajXJ"
        },
        {
          name: "Angelique Helling",
          email: "ahelling21@google.com.hk",
          password: "WDzo7y"
        },
        {
          name: "Andreana Vuittet",
          email: "avuittet22@hibu.com",
          password: "yuPDvOLY"
        },
        {
          name: "Jennie Cant",
          email: "jcant23@over-blog.com",
          password: "LFwBmj"
        },
        {
          name: "Griff Drain",
          email: "gdrain24@so-net.ne.jp",
          password: "c094XI5"
        },
        {
          name: "Etienne Banyard",
          email: "ebanyard25@smugmug.com",
          password: "3cc46bdl6"
        },
        { name: "Dinah Cowen", email: "dcowen26@free.fr", password: "WkOQXk" },
        {
          name: "Uri Westberg",
          email: "uwestberg27@washingtonpost.com",
          password: "fTuAAaLbs3XK"
        },
        {
          name: "Hasheem Otridge",
          email: "hotridge28@comcast.net",
          password: "RMa30abr"
        },
        {
          name: "Vassily Kinnie",
          email: "vkinnie29@bbc.co.uk",
          password: "NJRCpaITq"
        },
        {
          name: "Lonnie Gabbidon",
          email: "lgabbidon2a@tripadvisor.com",
          password: "k7MMGyVsywGk"
        },
        {
          name: "Jenna Lambin",
          email: "jlambin2b@ted.com",
          password: "6MRuFruh"
        },
        {
          name: "Darla Tomisch",
          email: "dtomisch2c@netlog.com",
          password: "bL061uMZOoW"
        },
        {
          name: "Meggi Fogarty",
          email: "mfogarty2d@wikispaces.com",
          password: "yOFNCEt"
        },
        {
          name: "Torrin Haldane",
          email: "thaldane2e@howstuffworks.com",
          password: "hRKMuC"
        },
        {
          name: "Ebeneser Lelande",
          email: "elelande2f@businessweek.com",
          password: "jiBoTGdZC"
        },
        { name: "Gib Flag", email: "gflag2g@wired.com", password: "V4y9or" },
        {
          name: "Sargent Gardiner",
          email: "sgardiner2h@lulu.com",
          password: "vDYQ3fY9"
        },
        {
          name: "Odele Plet",
          email: "oplet2i@moonfruit.com",
          password: "JapLOCTro"
        },
        {
          name: "Patton Southerton",
          email: "psoutherton2j@timesonline.co.uk",
          password: "J1SEjpbPP"
        },
        {
          name: "Jermaine Aleksankin",
          email: "jaleksankin2k@ucoz.ru",
          password: "K7OZzFXA3373"
        },
        {
          name: "Brucie Scotts",
          email: "bscotts2l@wix.com",
          password: "lkn2iJ7"
        },
        {
          name: "Pammy Wreiford",
          email: "pwreiford2m@discuz.net",
          password: "fB2mSKdt3K"
        },
        {
          name: "Aubrey Klees",
          email: "aklees2n@reference.com",
          password: "FmaDsAv"
        },
        {
          name: "Noel Olekhov",
          email: "nolekhov2o@hugedomains.com",
          password: "OwcywDI"
        },
        {
          name: "Magdalene Revett",
          email: "mrevett2p@umich.edu",
          password: "8uZy7sK"
        },
        {
          name: "Henderson Fabb",
          email: "hfabb2q@wsj.com",
          password: "F2VO0MNBbm"
        },
        {
          name: "Ransom Cutsforth",
          email: "rcutsforth2r@wikia.com",
          password: "suu5hX1PDDj"
        }
      ]);
    });
};
