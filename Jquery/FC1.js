var sw = false;
var sw_1 = false;
$(document).ready(function()
{
    // ẩn của sổ control,member
    $("#control").hide();
    $("#member").hide();
    $("#intructor").hide();
    $("#back-to-top").hide();
    $("#mode_auto").hide();
    
    // sự kiện click introduce
    $("#bt_introduce").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#tongquan").show();
        $("#mohinh").show();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    // sự kiện click tong quan
    $("#bt_tongquan").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    // sự kiện click mô hình
    $("#bt_mohinh").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    // sự kiện click control
    $("#bt_control").click(function(){
        $("#introduce").hide();
        $("#control").show();
        $("#member").hide();
        $("#intructor").hide();
        $("#content").css("background-color", "#a3ebeb");
        bt_control.classList.add('active');
        bt_introduce.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    //sự kiện click member
    $("#bt_member").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    //sự kiện click member1
    $("#bt_member1").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member2").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member3").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member4").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_intructor").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").show();
        $("#content").css("background-color", "#fff");
        bt_intructor.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_member.classList.remove('active');
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>145){
            $("#back-to-top").show();
            // $("nav").css("position", "fixed ");
            // $("nav").css("top", "0 ");
            // $("nav").css("z-index", "10");
            // $("nav").css("--bs-navbar-brand-padding-y", "0rem");
            // $("nav").css("width", "100%");
            // $("nav").css("opacity", "1");
        }
        else{
            $("#back-to-top").hide();
            // $(".navbar").css("position", "relative ");
            // $("nav").css("--bs-navbar-brand-padding-y", "0.3125rem");
            // $("nav").css("width", "100%");
        }
    });
    $(".dropdown-item").click(function(){
        navbarResponsive.classList.remove('show');
        // item.classList.remove('show');
        // $(".dropdown-menu").hide();
    });
    $("#back-to-top").click(function(){
        $("body,html").animate({scrollTop:0},500);
        return false;
    });
    $("#bt_run").mousedown(function(){
        setTag("tag_Bool",true);
        IOField("pos","tag_Integer");
    });
    $("#bt_run").mouseup(function(){
        setTag("tag_Bool",false);
    });
    $("#switch_mode").change(function(){
        sw = !sw;
        if (sw == true){
            $("#mode_auto").show();
            $("#mode_manual").hide();
        }
        else{
            $("#mode_auto").hide();
            $("#mode_manual").show();
        }
    })
})


// Hàm chức năng ghi giá trị vào tag
function setTag(tag, val) {
    var tag_Link = '"Web_comm".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2) { });
}

// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}