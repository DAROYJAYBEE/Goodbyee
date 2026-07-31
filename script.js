const messages = [

`I don't know how to start, but I want to be straight to the point right now, I think you will agree to my decision since we need this for our growth.`,

`Let's end our relationship (I mean we're not official man jud) na love, not because naa koy bag-ong nakita or naa koy bag-ong ka-chat². It's not about that okay.`,

`To be honest kahibaw man jud ka nako na dili jud ko mo sugot na mag separate ta, like Wala jud ni Siya sa Akong mind and choices.`,

`But dili nako ma avoid na mo reflect sa Akong self, those broken promises, those guilt na na feel nako until now.`,

`And also this past few weeks like balik balik nalang jud atong routine and i know you can say na it's sucks na.`,

`To the point that Sige nalang tag ML after sa duwa ML rasay hisgutan like balik balik raba.`,

`And of course until now there's no huge improvement for my growth and still you can see the same as the boy you meet 5 years ago (if not mistaken).`,

`Sakit kaayong Makita tikang nag antos nako.`,

`Dako kaayong pagmahay na Nakig communicate gihapon ko nimo, nag mahay ko tungod lindot na unta imong life very peaceful and free but then I destroy or broke it.`,

`And now we're both stuck again in same routine, maybe this is my final goodbye.`,

`I will support you always for your growth and success.`,

`I will pray for your health and safety everyday.`,

`And also don't forget to smile and be grateful for every little blessings come to your loveee.`,

`Good bye, Salamat sa imong love and care Lovee.`,

`Please don't worry about me anymore.`,

`Focus on yourself, chase your dreams, and continue becoming the amazing person that you are.`,

`I know you'll achieve everything you've always wanted because you've always been strong.`,

`If one day our paths cross again, I hope we'll both be happier, wiser, and have grown into better versions of ourselves.`,

`Until then, I'll continue praying for your happiness from afar.`,

`Thank you for everything, Lovee.`,

`I LOVE YOU SO MUCHH.`,

`Good bye, Salamat sa imong love and care Lovee.`,

`Amping pirmi. 💜🤙🏻✨`

];

const message = document.getElementById("message");

let current = 0;

function showNextMessage() {

    message.classList.remove("show");

    setTimeout(() => {

        if (current >= messages.length) {

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = "thankyou.html";
            }, 2000);

            return;
        }

        message.innerHTML = messages[current];

        message.classList.add("show");

        current++;

    }, 700);

}

showNextMessage();

setInterval(showNextMessage, 6000);