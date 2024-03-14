$(() => {

    //メニュー画面へ
    $("#to_nav").on("click", toMenu);

    function toMenu() {

        $("#to_nav").off("click");

        $("nav").css("display", "flex");

        $(".bar").on("click", back); //バーもクリックできるようにする


        //少し時間をおいてから動かさないとアニメーションしない？
        setTimeout(() => {
            $("nav li").css("translate", "0%");
        }, 10);

        //アイコン変形
        $(".bar").css("background-color", "white");

        $(".bar:first-child").css("rotate", "-45deg")
            .css("translate", "0 4.5px");

        $(".bar:nth-child(2)").css("rotate", "45deg")
            .css("translate", "0 -4.5px");
    };




    //リンク以外を押したときにメニューから戻る(リンク周辺を除外)
    $("nav").on("click", back);

    function back(e) {

        if (!$(e.target).is($("nav>ul , nav>li"))) {

            $(".bar").off("click"); //バーのイベント解除

            //少し時間をおかないとイベントが即発動してしまう、らしい。
            setTimeout(() => {
                $("#to_nav").one("click", toMenu);
            }, 10);


            //アイコン変形
            $(".bar").css("background-color", "#555555");
            $("nav li").css("translate", "-200px 0");

            $(".bar").css("rotate", "0deg")
                .css("translate", "0");


            $("nav").css("display", "none");
        }
    }
});