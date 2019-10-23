exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          "appointment details":
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          time: "03/15/2020",
          location: "Bekwai",
          appointment_id: 64,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          time: "12/12/2019",
          location: "Sanxianling",
          appointment_id: 49,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          time: "02/29/2020",
          location: "Chichibu",
          appointment_id: 92,
          accepted_meeting: true
        },
        {
          "appointment details":
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          time: "05/06/2020",
          location: "Jichang",
          appointment_id: 1,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          time: "02/28/2020",
          location: "Sandefjord",
          appointment_id: 92,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          time: "10/15/2019",
          location: "Stockholm",
          appointment_id: 41,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          time: "12/25/2019",
          location: "Galamares",
          appointment_id: 61,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          time: "08/12/2020",
          location: "Quartier Morin",
          appointment_id: 74,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          time: "03/24/2020",
          location: "Campo Largo",
          appointment_id: 81,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          time: "05/13/2020",
          location: "Tatabánya",
          appointment_id: 61,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          time: "05/14/2020",
          location: "Pitangui",
          appointment_id: 79,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          time: "02/09/2020",
          location: "Weishui",
          appointment_id: 21,
          accepted_meeting: false
        },
        {
          "appointment details": "Fusce consequat. Nulla nisl. Nunc nisl.",
          time: "05/09/2020",
          location: "Argelia",
          appointment_id: 35,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          time: "12/13/2019",
          location: "Kurnia",
          appointment_id: 13,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          time: "12/08/2019",
          location: "Usa River",
          appointment_id: 25,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          time: "02/28/2020",
          location: "Loučovice",
          appointment_id: 19,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          time: "03/28/2020",
          location: "Bunisari",
          appointment_id: 38,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          time: "01/29/2020",
          location: "Stapleford",
          appointment_id: 60,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          time: "04/02/2020",
          location: "Orsay",
          appointment_id: 38,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          time: "12/05/2019",
          location: "Dologon",
          appointment_id: 86,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          time: "11/24/2019",
          location: "Samamiya",
          appointment_id: 93,
          accepted_meeting: false
        },
        {
          "appointment details":
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          time: "07/18/2020",
          location: "Tengah",
          appointment_id: 88,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          time: "12/01/2019",
          location: "Momanalu",
          appointment_id: 24,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          time: "10/25/2019",
          location: "Brooklyn",
          appointment_id: 27,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          time: "07/13/2020",
          location: "Kokaj",
          appointment_id: 12,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          time: "03/01/2020",
          location: "Brocēni",
          appointment_id: 93,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          time: "09/17/2020",
          location: "Jieduo",
          appointment_id: 26,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          time: "01/14/2020",
          location: "Chicago",
          appointment_id: 80,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          time: "02/21/2020",
          location: "Gapuk",
          appointment_id: 35,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          time: "01/02/2020",
          location: "Ambato",
          appointment_id: 43,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          time: "02/16/2020",
          location: "Vidzy",
          appointment_id: 49,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          time: "11/24/2019",
          location: "María la Baja",
          appointment_id: 100,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          time: "09/09/2020",
          location: "Obubra",
          appointment_id: 7,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          time: "06/03/2020",
          location: "Slunj",
          appointment_id: 80,
          accepted_meeting: false
        },
        {
          "appointment details":
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          time: "03/15/2020",
          location: "Raša",
          appointment_id: 92,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          time: "03/24/2020",
          location: "Famatina",
          appointment_id: 87,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          time: "02/09/2020",
          location: "Tha Uthen",
          appointment_id: 60,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          time: "02/22/2020",
          location: "Rennes",
          appointment_id: 19,
          accepted_meeting: true
        },
        {
          "appointment details":
            "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          time: "05/26/2020",
          location: "Baiyushan",
          appointment_id: 78,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          time: "01/05/2020",
          location: "Żyrardów",
          appointment_id: 40,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          time: "04/10/2020",
          location: "Sinchao",
          appointment_id: 90,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          time: "10/01/2020",
          location: "Langjun",
          appointment_id: 47,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          time: "01/21/2020",
          location: "Stockholm",
          appointment_id: 91,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          time: "07/17/2020",
          location: "Tuanalepe",
          appointment_id: 50,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          time: "04/13/2020",
          location: "Gaopu",
          appointment_id: 10,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          time: "12/13/2019",
          location: "Kayanza",
          appointment_id: 63,
          accepted_meeting: false
        },
        {
          "appointment details":
            "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          time: "06/12/2020",
          location: "Murça",
          appointment_id: 3,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          time: "09/01/2020",
          location: "Kommunisticheskiy",
          appointment_id: 14,
          accepted_meeting: true
        },
        {
          "appointment details":
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          time: "11/11/2019",
          location: "Għaxaq",
          appointment_id: 64,
          accepted_meeting: false
        },
        {
          "appointment details":
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          time: "08/24/2020",
          location: "Haoshui",
          appointment_id: 21,
          accepted_meeting: true
        }
      ]);
    });
};
