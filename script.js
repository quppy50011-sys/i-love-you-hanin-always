const text =
"يا حنين ❤️\n\n" +

"يمكن الكلام ميكفيش يوصف اللي جوايا...\n\n" +

"بس كل يوم بيعدي بحبك أكتر من اليوم اللي قبله.\n\n" +

"إنتي أجمل حاجة حصلتلي في حياتي،\n" +
"وأحلى صدفة ربنا رزقني بيها.\n\n" +

"بحب ضحكتك،\n" +
"وبحب كلامك،\n" +
"وبحب كل حاجة فيكي.\n\n" +

"مهما يحصل بينا مشاكل،\n" +
"وخناقات بس عمري\n" +
"ما بطلت أحبك، لأنك روحي.\n" +
"وبنتي، وصاحبتي، وأختي،\n" +
"وكل حاجة حلوة في الدنيا. ❤️\n\n" +

"ووعد مني...\n" +
"مهما حصل بينا،\n" +
"هفضل أحبك وأتمسك بيكي.\n\n" +

"نفسي أشوفك دايمًا سعيدة،\n" +
"وأكون سبب ضحكتك كل يوم.\n\n" +

"ربنا يخليكي ليا،\n" +
"ويجمعنا على خير يا أحلى حنين. ❤️\n\n" +

"Love You Forever ❤️";

const startBtn = document.getElementById("startBtn");
const textElement = document.getElementById("text");
const musicBtn = document.getElementById("musicBtn");
const player = document.getElementById("player");

startBtn.onclick = () => {

    document.querySelector(".start").style.display = "none";
    document.querySelector(".main").style.display = "block";

    let i = 0;
    textElement.innerHTML = "";

    function type() {

        if (i < text.length) {

            if (text.charAt(i) === "\n") {
                textElement.innerHTML += "<br>";
            } else {
                textElement.innerHTML += text.charAt(i);
            }

            i++;

            setTimeout(type, 40);
        }

    }

    type();

};

// تشغيل الأغنية
musicBtn.onclick = () => {

    player.src =
    "https://www.youtube.com/embed/wxJqjneij8c?autoplay=1";

};

// القلوب المتحركة
function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 400);