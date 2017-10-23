function Artikel (merknaam, omschrijving, afbeelding, prijs, informatie, aantal) {
    this.merknaam = merknaam;
    this.omschrijving = omschrijving;
    this.afbeelding = afbeelding;
    this.prijs = prijs;
    this.informatie = informatie;
    this.aantal = aantal;
}

var artikelen = [];
artikelen[0] = new Artikel("To Kill a Mockingbird", "A novel by Harper Lee", "img/afb1.jpg", 15.95, "The unforgettable novel of a childhood in a" +
" sleepy Southern town and the crisis of conscience that rocked it," + 
" To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960" +
" It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic." + 
" Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior -" + 
" to innocence and experience, kindness and cruelty, love and hatred, humor and pathos." + 
" Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal." +
" Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.", 1);
artikelen[1] = new Artikel("Lord of the Flies", "A novel by William Golding", "img/afb2.jpg", 13.45, "When a plane crashes on a remote island," + 
" a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack," +
" each of the boys attempts to establish control as the reality - and brutal savagery - of their situation sets in." +
" The boys' struggle to find a way of existing in a community with no fixed boundaries invites readers to evaluate the concepts involved in social and political constructs and moral frameworks." +
" Ideas of community, leadership, and the rule of law are called into question as the reader has to consider who has a right to power, why, and what the consequences of the acquisition of power may be." +
" Often compared to Catcher in the Rye, Lord of the Flies also represents a coming-of-age story of innocence lost.", 1);
artikelen[2] = new Artikel("Lanark: a Life in Four Books", "A novel by Alasdair Gray", "img/afb3.jpg", 23.55, "This work, originally published in 1981, has been hailed as the most influential Scottish novel of the second half of the 20th century." +
" Its playful narrative techniques convey a profound message, personal and political, about humankind's inability to love and yet our compulsion to go on trying.", 1);
artikelen[3] = new Artikel("The Anti-Christ", "A philosophical work by Friedrich Nietzsche", "img/afb4.jpg", 25.99, "The reference to the Antichrist is not intended to refer to the biblical Antichrist" +
" but is rather an attack on the 'slave morality' and apathy of Western Christianity. Nietzsche's basic claim is that Christianity (as he saw it in the West)" +
" is a poisoner of western culture and perversion of the words of and practice of Jesus. In this light, the provocative title is mainly expressing Nietzsche's animus toward Christianity, as such." +
" In this book, Nietzsche is very critical of institutionalized religion and its priest class, from which he himself was descended. The majority of the book is a systematic," +
" logical and detailed attack upon the interpretations of Christ's words by St. Paul and those who followed him.", 1);
artikelen[4] = new Artikel("Under the Net", "A philosophical novel by Iris Murdoch", "img/afb5.jpg", 12.95, "Jake, hack writer and sponger, now penniless flat-hunter, seeks out an old girlfriend, Anna Quentin, and her glamorous actress sister, Sadie." +
" He resumes acquaintance with formidable Hugo, whose ‘philosophy’ he once presumptuously dared to interpret. These meetings involve Jake and his eccentric servant-companion," +
" Finn, in a series of adventures that include the kidnapping of a film-star dog and a political riot in a film-set of ancient Rome. Jake, fascinated, longs to learn Hugo’s secret. Perhaps Hugo’s secret is Hugo himself?" +
" Admonished, enlightened, Jake hopes at last to become a real writer.", 1);
artikelen[5] = new Artikel("The Stranger", "A philosophical novel by Albert Camus", "img/afb6.jpg", 14.85, "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed" +
" 'the nakedness of man faced with the absurd'. First published in English in 1946. Now in a new translation by Matthew Ward.", 1);

var basket = [];

$(document).ready(function() {
    $.each(artikelen, function(i, artikel) {
        var card = `
        <div class="card" style="width: 20rem;">
            <img class="card-img-top" src=${artikel.afbeelding} alt="${artikel.merknaam}" title="${artikel.merknaam}">
            <div class="card-block">
                <div>
                <h4 class="card-title">${artikel.merknaam}</h4>
                </div>
                <div>
                <p class="card-text">${artikel.omschrijving}</p>
                </div>
                <div>
                <p class="card-price">${artikel.prijs} EUR</p>
                </div>
            </div>
            <div id="knoppen" class="card-footer">
                <a id="${i}" class="btn btn-danger btn-detail" data-dismiss="modal">detail</a>
                <a id="${i}" class="btn btn-danger btn-order" data-dismiss="modal">order</a>
            </div>
        </div>`
        $("#row").append(card);
    });
    $(".btn-detail").click(function(e){
        var e = event.target.id;
        console.log(e);
        var detail = `
        <div class="modal" id="detailModal" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">${artikelen[e].merknaam}</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="mx-auto">
                                <img id="detail-img" src=${artikelen[e].afbeelding}>
                            </div>
                        </div>
                        <p id="omschrijving">${artikelen[e].omschrijving}</p>
                        <p id="informatie">${artikelen[e].informatie}</p>
                        <p id="prijs">${artikelen[e].prijs} EUR</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-resume" data-dismiss="modal">resume shopping</button>
                    </div>
                </div>
            </div>
        </div>`
        $("#detailpop").append(detail);
        $("#detailModal").modal("show");
        $(".btn-resume").click(function(){
            //$("#detailModal").modal("toggle");
            //$("#detailModal").remove();
            console.log("lukt dit?");
        });
    });
    $(".btn-order").click(function(){
        var e = event.target.id;
        //merknaam, omschrijving, afbeelding, prijs, informatie, aantal
        var artikel = new Artikel(artikelen[e].merknaam, artikelen[e].omschrijving, artikelen[e].afbeelding, artikelen[e].prijs, artikelen[e].informatie, artikelen[e].aantal);
        console.log("ordered: " + artikel.merknaam);
        var index = basket.findIndex(element => element.merknaam === artikel.merknaam);
        console.log("index in basket: " + index);
        if (index != -1) {
            basket[index].aantal +=1;
        } else {
            basket.push(artikel);
        }
        /* for (let i of basket) {
            console.log(i.merknaam + " amount: " + i.aantal);
        } */
        console.log(basket);
        var modal = `
        <div class="modal" id="myModal" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">The Anarchist Bookstore</h5>
                    </div>
                    <div class="modal-body">
                        <p>Thanks for ordering.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-shop" data-dismiss="modal">keep shopping</button>
                        <button type="button" class="btn btn-danger btn-check" data-dismiss="modal">checkout</button>
                    </div>
                </div>
            </div>
        </div>`
        $("#pop-up").append(modal);
        $("#myModal").modal("show");
        $(".btn-shop").click(function(){
            //$("#myModal").modal("toggle");
            //$("#myModal").remove();
        });
        $(".btn-check").click(function() {
            var checkout = `
            <div class="modal" id="checkpop" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">The Anarchist Bookstore</h5>
                        </div>
                        <div id="checkoutbody" class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" id="btn-checkok" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>`
            $("#checkout").append(checkout);
            var d = 0;
            $.each(basket, function(j, element) {
                d++;
                console.log("iteration over basket: " + d);
                var checkbody = `
                <div class="row mt-1" id="${j}">
                    <div class="col-md-3 merknaam">
                        <span>${element.merknaam}</span>
                    </div>
                    <div class="col-md-3 omschrijving">
                        <span>${element.omschrijving}</span>
                    </div>
                    <div class="col-md-2 prijs">
                        <span>${element.prijs} EUR;</span>
                    </div>
                    <div class="col-md-2 aantal">
                        <span>aantal: ${element.aantal}</span>
                    </div>
                    <div class="button col-md-2">
                        <button id="${j}" type="button" class="btn btn-danger btn-minus">-</button>
                </div>`
                console.log("index in basket: " + j);
                console.log("element in basket: " + element.merknaam);
                $("#checkoutbody").append(checkbody);
            });
            console.log(basket.length);
            //$("#myModal").modal("toggle");
            //$("#myModal").remove();
            $("#checkpop").modal("show");
            $(".btn-minus").click(function() {
                console.log("is dit de juiste index: " + e);
                var item = new Artikel(artikelen[e].merknaam, artikelen[e].omschrijving, artikelen[e].afbeelding, artikelen[e].prijs, artikelen[e].informatie, artikelen[e].aantal);
                console.log(artikel.merknaam);
                //var index = basket.findIndex(element => element.merknaam === item.merknaam);
                var index = event.target.id;
                console.log("index in basket: " + index);
                if (basket[index].aantal > 0) {
                    basket[index].aantal -=1;
                }
                if (basket[index].aantal == 0) {
                    basket.splice(index, 1);
                }
                if (basket.length == 0) {
                    console.log("lengte na verwijderen: " + basket.length);
                    $("#checkpop").modal("toggle");
                    $("#checkpop").remove();
                }
                $("#checkoutbody").empty();
                $.each(basket, function(i, element) {
                    console.log(basket.length);
                    var renewbody = `
                    <div class="row mt-1" id="${i}">
                        <div class="col-md-3 merknaam">
                            <span>${element.merknaam}</span>
                        </div>
                        <div class="col-md-3 omschrijving">
                            <span>${element.omschrijving}</span>
                        </div>
                        <div class="col-md-2 prijs">
                            <span>${element.prijs} EUR;</span>
                        </div>
                        <div class="col-md-2 aantal">
                            <span>aantal: ${element.aantal}</span>
                        </div>
                        <div class="button col-md-2">
                            <button id="${i}" type="button" class="btn btn-danger btn-minus">-</button>
                    </div>`
                    $("#checkoutbody").append(renewbody);
                    console.log("nieuw aantal: " + element.aantal);
                });
            });
            $("#btn-checkok").click(function(){
                //$("#checkpop").modal("toggle");
                //$("#checkpop").remove();
            });
        });
    });
});