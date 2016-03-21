function setImgs(){
    $(".autoResize").each(function(){
        setImg($(this));
    }).bind("load",function(){
        console.log("loaded");
        setImg($(this));
    });
}
function setImg(imgObj){
    var boxOjb=imgObj.parent("div");
    if (!imgObj.hasClass("autoResize")) return;
    var img_w = imgObj.width();
    var img_h = imgObj.height();
    if (img_w==0||img_h == 0){
        console.log("Not loaded");
        return;
    }
    var box_w = boxOjb.width();
    var box_h = boxOjb.height();
    imgObj.removeClass("autoResize");
    if (box_w == img_w && box_h == img_h) return;
    var new_w = img_w;
    var new_h = img_h;
    var new_left = 0;
    var new_top = 0;
    console.log(img_h,box_h);
    if (img_h < box_h) {
        new_h = box_h;
        new_w = parseInt((img_w / img_h) * new_h);
        new_left = parseInt((box_w-new_w) / 2);
    }
    else {
        new_top = parseInt((box_h - img_h) / 2);
    }
    imgObj.css({ "width": new_w + "px", "height": new_h + "px", "left": new_left + "px", "top": new_top + "px","position":"relative" });
}


setImgs();

//test
$("#btn_set").click(function(){
    var boxObj=$(".picbox");
    boxObj.children("img").remove();
    boxObj.css({"width":$("#tb_width").val(),"height":$("#tb_height").val()});
    boxObj.append('<img src="http://img1.shenchuang.com/2016/0321/1458527213330.jpg" width="100%" class="jsthumbimg">');
    setImgs();
});



































