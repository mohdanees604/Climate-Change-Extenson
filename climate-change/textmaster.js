
function sayNewMessage() {
    let msgtype = Math.floor(Math.random()*28);
    switch(msgtype) {
        case 0: garfield.say("Climate change threatens to derail global efforts to combat hunger and poverty. We as humans have to save the world"); break;
        case 1: garfield.say("Climate change is a global challenge that has no borders and to combat it requires coordinated work by all countries.\n"); break;
        case 2: garfield.say("The global temperature increase brings disastrous consequences, endangering the survival of the Earth’s flora and fauna, including human beings."); break;
        case 3: garfield.say("Consume planning: We can also reduce how much we eat,stopping people going overweight."); break;
        case 4: garfield.say("Climate change is threatening three key ingredients needed to make beer: Water, barley and hops."); break;
        case 5: garfield.say("Coffee production at risk due to Cimate change"); break;
        case 6: garfield.say("Add solar panels to your house."); break;
        case 7: garfield.say("Get a home energy audit. A simple home energy audit can show how much energy your home consumes and give you tips on changes that can make things more efficient."); break;
        case 8: garfield.say("Change lightbulbs to LEDs"); break;
        case 9: garfield.say("use a programmable thermostat. Instead of keeping your house a constant 70 degrees, invest in an automatic thermostat, which can cost as little $25. "); break;
        case 10:garfield.say("Wash clothes in cold water."); break;
        case 11:garfield.say("Upcycle your furniture. From shopping cart couches to chairs from old skis, upcycled furniture can be innovative and environmentally smart. "); break;
        case 12:garfield.say("Recycle your clothes."); break;
        case 13:garfield.say("Design your workspace around natural light"); break;
        case 14:garfield.say("Unplug all electronic devices ath aren't in use."); break;
        case 15:garfield.say("Obsess over every drop of water."); break;
        case 16:garfield.say("Adding insulation, weather stripping, and caulking around your home can cut energy bills by more than 25 percent"); break;
        case 17:garfield.say("Don’t buy a new home; renovate an old one"); break;
        case 18:garfield.say("Eat less meat."); break;
        case 19:garfield.say("Calculate your carbon footprint"); break;
        case 20:garfield.say("Take public transit."); break;
        case 21:garfield.say("Bring your own shopping bags."); break;
        case 22:garfield.say("Plant a tree."); break;
        case 23:garfield.say("Disinvest from carbon-heavy products"); break;
        case 24:garfield.say("Volunteer for events supporting"); break;
        case 25:garfield.say("Face it. The future is bleak. Can you even imagine what the world will be like in ten years?"); break;
        case 26:garfield.say("Bike more drive less"); break;
        case 27:garfield.say("Conserve water"); break;
    }
    setTimeout(sayNewMessage, 12000);
}
setTimeout(sayNewMessage, 5000);

