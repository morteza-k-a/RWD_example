const container = document.getElementsByClassName("container");
for (var i = 0;i<4;i++)
{
    const item = document.createElement("div");
    item.className = "item";
    // create card content
    const Cardheader = document.createElement("header");
    const Cardbody = document.createElement("main");
    const Cardfooter = document.createElement("footer");
    //create content for the body of the card
    const Cardprofile = document.createElement("img");
    const Carddescription = document.createElement("p");
    Carddescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam dicta porro ea error amet debitis quos quo impedit ut. Alias, iusto. Molestiae enim nemo magnam doloribus consectetur fugit nobis?";
    Cardprofile.src = "./profile.png";
    Cardprofile.alt = "profile for small card";
    // adding content to header
    const HeaderTitle = document.createElement("h4");
    HeaderTitle.innerText = "name";
    Cardheader.appendChild(HeaderTitle);
    //adding content to footer
    const Footerbutton = document.createElement("button");
    Footerbutton.innerText = "learn more";
    Cardfooter.appendChild(Footerbutton);
    //adding content to the body of the card(main element)
    Cardbody.appendChild(Cardprofile);
    Cardbody.appendChild(Carddescription);
    //adding card content
    item.appendChild(Cardheader);
    item.appendChild(Cardbody);
    item.appendChild(Cardfooter);
    //
    container[0].appendChild(item);
}
